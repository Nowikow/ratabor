const {Router} = require('express')
const Reg = require('../models/regs')
const router = Router()

router.get('/login', async (req,res) => {
    res.render('login')   
})

router.post('/login', async (req,res) => {
    console.log(req.body)
    try {
        const {email, name} = req.body

        const candidate = await Reg.findOne({ email })

        if (candidate) {
            const areSame = name === candidate.name
            
            if (areSame) {
                req.session.isAuth = true
                req.session.email= candidate.email
                res.redirect('/profile')

            } else {

                res.redirect('/') 

            }
        } else {

            res.redirect('/')

        }
    } catch (e) {

        console.log(e) 

    }
})


module.exports = router