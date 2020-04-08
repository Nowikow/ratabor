    module.exports = function(req, res, next) {
        res.locals.isAuthen = req.session.isAuth

        next()
    }