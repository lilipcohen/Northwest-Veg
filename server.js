const express = require('express');
const exphbs = require('express-handlebars');
// const hbs = require('hbs');


const db = require("./models")

const app = express();
const PORT = process.env.PORT || 8080


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.use(require('./routes'));

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App is listening on: " + PORT);
    })
}).catch(function (error) {
    console.log("error")
});

 




