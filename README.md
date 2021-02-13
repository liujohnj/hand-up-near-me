# Prototype MERN stack

This application was developed as a result of lessons learned from the YouTube MERN stack Exercise Tracker application development tutorial offered by freeCodeCamp.org that can be found at the following link:  https://www.youtube.com/watch?v=7CqJlxBYj-M

The rudimentary application in this non-main branch serves as a learning prototype for the main project, mostly for educational purposes.  The objective was to create a working model that can perform all four CRUD activities (create, read, update, and delete).  Consequently, the four main activities featured are: creating a new entry in the NoSQL database, reading data, updating data, and deleting data.  Like the principal software project that eventually will be pushed to the main branch, this prototype features the following four principal technologies:

- MondgoDB (for the database back-end)
- Express (web framework for Node.js)
- React (JavaScript front-end library for building the user interface)
- Node.js (JavaScript runtime environment that brings JavaScript to the server)

This README page is included just as a preliminary guide for the initial commit and likely will be augmented over time to incorporate more detail, include lessons learned, and serve as a reference to team members for aiding in the development and testing of the main project.  Also, an effort likewise is being made to comment code as much as possible to serve as a reference, time permitting.

*Comment:*  At the present time, it is unknown whether portions of this prototype codebase will be merged into the main branch to form the basis for the main project.  Other programming approaches for the MERN stack components, particularly as they relate to how Express is implemented, are being evaluated to determine which one is the most appropriate.

## Screenshots of functionality (as of 02/11/2021)

#### Create new provider MongoDB document
<img src="https://i.ibb.co/VQnP1gC/create-provider-210211.png" alt="create-provider-210211" border="0"></a>

#### Create new user MongoDB document
<img src="https://i.ibb.co/KbYrdkD/create-user-210211.png" alt="create-user-210211" border="0"></a>

#### Read list of providers
<img src="https://i.ibb.co/qpHSxBK/read-providers-210211.png" alt="read-providers-210211" border="0"></a>

#### Read list of users
<img src="https://i.ibb.co/8dWgmZH/read-users-210211.png" alt="read-users-210211" border="0"></a>

#### Update provider
<img src="https://i.ibb.co/f0sygR3/update-provider-210211.png" alt="update-provider-210211" border="0"></a>


## Instructions for installing and running

*These instructions should work but please notify John Liu if any errors are encountered.  Although it is written for the less seasoned (like this author) in mind, it is assumed that the reader has a very fundamental knowledge of the command line, git, and GitHub.*

- Get to the command line, which can be achieved by opening a Terminal from inside Visual Studio Code, for example (what this author is using), or by opening a Powershell window (as Administrator to be on the safe side), just as a second example.
- Navigate to the directory where you want the hand-up-near-me project to be housed, e.g. (for Windows):
```
cd c:\Users\John\Projects
```
- Clone the remote repository from the command line:
```
git clone https://github.com/liujohnj/hand-up-near-me.git
```
- This will install the remote repository locally on your machine in a newly created folder named *hand-up-near-me*.
- Change to this new directory.
```
cd hand-up-near-me
```
- Confirm that you are in the *main* branch of the repository.
```
git branch
```
- Switch to this instant branch (i.e., where you are reading this README.md file).
```
git checkout john-prototype-1
```
- Verify that you are now in the correct branch.
```
git branch
```
- If you list all the contents of the folder, you will see a number of files and other folders.  Among these is a package.json file that contains dependencies for the react-based front-end portion of the application.  Download all these dependencies (which may take serveral minutes):
```
npm install
```
- Now change to the folder containing the files for the back-end portion of the application, which features its own package.json file.
```
cd backend
```
- Obtain from John Liu a needed file named .env and place it in this directory (i.e., in *backend*).  This .env file is not included in the repository because it contains sensitive credentials needed to connect to the MongoDB database.
- Now download the back-end dependencies:
```
npm install
```
- Start the back-end:
```
npm start
```
- After a few moments, you should see a message stating something to the effect of "MongoDB database connection established succesfully."
- Open a new *second* terminal.
- Move up one directory (i.e., to the root directory for the project).
```
cd ..
```
- Start the front end.
```
npm start
```
- After a few moments, a new browser window automatically should open that points to http://localhost:3000/ and has the web application running in it.
- If you wish to continue doing any other work from the command line, you need to open a new third terminal, as the front-end and back-end processes are running on the other two.
- To stop the two processes, you can use Ctrl-C.
- To resume the processes, simply:
    - While in the *backend* directory in one terminal, run `npm start`.
    - In a second terminal back at the project root directory (e.g., c:\Users\John\Projects\hand-up-near-me), run `npm start`).
- That it's.  You should be up and running!


## Tips and lessons learned

- If you make any changes to the code and things  do not work as expected, try closing both the front-end and back-end processes and then restart them.


## Current known bugs

- None (as of 2/13/2021)