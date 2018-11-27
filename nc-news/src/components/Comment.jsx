import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VoteAdder from './VoteAdder';

class Comment extends Component {
  render() {
    const {comment} = this.props;
    const {votes, body, created_at, created_by} = comment;
    const {username} = created_by;
    const dateCreated = new Date(Date.parse(created_at)).toDateString();
    return (
      <section>
        <p>{body}</p>
        <p>Written by: {username}</p>
        <p>{dateCreated}</p>
        <p>Votes: {votes}</p>
        <button type="button">Delete Comment</button>
        <VoteAdder/>
      </section>
    );
  }
}

Comment.propTypes = {

};

export default Comment;