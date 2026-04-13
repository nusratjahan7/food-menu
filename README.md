# Food Menu Web App 🍽️

A **restaurant food menu web application** built with **Next.js**, **React**, and **Tailwind CSS**. This project displays a collection of dishes on the homepage and allows users to click a “Details” button to view full information about each dish.

---

## 📌 Project Overview

This app provides:

- **Homepage Menu Grid**  
  - Shows all available food items
  - Each card displays:
    - Dish image
    - Dish name
    - Rating
    - Cuisine category
  - A **“Details”** button that navigates to a dedicated page for that dish

- **Dish Details Page**  
  After clicking **Details**, the user sees:
  - **Dish Name**
  - **Alternative / Common Names**
  - **Main Ingredients**
  - **Approximate Nutrition Per Serving**
    - Calories
    - Protein
    - Carbs
    - Fat
    - Fiber
  - **Rating**
  - **Price**
  - **Cuisine Type**
  - **Step‑by‑Step Cooking Instructions**

---

## 🧠 Features

✔ Fully responsive layout  
✔ Built with Next.js (React + SSR/SSG)  
✔ Styled using Tailwind CSS  
✔ Dynamic navigation between homepage and food detail pages  
✔ Clean, modern UI for browsing food items

---

## 🚀 Technologies Used

| Category       | Technology |
| -------------- | ---------- |
| Framework      | Next.js (React) |
| Styling        | Tailwind CSS |
| Markup         | HTML5 |
| JavaScript     | ES6+ |
| Deployment     | Vercel |

---

## 🗂 Project Structure
.
├── public/
│ ├── file.svg
│ ├── globe.svg
│ ├── next.svg
│ ├── vercel.svg
│ └── window.svg
├── src/
│ ├── Component/
│ │ ├── Hero.jsx
│ │ ├── Menu.jsx
│ │ └── Navbar.jsx
│ └── app/
│ └── foodDetails/[foodId]/
│ └── page.jsx
│ └── page.jsx
│ └── globals.css
│ └── layout.js
│ └── favicon.ico
├── tailwind.config.js
├── package.json
└── README.md

# Food Menu Web App 🍽️

A **restaurant food menu web application** built with **Next.js**, **React**, and **Tailwind CSS**. This project displays a collection of dishes on the homepage and allows users to click a “Details” button to view full information about each dish.

Live demo: [Food Menu Demo](https://food-menu-brown-alpha.vercel.app/)  
GitHub: [Food Menu Repository](https://github.com/nusratjahan7/food-menu)

---

## 📌 Project Overview

This app provides:

### 🍔 Homepage
- **Fetches & displays a list of food items**  
- Uses **card layout** for thumbnail previews
- Each card includes:
  - **Dish name**
  - **Price**
  - **Star rating**
  - **“Details” button** that navigates to the food's detailed page

### 📋 Food Details Page
- Uses **dynamic routing** (`/food/[foodId]`)
- Shows full food info:
  - **Alternative dish names** (if any)
  - **Main ingredients**
  - **Nutrition facts** (e.g., calories, protein, fat, carbs, fiber)
  - **Step‑by‑step cooking instructions**
  - **Cuisine & category tags**

---

## 📈 How It Works

1. **Homepage**
   - Displays a grid layout of food items.
   - Each item card features an image, dish name, price, star rating, and a **“Details”** button.
  
2. **Food Details Page**
   - Upon clicking the "Details" button, the user is directed to the food’s individual page.
   - Displays a comprehensive breakdown of the dish, including alternative names, ingredients, nutrition facts, and cooking instructions.

---

## 📦 Deployment

This project is deployed on **Vercel** — simply push changes to the `main` branch and Vercel will auto‑deploy.
