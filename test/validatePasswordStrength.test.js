var validatePasswordStrength = require('../example/validatePasswordStrength.js');
var expect = require('chai').expect;


describe('密码强度测试--不通过正则的测试用例', function() {
  it('不包含大写字母， 数字， 特殊字符， 返回值为false', function() {
    expect(validatePasswordStrength('zhongxiasdfasd')).to.equal(false);
  })
  it('包含大写字母小写字母，无数字，无特殊字母，返回值应该为false', function() {
    expect(validatePasswordStrength('zhongxitest')).to.equal(false);
  })
  it('包含数字小写字母，无大写字母，无特殊字母，返回值应该为false', function() {
    expect(validatePasswordStrength('zhongxi12312312')).to.equal(false);
  })
  it('包含小写字母特殊字符，无数字，无大写字母，返回值应该为false', function() {
    expect(validatePasswordStrength('zhongxi!@#!@#')).to.equal(false);
  })
  it('密码长度小于8位，应该返回false', function() {
    expect(validatePasswordStrength('zhongxi')).to.equal(false);
  })
  it('密码长度大于16位，应该返回false', function() {
    expect(validatePasswordStrength('zhongxizhongxizhongxi')).to.equal(false);
  })
})

describe('密码强度测试--通过正则的测试用例', function() {
  it('包含大写字母，数字，8位，应该返回true', function() {
    expect(validatePasswordStrength('Jupit123')).to.equal(true);
  })
  it('包含大写字母，数字，16位，应该返回true', function() {
    expect(validatePasswordStrength('Jupit123Jupit123')).to.equal(true);
  })
  it('包含大写字母，数字，7位，应该返回false', function() {
    expect(validatePasswordStrength('Jupit12')).to.equal(false);
  })
  it('包含大写字母，数字，17位，应该返回false', function() {
    expect(validatePasswordStrength('Jupit123Jupit1231')).to.equal(false);
  })

  it('包含大写字母，特殊字符，8位，应该返回true', function() {
    expect(validatePasswordStrength('Jupit!@#')).to.equal(true);
  })
  it('包含特殊字母，数字，8位，应该返回true', function() {
    expect(validatePasswordStrength('jupit!@1')).to.equal(true);
  })
  it('包含特殊字母，数字，特殊字符 8位，应该返回true', function() {
    expect(validatePasswordStrength('Jupit!@1')).to.equal(true);
  })
})
