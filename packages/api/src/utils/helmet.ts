export default {
  enableCSPNonces: false,
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'", "fonts.gstatic.com", "data:"],
      connectSrc: ["'self'", "http://127.0.0.1:3000/", "https://newsapi.org/"],
      scriptSrc: ["'self'", "'unsafe-inline'", "cdnjs.cloudflare.com", "data:"],
      styleSrc: ["'self'", "'unsafe-inline'", "fonts.googleapis.com", "data:"],
      imgSrc: ["'self'", "data:", "validator.swagger.io"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
      frameAncestors: ["'none'"],
    },
    reportOnly: false,
  },
  dnsPrefetchControl: {
    allow: true,
  },
  frameguard: {
    action: "deny",
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },
  permittedCrossDomainPolicies: {
    permittedPolicies: "none",
  },
  referrerPolicy: {
    policy: "strict-origin-when-cross-origin",
  },
  xssFilter: true,
  noSniff: true,
};
