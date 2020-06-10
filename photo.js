const Post = require('./post');
class Photo extends Post {
  constructor(text, type, author) {
    super(text, type, author);
  }
}
module.exports = Photo;

