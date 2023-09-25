const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  constructor() {
    super({ table: "admin" });
  }

  insert(admin) {
    return this.database.query(
      `insert into ${this.table} (email, password) values (?, ?)`,
      [admin.email, admin.password]
    );
  }

  update(admin, id) {
    return this.database.query(
      `update ${this.table} set email = ?, password = ? where id = ?`,
      [admin.email, admin.password, id]
    );
  }
}

module.exports = AdminManager;
