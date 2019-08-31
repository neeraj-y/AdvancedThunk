import ActionTypes from './actionConstants';
// import getData from '../utils/api';

const commentsUrl = 'http://jsonplaceholder.typicode.com/comments';
const photosUrl = 'http://jsonplaceholder.typicode.com/photos';

export const setData = (data, _type) => {
    switch(_type) {
        case 'comments':
            return {
                type: ActionTypes.FETCH_COMMENTS,
                data: data.splice(0, 7)
            };
              
        case 'photo':
            return {
                type: ActionTypes.FETCH_COMMENT_PHOTO_BY_ID,
                data
            };

        case 'id':
            return {
                type: ActionTypes.SET_ID,
                id: data
            }

        default:
            return {
                type: ActionTypes.FETCH_COMMENTS,
                data: data.splice(0, 7)
            };            
    }
}

export const fetchComments = () => (dispatch, getState, getData) => {
    return getData(commentsUrl)
        .then(response => dispatch(setData(response, 'comments')));
}

export const fetchCommentPhotoById = idx => (dispatch, getState, getData) => {
    const url = `${photosUrl}/${idx}`;
    return getData(url).then(response => {
        dispatch(setData(+idx, 'id'));        
        dispatch(setData(response, 'photo'));
    });
}