const express = require('express');
const app = express();
const port = 8080;
const apiRouter = require('./apiRouter.js');

app.use("/", express.static(__dirname + "/public"));
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
});