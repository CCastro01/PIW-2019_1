
const proxy = [
  {
    context: '/api',
    target: 'https://localhost:3000',
    pathRewrite: {'^/api' : ''},
    secure: false
  }
];

module.exports = proxy;