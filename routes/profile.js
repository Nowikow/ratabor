const {Router} = require('express')
const Reg = require('../models/regs')
const router = Router()

router.get('/profile', async (req,res) => {
    //Вывод информации в блоках
    if (req.session.isAuth) {
        const email = req.session.email
        const candidate= await Reg.findOne({email})
        res.render('profile', {
            surname: candidate.surname,
            name: candidate.name
        })
    } else {
        res.redirect('/')
    }
})

router.post('/profile', async (req,res) => {
    
    //Исправление ячейки БД
    const email = req.session.email
    const candidate= await Reg.findOne({email})

    candidate.surname=req.body.surname
    candidate.name=req.body.name
    
    try {
        await candidate.save()
    } catch (e) {
        console.log(e)
    }
    res.redirect('/profile')
})

module.exports = router