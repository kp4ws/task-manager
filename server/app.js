const express = require ('express');
const app = express();

//Set up middleware
app.use(express.json());

//Set up routes
app.get('/', (req, res)=> {
    res.send('Hello, World!');
});

//Import task routes
const taskRoutes = require('./routes/tasks');

//Register task routes with app
app.use(taskRoutes);

//Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});