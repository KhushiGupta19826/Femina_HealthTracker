# 🌸 Femina Health Tracker

**Femina** is a fully frontend-based menstrual health and wellness tracker web app designed to help users track their cycles, mood, habits, journal entries, and access health-related resources — all from a beautifully crafted UI using just **HTML, CSS, and JavaScript** with **localStorage-based authentication**.

---

## 🔧 Tech Stack

- **HTML5**
- **CSS3** (embedded in each page)
- **JavaScript (Vanilla JS)**
- **localStorage** for data persistence and authentication
- **No backend required**

---

## 🚀 Features

- 🔐 **User Authentication**
  - Signup/Login using localStorage
  - Only authenticated users can access private pages (period tracker & journal)

- 🩸 **Period Tracker**
  - Track start dates, flow levels, moods, pain levels
  - Calendar highlights period days, PMS, ovulation, and fertile window
  - Auto prediction of next cycle

- 📓 **Private Journal**
  - Users can write daily health logs or mood entries
  - Data saved in localStorage linked to the logged-in user

- 💪 **Fitness & Habit Tracker**
  - Sliders and toggles to track symptoms and healthy habits
  - Summary generated based on entries

- 📚 **Resources Page**
  - Public access to educational content on menstrual health, mental wellness, fitness, and nutrition

- 🩺 **Doctor Appointment Page**
  - Static form to simulate booking appointments

- ❓ **FAQs Page**
  - Answers to common health-related questions

---

## 🗂️ Project Structure
Femina_HealthTracker/
├── index.html                  # Landing page (public)
├── login.html                 # Login page (public)

├── js/
│   ├── auth.js                # Handles signup, login, and user auth
│   ├── privatePages.js        # Redirects unauthenticated users from private pages

├── navbar/
│   ├──periodtracker.html         # Period tracker (private)
│   ├── journal.html               # Health journal (private)
│   ├── fitness.html               # Symptom & habit tracker (public)
│   ├── resources.html             # Educational content (public)
│   ├── doctorappointment.html     # Doctor appointment (public)
│   ├── appointment-form.html      # Additional static form (public)
│   ├── FAQ.html                   # Frequently Asked Questions (public)   

├── data/
│   └── femina.yml             # Project info in YAML format

├── README.md                  # Project README file



---

## 🔒 Auth Flow (LocalStorage Based)

- User data is saved in localStorage as an array of user objects
- Authenticated users are tracked using a `currentUser` key
- Private pages are blocked unless a user is logged in (via JS)

---

## 📁 YAML Config

A `femina.yml` file exists to describe all routes, private access control, and tech stack in structured format for documentation and maintenance.

---

## 💡 Future Improvements (Optional Ideas)

- ✅ Add password validation and email format checking
- ✅ Encrypt user passwords (for a real-world app)
- ✅ Add logout button and session timeout
- 🗂️ Use IndexedDB or export/import data
- 📲 PWA support for offline access

---

## 👩‍💻 Developed By

**Khushi Gupta**
**Krish**  
**Khushi Sindoor**  
**Vinayak**  

Version: 1.0.0

---

> 🌷 *Femina* is made with care for those who want a simple yet powerful way to track their cycle and health. No backend, no signup hassle — just your data, your privacy.
