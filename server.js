const express = require('express')
const userRoutes = require('./routes/userRoutes');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler')

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);
app.use(errorHandler);

app.use(userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});