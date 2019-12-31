const expres = require('express');
const app = expres();
const { PORT } = require('./config');
const bodyParser = require('body-parser');
const { uploadSingle } = require('./config/multer-upload')

app.use(bodyParser.urlencoded({extended: true}))

// template ejs
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/home-page', (req, res) => {
    res.render('home-page');
})

app.get('/upload-single', (req, res) => {
    res.render('upload-single');
})

app.post('/upload-single', uploadSingle, (req, res) => {
    res.json({ error: false, data: 'uploaded_successfully'})
})

app.get('/upload-multiple', (req, res) => {
    res.render('upload-multiple');
})

app.get('*', (req,res) => res.json({ error: false, data: `App is running at ${PORT}`}));

app.listen(PORT, () => console.log(`App is running at ${PORT}`));