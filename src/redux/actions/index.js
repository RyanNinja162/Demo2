import { DELETE_CAT, ADD_CAT, UPDATE_CAT } from './types';

export const deleteCat = (id) => ({
    type: DELETE_CAT,
    payload: id,
});

export const addCat = (data) => ({
    type: ADD_CAT,
    payload: data
})

export const updateCat = (data) => ({
    type: 'UPDATE_CAT',
    payload: data
})