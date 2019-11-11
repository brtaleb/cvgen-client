export const objectMap = (arr, callback) => {
  let i = 0;
  let res = [];
  for (let el in arr) {
    res.push(callback(arr[el], i++, el));
  }
  return res;
};