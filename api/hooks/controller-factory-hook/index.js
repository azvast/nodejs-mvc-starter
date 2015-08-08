/**
 * controller-factory-hook hook
 */

module.exports = function (sails) {
  var hook = {};

  hook.routes = { before: {} };
  var controllers = hook.routes.before;
  controllers["GET /api/Users"] = function(req, res, next) {
    res.json({Username: 'John', FirstName: 'John', LastName: 'Doe'});
  };

    // Run when sails loads-- be sure and call `next()`.
    //initialize: function (next) {
      //return next();
    //}

  return hook;
};
