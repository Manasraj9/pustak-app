# 📚 MyPustak Developer Assignment – Book Listing App

This is a full-stack app built for the MyPustak Developer Test. It includes a **Django REST API backend** and a **React Native frontend (Expo)** to list books and place orders.

## ✨ Features

- 📖 View a list of books (fetched from backend API)
- 🛒 Place an order by entering your name
- ✅ See a success message after placing the order
- 🌐 Live deployed backend

---

## 🧰 Tech Stack

- **Backend**: Django REST Framework
- **Frontend**: React Native (Expo)
- **API Integration**: `fetch` with async/await
- **Deployment**: Render (backend)

---

## 🗂️ Project Structure

```
📁 mypustak-app/
├── 📁 backend/   # Django backend
├── 📁 frontend/    # React Native Expo frontend
└── README.md
```

---
## 📲Try the App
- Go to download apk folder and download it


## 🚀 How to Run Locally

### 🔧 Backend Setup (Django)

```bash
cd mypustak_backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt

# Start server
python manage.py runserver
```

Or use the live backend:  
🌐 https://pustak-app-backend.onrender.com/

---

### 💻 Frontend Setup (React Native + Expo)

```bash
cd pustak-frontend
npm install
npx expo start
```

📱 Scan the QR code from your terminal with Expo Go to preview the app.

---

## 🌐 API Endpoints

**GET /books**  
Returns list of available books.

**POST /order**  
Place an order by sending:
```json
{
  "book_id": 1,
  "customer_name": "John Doe"
}
```

---

## 🛠️ Build APK (Optional)

```bash
npx expo build:android
# or
npx expo export --platform android
```

---

## ✅ Submission Checklist

- [x] Clean code and comments
- [x] React Native + Django REST
- [x] Working GET + POST API
- [x] GitHub repo with README
- [x] Live backend URL
