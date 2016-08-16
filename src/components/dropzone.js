import dropzone from 'dropzone';

export class Dropzone {

  attached() {
    this.zone = new Dropzone(this.targetElement, { url: "/file/post"});
  }
}
