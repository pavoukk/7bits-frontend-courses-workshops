import './styles/main.scss';

import indexTemplate from './pages/index/index.hbs';
import articleTemplate from './components/article/article.hbs';
// import spinnerTemplate from './components/spinner/spinner.hbs';

const urls = [
    'api/data1.json',
    'api/data2.json',
    'api/data3.json',
    'api/data4.json'
];

document.addEventListener("DOMContentLoaded", function () {
    const root = $('#root');
    root.append(indexTemplate());
    const content = $('.content');

    /**
     * Place your code here
     */
    let promises = [];
    urls.forEach(el => {
        promises.push(fetch(el)
            .then(response => {
                return response.json();
            })
            .catch(error => {
                console.log(error);
            })
        );
    });

    Promise.all(promises)
        .then((result) => {
            console.log(result);
            result.forEach(el => {
                el.data.forEach((item) => {
                    content.append(articleTemplate(item));
                })
            });
        }).catch(error => {
        console.log(error);
    });
});