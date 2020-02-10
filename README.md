# website-yuh
To get set up, clone the repo and install [Nodejs v12.15.0 LTS](https://nodejs.org/en/download/). This will install the server-side framework we'll be using and Node Package Manager (npm) which will handle all of our external packages.

Once npm is installed, run `npm install` in the `website-yuh` directory to install all the needed packages. Be sure to run this command in the `frontend` and `backend` directories as well. To install a new package, run `npm install [package-name] --save`. The save flag saves the package to the `package.json` file in the current directory, so it can be easily installed by the rest of the team.

Run the command `ng serve` in the `frontend` directory to serve the frontend on localhost port 4200. You can type `localhost:4200` into any browser to verify that it's working!

Similarly, run `nodemon server.js` in the `backend` directory to serve the backend on localhost port 3000. You can access the backend by going to `localhost:3000`.
