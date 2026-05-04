<div align="center">
  <h1>🐮 Qurbani-Hat</h1>
  <p>Your Trusted Digital Marketplace for Qurbani Animals</p>

[![Live Preview](https://img.shields.io/badge/Live_Preview-Visit_Now-success?style=for-the-badge&logo=vercel)](https://qurbani-hat-pied.vercel.app/)

</div>

<br />

## 📖 About the Project

**Qurbani-Hat** is a modern web application designed to simplify the process of finding and purchasing animals for Qurbani (Eid-ul-Adha). By bridging the gap between buyers and sellers, it provides a seamless, secure, and user-friendly platform to explore detailed animal listings, discover top breeds, and gain valuable insights through Qurbani tips.

## 🚀 Live URL

Experience the platform here: [Qurbani-Hat Live](https://qurbani-hat-pied.vercel.app/)

## 🔌 API Server

Base URL: [https://qurbani-hat-server.onrender.com](https://qurbani-hat-server.onrender.com)

## ✨ Key Features

- **Browse Animals:** Explore featured animals and top breeds available for purchase.
- **Detailed Listings:** View comprehensive details about specific animals to make informed decisions.
- **Secure Authentication:** User registration and login securely managed using `better-auth`.
- **User Profiles:** Manage your account and personal information easily.
- **Qurbani Tips:** Access helpful guidelines and tips related to Qurbani preparation and rules.
- **Responsive & Beautiful UI:** A stunning, mobile-friendly interface built with HeroUI and Tailwind CSS.
- **Toast Notifications:** Real-time visual feedback for user actions using `react-hot-toast`.
- **Smooth Animations:** Engaging UI interactions driven by `@react-spring/web`.

## 📦 Tech Stack & NPM Packages

This project leverages modern web technologies to ensure high performance and an excellent user experience.

### Core Framework

- [Next.js](https://nextjs.org/) (v16.2.4)
- [React](https://react.dev/) & React DOM (v19.2.4)

### Authentication & Database

- [Better Auth](https://better-auth.com/) (`better-auth`, `@better-auth/mongo-adapter`)
- [MongoDB](https://www.mongodb.com/) (`mongodb`)

### UI & Styling

- [HeroUI](https://heroui.com/) (`@heroui/react`, `@heroui/styles`)
- [Tailwind CSS](https://tailwindcss.com/) (`tailwindcss`, `@tailwindcss/postcss`)
- [React Spring](https://reactspring.dev/) (`@react-spring/web`)

### Utilities & Icons

- [React Hot Toast](https://react-hot-toast.com/) (`react-hot-toast`)
- [React Icons](https://react-icons.github.io/react-icons/) (`react-icons`)
- [Gravity UI Icons](https://gravity-ui.com/icons) (`@gravity-ui/icons`)

## 🛠️ Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Saharier36/Qurbani-Hat.git
   cd b13-a8-qurbani-hat
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your necessary environment variables (like MongoDB URI, Better Auth secrets, etc.).

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application running.

## 📂 Project Structure

```text
b13-a8-qurbani-hat/
├── public/              # Static assets (logo)
├── src/
│   ├── app/             # Next.js App Router (Pages, API routes)
│   ├── components/      # Reusable React components
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── lib/             # Utility functions and configurations
│   └── service/         # API services and data fetching logic
├── .env                 # Environment variables
├── next.config.mjs      # Next.js configuration
├── package.json         # Project dependencies and NPM scripts
└── README.md            # Project documentation
```

## 🧑‍💻 Author

**Saharier Omi**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saharier-omi/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Saharier36)
