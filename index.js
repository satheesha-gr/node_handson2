const express = require('express');
const app = express();
const port = 3000;

app.get('/router/api/main', (req, res) => {
  const response = "Express is a fast and minimalist web application framework for Node.js. It provides a robust set of features for web and mobile applications, allowing you to build APIs, handle HTTP requests and responses, manage routing, and much more.";

  res.send(response);
});

app.listen(port, ()=>{
    try {
        console.log("server running successfully");
    }
    catch(err) {
        console.log('Error');
    }
});