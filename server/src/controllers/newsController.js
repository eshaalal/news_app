const axios = require('axios');

const getNewsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${process.env.NEWS_API_KEY}`);
    const news = response.data.articles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      source: article.source.name
    }));
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch news', error });
  }
};

module.exports = { getNewsByCategory };
