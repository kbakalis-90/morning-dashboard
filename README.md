# ☀️ Morning Command Dashboard

A personalized browser start page that organizes your day with real-time data and focus tracking.

**🔴 Live Demo:** [[Click Here to View Dashboard]([url](https://lucky-sunflower-e16e61.netlify.app/))]

![Dashboard Preview](https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop)
*(Background used in the app)*

## 🚀 Features

* **Real-Time Clock:** Displays the current time with a live "ticking" mechanism.
* **Smart Greetings:** Changes between "Good Morning", "Afternoon", and "Evening" automatically.
* **Local Weather:** Uses the Geolocation API + Open-Meteo to fetch temperature without an API key.
* **Focus Tracker:** Saves your daily goal to the browser's **Local Storage** so it persists even after you close the tab.
* **Glassmorphism UI:** Modern, translucent design aesthetics using CSS.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla JavaScript.
* **APIs:**
    * `navigator.geolocation` (Browser Native)
    * [Open-Meteo API](https://open-meteo.com/) (Weather Data)
* **Storage:** `localStorage` (Browser Native)

## 💻 How to Run Locally

1.  Clone the repository:
    ```bash
    git clone [https://github.com/YOUR_USERNAME/morning-dashboard.git](https://github.com/YOUR_USERNAME/morning-dashboard.git)
    ```
2.  Open `index.html` in your browser.
3.  **Note:** You must allow "Location Access" when prompted for the weather to appear.

## 📝 Usage

**Set as Homepage:**
You can set the hosted Netlify link as your browser's startup page to see this dashboard every time you open a new window.
* **Chrome:** Settings > On Startup > Open a specific page.

## 📄 License

This project is open source and available for personal use.
