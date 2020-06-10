const Post = require('./post');
class Idea extends Post {
  constructor(text, type, author) {
    super(text, type, author);
  }
}
module.exports = Idea;
