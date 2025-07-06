# 🐍 CaseCobra - The Ultimate Phone Case Customization Store

CaseCobra is a fully responsive, end-to-end custom phone case building and shopping platform where users can create, preview, and purchase their personalized phone cases — all within a beautiful, smooth, and secure web experience.


## 🚀 Features

* 🛠️ **Full-stack E-commerce Store** built from scratch in **Next.js 15**
* 💻 **Beautiful Landing Page** with smooth animations using **Framer Motion**
* 🔐 **Authentication** powered by **Kinde**
* 💳 **Stripe Payment Gateway** with secure checkout
* 📦 **Admin Dashboard** to manage orders (protected access)
* ✉️ **Order Confirmation & Thank You Emails** via **Resend**
* 🖥️ **Mobile-First Design** with stunning UI components from shadcn/ui
* 🖥️ **Drag-and-Drop Image Upload** with **UploadThing**
* 📱 **100% Mobile Responsive** with modern UI powered by **shadcn/ui** & **Tailwind CSS**
* 🔑 **Secure Webhooks** for order protection
* ⚙️ **Type-safe Backend** using **Prisma ORM** & **NeonDB**
* ⌨️ **Fully Typed Codebase** written in **TypeScript**



## 🛠 Tech Stack

| Technology        | Purpose                    |
| ----------------- | -------------------------- |
| **Next.js 15**    | Full-stack React framework |
| **React.js**      | Frontend library           |
| **Tailwind CSS**  | Styling                    |
| **shadcn/ui**     | UI components              |
| **Framer Motion** | Animations                 |
| **Prisma**        | ORM                        |
| **NeonDB**        | Database                   |
| **Kinde**         | Authentication             |
| **Stripe**        | Payments                   |
| **Resend**        | Email handling             |
| **UploadThing**   | File uploads               |
| **TypeScript**    | Type safety                |



## 🔧 Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/casecobra.git
   cd casecobra
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file and add:

   ```

    KINDE_CLIENT_ID=
    KINDE_CLIENT_SECRET=
    KINDE_ISSUER_URL=
    KINDE_SITE_URL=
    KINDE_POST_LOGOUT_REDIRECT_URL=
    KINDE_POST_LOGIN_REDIRECT_URL=
    ADMIN_EMAIL=
    UPLOADTHING_SECRET=
    UPLOADTHING_APP_ID=
    UPLOADTHING_TOKEN=
    DATABASE_URL=
    STRIPE_SECRET_KEY=
    NEXT_PUBLIC_SERVER_URL=
    STRIPE_WEBHOOK_SECRET=
    RESEND_API_KEY=

   ```

4. **Run Prisma Migrations**

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. **Start the Development Server**

   ```bash
   npm run dev 
   stripe listen --forward-to localhost:3000/api/webhook
   ```



## 🌟 Key Highlights

* 🔄 Real-time updates and interactions
* 🎨 Pixel-perfect UI inspired by premium design systems
* 💬 Beautiful transactional emails after successful purchases
* 🔒 Secure authentication and authorization



## 📬 Feedback & Contributions

Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a pull request.



## 📄 License

MIT License. Feel free to use, modify, and share.



## 🔗 Connect with Me

* 💼 [LinkedIn](https://www.linkedin.com/in/neelsathvara/)
* 🐙 [GitHub](https://github.com/Neel2645)



### 🌟 If you like this project, give it a ⭐️!



