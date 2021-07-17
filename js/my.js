window.onload = function () {
  var checkPic = function (isWebP) {
    $('img').each(function () {
      // console.log('执行')
      var str
      str = $(this).attr('src')
      if (str) {
        // 将原有链接进行修改
        str = str.replace('.png', '.webp')
        var newstr = str
        $(this).attr('src', newstr)
      }
    })
  }
  var checkWebp = function () {
    try {
      return (
        document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0
      )
    } catch (err) {
      return false
    }
  }

  checkPic(checkWebp())
}
