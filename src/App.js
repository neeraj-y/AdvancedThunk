import React, { PureComponent } from 'react';
import Comments from './components/comments';
import Photo from './components/photo';
import Person from './components/person';
import { connect } from 'react-redux';
import { fetchComments, fetchCommentPhotoById } from './redux/actions';
import { getCommentById } from './redux/reducers';
import { GlobalStyle, Header, SubHeader1, SubHeader2, Main } from './components/uiElements';

class App extends PureComponent {
  state = {
    color: void 0
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  handleSelectChange(e) {
    this.props.fetchCommentPhotoById(e.target.value);
  }

  componentDidUpdate() {
    const colors = ['red', 'tomato', 'teal', 'green', 'blue', 'violet'];
    const randomIdx = Math.floor(Math.random() * colors.length);
    console.log(`randomIdx => ${randomIdx}`)

    this.setState(prevColor => {
      return {
        color: colors[randomIdx]
      }
    })
  }

  render() {
    console.log('App component rendered', this.props);
    return (
      <>
        <GlobalStyle />
        <Header>
          <SubHeader1>Hashrocket is hosting a <b>Ruby</b>, <b>Rails</b>, and <b>React</b> conference. Buy your tickets for ACR today!</SubHeader1>
          <SubHeader2>
            <p>Government mulls reducing employee contribution to EPF</p>
            <p>The new amendment will help increase in-hand salary ahead of festive season</p>
          </SubHeader2>
        </Header>
        { this.props.comments.length > 0 ? <Main hoverColor={this.state.color}>
          <p>Government to ban 100% plastic</p>
          <p>Celebrating birth anniversary of Mahatama Gandhi, Goverment to pull comprehensive blanket ban on one-time usbale plastic items</p>
          
          <p>The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin. Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text.</p>
          <p>The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin. Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text.</p>
          <p>The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin. Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text.</p>
          <p>The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin. Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text.</p>
          <select onChange={this.handleSelectChange.bind(this)}>
            {this.props.comments.map(comment => {
              return (
                <option value={comment.id} key={comment.id}>{comment.name}</option>
              )
            })}
          </select>
          {this.props.comment.length > 0 ? <Comments /> : null}
          {this.props.photo ? <>
              <Photo /> 
              <Person />
            </>: null}
        </Main>: <h2>Loading...</h2>}  
      </>
    )
  }
}

/*const mapDispatchToProps = dispatch => {
  return {
    fetchComments: () => dispatch(fetchComments()),
    fetchCommentPhotoById: (idx) => dispatch(fetchCommentPhotoById(idx))
  }
}*/

const mapDispatchToProps = { 
  fetchComments, 
  fetchCommentPhotoById 
}


const mapStateToProps = state => {
  return {
    comments: state.profile.comments,
    comment: getCommentById(state.profile),
    photo: state.profile.photo
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);