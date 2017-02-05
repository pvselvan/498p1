# 498p1

Before pulling/forking this application locally, be sure to have meteor installed by running:
    "curl https://install.meteor.com/ | sh" 
This will give you the latest version of meteor. To run this app, clone the repository on your local machine and run:
    "meteor npm install"
    "meteor"

The app should now be running on http://localhost:3000
    
Application Setup:

The main files for this application are contained in the client, imports, and server folders. 

Client: front-end entry point

Imports: Files inside imports/ only load if they are imported. The api folder contains the Collection declaration and export
The Collection for this app is called Words, which is exported to the UI of the app.
The UI folder contains the main javascript and HTML files for interacting with the app, including text input, text decoration, and deleting text. 

Server: In main.js, we need to import the Word module, which creates the MongoDB collection and sets it up to get data to the client. In tasks.js, we see a function defined that deletes all the items in a collection. This is called in the client-side. Since this is a sensitive action, Meteor does not allow it to be directly defined on the client-side. 

To see the live version, head over to http://assignment1.meteorapp.com/
