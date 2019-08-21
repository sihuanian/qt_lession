function isCommonPrefix(strs, middle) {
  const prefix = strs[0].substring(0, middle)
  for (let i = 1; i < strs.length; i++) {
    if (!strs[i].startsWith(prefix)) return false
  }
  return true
}
var longestCommonPrefix = function(strs) {
  //  最短的一项
  let minLen = Number.MAX_VALUE;
  //  二分
  for (let i = 0; i < strs.length; i++) {
    minLen = Math.min(minLen, strs[i].length);
  }
  // console.log(minLen)

  let low = 0, //start
    high = minLen; //end
  // 不停的查找中间值
  while(low <= high) {
    let mid = (low + high) >> 1;
    if (isCommonPrefix(strs, mid)) low = mid + 1 //后半段 
    else high = mid - 1;
  }
  return strs[0].substring(0, (low + high) >> 1)
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]))
