
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl =>{
    tbl.increments();
    tbl.text('VIN', 128)
        .unique()
        .notNullable();
    tbl.text('make', 64)
        .notNullable();
    tbl.text('model', 64)
        .notNullable();
    tbl.integer('year')
        .notNullable();

    tbl.integer('milage')
        .notNullable();
    tbl.text('transmission', 64);
    tbl.text('title', 64);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};

// CREATE TABLE cars (
//     carID        INTEGER    PRIMARY KEY AUTOINCREMENT,
//     VIN          TEXT (256) NOT NULL
//                             UNIQUE,
//     make         TEXT (64)  NOT NULL,
//     model        TEXT (64)  NOT NULL,
//     year         INTEGER    NOT NULL
//                             CHECK (year > 1900 AND 
//                                    year < 3000),
//     milage       INTEGER    NOT NULL,
//     transmission TEXT (64),
//     title        TEXT (64) 
// );