const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  constructor() {
    super({ table: "admin" });
  }

  insert(admin) {
    return this.database.query(
      `insert into ${this.table} (email, password) values (?, ?)`,
      [admin.email, admin.hashedPassword]
    );
  }

  update(admin, id) {
    return this.database.query(
      `update ${this.table} set email = ?, password = ? where id = ?`,
      [admin.email, admin.hashedPassword, id]
    );
  }
}

module.exports = AdminManager;
