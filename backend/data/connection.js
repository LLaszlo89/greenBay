import mysql from 'mysql';
import mysql_config from '../mysql_config';

const pool = mysql.createPool({
  connectionLimit: 2,
/* host: mysql_config.mysql.MYSQL_HOST,
  user: mysql_config.mysql.MYSQL_USER,
  password: mysql_config.mysql.MYSQL_PASSWORD,
  database: mysql_config.mysql.MYSQL_DATABASE    */

/*   host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE    */ 
  
  host:'127.0.0.1',
  user: 'root',
  password:'password',
  database: 'greenbay'   
});

//console.log(process.env.MYSQL_DATABASE , "*******************************-")


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
