const truncate = {}

function truncateString (str) {
  if (str.length > 20) {
    return str.slice(0, 20) + '...'
  } else {
    return str
  }
}

truncate.install = function (Vue) {
  Vue.filter('truncate', (val) => {
    return truncateString(val)
  })
}

export default truncate
