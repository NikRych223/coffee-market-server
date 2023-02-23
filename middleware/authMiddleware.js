const jwt = require('jsonwebtoken');

function userLogginedMiddleware(req, res, next) {
    try {
        // get token on request headers
        const token = req.headers.authorization.split(' ')[1];

        // if token not found, return 401
        if (!token) {
            return res.status(401).json({message: "unauthorized"});
        }

        // decode token, if decoded run next middleware
        const decodeToken = jwt.verify(token, 'coffee');
        next();
    } catch(e) {
        // if error in try, return 401
        return res.status(401).json({message: "unauthorized"});
    }
}

module.exports = userLogginedMiddleware;