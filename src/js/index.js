import app from './components/app';
import {createStore} from './state'
import { createElement } from './builders';

function reducer(state, event, data) {
    switch (event){
        case 'FOO':
            return Object.assign({},state, {
                name: 'Margarida'
            });
        case 'BAR':
            return Object.assign({}, state, data);
        default:
            return state;
    }
}

const store = createStore(reducer);

store.on('FOO', state => {
    console.log('in FOO calback');
    console.log(state);
});

store.on('BAR', state => {
    console.log('in BAR calback');
    console.log(state);
});

store.on('NOT_REAL', state => {
    console.log('in NOT_REAL calback');
    console.log(state);
});

store.trigger('BAR', {
    name: 'andre',
    job: 'web dev'
});

store.trigger('FOO');
store.trigger('NOT_REAL');

fetch('food.json')
    .then(res => res.json())
    .then(resBody => {
        const body = document.querySelector('body');
        body.insertBefore(app(resBody), body.childNodes[0]);
    });



