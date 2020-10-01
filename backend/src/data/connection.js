import mysql from "mysql";
import config from "../config";
console.log("THIS IS the config file in connection.js ****" , config )
const pool = mysql.createPool({
  connectionLimit: 2,

  host: config.mysql.MYSQL_HOST,
  user: config.mysql.MYSQL_USER,
  password: config.mysql.MYSQL_PASSWORD,
  database: config.mysql.MYSQL_DATABASE


});

export const db = {
  query(query, values) {
    return new Promise((resolve, reject) => {
      pool.query(query, values, (err, results, fields) => {
        console.log(mysql_config);
        if (err) {
          reject(err);
          return;
        }
        resolve({ results, fields });
      });
    });
  },
};
