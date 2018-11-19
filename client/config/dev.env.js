'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HTTPMOCK_ON: false,
  HTTPMOCK_TIMEOUT: 500,
  XHRLOG: true, // 是否console出ajax的详细信息；右上角的Notice是否打印url和code
  HTTPBASEURL: '"https://feh5-test.songchedai.com"', // 测试服务器
  HTTPCMSURL: '"http://192.168.200.247:30000"', // 请求CMS的接口
  HTTPOPENAPIURL: '"http://192.168.200.247:10001"' // 请求OPENAPI的接口
  // HTTPOPENAPIURL: '"http://192.168.202.167:10001"' // 请求OPENAPI的接口
});
