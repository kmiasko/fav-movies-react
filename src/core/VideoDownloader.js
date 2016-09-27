export default class VideoDownloadService {

  setProviderFunc(provider) {
    this.provider = provider
  }

  download(video) {
    if (this.provider) {
      try {
        this.provider.download(video);
        return this.provider.getData();
      } catch (e) {
          console.log(e);
        return {};
      }
    }
  }
}

