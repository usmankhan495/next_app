
module.exports=function resolveTenant(req) {
  const hostname = req.headers.host || '';
  const parts = hostname.split('.');
  if (parts.length >= 1) {
    return parts[0]; // The first part of the hostname is used as the tenant identifier
  }
  return 'default'; // Fallback tenant if none is detected
};

// export default resolveTenant;

// module.exports=resolveTenant;