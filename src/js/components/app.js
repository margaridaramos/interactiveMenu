import {div, addId} from '../builders';
import navbar from './navbar';
import hero from './hero';
import menu from './menu';
import bottom from './bottom';
import modal from './modal';

export default function app(store) {
    const modalEle = modal(store);
    const navbarEle = navbar();
    const heroEle = hero();
    const menuEle = menu(store);
    const bottomEle = bottom(); 
    const appEle = addId(div(modalEle, navbarEle, heroEle, menuEle, bottomEle), 'app-container');

    return appEle;    
}

