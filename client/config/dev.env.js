'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MOCK_USERINFO: false, // 是否开启模拟用户数据
  HTTPBASEURL: '"https://feh5-test.songchedai.com"', // 测试服务器
  HTTPCMSURL: '"http://192.168.200.247:30000"', // 请求CMS的接口
  HTTPOPENAPIURL: '"http://192.168.200.247:10001"' // 请求OPENAPI的接口
});
