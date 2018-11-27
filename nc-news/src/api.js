import axios from 'axios';

const BASE_URL = 'https://ncnewsexpressmongodbapp.herokuapp.com/api';

export const getArticles = async () => {
  const {data} = await axios.get(`${BASE_URL}/articles`);
  return data.articles;
};

export const getTopics = async ()=> {
  const {data} = await axios.get(`${BASE_URL}/topics`);
return data.topics;
};

export const getArticlesByTopic = async (slug) => {
  const {data} = await axios.get(`${BASE_URL}/topics/${slug}/articles`);
  return data.articles;
};

export const getArticleByID = async (id) => {
  const {data} = await axios.get(`${BASE_URL}/articles/${id}`);
  return data.article;
};

export const getArticleComments = async (id) => {
  const {data} = await axios.get(`${BASE_URL}/articles/${id}/comments`);
  return data.comments;
};

export const getUser = async (username) => {
  const {data} = await axios.get(`${BASE_URL}/users/${username}`);
  return data.user;
};

export const postArticle = async (article, topic) => {
  const {data} = await axios.post(`${BASE_URL}/topics/${topic}/articles`, article);
  return data.insertedArticle;
}