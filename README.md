# Tech Bucket List API (SBA319 Lab)

This project is a basic MongoDB database application built for the SBA319 assignment. It uses the MVC architecture to organize users, goals, and check-ins for a "Tech Bucket List" themed API.

## Project Theme: Why a Tech Bucket List?
I chose a "Tech Bucket List" theme for this lab because it felt motivating and realistic. Instead of random data, I wanted my Users, Goals, and Checkins to represent real people setting real tech career milestones like building portfolios, getting certifications, and networking.  This approach made the project more fun to create and helped me think about how real world apps might structure developer journeys.

## Features
- Full CRUD API for Users, Goals, and Checkins
- MongoDB Atlas connection using environment variables
- Realistic seed data for all collections
- Organized project structure following MVC principles

## Technologies
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- dotenv

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

## Known Issues
- This is a learning project, so error handling is basic
- Relationships between collections (users-goals-checkins) are not fully validated yet (for simplicity)
