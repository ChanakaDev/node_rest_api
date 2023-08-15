# Node Express REST API

### Steps that I followed for the implementation

- creating a project folder
- initializing npm in it `npm init`
- adding express dependency `npm i express`
- adding babel dependency `npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env`
- adding .babelrc file
- adding following code to the `.babelrc` file

```
{
    "presets" : [
        "@babel/preset-env"
    ]
}
```

- adding index.js file
- adding `"start": "nodemon ./index.js --exec babel-node"` line to the `package.json`
- adding a .gitignore and pushing code to the git
- adding a readme file

### Coding happens as follows

index.js

- Importing express `import express from "express";`
- Creating an express app `const app = express();`
- Defining a port number `const PORT = 3000;`
- Defining a get request 

```
// setting up a HTTP get request
app.get("/", (req, res) =>
  res.send(`Node and express server is running on port ${PORT}`)
);
```

- Defining a listner to the server

```
// Start a server that listens for incoming network requests on a specific port
app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
``` 

- Install nodemon `npm install -g nodemon`
- Running project on the local server `npm start`


