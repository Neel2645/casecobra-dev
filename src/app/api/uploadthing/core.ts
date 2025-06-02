import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { z } from 'zod'
import sharp from 'sharp'
import { db } from '@/db'

const f = createUploadthing()

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: '4MB' } })
    .input(z.object({ configId: z.string().optional() }))
    .middleware(async ({ input }) => {
      return { input }
    })
    .onUploadComplete(async ({ metadata, file }) => {
     try{
       const { configId } = metadata.input
        console.log("📤 UploadComplete:", { configId, file });
      const res = await fetch(file.ufsUrl)
      const buffer = await res.arrayBuffer()

      const imgMetadata = await sharp(buffer).metadata()
      const { width, height } = imgMetadata

      if (!configId) {  // for setp 1
        const configuration = await db.configuration.create({
          data: {
            imageUrl: file.ufsUrl,
            height: height || 500,
            width: width || 500,
          },
        })
          console.log("✅ Created new config:", configuration.id);
        return { configId: configuration.id }
      } else {      // for step 2 
        const updatedConfiguration = await db.configuration.update({
          where: {
            id: configId,
          },
          data: {
            croppedImageUrl: file.ufsUrl,
          },
        })
         console.log("✅ Updated config:", updatedConfiguration.id);
        return { configId: updatedConfiguration.id }
      }
     }catch(err){
      console.error("❌ Upload error in DB logic:", err);
    throw err;
     }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter