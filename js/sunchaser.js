document.getElementById('darkmode').addEventListener('click', function (e) {
  const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
  if (nowMode === 'light') {
    activateDarkMode()
    saveToLocal.set('theme', 'dark', 2)
    GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
  } else {
    activateLightMode()
    saveToLocal.set('theme', 'light', 2)
    GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
  }
  // handle some cases
  typeof utterancesTheme === 'function' && utterancesTheme()
  typeof FB === 'object' && window.loadFBComment()
  window.DISQUS &&
    document.getElementById('disqus_thread').children.length &&
    setTimeout(() => window.disqusReset(), 200)
})

// 判断是手机端还是电脑端
var isMobile = /Android|webOS|iPhone|BlackBerry/i.test(navigator.userAgent)
if (isMobile) {
  // 当前网页在手机端打开
} else {
  // 当前网页在PC端打开
}
