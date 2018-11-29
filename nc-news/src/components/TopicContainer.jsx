import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticlesContainer from './ArticlesContainer';
import * as api from '../api';
import { Link } from '@reach/router';
import './TopicContainer.css'

class TopicContainer extends Component {
  state = {
    relatedArticles: []
  };
  render() {
    const { relatedArticles } = this.state;
    const { slug } = this.props;
    return (
      <main>
        <section className="topicHeadingBox">
          <h2 className="topicHeading">{slug}</h2>
          <Link to={`/${slug}/articles/post`}  >
            <button className="writeAnArticleButton" type="">{`Write an article about ${slug}!`}</button>
          </Link>
        </section>
        <ArticlesContainer articles={relatedArticles} />
      </main>
    );
  }

  componentDidMount() {
    api.getArticlesByTopic(this.props.slug).then(articles => {
      this.setState({
        relatedArticles: articles
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.slug !== this.props.slug) {
      api.getArticlesByTopic(this.props.slug).then(articles => {
        this.setState({
          relatedArticles: articles
        });
      });
    }
  }
}

TopicContainer.propTypes = {
  slug: PropTypes.string
};

export default TopicContainer;
