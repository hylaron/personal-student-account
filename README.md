# personal-student-account
Personal account for students
# Er-model
![alt text](https://github.com/hylaron/personal-student-account/blob/main/other/Er-model.png)

To install and run the "Personal Student Account" web application, follow these steps:

Install Node.js on your computer if you haven't done so already. Node.js is a platform that allows you to run JavaScript applications outside of the browser. You can download the Node.js installer from the official website at https://nodejs.org/. Follow the instructions on the website, selecting the appropriate Node.js version for your operating system.

After installing Node.js, open Visual Studio Code and navigate to the project folder. To start with the backend part, go to the "backend/server" folder. For example, if this folder is located on your desktop after extracting the archive, enter the following command in the Visual Studio Code terminal:

`bash`
 
cd ~/Desktop/backend/server
Make sure your project has a "package.json" file. This file contains information about the project's dependencies.

Run the following command to install the project dependencies using npm:


`npm install`
This command will automatically download and install all the dependencies listed in the "package.json" file.

Once the dependencies are installed, enter the following command to start the backend part of the web application, which will run at http://localhost:5000. (Note: This address is used exclusively for data exchange between the backend and frontend parts of the application)
arduino
 
`npm run dev`
After starting the backend part of the application, you need to start the frontend part of the web application. Open a new terminal without closing the running backend server terminal. Go to the "frontend" folder. For example, if this folder is located on your desktop after extracting the archive, enter the following command in the Visual Studio Code terminal:
bash
 
`cd ~/Desktop/frontend`
Make sure your project has a "package.json" file. This file contains information about the project's dependencies.

Run the following command to install the project dependencies using npm:

 
`npm install`
Once the dependencies are installed, enter the following command to start the frontend part of the Personal Student Account web application:
sql
 
`npm start`
This command will start the application in development mode and open it in your browser at http://localhost:3000.

Congratulations! You have successfully installed and launched the "Personal Student Account" web application using the Visual Studio Code terminal. You can make changes to the application code and see the results in real-time as the page automatically reloads when you save changes.

# Preview
# Schedule View Page
![alt text](https://github.com/hylaron/personal-student-account/blob/main/other/ilustr1.jpg)
# Version for the visually impaired
![alt text](https://github.com/hylaron/personal-student-account/blob/main/other/ilustr2.jpg)
# Student Progress Review page
![alt text](https://github.com/hylaron/personal-student-account/blob/main/other/ilustr3.jpg)
