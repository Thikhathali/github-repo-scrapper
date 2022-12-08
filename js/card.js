let cardList = document.getElementsByClassName('card-list');
let cards =''

export function mapCards(name, url, arr) {
    let count = 5;
    for(let i = 0; i < arr.length; i++) {
        if(count > 0) {
            cards += `       
            <article class="card">
                <header class="card-header">
                    <h2>${arr[i].name}</h2>
                    <p> ${arr[i].description}</p>
                    <a href="${arr[i].html_url}" target="_blank">
                    <i class="fas fa-eye"></i></a>
                </header>
                <div class="card-author">
                    <a href="#" class="author-avatar">
                        <img src="${arr[i].owner.avatar_url}" alt="" srcset="">
                    </a>
                     <svg class="half-circle" viewbox="0 0 106 57">
                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg> 
                    <div class="author-name">
                        <div class="author-name-prefix">Author</div>
                        ${arr[i].owner.login}
                    </div>
                </div>
            </article> 
        `
        }
        count--;        
    }    
    cardList[0].innerHTML = cards;
}

export function disposeCards() {
    cards = '';
    cardList[0].innerHTML = '';
}