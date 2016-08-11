/**
 * 验证密码强度
 * 至少包含 大写字母， 数字， 特殊字符中的两种， 长度 8~16
 * @param {[string]} [password] [密码]
 * @return {[type]} [description]
 */
function validatePasswordStrength(password) {
  var reg = /^((?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$)|((?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$)|((?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$)|((?=.*[A-Z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$)$/;
  return reg.test(password)
}

module.exports = validatePasswordStrength;
