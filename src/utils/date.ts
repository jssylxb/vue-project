/**
 * date格式化 : 将数据库中的date格式转化为日常查看模式
 * 2017-11-29T03:23:13.000Z -> 2017-11-29 11:23:13
 * format('2017-11-29T03:23:13.000Z', 'yyyy-MM-dd')
 * format('2017-11-29T03:23:13.000Z', 'yyyy-MM-dd hh:mm:ss')
 */

 export default {
    format (date: Date, fmt: string): string {
        const nowDate = new Date(date);
        const o = {
            'M+': nowDate.getMonth() + 1, //月份
            'd+': nowDate.getDate(), //日
            'h+': nowDate.getHours(), //小时
            'm+': nowDate.getMinutes(), //分
            's+': nowDate.getSeconds(), //秒
            'q+': Math.floor((nowDate.getMonth() + 3) / 3), //季度
            S: nowDate.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (nowDate.getFullYear() + '').substr(4 - RegExp.$1.length));
        for (const k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
            }
        }
        return fmt;
    }
}


