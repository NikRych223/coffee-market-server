const jwt = require('jsonwebtoken');

function userLogginedMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(403).json({message: "user not found"});
        }

        const decodeToken = jwt.verify(token, 'coffee');
        req.user = decodeToken;
        next();
    } catch(e) {
        return res.status(403).json({message: "user not found"});
    }
}

module.exports = userLogginedMiddleware;