const AbstractManager = require("./AbstractManager");

class PlayerManager extends AbstractManager {
  constructor() {
    super({ table: "player" });
  }

  insert(player) {
    return this.database.query(
      `insert into ${this.table} (email, password, pseudo, score) values (?, ?, ?, ?)`,
      [player.email, player.hashedPassword, player.pseudo, 0]
    );
  }

  update(player, id) {
    return this.database.query(
      `update ${this.table} set email = ?, pseudo = ?, score = ? where id = ?`,
      [player.email, player.pseudo, player.score, id]
    );
  }
}

module.exports = PlayerManager;
