export default {
  HTTPMOCK_ON: process.env.HTTPMOCK_ON,
  HTTPMOCK_TIMEOUT: process.env.HTTPMOCK_TIMEOUT,
  XHRLOG: process.env.XHRLOG, // 是否console出ajax的详细信息；右上角的Notice是否打印url和code
  HTTPBASEURL: process.env.HTTPBASEURL,
  HTTPCMSURL: process.env.HTTPCMSURL, // 请求CMS的接口
  HTTPOPENAPIURL: process.env.HTTPOPENAPIURL, // 请求OPENAPI的接口
  HTTPHEADER_APPID: '100006',
  HTTPHEADER_APPVERSION: '',
  HTTPHEADER_APPSIGN: 'SONGCHE'
};
