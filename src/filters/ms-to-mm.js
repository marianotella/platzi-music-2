const msToMm = {}

function convertMsToMs (ms) {
  var min = Math.floor(ms / 60000)
  var sec = ((ms % 60000) / 1000).toFixed(0)
  sec = (sec < 10 ? '0' : '') + sec
  console.log(min)
  return `${min}:${sec}`
}

msToMm.install = function (Vue) {
  Vue.filter('ms-to-mm', (val) => {
    return convertMsToMs(val)
  })
}

export default msToMm
