import './styles/main.scss';

import indexTemplate from './pages/index/index.hbs';
import articleTemplate from './components/article/article.hbs';

document.addEventListener("DOMContentLoaded", function() {
  const root = $('#root');
  root.append(indexTemplate());
  const content = $('.content');

  fetch('api/data.json')
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      result.data.forEach((item) => {
        content.append(articleTemplate(item));
      })
    })
});
