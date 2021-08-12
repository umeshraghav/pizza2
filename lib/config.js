// create and export config vars

var environments = {};

environments.development = {
  'httpPort' : 8000,
  'httpsPort' : 8001,
  'envName' : 'development',
  'useHttps' : false,
  'hashingSecret' : 'thisIsASecret',
  'maxChecks' : 5,
  'stripe' : {
    'publishableKey' : 'pk_test_pMHju2x4pBLQld1aPppf1veA00gYVTkfVq',
    'secretKey' : 'sk_test_EYehVwA8iuoSHqTtmMSGSTKd00LDokV6mw'
  },
  'mailgun' : {
    'domain' : 'sandbox96559aa100814dc990f11e723cbda6d6.mailgun.org',
    'apiKey' : '13cadcacbcef1077d5ceeca609b6471e-fa6e84b7-a2936b91'
  }
};

environments.production = {
  'httpPort' : 5000,
  'httpsPort' : 5001,
  'envName' : 'production',
  'useHttps' : true,
  'hashingSecret' : 'thisIsASecret',
  'maxChecks' : 5,
  'stripe' : {
    'publishableKey' : '',
    'secretKey' : ''
  },
  'mailgun' : {
    'domain' : '',
    'apiKey' : ''
  }
};

var currentEnvironment = '';
if(typeof(process.env.NODE_ENV) == 'string') {
  currentEnvironment = process.env.NODE_ENV.toLowerCase();
}

var environmentToExport = environments.development;
if(typeof(environments[currentEnvironment]) == 'object') {
  environmentToExport = environments[currentEnvironment];
}

module.exports = environmentToExport;
