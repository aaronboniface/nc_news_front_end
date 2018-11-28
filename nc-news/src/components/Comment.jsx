import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VoteAdder from './VoteAdder';
import * as api from '../api'

class Comment extends Component {
  state = {
    user: ''
  };
  render() {
    const { user } = this.state;
    const { comment, ammendComment } = this.props;
    const { votes, body, created_at, created_by, _id } = comment;
    const { username } = created_by;
    const dateCreated = new Date(Date.parse(created_at)).toDateString();
    return (
      <section>
        <p>{body}</p>
        <p>Written by: {username}</p>
        <p>{dateCreated}</p>
        <p>Votes: {votes}</p>
        {user === username && (
          <button type="button" id={_id} onClick={this.handleDelete} >
            Delete Comment
          </button>
        )}
        <VoteAdder ammendComment={ammendComment} commentId={_id} />
      </section>
    );
  }
  componentDidMount() {
    const user = sessionStorage.getItem('user');
    if (user) {
      this.setState({
        user
      });
    }
  }

  handleDelete = (event) => {
   const {id} = event.target;
   const apiUrl = `/comments/${id}`;
   api.deleteData(apiUrl)
   .then(data => {
     this.props.ammendComment(id, 'delete')
   })
  }
}

Comment.propTypes = {};

export default Comment;
