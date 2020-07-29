const db = require("../dbConfig");
const mappers = require("./mapper");

module.exports = {
    get,
    insert,
    update,
    remove,
};

function get(id) {
  let query = db('cars');

  if (id) {
    return query
      .where('id', id)
      .first()
      .then((car) => {
        if (car) {
          return mappers.carToBody(car);
        } else {
          return null;
        }
      });
  } else {
    return query.then((cars) => {
      return cars.map((car) => mappers.carToBody(car));
    });
  }
}
  

  function insert(car) {
    return db("cars")
      .insert(car, "id")
      .then(([id]) => get(id));
  }

  function update(id, changes) {
    return db("cars")
      .where("id", id)
      .update(changes)
      .then(count => (count > 0 ? get(id) : null));
  }
  
  function remove(id) {
    return db("cars")
      .where("id", id)
      .del();
  }