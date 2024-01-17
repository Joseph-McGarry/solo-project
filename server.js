const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// app.get('/', (req, res) => {
//     return res.status(200).sendFile(path.resolve(__dirname, './index.html'));
// });

app.get('/signup', )
    return res.status(200).sendFile(path.resolve(__dirname, './signup.html'));

app.post('/signup', )    

app.use('/styles.css', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, './client/styles.css'));
});

app.post('/styles.css', colorController.getColor, (req, res) =>{
    return res.status(201).json({ color : res.locals.color });  
});







app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
  


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
  module.exports = app;