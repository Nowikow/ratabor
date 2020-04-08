//зависимости
const express = require('express') 
const exphbs= require('express-handlebars')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const session = require('express-session')
const homeroutes = require('./routes/reg')
const profileroutes = require('./routes/profile')
const loginroutes = require('./routes/login')
const varMiddleware =  require('./middleware/variables')
const Reg = require('./models/regs')


//создание приложения
const app = express()

//создание hbs
const hbs = exphbs.create ({
    defaultLayout: 'main',
    extname: 'hbs'
})

//подключение hbs
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')


//БД
async function start() {
    try {
        const url = `mongodb+srv://adm:zaq123edc@cluster0-9nhaf.mongodb.net/Ratabor` 
        await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

        //прослушивание на заданном порте

        app.listen(PORT, () => {
        console.log(`...working on port ${PORT}`)
        })
    } catch (e) {
        console.log(e);
    }
}

start()


//сессия
app.use(session({
    secret: 'smth hier',
    resave: false,
    saveUninitialized: false    
}))
app.use(varMiddleware)


//подключение css и сторонних js
app.use(express.static('public'));

//преобразование данных с форм
app.use(express.urlencoded ({extended: true}))

//маршрут логина
app.use(homeroutes)

//маршрут профиля
app.use(profileroutes)


//маршрут логина
app.use(loginroutes)