const Market = require('../models/market-model');

class MarketController {
    async addItem(req, res) {
        try {
            const {title, description, image, country, price} = req.body;
            const candidate = await Market.findOne({title});

            if (candidate) {
                return res.status(400).json({message: 'item for this name is created'});
            }

            const item = new Market({title, description, image, country, price});
            await item.save();
            return res.json({message: 'item is created OK'});
        } catch(e) {}
    }

    async getItems(req, res) {
        try {
            const items = await Market.find();
            res.json(items);
        } catch(e) {}
    }

    async getItemById(req, res) {
        try {
            const _id = req.params.id;
            const item = await Market.findById(_id);
            res.json(item);
        } catch(e) {}
    }
};

module.exports = new MarketController();