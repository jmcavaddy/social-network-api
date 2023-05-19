const { User } = require('../models')

module.exports = {
    createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },
    getAllUsers(req, res) {
        User.find({})
          .then((user) => res.json(user))
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
      }
      

}