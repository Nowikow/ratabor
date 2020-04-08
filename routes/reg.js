const {Router} = require('express')
const Reg = require('../models/regs')
const router = Router()

router.get('/', (req,res) => {
    res.render('index')
})

router.get('/logout', (req,res) => {
    req.session.destroy(() => {
        res.render('index')
    })
})

router.post('/', async (req,res) => {
    console.log(req.body)

//Creating new user
    const reg = new Reg({
        doType: req.body.doType,
        surname: req.body.surname,
        name: req.body.name,
        secName: req.body.secName,
        surnameEn: req.body.surnameEn,
        nameEn: req.body.nameEn,
        secNameEn: req.body.secNameEn,  
        phone: req.body.phone,
        email: req.body.email,
        smm: req.body.smm,
        dateBirth: req.body.dateBirth,
        placeBirth: req.body.placeBirth,
        passSerie: req.body.passSerie,
        passNumber: req.body.passNumber,
        passWho: req.body.passWho,
        passWhen: req.body.passWhen,
        Who: req.body.Who,
        land: req.body.land,
        town: req.body.town,
        clothSize: req.body.clothSize,
        sex: req.body.sex,
        spaces: req.body.spaces,
        job: req.body.job,
        club: req.body.club,
        role: req.body.role,
        whoisyourdaddy: req.body.whoisyourdaddy,
        townNow: req.body.townNow,
        dateArr: req.body.dateArr,
        dateDep: req.body.dateDep,
        lugInfo: req.body.lugInfo,
        transfer: req.body.transfer,
        comeDate: req.body.comeDate,
        outDate: req.body.outDate 
    })

    const email_choose = req.body.email
    const candidate = await Reg.findOne({ email_choose })
    if (candidate) {
        res.redirect('/')
    } else {
        try {
            await reg.save()
            res.redirect('/')
        } catch (e) {
            console.log(e)
        }
    } 
})



module.exports = router