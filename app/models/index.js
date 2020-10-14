module.exports = {
  _user: require("./users/_user.model"),
  admin: require("./users/admin.model"),
  customer: require('./users/customer.model'),
  secretary: require('./users/secretary.model'),
  accountant: require('./users/accountant.model'),
  technician: require('./users/technician.model'),
  treasury: require('./users/treasury.model'),
  notification: require('./notifications/_notification.model'),
};
