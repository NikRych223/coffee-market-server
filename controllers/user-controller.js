const jwt = require('jsonwebtoken');

const userAuth = {
    username: 'admin',
    password: 'admin'
};

class UserController {
    async login(req, res) {
        try {
            // get username and passowrd for request body
            const {username, password} = req.body;

            // check user username and password
            if (username === userAuth.username && password === userAuth.password ) {
                
                // create acceess token
                const accessToken = jwt.sign({username: username}, 'coffee', {expiresIn: '30m'});

                // create refresh token
                const refreshToken = jwt.sign({username: username}, 'coffee', {expiresIn: '1d'});

                // add refresh token to cookie
                await res.cookie('refreshToken', refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000});

                // return access token to client
                return res.json({accessToken});
            } else {
                // if error in try, return status 403 and message
                res.status(403).json({message: 'user not found'});
            }
        } catch(e) {
            res.status(403).json({message: 'user not found'});
        }
    }

    async refresh(req, res) {
        try {
            // get cookie refresh token
            const refreshToken = req.cookies.refreshToken;

            // try decode refresh token
            const decodedToken = jwt.verify(refreshToken, 'coffee');

            // generete new access token
            const accessToken = jwt.sign({username: userAuth.username}, 'coffee', {expiresIn: '1h'});

            // return new token to client
            return res.json({accessToken});
        } catch(e) {
            // check cookie in request, if not - return status 401
            return res.status(401).json({message: "unauthorized"});
        }
    }
};

module.exports = new UserController();