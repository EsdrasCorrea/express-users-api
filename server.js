const express = require('express')
const userRoutes = require('./routes/userRoutes')

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({message: 'API is running with Express'});
});

app.use(userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});