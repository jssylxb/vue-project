/**
 * 邮箱
 * @param {*} s
 */
export function isEmail(s) {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile(s) {
    return /^(0|86|17951)?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[0-9]|19[0-9]|16[0-9])[0-9]{8}$/.test(s)
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone(s) {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}
/**
 * 登陆密码
 * @param {*} s
 */
export function isPasswd(s) {
    return /^(?![0-9]$)(?![a-zA-Z]$)[0-9A-Za-z]{6,20}$/.test(s)
}
/**
 * 身份证号
 * @param {*} s
 */
export function isCardId(s) {
    return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(s)
}
/**
 * 邮编
 * @param {*} s
 */
export function isZip(s) {
    return /^[0-9]{6}$/.test(s)
}
/**
 * 收款账户，中英文
 * @param {*} s
 */
export function isCashAccount(s) {
    return /^(?![0-9]$)(?![a-zA-Z]$)[0-9A-Za-z]{6,19}$/.test(s)
}
/**
 * 大于0 两位小数点
 * @param {*} s
 */
export function isPrice(s) {
    return /^([1-9]\d*(\.\d{1,2})?|([0](\.([0][1-9]|[1-9]\d{0,1}))))$/.test(s)
}
/**
 *特殊符号
 * @param {*} s
 */
export function testReason(s) {
    return /^[\u4e00-\u9fa5a-zA-Z0-9,!?。！？\s]+$/.test(s)
}
//  只包含英文和汉字
export function testChinaAndEng(s) {
    return /^[\u4E00-\u9FA5A-Za-z]+$/.test(s)
}

// 首尾不可包含空格
export function testReasonSpace(s) {
    var reg=/^[\s]|[\s]$/gi;
    return reg.test(s);
}
/**
 * 微信号
 * @param {*} s
 */
export function wxnum(s) {
    return /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/.test(s)
}

// 首尾不可包含空格
export function testReason1(s) {
    var reg=/^\S.*\S$/;
    return reg.test(s);
}

// 不为空
export function notEmpty (str) {
    if (str !== undefined && str !== null && str !== '' && _.trim(str) !== '') {
      return true;
    } else {
      return false;
    }
}

// 字符串是否不超过字符串限制区间
export function notExceedMax (str, minNum, maxNum) {
    if (this.notEmpty(str)) {
        if (str.length > maxNum) {
            return false;
        } else {
            return true;
        }
    } else {
        if (minNum === 0) {
            return true;
        } else {
            return false;
        }
    }
}

// 字符串是否小于最小数
export function notLessMin (str, minNum) {
    if (this.notEmpty(str)) {
        if (str.length < minNum) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// 字符串是否以http或https开头
export function httpFront (str) {
    if (this.notEmpty(str)) {
        var urlText = /^(http|https|rma|chrome):\/\/([\w.*]+\/?)\S*?$/;
        if (!urlText.test(str)) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// 是否是host
export function isHost (str) {
    if (this.notEmpty(str)) {
        let hostReg = /^https?:\/\/(([A-Za-z0-9][\w-]{0,61}[A-Za-z0-9])\.){1,3}[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
        if (!hostReg.test(str)) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Mac地址
export function isMacAddress (str) {
    return this.notEmpty(str) && /^([0-9a-fA-F]{2})(([/\s:-][0-9a-fA-F]{2}){5})$/.test(str);
}

// 是否是ip或ip加端口
export function isIpPort (str) {
    if (this.notEmpty(str)) {
      let ipPortReg = /^(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|[1-9])(\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)){3}(:[0-9]{1,4})*/;
      if (!ipPortReg.test(str)) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
}

// ipv6地址校验
export function isIpv6Host (str) {
    if (this.notEmpty(str)) {
      let reg = /^(http|https|rma|chrome):\/\/\[((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\]\S*?/;
      if (!reg.test(str)) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
}

// 是否包含中文
export function fuisChinese (str) {
    if (escape(str).indexOf('%u') < 0) {
      return true;
    } else {
      return false;
    }
}

// 密码中必须包含数字、大写字母、小写、特殊符号，长度8-128位，特殊字符包括@%+\/'!#$^?:,(){}[]~-_.
export function isPassWord (str) {
    if (this.notEmpty(str)) {
      return (/^(?=.{8,128})(?=.*\d)(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[@%+\/'!#$^?:,(){}[\]~\-_.])[^\t ]{8,128}$/.test(str));
    } else {
      return false;
    }
}

// 检测是否是域名
export function isDomain (str) {
    return /[a-za-z0-9][\w\u4E00-\u9FA5]*(\.[\w\u4E00-\u9FA5]+)+/.test(str);
}