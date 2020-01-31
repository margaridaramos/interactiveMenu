import { $ } from './helpers';

export default function(store) {
    $('#cart-icon, #close').on('click', () => {
        store.trigger('TOGGLE_SHOW_CART');
    })

    function getParentWithKey(element) {
        let parent = element.parentElement;
      
        while (parent && !parent.dataset.key) {
          parent = parent.parentElement;
        }
      
        return parent;
      }
      
      $('.add-to-cart').on('click', e => {
        const parent = getParentWithKey(e.currentTarget);
      
        const key = parseInt(parent.dataset.key, 10);
        store.trigger('ITEM_ADDED', { item: key });
      });
}