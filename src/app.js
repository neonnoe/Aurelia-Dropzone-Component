import dropzone from 'dropzone';

export class App {

  attached() {
    this.zone = new Dropzone(this.targetElement, { url: "/file/post"});
  }
}
