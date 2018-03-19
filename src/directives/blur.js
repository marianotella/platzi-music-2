const blur = {}

function setBlur (el, binding) {
  el.querySelectorAll('img').forEach(a => {
    if (!binding.value) {
      a.style.filter = !binding.value ? 'blur(1px)' : '(none)'
    }
  })

  el.querySelectorAll('button').forEach(a => {
    if (!binding.value) {
      a.classList.add('hidden')
    } else {
      a.classList.remove('hidden')
    }
  })
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}

export default blur
