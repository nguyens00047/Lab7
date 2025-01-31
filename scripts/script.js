// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

// Make sure you register your service worker here too

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        newPost.addEventListener('click', () => {
          setState({type: 'entry', num: newPost.num, 'entryNew': entry});
        });
        document.querySelector('main').appendChild(newPost);
      });
    });
});

settings.addEventListener('click', () => {
  router.setState({type: 'settings'});
});

title.addEventListener('click', () => {
  router.setState({type: 'home'});
});