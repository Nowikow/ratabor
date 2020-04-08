const {Schema, model} = require('mongoose')

const reg = new Schema({

    doType: {
        type: String
    }, 

    surname: {
        type: String
    },

    name: {
        type: String
    },

    secName: {
        type: String
    },

    surnameEn: {
        type: String
    }, 

    nameEn: {
        type: String
    },

    secNameEn: {
        type: String
    },

    email: {
        type: String
    },

    phone: {
        type: String
    },

    smm: {
        type: String
    },

    dateBirth: {
        type: String
    },

    placeBirth: {
        type: String
    },  

    passSerie: {
        type: Number
    },

    passNumber: {
        type: Number
    },

    passWho: {
        type: String
    },

    passWhen: {
        type: String
    },

    Who: {
        type: String
    },

    land: {
        type: String
    },

    town: {
        type: String
    },

    clothSize: {
        type: String
    },

    sex: {
        type: String
    },

    role: {
        type: String,
    },

    club: {
        type: String
    },

    whoisyourdaddy: {
        type: String
    },

    townNow: {
        type: String
    },

    dateArr: {
        type: String
    },

    dateDep: {
        type: String
    },

    lugInfo: {
        type: String
    },

    transfer: {
        type: String
    },

    dateCome: {
        type: String
    },

    dateDep: {
        type: String
    } 
})

module.exports = model('Reg', reg) 