const _ = require("lodash");
const BillingCycle = require("./billingCycle");

BillingCycle.methods(["get", "post", "put", "delete"]);
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.after("post", sendErrorsOrNext).after("put", sendErrorsOrNext);

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle;

  if (bundle.errors) {
    let errors = parseErrors(bundle.errors);
    res.status(500).json({ errors });
  } else {
    next();
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = [];
  _.forIn(nodeRestfulErrors, error => errors.push(error.message));
  return errors;
}

// paginação
BillingCycle.route("count", (req, res, next) => {
  // consulta banco de dados
  BillingCycle.countDocuments((error, value) => {
    if (error) {
      res.status(404).json({ errors: [error] });
    } else {
      res.json({ value });
    }
  });
});

module.exports = BillingCycle;
