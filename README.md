# 📝 Signup Page

## 📦 Clone the Repository

```bash
git clone https://github.com/Vutukuri/signup_task.git

cd signup_task
```

This is a ** Signup Page ** built with:

- 🔧 **Django REST Framework** for the backend
- 🎨 **React** (with TypeScript) and **Redux Toolkit** for the frontend

Users can register by providing their username, email, and password. The frontend handles form submission and status updates, while the backend creates the user in the database.

---


## 🚀 Features

- User signup form with username, email, and password
- Redux Toolkit for async signup handling
- Axios for API requests
- Django REST Framework API endpoint for signup
- Basic error handling and success messages

---


## 🚀 Getting Started

### ✅ Prerequisites

- Python 3.x
- Node.js & npm
- (Optional) Virtual environment



## 🔧 Backend Setup (Django REST Framework)


### 1️⃣ Navigate to the backend folder
```bash
cd backend
```

### 2️⃣ Create and activate a virtual environment (recommended)
```bash
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate     # Windows
```

### 3️⃣ Set up Django Project
Create the Django project and app:
```bash
django-admin startproject backend
cd backend
python manage.py startapp accounts
```

### 4️⃣ Install dependencies
```bash
pip install django djangorestframework django-cors-headers
```

### 5️⃣ Run migrations and start server
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

The API is available at: http://127.0.0.1:8000/api/accounts/signup/


## Frontend Setup (React + TypeScript + Redux Toolkit)

### 1️⃣ Navigate to the frontend folder
```bash
cd ../frontend
```
### 2️⃣ Create React App with TypeScript
```bash
npx create-react-app frontend --template typescript

cd frontend
```

### 3️⃣ Install Required Packages
```bash
npm install axios @reduxjs/toolkit react-redux
```

### 4️⃣ Start the React app
```bash
npm start
```
The frontend is live at: http://localhost:3000

## Admin Panel (View Registered Users)
### 1️⃣ Create a superuser
```bash
python manage.py createsuperuser
```

### 2️⃣ Access the Django Admin Panel
Once server is running:

Go to: http://127.0.0.1:8000/admin

Log in using the credentials you created

Click on the “Users” section to view all registered users