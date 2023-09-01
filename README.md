# MERN Stack Job Portal

The goal of this project is to learn how to build a full stack application using the MERN stack. The application is built using the MERN stack, which is MongoDB, Express, React, and Node.js.

## Specifications

- Two types of users: Recruiter and Applicant
- Recruiter can post jobs
- Applicant can apply for jobs
- Recruiter can view all the applications for a particular job
- Applicant can view all the jobs he has applied, and the status of the application
- Recruiter can shortlist, reject or accept the application

### Users

- Two types of users: Recruiter and Applicant
- Common Registration and Login for both types of users
- Recruiter: Name, Password, Email, Bio
- Applicant: Name, Password, Email, Rating, Education, Skills

### Jobs

- Title, Recruiter, Applications, Vacancies, Deadline, Joining Date, Skills, Salary, [Full Time/Part Time/ WFH], Duration, Rating

### Applications

- Date of Application, Applicant, Job, Status, Recruiter, Statement of Purpose, Job Rating, Applicant Rating

## Features

### Job Applicant

- [x] Register and Login
- [x] Edit Profile
- [ ] Upload Resume and Profile Picture
- [x] View all jobs
    - Filter by Job type, Salary, Duration
    - Sort by Rating, Salary, Duration
    - Fuzzy Search on Title
- [x] Apply for a job
- [x] View all applications and their status
- [x] Rate the job

### Recruiter

- [x] Register and Login
- [x] Edit Profile
- [x] Post a job
- [x] Update/delete a job
- [x] View all the jobs posted by the recruiter
- [x] View all the applications and their status for a particular job
- [x] Shortlist, reject or accept the application
- [x] View all the accepted applicants
- [x] Rate the applicant for a particular job

## Tech Stack

- Frontend: React JS, bootstrap
- Backend: Node JS, Express JS
- Database: MongoDB
- Authentication: JWT

## Running the project

- Run Express Backend:

```sh
cd backend/
npm install
npm start
```

- Run React Frontend:

```sh
cd frontend
npm install/
npm start
```

Navigate to [http://localhost:3000/](http://localhost:3000/) in your browser.
