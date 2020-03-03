export function buildQueryParams(object: any) {
  Object.keys(object).map(key => {
    if (!object[key]) {
      delete object[key];
    }
  });
  return Object.keys(object).map(key => {
    return key + '=' + object[key];
  }).join('&');
}
