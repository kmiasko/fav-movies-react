import 'whatwg-fetch';

export default class VimeoProviderService {
  constructor() {
    this.authorizationUrl = 'https://api.vimeo.com/oauth/authorize/client';
    this.clientID = '';
    this.clientSecret = '';

  }

  createAuthHeader() {
    return "basic " + btoa(`${this.clientID}:${this.clientSecret}`);
  }

  authorize() {
    const header = this.createAuthHeader();

    return fetch(this.authorizationUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': header
      },
      body: JSON.stringify({
        grant_type: "client_credentials"
      })
    });
  }

  parseUrl(video) {
    const match = video.match(/([0-9]{3,})/);
    return match[0];
  }

  createUrl(video) {
    this.id = this.parseUrl(video);
    if (!this.id) {
      return undefined;
    }
    const newUrl = `https://api.vimeo.com/videos/${this.id}`;
    return newUrl;
  }

  createEmbedLink() {
    return `<iframe src="https://player.vimeo.com/video/${this.id}" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`;
  }

  formatData(videoObj = undefined) {
    if (videoObj === undefined) {
      console.error('Bad video url');
      return undefined;
    }

    const movieObj = {
      id: this.id,
      title: videoObj.name,
      added: Date.now(),
      favorite: false,
      views: videoObj.stats.plays,
      likes: videoObj.metadata.connections.likes.total,
      thumbnail: videoObj.pictures.sizes[3].link,
      url: videoObj.link,
      embed: this.createEmbedLink()
    };

    return movieObj;
  }

  getData() {
    const self = this;
    return this.promise.then(function(data) {
      return self.formatData(data);
    });
  }

  download(video) {
    const url = this.createUrl(video);

    this.promise = this.authorize().then(function(response) {
      return response.json();
    }).then(function(data) {
      return data;
    }).then(function(data) {
      return fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${data.access_token}`
        }
      }).then(function(response) {
        return response.json();
      });
    });
  }
}
