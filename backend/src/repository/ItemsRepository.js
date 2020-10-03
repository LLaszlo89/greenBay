import { db } from "../data/connection";

export default class ItemsRepository {
  constructor() {}

  async showAllItems() { /* Only sellable */
    await db.query("SELECT * FROM items WHERE forSale = true");
  }
  async showSpecialItems(id) {
    await db.query(
      "SELECT * FROM items WHERE id =?", [id] /* ALL even if its sold */
    );
  }
  async saveNewItem({ item_name, description, price, imgUrl, seller, forSale,}) {
    await db.query(
      "INSERT INTO items (item_name, description, price, imgUrl,seller, forSale)VALUES(?,?,?)",
      [item_name, description, price, imgUrl, seller, forSale || true]
    );
  }

  async updateItemStatus(id) {
    await db.query(`UPDATE items set forSale = false`);
  }
}
