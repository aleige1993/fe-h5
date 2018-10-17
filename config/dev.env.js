'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HTTPMOCK_ON: false,
  HTTPMOCK_TIMEOUT: 500,
  XHRLOG: true, // 是否console出ajax的详细信息；右上角的Notice是否打印url和code
  // HTTPBASEURL: '"http://192.168.200.147:8082"' // 厉洪叶
  // HTTPBASEURL: '"http://192.168.200.180:8080"' // 程伊军
  // HTTPBASEURL: '"http://10.164.238.12:9085"' // 开发服务器
  HTTPBASEURL: '"https://feh5-test.songchedai.com"', // 测试服务器
  HTTPCMSURL: '"http://192.168.31.247:3000"', // 请求CMS的接口
  HTTPOPENAPIURL: '"http://192.168.31.247:10001"' // 请求OPENAPI的接口
});
