
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '1x789', make: 'toyota', model: 'corolla', year: 1999, milage: 511500, transmission: "automatic"},
        {VIN: '1x7x89', make: 'ford', model: '4runner', year: 2014, milage: 102350, transmission: "automatic"},
        {VIN: '1x78re9', make: 'honda', model: 'outback', year: 2003, milage: 1035230, transmission: "automatic"},
        {VIN: '1x78w9', make: 'toyota', model: '4runner', year: 1995, milage: 15200, transmission: "manual", title: "clean"},
      ]);
    });
};


// carID        INTEGER    PRIMARY KEY AUTOINCREMENT,
// VIN          TEXT (256) NOT NULL
//                         UNIQUE,
// make         TEXT (64)  NOT NULL,
// model        TEXT (64)  NOT NULL,
// year         INTEGER    NOT NULL
//                         CHECK (year > 1900 AND 
//                                year < 3000),
// milage       INTEGER    NOT NULL,
// transmission TEXT (64),
// title        TEXT (64) 
// );