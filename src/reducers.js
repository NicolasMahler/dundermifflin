import { combineReducers } from 'redux';
import { ACTIONS, VISIBILITY_FILTERS, ORDERING_FILTERS } from './constants';

function cart(state = [], action = '') {
    switch(action.type) {
        case ACTIONS.ADD_TO_CART:
            return [
                ...state,
                {
                    itemId: action.payload.itemID,
                    quantity: action.payload.quantity
                }
            ];
        case ACTIONS.REMOVE_FROM_CART:
            return state.filter(item => {
                if (item.itemID !== action.payload.itemID) {
                    return item;
                }
            });
        case ACTIONS.INCREMENT_ITEM:
            return state.map(item => {
                if (item.itemID === action.payload.itemID) {
                    return {
                        itemID: item.itemID,
                        quantity: item.quantity + action.payload.quantity,
                    };
                } else {
                    return item;
                }
            });
        case ACTIONS.DECREMENT_ITEM:
            return state.map(item => {
                if (item.itemID === action.payload.itemID) {
                    return {
                        itemID: item.itemID,
                        quantity: item.quantity - action.payload.quantity,
                    };
                } else {
                    return item;
                }
            });
        case ACTIONS.CLEAR_CART:
            return [];
        default: 
            return state;
    }
}

function visiblityFilter(state = VISIBILITY_FILTERS.SHOW_ALL, action = '') {
    
}

const dunderMifflinApp = combineReducers({
    cart,
    visiblityFilter,
    orderingFilter,
});

export default dunderMifflinApp;