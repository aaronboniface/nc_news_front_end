import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleMini from './ArticleMini';

class ArticlesContainer extends Component {
  render() {
    return (
      <main>
        <ArticleMini/>
        <ArticleMini/>
      </main>
    );
  }
}

ArticlesContainer.propTypes = {

};

export default ArticlesContainer;