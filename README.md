
# SHE CAN Foundation - Fundraising Intern Portal

Welcome to the official repository for the **SHE CAN Foundation's Fundraising Intern Portal**. This is a modern, full-stack application designed to provide a motivating and visually engaging experience for our fundraising interns. The portal reflects the foundation's mission to empower women through an intuitive and professional interface.

**Live Demo:** https://fundraising-intern-portal-tau.vercel.app

## 🌟 Project Overview

This portal serves as a central hub for our interns to track their fundraising progress, view their achievements, and compete on a friendly leaderboard. The design is centered around a women-centric color palette and features dynamic animations to create a vibrant and inspiring user experience.

## 🖼️ Screenshots

#Login Page
<img width="1108" height="735" alt="image" src="https://github.com/user-attachments/assets/b670511c-1b15-42d1-b5db-974c640426cc" />

#Dashboard
<img width="2270" height="2818" alt="localhost_5173_dashboard" src="https://github.com/user-attachments/assets/c229f3c9-ccbd-41e3-b747-f33384b29f02" />

#Leader Board
<img width="2270" height="3206" alt="localhost_5173_dashboard (1)" src="https://github.com/user-attachments/assets/d9ae3311-06b4-42e6-886d-dfa670c786c8" />



## ✨ Core Features

*   **Dummy Login/Signup Page**: A beautifully designed, welcoming entry point with SHE CAN branding. (No authentication logic required).
*   **Intern Dashboard**: A comprehensive dashboard that displays key metrics:
    *   Intern's Name
    *   Unique Referral Code
    *   Total Donations Raised
*   **Rewards & Unlockables**: A static section to visually showcase rewards and motivate interns.
*   **Interactive Leaderboard**: A page to display rankings and foster healthy competition among interns.
*   **Dynamic Animations & Live Background**:
    *   Live, shifting gradient backgrounds.
    *   Floating geometric shapes and icons that move in a continuous loop.
    *   Smooth page transitions and staggered content animations.
    *   Interactive hover and focus effects on cards, buttons, and navigation elements.
*   **Mobile-Responsive Design**: Fully optimized for a seamless experience on both desktop and mobile devices.

## 💻 Tech Stack & Tools

This project was built using a modern and robust tech stack:

*   **Frontend**: React, TypeScript
*   **Routing**: React Router DOM (`react-router-dom`)
*   **Styling**: CSS with dynamic animations (e.g., floating elements, gradient backgrounds)
*   **Icons**: Lucide React
*   **Package Manager**: npm

## 🚀 Getting Started

To run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/IndrakantiKevin/fundraising_inter_portal.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd fundraising_inter_portal
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 📂 Project Structure

The project follows a standard React application structure to keep the code organized and maintainable:

```
/src
|-- /components       # Reusable UI components
|   |-- Navbar.tsx
|   |-- StatCard.tsx
|   |-- ProgressChart.tsx
|   |-- RewardCard.tsx
|
|-- /pages            # Top-level page components
|   |-- LoginPage.tsx
|   |-- Dashboard.tsx
|   |-- Leaderboard.tsx
|
|-- App.tsx           # Main app component with routing
|-- index.css         # Global styles and animations
|-- main.tsx          # Entry point of the application
```


## 📝 Features/Tech Stack

| Feature        | Technology Used          |
|:-------------- |:------------------------|
| Frontend       | React, TypeScript, CSS Animations |
| Routing        | react-router-dom         |
| Icons/Logo     | lucide-react             |
| Animations     | CSS keyframes, transitions, gradients |
| UI Components  | Custom stat/leaderboard/reward cards |
| Backend (Dummy)| Static JSON, simulated with local files |
| Deployment     | Netlify, Vercel, or as a GitHub repo |

## 🎨 Design & Animation Details

- **Live backgrounds:** CSS gradients, keyframes (`index.css`).
- **Floating objects:** Rendered SVG/CSS shapes, animated in components.
- **Interactive Animations:**  
  - Hover: Cards/buttons scale/lift on hover.
  - Slide-in: Pages/content slide in with delay/stagger.
  - Glowing: Achievement badges pulse softly.
- **Leaderboard:** Animated progress/rankings.

## 📣 Credits

Built for the **SHE CAN Foundation**, inspiring interns.

## 🐞 Issues & Support

Submit issues or ideas via [GitHub Issues](https://github.com/IndrakantiKevin/fundraising_inter_portal/issues).

Enjoy using and customizing your beautifully animated, women-empowering fundraising portal!
