import './reset.css';
import './style.css';
import { createHomeContent } from './home';
import { createMenuContent } from './menu';
import { createContactContent } from './contact';

function createContent(linkTextContent) {
    window.scrollTo(0, 0);
    const content = document.getElementById('content');
    content.innerHTML = '';

    if (linkTextContent === 'Home') {
        createHomeContent();
    }
    else if (linkTextContent === 'Menu') {
        createMenuContent();
    }
    else if (linkTextContent === 'Contact') {
        createContactContent();
    }
}

function createLinkListeners() {
    const links = document.getElementsByClassName('list-link');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', () => {
            createContent(links[i].textContent);
        });
    }
}

function initializeSite() {
    createHomeContent();
    createLinkListeners();
}

initializeSite();