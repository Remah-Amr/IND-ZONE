const express = require("express");
const policies = require("../policies");
const ctrls = require("../controllers");
const resources = require("./resources");
const passport = require("passport");
// require("../services/passport");

let apiRouter = express.Router();

// public
apiRouter.post("/signup", ctrls.AuthCtrl.signup);
apiRouter.post("/login", ctrls.AuthCtrl.login);
apiRouter.post("/verify", ctrls.AuthCtrl.verify);
apiRouter.post("/resend", ctrls.AuthCtrl.resendCode);
apiRouter.post("/reset-password", ctrls.AuthCtrl.reset);
// apiRouter.post('/login-google', ctrls.AuthCtrl.loginGoogle);
apiRouter.post(
  "/login-google",
  passport.authenticate("googleToken1", { session: false }),
  ctrls.AuthCtrl.loginGoogle
);
apiRouter.post("/login-facebook", ctrls.AuthCtrl.loginFacebook);

apiRouter.post("/test", ctrls.AuthCtrl.test);
// private
apiRouter.use(policies.isAuthenticated);

// populate all resources
for (let key of Object.keys(resources)) {
  let resource = resources[key];
  apiRouter.use(resource);
}

module.exports = apiRouter;
