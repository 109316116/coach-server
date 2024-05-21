const Coach = require("../models/coach");
const Context = require("../models/requests");

exports.getCoaches = (req, res, next) => {
  Coach.fetchAll()
    .then(([rows]) => {
      res.json(rows);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

exports.getCoachId = (req, res, next) => {
  Coach.fetchId()
    .then(([rows]) => {
      res.json(rows);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

exports.getContact = (req, res, next) => {
  Context.fetchAll(req.params.id)
    .then(([rows]) => {
      res.json(rows);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

exports.registerCoach = (req, res, next) => {
  const firstName = req.body.first;
  const lastName = req.body.last;
  const description = req.body.desc;
  const hourlyRate = req.body.rate;
  const areas = req.body.areas;
  const coach = new Coach(
    null,
    firstName,
    lastName,
    description,
    hourlyRate,
    areas
  );
  coach.save().catch((err) => console.log(err));
};

exports.contactCoach = (req, res, next) => {
  const email = req.body.email;
  const message = req.body.message;
  const coachId = req.body.coachId;
  const contact = new Context(coachId, email, message);
  contact.save().catch((err) => console.log(err));
};
