const express = require("express");
const infoSchema = require("../models/info");

const router = express.Router();


// create info
router.post("/infos", async (req, res) => {
  console.log("Llego",req.body);
    const name = req.body.name;
    const add = new infoSchema({name: name});
    await add.save();
    res.send("Succes");
});

// get all users
router.get("/infos", (req, res) => {
  infoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/infos/:id", (req, res) => {
  const { id } = req.params;
  infoSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/infos/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  infoSchema
    .updateOne({ _id: id }, { $set: { name } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports = router;
