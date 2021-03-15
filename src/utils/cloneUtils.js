/**
 * Deep clone
 * @param obj
 * @returns {[]|{}}
 */
function deepClone (obj) {
  if (obj === null) {
    return
  }
  const newObj = obj.push ? [] : {} // 如果obj有push方法则 定义newObj为数组，否则为对象。
  for (const attr in obj) {
    if (typeof obj[attr] === 'object') {
      newObj[attr] = deepClone(obj[attr])
    } else {
      newObj[attr] = obj[attr]
    }
  }
  return newObj
}

/**
 * Get the first element of the object
 * @param obj
 * @returns {*}
 */
export function getFirst (obj) {
  for (const key in obj) {
    return obj[key]
  }
}

/**
 * 处理百度统计 Processing Baidu statistics
 */
export function handleBaiduStatistics () {
  // eslint-disable-next-line no-use-before-define
  var _hmt = _hmt || []
  window._hmt = _hmt; // Mount _hmt under the window
  (function () {
    var hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?a58d33108bfd0357ba78d883f1149708'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  })()
}

export default deepClone
