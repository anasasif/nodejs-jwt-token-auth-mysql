const db = require('../config/db');
const bcrypt = require('bcrypt');

 
async function create(req, res) {
  try {

    db.query('SELECT email FROM users WHERE email = ?', [req.body.email], (err, result) => {
      if (result && result.length) {
        return res.status(409).json({ message: 'Email already exist!' });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({ error: err });
          } else {
            db.query('INSERT INTO users (email, password) VALUES (?, ?);', [req.body.email, hash], (err, result) => {
              if (err) {
                return res.status(400).json({ error: err });
              }
              return res.status(201).json({ success: 'User has been created!' });
            }
            );
          }
        });
      }
    }
    );

  } catch (err) {
    return res.status(400).json({ error: 'something went wrong!' });
  }
}



module.exports = {
  create: create,
}
