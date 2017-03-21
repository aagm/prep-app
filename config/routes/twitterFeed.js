const Twitter = require('twitter');
const twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports = function(app) {

  app.get('/api/twitter', (req, res) => {
    const urlPath = 'search/tweets';
    // const params = { screen_name: process.env.TWITTER_USER, count: 10 };
    const params = { q: 'list:worldresources/prep4climate #prep4climate', count: 10 };
    twitterClient.get(urlPath, params, (err, timeline) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.json(timeline);
      }
    });
  });

};