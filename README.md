# Dynamic Dashboard

A **dynamic, interactive dashboard** built with **React** and **Redux Toolkit**, designed to manage categories and widgets efficiently. The dashboard features a **modern, luxury UI** with dark theme, glassmorphism cards, and smooth animations. Users can add, remove, and search widgets dynamically.  

---

## 🛠 Technology Stack

- **Frontend:** React, Tailwind CSS  
- **State Management:** Redux Toolkit  
- **Build Tool:** Vite  
- **JavaScript Version:** ES6+  
- **Other Tools:** nanoid for unique IDs  

---

## 🎯 Features

- **Dynamic Categories and Widgets**  
  - Add or remove widgets in any category.  
  - Add new categories dynamically.  

- **Search Functionality**  
  - Search widgets by name, text, or category.  

- **Luxury UI Design**  
  - Dark theme with glassmorphism effect.  
  - Smooth hover animations for widgets and categories.  
  - Elegant modal for adding widgets.  

- **Responsive Layout**  
  - Works on all screen sizes with grid layouts.  

---
```
## 🏗 Project Structure

dashboard-project/
│
├─ public/
│ └─ index.html # Main HTML file
│
├─ src/
│ ├─ components/
│ │ ├─ Dashboard.jsx
│ │ ├─ Category.jsx
│ │ ├─ Widget.jsx
│ │ ├─ AddWidgetModal.jsx
│ │ └─ SearchBar.jsx
│ │
│ ├─ features/
│ │ └─ dashboard/
│ │ ├─ dashboardSlice.js
│ │ └─ dashboardSelectors.js
│ │
│ ├─ store/
│ │ └─ store.js
│ │
│ ├─ App.jsx
│ ├─ main.jsx
│ └─ index.css
│
├─ vite.config.js
└─ package.json
```
