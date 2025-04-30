# taskify-frontend
Taskify-Frontend Code changes

1. Frontend (React)
a. Project Setup
npx create-react-app taskify-frontend
cd taskify-frontend
npm install axios react-router-dom
b. Folder Structure
css
Copy
Edit
taskify-frontend/
├── src/
│   ├── components/
│   │   ├── TaskForm.js
│   │   ├── TaskList.js
│   │   ├── TaskFilter.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── NewTask.js
│   │   ├── EditTask.js
│   ├── App.js
│   └── api.js

2. Running the Frontend
a. Navigate to the frontend folder:
cd ../taskify-frontend
b. Install dependencies:
npm install
c. Start the React development server:
npm start
This will open the app in browser at http://localhost:3000
