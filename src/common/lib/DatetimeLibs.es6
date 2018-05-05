export function toDatetimeLocal(datetime){
    let date_time=datetime.split(' ');
    return date_time[0]+'T'+date_time[1];
}

export function toDatetime(datetimeLocal){
    let date_time=datetimeLocal.split('T');
    return date_time[0]+' '+date_time[1];
}

export function getDateTime() {
    let date = new Date();
    let seperator1 = "-";
    let seperator2 = ":";
    let month = date.getMonth() + 1;
    let strDate = date.getDate();

    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }

    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    return  date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();;
}

export function isValidDate(dateStr) {
    let sDate = dateStr.replace(/(^\s+|\s+$)/g, ''); //去两边空格;

    if (sDate == '')
        return true;

    let s = sDate.replace(/[\d]{ 4,4 }[\-/]{ 1 }[\d]{ 1,2 }[\-/]{ 1 }[\d]{ 1,2 }/g, '');

    if (s == '') //说明格式满足YYYY-MM-DD或YYYY-M-DD或YYYY-M-D或YYYY-MM-D
    {
        let t = new Date(sDate.replace(/\-/g, '/'));
        let ar = sDate.split(/[-/:]/);

        if (ar[0] != t.getYear() || ar[1] != t.getMonth() + 1 || ar[2] != t.getDate()) {
            //alert('错误的日期格式！格式为：YYYY-MM-DD或YYYY/MM/DD。注意闰年。');
            return false;
        }
    }
    else {
        //alert('错误的日期格式！格式为：YYYY-MM-DD或YYYY/MM/DD。注意闰年。');
        return false;
    }
    return true;
}

/**
 *
 * @param str
 * @returns {boolean}
 * @constructor
 */
export function checkDateTime(str) {
    let reg = /^(\d+)-(\d{ 1,2 })-(\d{ 1,2 }) (\d{ 1,2 }):(\d{ 1,2 }):(\d{ 1,2 })$/;
    let r = str.match(reg);

    if (r == null)
        return false;

    r[2] = r[2] - 1;
    let d = new Date(r[1], r[2], r[3], r[4], r[5], r[6]);
    if (d.getFullYear() != r[1]) return false;
    if (d.getMonth() != r[2]) return false;
    if (d.getDate() != r[3]) return false;
    if (d.getHours() != r[4]) return false;
    if (d.getMinutes() != r[5]) return false;
    if (d.getSeconds() != r[6]) return false;
    return true;
}

/**
 *
 * @param dateStr
 * @returns {Date}
 * @constructor
 */
export function stringToDate(dateStr) {
    let converted = Date.parse(dateStr);
    let myDate = new Date(converted);
    return myDate;
}

// 判断是否是闰年
export function isLeapYear(year) {
    return !(year % (year % 100 ? 4 : 400));
}

// 将日期加一天
export function addDay(date, addCount) {
    return new Date(date.setDate(date.getDate() + addCount));
}

// 在字符串前面填充0
export function fillZero(orignStr, maxLength = 2) {
    orignStr = orignStr + ''; // 将非字符串转为字符串
    let zeroCount = maxLength - orignStr.length;
    let zeroStr = '';
    for (let i = 0; i < zeroCount; i++) {
        zeroStr = zeroStr + '0';
    }
    return zeroStr + orignStr;
}

// 日期格式化 格式 例如：2017-02-22
export function getNowDate(isHour = 0, tamp = Date.now() / 1000) {
    let newDate = new Date(tamp * 1000);
    if (isHour) {
        return fillZero(newDate.getHours()) + ':' + fillZero(newDate.getMinutes());
    }
    else {
        return newDate.getFullYear() + '-' + fillZero(newDate.getMonth() + 1) + '-' + fillZero(newDate.getDate());
    }
}