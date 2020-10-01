import { db } from "../data/connection";

export default class UserRepository {
  constructor() {}

  /*   async saveNewUser({ user_name, email, cash_balance }) {    IF I HAVE TIME
    await db.query(
      "INSERT INTO users (user_name , email , cash_balance)VALUES(?,?,?)",
      [user_name, email, cash_balance]
    );
  } */

  async user(name){
    console.log("This is the username Inside the  DB query  2#" , name)

    try {
      return await db.query("SELECT * FROM users WHERE user_name = ?", [name]);
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
