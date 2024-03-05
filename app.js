const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('.search-btn');
const output = document.querySelector('.results');
const loadMoreBtn = document.querySelector('.load-image-btn');

let searchInput = document.querySelector('.search-input');
let accessKey = 'd0RDgo9agX_Bzjx4_B5dc4EGBTULcCX88xmAPoOoTDg';
let page = 1

async function getImages() {
    let input = searchInput.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url)
    const data = await response.json()

    if (page === 1) {
        output.innerHTML = ''
    }

    let results = data.results
     results.forEach((result) => {
         const image = document.createElement('img');
         image.src = result.urls.small;
         
         output.appendChild(image)
     });

     loadMoreBtn.style.display = 'flex';
     if (input === '') {
        loadMoreBtn.style.display = 'none';
        alert('Enter the description of your image please...')
     }



     console.log(data)
}


searchForm.addEventListener('submit', (e) => {
    page = 1
    getImages()
    e.preventDefault()
})

loadMoreBtn.addEventListener('click', () => {
    page++;
    getImages()
})