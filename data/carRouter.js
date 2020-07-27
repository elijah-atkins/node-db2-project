const express = require("express");
const db = require("./carModel.js");

const router = express.Router();    

router.get("/", async (req, res, next) => {
    try {
      const allCars = await db.get();
      res.json(allCars);
    } catch (error) {
      next(error);
    }
  });

  router.get("/:id", validateCarsId, (req, res) => {
    res.json(req.Cars);
  });
  
  
  router.post("/", validateCarsBody, async (req, res, next) => {
    try {
      const newCars = await db.insert(req.body);
      res.json(newCars);
    } catch (error) {
      next(error);
    }
  });
  
  router.put(
    "/:id",
    validateCarsId,
    validateCarsBody,
    async (req, res, next) => {
      try {
        const newCars = await db.update(req.params.id, req.body);
        res.json(newCars);
      } catch (error) {
        next(error);
      }
    }
  );
  
  router.delete("/:id", validateCarsId, async (req, res, next) => {
    try {
      await db.remove(req.params.id);
      res.json({ message: "DELETED", Cars: req.Cars });
      res.json(deletedCars);
    } catch (error) {
      next(error);
    }
  });
  
  async function validateCarsId(req, res, next) {
    try {
      const validCars = await db.get(req.params.id);
  
      if (validCars) {
        req.Cars = validCars;
        next();
      } else {
        res.status(404).json({ error: "Cars id could not be found." });
      }
    } catch (error) {
      next(error);
    }
  }

  function validateCarsBody(req, res, next) {
    if (Object.keys(req.body).length === 0) {
      res.status(400).json({ error: "Please provide a Cars body" });
    } else if (!req.body.name || !req.body.budget) {
      res.status(400).json({ error: "Please provide a VIN make model year and milage" });
    } else {
      next();
    }
  }

  function CarsIdMatchesParams(req, res, next) {
    if (req.body.Cars_id === req.params.id) {
      next();
    } else {
      res.status(400).json({ error: "Cars id must match params." });
    }
  }


  module.exports = router;