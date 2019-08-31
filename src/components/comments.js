import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getCommentById } from '../redux/reducers';
import { Div } from './uiElements';

class Comments extends PureComponent {
    render() {
        const [ comment ] = this.props.comment;
        return (           
            <Div>Email ==> {comment.email}</Div>               
        )
    }
}

const mapStateToProps = state => {
    return {
        comment: getCommentById(state.profile)
    }
}

export default connect(mapStateToProps)(Comments);