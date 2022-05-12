const { knexMysql } = require("./options/mariaDB");
const { knexSqLite } = require("./options/sqlLite3");

const insertProducts = (knex) => {
  knex("productos")
    .insert({
      name: "Falafel",
      price: 200,
      thumbnail: "./images/kebbefrito.png",
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

insertProducts(knexMysql);
insertProducts(knexSqLite);
