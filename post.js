class Post {
  constructor(text, type, author) {
    this.text = text;
    this.type = type;
    this.shares = [];
    this.author = author;
  }
}
module.exports = Post;
