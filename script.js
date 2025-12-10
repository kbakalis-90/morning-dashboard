// 1. Select elements
const timeElement = document.getElementById('time');
const greetingElement = document.getElementById('greeting');

// 2. The Function that updates time
function updateClock() {
    const now = new Date(); // Gets the current moment in time
    
    // Extract hours and minutes
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Add a leading zero if minutes is less than 10 (e.g., "5" becomes "05")
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;

    // Update the HTML
    timeElement.innerText = `${hours}:${minutes}`;

    // Update greeting based on time of day
    if (hours < 12) {
        greetingElement.innerText = "Good Morning!";
    } else if (hours < 18) {
        greetingElement.innerText = "Good Afternoon!";
    } else {
        greetingElement.innerText = "Good Evening!";
    }
}

// 3. Run the function once immediately (so we don't wait 1 second for the first tick)
updateClock();

// 4. Set an interval to run it every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);

// 5. Select the weather element
const weatherElement = document.getElementById('weather');

// 6. The Weather Function
async function getWeather(lat, lon) {
    try {
        // We fetch data from Open-Meteo (No Key needed!)
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const data = await response.json();
        
        // Extract the temperature
        const temp = data.current_weather.temperature;
        
        // Update the HTML
        weatherElement.innerText = `🌡️ ${temp}°C`;
        
    } catch (error) {
        console.error("Weather error:", error);
        weatherElement.innerText = "Weather unavailable";
    }
}

// 7. Get the User's Location
// This triggers the browser popup asking for permission
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        
        // Call our function with the coordinates found
        getWeather(lat, lon);
    }, (error) => {
        // If user says "Block" or location fails
        weatherElement.innerText = "Location access denied";
    });
} else {
    weatherElement.innerText = "Geolocation not supported";
}


// FOCUS FEATURE
const focusInput = document.getElementById('focus-input');
const focusDisplay = document.getElementById('focus-display');

// 1. Check if we already have a focus saved
const savedFocus = localStorage.getItem('dailyFocus');

if (savedFocus) {
    // If we do, hide the input and show the text
    showFocus(savedFocus);
}

// 2. Listen for the "Enter" key
focusInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const focusText = focusInput.value;
        
        // Save to browser memory
        localStorage.setItem('dailyFocus', focusText);
        
        // Update UI
        showFocus(focusText);
    }
});

// 3. Helper function to switch the view
function showFocus(text) {
    focusInput.style.display = 'none'; // Hide input
    focusDisplay.innerText = text;     // Set text
    focusDisplay.style.display = 'block'; // Show text
}

// 4. Bonus: Allow editing (Click text to clear it)
focusDisplay.addEventListener('click', () => {
    localStorage.removeItem('dailyFocus'); // Clear memory
    focusDisplay.style.display = 'none';   // Hide text
    focusInput.style.display = 'block';    // Show input
    focusInput.value = '';                 // Clear input field
    focusInput.focus();                    // Put cursor in box
});