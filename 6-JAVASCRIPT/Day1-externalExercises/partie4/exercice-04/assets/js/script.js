const htmlImg = document.getElementsByTagName("img")

htmlImg[0].addEventListener('click', () => {
    if (htmlImg[0].style.width == "100%"){
        htmlImg[0].style.width = "50%"
    } else {
        htmlImg[0].style.width = "100%"
    }
})