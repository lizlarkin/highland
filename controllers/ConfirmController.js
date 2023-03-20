const Confirm = require("../models/confirmModel");
const User = require("../models/userModel");

module.exports = {
    confirmUser: async (req, res) => {
        try {
            const confirmation = await Confirm.findOne({ token: req.body.token });
            // console.log(confirmation.userId);

            const confirmedUser = await User.findById(confirmation.userId);

            confirmedUser.confirm = true;
            confirmedUser.save();
            res.send("success");

        } catch (error) {
            console.log(error);
            res.send(error);
        }
    },
};