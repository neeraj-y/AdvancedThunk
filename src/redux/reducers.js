import ActionTypes from './actionConstants';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect'; 

// default initial state
const initialState = {
    comments: [],
    photo: null,
    id: null
}

// reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_COMMENTS:
            return Object.assign({}, state, {
                comments: action.data
            });

        case ActionTypes.FETCH_COMMENT_PHOTO_BY_ID:
            return Object.assign({}, state, {
                photo: action.data
            });

        case ActionTypes.SET_ID:
            return Object.assign({}, state, {
                id: action.id
            });

        default:
            return state;
    }
}

// adding redux selectors
const commentsSelector = state => state.comments;
const selectedId = state => +state.id;

export const getCommentById = createSelector([commentsSelector, selectedId], (comments, selectedId) => {
    return comments.filter(todo => todo.id === selectedId);
});

// combine reducer
const rootReducers = combineReducers({
    profile: reducer
});

export default rootReducers;