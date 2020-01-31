import { addClass, addId, div, section } from '../builders';
import { $ } from '../helpers';
import leftMenu from './leftMenu';
import rightMenu from './rightMenu';

export default function menu(store) {
    const menuEle = addId(addClass(div(), 'container'), 'menu');
  
    store.on('SET_ITEMS', ({ items }) => {
        const leftSide = leftMenu(items);
        const rightSide = rightMenu(items);
        const columns = addClass(section(leftSide, rightSide), 'columns');
      $('#menu').children(columns);
    });

    store.on('ITEM_ADDED', ({ cart }) => {
        const cartArray = [...cart];
        const articles = cartArray.map(id => `article[data-key='${id}']`);
        const buttons = cartArray.map(id => `article[data-key='${id}'] button.add-to-cart`);
      
        $(articles.join(', ')).addClass('in-cart');
        $(buttons.join(', ')).attr('disabled', 'disabled');
    });
  
    return menuEle;
  }