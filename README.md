# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# PopX - React Frontend Assignment

A pixel-perfect implementation of the PopX design challenge, enhanced with animations and a custom "Fake Database" architecture.

### 🚀 Live Demo
https://github.com/biswajitjena107/popx-assignment-react.git

### 🛠 Tech Stack
* **Framework:** React (Vite)
* **Styling:** Tailwind CSS (Custom config for color palette)
* **State Management:** React Context API + LocalStorage (Data persistence)
* **Animations:** Framer Motion
* **Routing:** React Router DOM v6

### ✨ Key Features (Beyond the requirements)
1.  **Persistent Data:** Users and sessions are saved in LocalStorage, so data survives a page refresh.
2.  **Smart Form Validation:** Login buttons remain disabled until valid data is entered.
3.  **Real Image Upload:** Profile page converts images to Base64 to simulate a real profile update.
4.  **Responsive Layout:** Custom handling for desktop vs. mobile views.
5.  **Page Transitions:** Smooth fade-ins using Framer Motion.

### 📦 How to Run Locally
1. Clone the repo:
   ```bash
   git clone https://github.com/biswajitjena107/popx-assignment-react.git
   
   Install dependencies: npm install
   Start the server:npm run dev
   
  Built by Biswajit - Linkedin - https://www.linkedin.com/in/biswajit-jena-42a1ba3a2/
