import { mapCards, disposeCards } from './card.js';

let repoInput = document.getElementById('repo_input');
let repoBtn = document.getElementById('repo_btn');

async function getGithub (user) {
    const api_url = `https://api.github.com/users/${user}/repos`;        

    try {

         let response = await fetch(api_url);
         let data = await response.json();
        
         const { name, html_url } = data[0];

        if(data) {
            mapCards(name, html_url, data);
        }

        
    } catch (error) {
        alert('An error occured: check network ... server 404 ', error);
    }    
}

repoBtn.addEventListener('click', () => {
    if(repoInput.value === '' || repoInput.value === '*') {          
        repoInput.className = 'error'; 
        repoInput.value = '*';     
    }else {
        getGithub(repoInput.value);
        repoInput.value = '';        
    }
});

repoInput.addEventListener('focus', () => {
    disposeCards();
    repoInput.className = '';
    repoInput.value = '';
});