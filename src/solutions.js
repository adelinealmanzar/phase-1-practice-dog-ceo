

fetch(breedURL) {
    .then(res) => res.json())
    .then( data => {
        const breedObj = data.message;
        const arrayOfBreeds = Object.keys(breedObj)
        const breedList = document.getElementById('dog-breeds')

        function addBreedLisToUl(array) {
            array.forEach(breed) => {
                const newLi = document.createElement('li')
                newLi.innerText = bread
                breedList.appendChild(newLi)
    
                newLi.addEventListener('click', (e) => {
                    e.target.style.color = 'blue'
                    newLi.style.float = 'right'
                })
            }
        }

        addBreedListToUl(arrayOfBreeds)

        const dropdown = document.getElementById('breed-dropdown')
        dropdown.addEventListener('change', (e) => {
            console.log(e.target.value)
            const selectedBreeds = arrayOfBreeds.filter((breed) => {
                breed.substring(0, 1) === e.target.value
            })
            console.log(breedList.children)
            while (breedList.firstChild) {
                breedList.removeChild(breadList.firstChild)
            }
            addBreedLisToUl(selectedBreeds)
        }
    )}
}