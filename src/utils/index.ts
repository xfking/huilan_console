/** 日期格式化为MMM/dd/yyyy */
export const isoToDateStrFormat = (isoStr: any): string => {
  const reg = /^[0-9]*$/;
  let time = isoStr;
  if (reg.test(time)) {
    time = Number(time);
  }

  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月份是从 0 开始的，所以要加 1
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  // 构建日期格式字符串
  const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""
    }${day} ${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  return formattedDate;
};

/** 页面白名单 */
export const whitePath = ["home", "news", "team", "music", "barrel"]; 