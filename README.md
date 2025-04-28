# Tech Bucket List API (SBA319 Lab)

This project is a basic MongoDB database application built for the SBA319 assignment. It uses the MVC architecture to organize users, goals, and check-ins for a "Tech Bucket List" themed API. It's a simple full-stack MERN style app to track and orgranize tech career goals.

## Project Theme: Why a Tech Bucket List?
I chose a "Tech Bucket List" theme for this lab because it felt motivating and realistic. Instead of random data, I wanted my Users, Goals, and Checkins to represent real people setting real tech career milestones like building portfolios, getting certifications, and networking.  This approach made the project more fun to create and helped me think about how real world apps might structure developer journeys. I wanted to create a personal "tech bucket list" to stay organized while transitioning into a Software Engineering career. This project helped me practice full CRUD operations, connecting a frontend to a backend, and using real database data.

## Features
- Full CRUD API for Users, Goals, and Checkins
- MongoDB Atlas connection using environment variables
- Realistic seed data for all collections
- Organized project structure following MVC principles
- Create a tech goal, see all goals live from the database, mark goals as complete, delete goals, filter goals by category (learning,project, certification, career, networking)

## Technologies
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- dotenv
- Vanilla Javascript frontend

## Seeding Instructions
Seed scripts are included for testing:
- `node seed.js` → Seeds users
- `node seedGoals.js` → Seeds goals
- `node seedCheckins.js` → Seeds check-in updates

## How to Run
1. Install dependencies: `npm install`
2. Create a `.env` file with your MongoDB URI and PORT
3. Start the server: `npm run dev` (or `npm start` for production)

## API Endpoints
- `/api/users`
- `/api/goals`
- `/api/checkins`

## Notes
- `.env` and `node_modules` are ignored using `.gitignore`
- No hardcoded credentials are present
- Data was seeded with realistic and beginner-friendly examples

## Lessons Learned
- How to set up a basic Node.js + Express API with MongoDB Atlas
- How to design clean and simple Mongoose schemas
- How to use environment variables to safely protect database connections
- How to structure a full project using the MVC pattern
- How to seed real-looking data into multiple collections

## Future Improvements
- Add user authentication with JWTs (login/signup)
- Expand goal categories to include personal and soft skill goals
- Create user dashboards showing progress toward goals
- Improve error handling with centralized middleware

## Bonus Features
- Live dynamic loading of real goals
- Basic frontend design with custom background
- Category filter to easily view specific types of goals

## Known Issues
- This is a learning project, so error handling is basic
- Relationships between collections (users-goals-checkins) are not fully validated yet (for simplicity)

## Screenshots
![image](https://github.com/user-attachments/assets/bfdeddd4-ed8c-43eb-a80c-65aeb42c8b47)
![image](https://github.com/user-attachments/assets/11981974-0d1b-41af-a034-803531602095)
![image](https://github.com/user-attachments/assets/34803706-fe8e-4984-9118-532be5581e2e)
![image](https://github.com/user-attachments/assets/c52184d1-4906-4e6a-ab02-73191db08a91)
![image](https://github.com/user-attachments/assets/7296fbe7-37ec-412c-a386-7f9a69323ca1)
![image](https://github.com/user-attachments/assets/bc4a952c-f6de-4f6f-8994-367aa84a4812)
![image](https://github.com/user-attachments/assets/cbf82d61-5932-42c8-a8b9-07a51949fbe8)
![image](https://github.com/user-attachments/assets/36a5040c-76d1-48ef-99a9-601c6ad5270b)
![image](https://github.com/user-attachments/assets/3601ebc9-ffd8-4939-8704-614bd7fb1dec)
![image](https://github.com/user-attachments/assets/b485dac0-9a9f-4c17-9e3d-48603a592e68)
![image](https://github.com/user-attachments/assets/17350160-68db-49f4-a17d-3d933171fab1)
![image](https://github.com/user-attachments/assets/3fb51c8e-608b-47a2-8d65-e802eef02e0d)




