# EduNova — Single Page E-Learning UI

A simple **single-page Learning Management System UI** built using **HTML, CSS and Vanilla JavaScript**.
Users can browse courses, watch lessons, and track progress using browser storage.

---

## Features

* Course catalog with search
* Video player with lesson sidebar
* Progress tracking (persistent via localStorage)
* Dashboard statistics
* No page reload navigation

---

## Tech Stack

* HTML
* CSS
* JavaScript
* LocalStorage
* YouTube embeds

---

## Project Structure

```text
elearn
├── assets
│   └── thumbnails
│   └── style.css
├── js
│   ├── app.js
│   ├── catalog.js
│   ├── dashboard.js
│   ├── data.js
│   ├── db.js
│   ├── player.js
│   ├── progress.js
│   └── video.js
├── course.html
├── dashboard.html
├── index.html
└── player.html
```


## Run

Open with Live Server:

`Right click index.html → Open with Live Server`

---

## Storage Format

```json
{ "1": 67, "2": 100 }
```

---

Frontend only. No backend.
