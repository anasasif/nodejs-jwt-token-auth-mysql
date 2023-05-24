const db = require('../config/db');

async function verify(req, res) {
  try {

    return res.status(200).json({
      success: 'Token is valid!',
      data: req.userData
    });
    
  } catch (err) {
    return res.status(400).json({ error: 'something went wrong!' });
  }
}



module.exports = {
  verify: verify,
}
