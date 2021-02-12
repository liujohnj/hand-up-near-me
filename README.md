# Prototype MERN stack

This application was developed as a result of lessons learned from the YouTube MERN stack Exercise Tracker application development tutorial offered by freeCodeCamp.org that can be found at the following link:  https://www.youtube.com/watch?v=7CqJlxBYj-M

The application in this non-main branch serves as a learning prototype for the main project, mostly for educational purposes.  The objective was to create a working model that can perform all four CRUD activities (create, read, update, and delete).  Consequently, the four main activities featured are: creating a new entry in the NoSQL database, reading data, updating data, and deleting data.  Like the principal software project that eventually will be pushed to the main branch, this prototype features the following four principal technologies:

- MondgoDB (for the database back-end)
- Express (web framework for Node.js)
- React (JavaScript front-end library for building the user interface)
- Node.js (JavaScript runtime environment that brings JavaScript to the server)

This README page is included just as a preliminary guide for the initial commit and likely will be augmented over time to incorporate more detail, include lessons learned, and serve as a reference to team members for aiding in the development and testing of the main project.  Also, an effort likewise is being made to comment code as much as possible to serve as a reference, time permitting.

Comment:  At the present time, it is unknown whether portions of this prototype codebase will be merged into the main branch to form the basis for the main project.  Other programming approaches for the MERN stack components, particularly as they relate to how Express is implemented, are being evaluated to determine which one is the most appropriate.

## Screenshots of functionality (as of 02/11/2021)

#### Create new provider MongoDB document
<img src="https://i.ibb.co/VQnP1gC/create-provider-210211.png" alt="create-provider-210211" border="0"></a>

<img src="https://i.ibb.co/8dWgmZH/read-users-210211.png" alt="read-users-210211" border="0"></a>

#### Create new user MongoDB document
<img src="https://i.ibb.co/KbYrdkD/create-user-210211.png" alt="create-user-210211" border="0"></a>

#### Read list of providers
<img src="https://i.ibb.co/qpHSxBK/read-providers-210211.png" alt="read-providers-210211" border="0"></a>

#### Read list of users
<img src="https://i.ibb.co/8dWgmZH/read-users-210211.png" alt="read-users-210211" border="0"></a>

#### Update provider
<img src="https://i.ibb.co/f0sygR3/update-provider-210211.png" alt="update-provider-210211" border="0"></a>


## Instructions for installing and running

To install and run the application on your local computer:

(These instructions are still in progress and have not been tested/verified, particularly as it relates to installing some of the needed tools/frameworks, e.g., react.)

- Navigate to a folder where you would like the project to reside.
- At the command line, type 'node -v' to check to see if Node.js is already installed on your machine and, if so, verify the version (e.g., at least v8.15.0).
- If not present, install Node.js.  (More details to follow.)
- From the command line, type 'npx create-react-app mern-hand-up'.  This will create a React project with all the dependencies installed.
- git clone the appropriate repository branch.
- Enter 'cd backend' to enter the directory containing the back-end components.
- Obtain the needed .env file and place it in this folder.  This file is not included in the git repository because it contains sensitive credentials (e.g., for MongoDB).  The file can be obtained from John Liu.  
- From the terminal, run 'npm start' to start up MongooseDB.
- Enter 'cd ..' to move up one directory.
- Run 'npm start' to startup the front-end.
- On a web browser, navigate to http://localhost:3000. This likely will auto-launch upon running starting react.
- Delete boilerplate react files.  (More details to follow.)

## Current known bugs

- None (as of 2/11/2021)