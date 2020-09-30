import mysql from 'mysql';
import mysql_config from '../mysql_config';

const pool = mysql.createPool({
  connectionLimit: 2,
  host: mysql_config.mysql.host,
  user: mysql_config.mysql.user,
  password: mysql_config.mysql.password,
  database: mysql_config.mysql.database
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
