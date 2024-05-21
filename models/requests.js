const db = require("../database");

module.exports = class Context {
  constructor(id, email, message) {
    this.id = id;
    this.email = email;
    this.message = message;
  }

  static fetchAll(id) {
    return db.execute(`SELECT * FROM request WHERE id = ${id}`);
  }

  save() {
    console.log(this.id, this.email, this.message);
    return db.execute(
      "INSERT INTO request (id, email, message) VALUES (?, ?, ?)",
      [this.id, this.email, this.message]
    );
  }
};
