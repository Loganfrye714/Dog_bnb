// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const asyncHandler = require('express-async-handler');

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

router.use('/session', sessionRouter);

router.use('/users', usersRouter);



















module.exports = router;

// GET /api/set-token-cookie

// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// const { restoreUser } = require('../../utils/auth.js');
// const { requireAuth } = require('../../utils/auth.js');

// // test the setTokenCookie function by getting the demo user and calling setTokenCookie
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       },
//     })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// // test the restoreUser middleware by connecting the middleware and checking whether or not the req.user key has been populated by the middleware properly.
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// // test your requireAuth middleware by adding a test route in your backend/routes/api/index.js file. If there is no session user, the route will return an error. Otherwise it will return the session user's information.

// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );
