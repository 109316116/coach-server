const db = require("../database");

module.exports = class Coach {
  constructor(id, firstName, lastName, description, hourlyRate, areas) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = description;
    this.hourlyRate = hourlyRate;
    this.areas = areas;
  }

  save() {
    return db.execute(
      "INSERT INTO coach (firstName, lastName, description, hourlyRate,areas) VALUES (?, ?, ?, ?, ?)",
      [
        this.firstName,
        this.lastName,
        this.description,
        this.hourlyRate,
        this.areas,
      ]
    );
  }
  static fetchAll() {
    return db.execute("SELECT * FROM coach");
  }

  static fetchId() {
    return db.execute("SELECT id, firstName, lastName FROM coach");
  }
};
