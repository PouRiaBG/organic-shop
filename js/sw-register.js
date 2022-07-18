if ('serviceWorker' in navigator) {
    console.log('Browser supports service worker (log on main thread)')
    navigator.serviceWorker.register('serviceWorker.js').then(function (res) {
        console.log(res)
    }).catch((error) => {
        console.log({ error })
    })
}