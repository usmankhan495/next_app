
// import resolveTenant from '../tenantResolver';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const resolveTenant=require('../tenantResolver.ts');

const tenantMiddleware = (req, res, next) => {
  const tenant = resolveTenant(req);
  req.tenant = tenant; // Attach the resolved tenant to the request object
  next();
};

module.exports = tenantMiddleware;
