import { db } from "../data/connection";

export default class UserRepository {
  constructor() {}

   async saveNewUser(name, email, password, cash_balance) {   
    await db.query(
      "INSERT INTO users (name , email , password, cash_balance)VALUES(?,?,?,?)",
      [name, email, password, cash_balance]
    );
  } 

  async user(name){
    try {
      return await db.query("SELECT * FROM users WHERE name = ?", [name]);
    } catch (error) {
      console.log(error)
    }
  }

  async updateUser({
    user_name,
    cash_balance /* bought_items ?? order tabla? */,
  }) {
    try {
      await db.query(
  `UPDATE users set cash_balance=? , bought_items=? where user_name=?`,[cash_balance, bought_items, user_name])
    } catch (error) {
      console.log(error )
    }
  }
}
