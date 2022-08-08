const { response } = require("express");
const { request } = require("http");
let userAnime = []

module.exports = {
    getRandom: (req, res) => {
        let randomAnime = require("./RandomAnime.json")
        let randomIndex = Math.floor(Math.random() * randomAnime.length);
        let randomChoice = randomAnime[randomIndex];
        res.status(200).send(randomChoice);
    },

    getDavidAnime: (req,res) => {
        let davidAnime = require("./DavidAnime.json")
        res.status(200).send(davidAnime)
    },

    createAnime: (req,res) => {
        let { newAnime } = req.params
        console.log(req.params)
        userAnime.push(newAnime)
        console.log(userAnime)
        res.status(200).send(userAnime)
    },
    
    deleteAnime: (req,res) =>
    {
        userAnime = [];
        res.status(200).send(userAnime)
    },

    putList: (req, res) =>
    {
        let {index} = req.params
        console.log(index)
        userAnime.splice(index, 1)
        console.log(userAnime)
        res.status(200).send(userAnime)
    }

}
