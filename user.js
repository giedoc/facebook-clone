const Post = require('./post');
const uuid = require('uuid');
class User {
  constructor(id = uuid.v4(), name, password, email, age, address, posts = []) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.email = email;
    this.age = age;
    this.adress = address;
    this.socialnetworks = [];
    this.posts = posts;
  }
  likeShare(user) {
    console.log(this.name + ' liked the sharing of ' + user.name);
  }

  addFriend(user) {
    console.log(`Hi ${user.name} :), I am ${this.name}. I want to be a friend`);
  }

  attend(socialnetwork) {
    this.socialnetworks.push(socialnetwork);
    socialnetwork.participants.push(this);
  }

  sharePost(text, type, author) {
    const post = new Post(text, type, author);
    this.posts.push(post);
    post.shares.push(this.posts);
    // console.log(this.posts);
  }

  sendMessage(user) {
    console.log('Hi ' + user.name + ',' + ' will you available tonight ?');
  }

  static create({id, name, password, email, age, address, posts}) {
    return new User(id, name, password, email, age, address, posts);
  }

}
module.exports = User;
