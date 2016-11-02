import 'whatwg-fetch';

export default class YoutubeProvider {
  constructor() {
    this.apiKey = '';
  }

  parseUrl(video) {
    return video.match(/([A-Za-z0-9_\-]{11})/)[0];
  }

  createUrl(video) {
    this.id = this.parseUrl(video);
    const newUrl = `https://www.googleapis.com/youtube/v3/videos?id=${this.id}&key=${this.apiKey}&part=snippet,contentDetails,statistics,status`;
    return newUrl;
  }

  formatData(videoObj) {
    if (videoObj.items.length === 0) {
      console.error('Bad video url');
      return undefined;
    }

    const data = videoObj.items[0];

    const movieObj = {
      id: this.id,
      title: data.snippet.title,
      added: Date.now(),
      favorite: false,
      views: data.statistics.viewCount,
      likes: data.statistics.likeCount,
      thumbnail: data.snippet.thumbnails.default.url,
      url: `https://youtube.com/watch?v=${this.id}`,
      embed: this.createEmbedLink()
    };

    return movieObj;
  }

  createEmbedLink() {
    return `<iframe id="ytplayer" type="text/html" width="640" height="390"
  src="http://www.youtube.com/embed/${this.id}?autoplay=0" frameborder="0"/>`;
  }

  getData() {
    const self = this;
    return this.promise.then(function(response) {
      return response.json();
    }).then(function(data) {
      return self.formatData(data);
    });
  }

  download(video) {
    const url = this.createUrl(video);
    this.promise = fetch(url);
  }
}

