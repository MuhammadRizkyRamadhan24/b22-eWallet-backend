const jwt = require('jsonwebtoken')

exports.auth = (req, res, next) => {
  if (req.headers?.authorization) {
    if (req.headers.authorization.startsWith('Bearer')) {
      try {
        const token = req.headers.authorization.slice(7)
        const user = jwt.verify(token, process.env.APP_KEY)
        req.authUser = user

        next()
      } catch (err) {
        return res.status(401).json({
          success: false,
          message: 'You Must Login First',
        })
      }
    } else {
      return res.status(401).json({
        success: false,
        message: 'Auth token needed!',
      })
    }
  } else {
    return res.status(401).json({
      success: false,
      message: 'Auth token needed!',
    })
  }
}