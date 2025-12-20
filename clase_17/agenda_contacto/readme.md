# 📇 Agenda Pro – Full Stack Contact Manager

Agenda Pro es una aplicación Full Stack para la gestión de contactos que demuestra habilidades reales de backend y frontend, integrando una API REST con persistencia en MongoDB Atlas y un frontend en JavaScript Vanilla.

LINK RENDER: https://agenda-de-contactos-en51.onrender.com/

## Tech Stack
### Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Tools
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-2C2C2C?style=for-the-badge)

## Features
- ✅ CRUD completo de contactos (Create, Read, Update, Delete)
- 🌐 API REST construida con Express
- ☁️ Persistencia real en MongoDB Atlas
- 🔐 Variables de entorno protegidas
- 🧠 Validaciones con Mongoose
- 🔄 Comunicación Frontend ↔ Backend mediante `fetch`
- ♻️ Arquitectura modular y escalable
  
## 🧩 Architecture Overview

La aplicación sigue una arquitectura **cliente-servidor**:

- **Frontend**: maneja la interfaz y consume la API REST.
- **Backend**: gestiona la lógica de negocio y la persistencia.
- **Database**: MongoDB Atlas en la nube.

Este enfoque permite escalar la aplicación y separar responsabilidades claramente.

## Project Structure
```
📂agenda-pro/
├── 📂backend/
│   ├── 📂config/db.js
│   ├── 📂models/contactModel.js
│   ├── 📂routes/contactRoute.js
│   ├── .env
│   ├── index.js
│── 📂public/
│   │   ├── index.html
│   │   ├── js/script.js
│   │   └── css/styles.css
│   └── package.json
│── .readme.md
```

## Getting Started

1️⃣ Clone the repository

``` 
git clone https://github.com/magamahe/agenda_de_contactos.git
cd agenda-pro/backend
```

2️⃣ Install dependencies
```
npm install
```

3️⃣ Environment variables
Create a **.env** file inside backend:
```
PORT=3000
```
4️⃣ Run the application
```
npm run dev
```
or
```
npm start
```
5️⃣ Open in your browser
```
http://localhost:3000
```

## API

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/contacts`     | Get all contacts     |
| POST   | `/api/contacts`     | Create a new contact |
| PUT    | `/api/contacts/:id` | Update a contact     |
| DELETE | `/api/contacts/:id` | Delete a contact     |

🎯 Why this project?

- This project was built to demonstrate:
- Real backend development with Node.js and Express
- Database modeling and validation with MongoDB & Mongoose
- Frontend-backend integration without frameworks
- Clean code and scalable architecture

## 👥 Autor
**Martínez Herrero, María Gabriela**
Backend & Frontend Developer – Argentina

<p>
  <a href="https://github.com/magamahe" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="32"/>
  </a>
  &nbsp;
  <a href="https://linkedin.com/in/magamahe" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="32"/>
  </a>
  &nbsp;
  <a href="mailto:magamahe@gmail.com">
    <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" width="32"/>
  </a>
</p> 

