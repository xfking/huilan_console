const title = "管理后台";
const tokenKey = "admin-token";
const userKey = "user-info";

export function getPageTitle(pageTitle: string): string {
  return `${pageTitle} - ${title}`;
}

export function setToken(token: string) {
  sessionStorage.setItem(tokenKey, token);
}

export function getToken() {
  return sessionStorage.getItem(tokenKey) || false;
}

export function removeToken() {
  sessionStorage.removeItem(tokenKey);
}

// 用户信息
export function setUserInfo(data: any) {
  sessionStorage.setItem(userKey, JSON.stringify(data));
}

export function getUserInfo() {
  return JSON.parse(sessionStorage.getItem(userKey) || "");
}

export function removeUserInfo() {
  sessionStorage.removeItem(userKey);
}

export function filterList(list: API.CheckUserList[]) {
  return list.filter((m, i) => {
    return (m.operation = "删除"), (m.index = i + 1);
  });
}
