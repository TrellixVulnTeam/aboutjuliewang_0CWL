function authUser(req,res,next) {
    if(req.user == null) {
        res.status(403)
        res.redirect('/users/login')
    }
    next()
}

function authRole(role) {
    return (req,res, next) => {
        if(req.user.role !== role) {
            res.status(401)
            res.send("User not allowed")
        }   
         next()
    }
}

module.exports = {
    authUser,
    authRole
}