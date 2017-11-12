const axios = require('axios');
const config = require('./config');
const { json, send } = require('micro');

module.exports = async (req, res) => { 
  const body = await json(req);
  const regularListId = 'ae92d43e1e';
  const artistListId = '9698384cc3';
  
  const listId = body.category === 'artist' ? artistListId : regularListId;
  try {
    const { data } = await axios({
      method: 'post',
      url: `https://us15.api.mailchimp.com/3.0/lists/${listId}/members`,
      headers: {
        Authorization: `apikey ${config.MAILCHIMP_TOKEN}`,
        'Content-Type': 'application/json'
      },
      data: {
        email_address: body.email,
        status: 'subscribed',
      }
    });    
    res.json(data);
  } catch(error) {   
    console.error(error.response.data);
    res.status(error.response.status).send(error.response.data);
  }
}
