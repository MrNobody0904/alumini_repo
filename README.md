# AlumniConnect — IIIT Bhagalpur

> **Find your mentor. Grow your career.**  
> A mentorship directory connecting students of IIIT Bhagalpur with alumni across top companies and domains.

---

## 📌 Overview

**AlumniConnect** is a fully client-side web application that serves as a mentorship directory for IIIT Bhagalpur (IIIT BGP). Students can discover alumni mentors, filter by industry or domain, bookmark profiles, and send mentorship requests — all without a backend.

Alumni can register their profiles either by importing from LinkedIn or filling in details manually, and students can sign up to browse and connect with them.

---

## ✨ Features

### 🔐 Authentication
- Student and Alumni sign-up flows
- Login for existing users (session stored in memory)
- Alumni registration via a guided 3-step form

### 🔗 LinkedIn Profile Import
- Paste raw LinkedIn profile text and let the parser auto-extract:
  - Name, current role, and company
  - Skills (with fallback keyword detection)
  - Graduation year and bio
- Manual entry fallback if parsing isn't needed

### 🗂️ Alumni Directory
- Card-based grid layout showing all alumni
- Real-time search by name, company, role, skills, or domain
- Filter sidebar for:
  - **Industry** (Tech, Finance, Media, SaaS, etc.)
  - **Domain** (Software Engineering, Product Management, Data Science, etc.)
  - **Graduation Year**
  - **Availability** (Available / Busy / Unavailable)
- Sort options: Default, A–Z, Z–A, Newest Grads, Oldest Grads

### 👤 Alumni Profile Modal
- Detailed profile view with bio, stats (connections, sessions, rating), and skills
- Mentorship preferences and availability status
- Direct LinkedIn profile link
- Bookmark / save profile toggle

### ⭐ Bookmarks
- Save favourite alumni profiles
- Switch between "All Alumni" and "Bookmarked" tabs
- Bookmarks persist via `localStorage`

### 🌗 Theme Support
- Light and dark mode toggle

### 📱 Responsive Design
- Mobile-friendly sidebar with hamburger toggle
- Responsive card grid layout

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, flexbox, grid) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — DM Sans & DM Serif Display |
| Storage | `localStorage` (client-side persistence) |
| Backend | None — fully static |

---

## 📁 Project Structure

```
alumniconnect/
├── alumini.html       # Main HTML — all screens and modals
├── style.css          # All styling, themes, and responsive rules
└── back.js            # All application logic (auth, filters, rendering, localStorage)
```

---

## 🚀 Getting Started

No build step or server required.

## 🧑‍💻 How to Use

### As a Student
1. Open the app and click **Create an account**
2. Select **Student / Mentee**
3. Fill in your name, email, password, and expected graduation year
4. Browse the alumni directory and use filters to find the right mentor
5. Click any card to open the full profile, then click **📩 Request Mentorship**

### As an Alumni
1. Click **Create an account** → **Alumni / Mentor**
2. Optionally paste your LinkedIn profile text for auto-import
3. Review and complete your profile across 3 steps
4. Your profile will appear in the directory immediately after sign-up

---

## 👥 Alumni in the Directory

The directory includes pre-seeded alumni from IIIT Bhagalpur across a range of companies and domains:

| Name | Company | Domain |
|---|---|---|
| Priya Sharma | Google | Product Management |
| Mohan Das | Meta | Software Engineering |
| Anika Patel | Netflix | Data Science |
| Sweta Bansal | Goldman Sachs | Investment Banking |
| Sonia Kumari | Figma | Design |
| Danish Yadav | Nexus AI | Entrepreneurship |
| Raj Menon | HubSpot | Marketing |
| Ankur Dwivedi | — | General |
| + 12 more IIIT BGP alumni | | |

Alumni profiles include connections count, mentorship sessions, and ratings.

---

## 🔧 Adding New Alumni (Developers)

To add a permanent alumni entry, append an object to the `DEFAULT_ALUMNI` array in `back.js`:

```js
{
  id: 21,                          // unique integer
  name: 'Full Name',
  grad: 2022,                      // graduation year
  role: 'Software Engineer',
  company: 'Company Name',
  industry: 'Tech',                // Tech | Finance | Media | SaaS | Healthcare | ...
  domain: 'Software Engineering',  // see dropdown options in alumini.html
  skills: ['JavaScript', 'React', 'Node.js'],
  availability: 'available',       // available | busy | unavailable
  bio: 'Short bio here.',
  mentorship: 'Mentorship preferences here.',
  connections: 0,
  sessions: 0,
  rating: 5.0,
  linkedin: 'https://linkedin.com/in/yourprofile'
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🏫 About

Built for the **IIIT Bhagalpur** community to bridge the gap between students and alumni, fostering mentorship and career growth.

> *"The best way to grow is to learn from those who walked the path before you."*
