const Post = require('./post');
class User {
  constructor(name, password, email, age, address) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.age = age;
    this.adress = address;
    this.socialnetworks = [];
    this.posts = [];
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
}
module.exports = User;
