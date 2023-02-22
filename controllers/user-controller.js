const jwt = require('jsonwebtoken');

const genereteAccessToken = (username) => {
    const payload = { username };
    return jwt.sign(payload, 'coffee', {expiresIn: '24h'});
}

class UserController {
    async login(req, res) {
        try {
            const {username, password} = req.body;

            if (username === 'admin' && password === 'admin' ) {
                const token = genereteAccessToken(username);
                return res.json({token});
            } else {
                res.status(400).json({message: 'user not found'});
            }
        } catch(e) {}
    }
};

module.exports = new UserController();