$(function () {
    // webp
    function checkWebp(callback) {
        var img = new Image();
        img.onload = function () { callback((img.width > 0) && (img.height > 0)); };
        img.onerror = function () { callback(false); };
        img.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';
    }
    function showImage(useWebp) {
        var imgs = [].slice.call(document.querySelectorAll('img'));
        imgs.forEach(function (e) {
            if (useWebp) {
                var src = e.getAttribute('data-src')
                src = src.replace(/\.jpg$/, '.webp').replace(/\.png$/, '.webp');
                e.setAttribute('data-src', src);
            }
        });
    }
    checkWebp(showImage);
})