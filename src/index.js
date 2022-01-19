// console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', e => {
    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
    fetch(imgUrl)
    .then(res => res.json()) // parse out responses as json
    .then(dogs => {
        const messageParent = dogs.message
        messageParent.forEach(invImgURL => {
            const imgContainer = document.querySelector('#dog-image-container')
            const img = document.createElement('img')
            img.src = invImgURL
            imgContainer.appendChild(img)
        })
    })
})
