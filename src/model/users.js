const Pool = require("../config/db");

const create = (data) => {
  const { id_user, email_user, password_user, fullname_user, role_user, otp } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO users(id_user,email_user,password_user,fullname_user,role_user,verif,otp)VALUES('${id_user}','${email_user}','${password_user}','${fullname_user}','${role_user}',0,'${otp}')`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};
const findEmail = (email_user) =>
  new Promise((resolve, reject) =>
    Pool.query(
      `SELECT * FROM users WHERE email_user='${email_user}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
  const verification = (email_user) => new Promise ((resolve,reject)=>
        Pool.query(`UPDATE users SET verif=1 WHERE "email_user"='${email_user}'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
    }))

module.exports = { create, findEmail, verification};
