var unirest = require('unirest');

var req = unirest(
  'GET',
  'https://linkedin-public-profiles.p.rapidapi.com/rapidapi/'
);

req.query({
  profileId: 'williamhgates',
});

req.headers({
  'x-rapidapi-host': 'linkedin-public-profiles.p.rapidapi.com',
  'x-rapidapi-key': '8085288af8msh2c14499e1cabd8ep1157f6jsn9d120e529dc6',
  useQueryString: true,
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
