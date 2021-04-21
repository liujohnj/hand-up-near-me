# Installation Instructions

## Instructions to Install/Run this project locally on your host computer
- git clone this repository into your project folder.
- obtain API keys and environmental variables from Project Handover Document.
- Follow instructions in the Project Handover Document for installing two .env files, one in `back-end` folder and second in `front-end` folder containing these keys and environmental varaibles.
- Execute the following instructions from a terminal (in a Windows and not Linux or WSL environment):
  - From the root directory:  `npm install`
  - After the necessary dependencies are installed from the package.json file, then to start the back-end server:
    - `cd back-end`
    - `npm start`
  - Then from a new, second terminal and the root directory, to fire up the front-end:
    - `cd front-end`
    - `npm start`
- The website should automatically launch at http://localhost.com:3000.
- Comment: Please ensure that port 3000 is not being used prior to this process.
- With the API keys provided, the website should be able to access the document collections in the MongoDB database.


## Instructions to Install/Run deploy this project live on Heroku:
- Follow the instructions above.  Stop the front and back-end services.
- Change the value in the front-end .env file so that it reads ```NODE_ENV=production```
- From the terminal (to create a production build for Heroku):
  - ```cd front-end```
  - ```npm run build```
- Create an account at Heroku a new project.
- Under the Heroku settings for the project just created(Settings > Config Vars), add the environmental variable values provided in the Project Handover Document for:
  - ```ATLAS_URI```
  - ```REACT_APP_API_KEY```
- Add the following two additional values:
  - ```NONE ENV : production```
  - ```USE_NPM_INSTALL : true```
- Install the Heroku CLI program from Heroku's website so that you can work from the command line.
- From a terminal, verify the CLI is properly installed:
  - ```heroku --version```
- Log into Heroku:
  - ```heroku login```
  - and press any key as instructed, and follow the login instructions at the web browser window opened.
- Verify that your app is present:
  - ```heroku apps```
- Add the project files and commit them from the project root directory:
  - ```git add .```
  - ```git commit -m "initial commit"```
- Push the committed files to Heroku:
  -- ```git push heroku master```
- Hopefully, the build process succeeded (although complications are typical).
- To launch the deployed website:
 - ```heroku open```

### Any problems or questions? Please feel free to email: johnliu@ufl.edu
