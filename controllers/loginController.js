const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const privateKey = fs.readFileSync('./private.key', 'utf8');


async function login(req, res) {
  try {

    db.query(`SELECT * FROM users WHERE email = ?`, [req.body.email], (err, result) => {
      if (result) {
        bcrypt.compare(req.body.password, result[0]['password'], (bErr, bResult) => {

          if (bResult) {

            const token = jwt.sign(
              {
                email: result[0].email,
                userId: result[0].id,
              },
              privateKey, { issuer: 'innovation', expiresIn: '1h', algorithm: "RS256" }
            );
            db.query(`UPDATE users SET last_login = now() WHERE id = ?`, [result[0].id]);
            return res.status(200).json({
              success: 'Successfully logedin!',
              token,
              user: result[0],
            });

          } else {
            return res.status(400).json({ error: 'password incorrect!' });
          }

        });

      } else {
        return res.status(400).json({ error: 'invalid credentials!' });
      }
    });

  } catch (err) {
    return res.status(400).json({ error: 'something went wrong!' });
  }
}



module.exports = {
  login: login,
}
