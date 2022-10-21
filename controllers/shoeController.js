const {Shoe} = require("../model/model");

const shoeController = {
    addShoe: async (req, res) => {
        try{
            const newShoe = new Shoe(req.body);
            const saveShoe = await newShoe.save();
            res.status(200).json(saveShoe);
        }catch(err){
            res.status(500).json(err);
        }
    },
};

module.exports = shoeController;
