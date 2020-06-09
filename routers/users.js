const { Router } = require("express");

const users = [
  {
    id: 1,
    firstName: "Irene",
    lastName: "de Nicolo",
  },
  {
    id: 2,
    firstName: "Danny",
    lastName: "van der Jagt",
  },
  {
    id: 3,
    firstName: "Matias",
    lastName: "Garcia",
  },
  {
    id: 4,
    firstName: "Lisa",
    lastName: "Scorzon",
  },
  {
    id: 5,
    firstName: "Jeroen",
    lastName: "Bruinsma",
  },
];

const router = new Router();

router.get("/", (req, res) => {
  res.send(users);
});

module.exports = router;
