const gallery = document.getElementById('gallery')
const popup = document.getElementById('popup')
const selectedImage = document.getElementById('selectedImage')

const total_images = 111
const imageIndexes = Array.from(Array(total_images), (_, index) => index + 1)
const selectedIndex = null

imageIndexes.forEach((i) => {
    const image = document.createElement('img')
    image.src = `/src/Images/meme_${i}.jpeg`
    image.alt = `This is meme ${i}`
    image.classList.add('galleryImage')
    gallery.appendChild(image)

    image.addEventListener('click', () => {
        popup.style.transform = `translateY(0)`
        selectedImage.src = `/src/Images/meme_${i}.jpeg`
        selectedImage.alt = `This is meme ${i}`
    })

    gallery.appendChild(image)
})

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`
    popup.src = ''
    popup.alt = ''
})