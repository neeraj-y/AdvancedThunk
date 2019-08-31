import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PhotoDiv, Img, Div } from './uiElements';

class Photo extends PureComponent {
    render() {
        const { title, thumbnailUrl } = this.props.photo;
        return (
            <PhotoDiv>
                <Div>{title}</Div>
                <Img src={thumbnailUrl} alt={title} />
            </PhotoDiv> 
        )
    }
}

const mapStateToProps = state =>{
    return {
        photo: state.profile.photo
    }
}

export default connect(mapStateToProps, null)(Photo);
