import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Router, Link} from '@reach/router'

class TopicSelector extends Component {
  render() {
    return (
      <section>
        <h3>Topics</h3>
        <nav>
          <Link to='/topics/:topic/articles'>I am a Topic Name</Link>
        </nav>
      </section>
    );
  }
}

TopicSelector.propTypes = {

};

export default TopicSelector;