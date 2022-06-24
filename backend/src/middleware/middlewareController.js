const jwt = require('jsonwebtoken')

const middlewareController = {
    verifyToken: (req, res, next) => {
        const token = req.header.token;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
                if (err) {
                    res.status(403).json("Token is not invalid")
                }
                req.user = user;
                next();
            })
        } else {
            res.status(401).json("You're not authenticated");
        }            
    },

    verifyTokenAndAdminAuth: (req, res, next) => {
        middlewareController.verifyToken(req, res, () => 
            {
                if (req.user.id == req.params.id || req.user.admin){
                    next();
                } else {
                    res.status(403).json("You're not allow to delete this user");
                }
            }
        )
    }
}

module.exports = middlewareController;