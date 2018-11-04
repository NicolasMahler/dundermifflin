import { ACTIONS } from './constants';

export function addToCart(itemID, quantity) {
    return {
        type: ACTIONS.ADD_TO_CART,
        payload: {
            itemID: itemID,
            quantity: quantity,
        }
    };
}

export function removeFromCart(itemID) {
    return {
        type: ACTIONS.REMOVE_FROM_CART,
        payload: itemID,
    };
}

export function incrementItem(index, quantity) {
    return {
        type: ACTIONS.INCREMENT_ITEM,
        payload: {
            index: index,
            quantity: quantity,
        }
    };
}

export function decrementItem(index, quantity) {
    return {
        type: ACTIONS.DECREMENT_ITEM,
        payload: {
            index: index,
            quantity: quantity,
        }

    };
}

export function clearCart() {
    return {
        type: ACTIONS.CLEAR_CART
    };
}

export function setVisibilityFilter(filter) {
    return {
        type: ACTIONS.SET_VISIBILITY_FILTER,
        payload: filter,
    };
}

export function setOrderingFilter(filter, ascending) {
    return {
        type: ACTIONS.SET_ORDERING_FILTER,
        payload: {
            filter: filter,
            ascending: ascending,
        }
    };
}