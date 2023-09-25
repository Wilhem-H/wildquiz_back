const AbstractManager = require("./AbstractManager");

class PlayerManager extends AbstractManager {
  constructor() {
    super({ table: "player" });
  }

  insert(player) {
    return this.database.query(
      `insert into ${this.table} (email, password, pseudo, score) values (?, ?, ?, ?)`,
      [player.email, player.password, player.pseudo, player.score]
    );
  }

  update(player, id) {
    return this.database.query(
      `update ${this.table} set email = ?, password = ?, pseudo = ?, score = ? where id = ?`,
      [player.email, player.password, player.pseudo, player.score, id]
    );
  }
}

module.exports = PlayerManager;
