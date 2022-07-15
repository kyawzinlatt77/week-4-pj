const searchInput = document.querySelector('#search-input');

const allSerieNameCollection = document.querySelectorAll('.name');

searchInput.addEventListener ('keyup', (event) =>{
    const searchQuery = event.target.value.toLowerCase();
    
    for (let i = 0; i < allSerieNameCollection.length; i++) {
        // console.log(allSerieNameCollection[i].textContent);
        const currenSerie = allSerieNameCollection[i].textContent.toLowerCase();
        if (currenSerie.includes(searchQuery)) {
            allSerieNameCollection[i].style.display ='block';
        } else {
            allSerieNameCollection[i].style.display = 'none';
        }
    }
})