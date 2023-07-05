export const apiKey = 'ab198f2e56400439dcacfbc5bacf0183';

export const apiUrl = 'https://api.flickr.com/services/rest/';

export const apiArgs = {
  api_key: process.env.apiKey || apiKey,
  format: 'json',
  media: 'photos',
  method: 'flickr.photos.search',
  nojsoncallback: 1,
  per_page: 24
};

export const imgSize = 'n';

