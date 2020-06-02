const User = require('./user');
const SocialNetwork = require('./socialnetwork');
const Photo = require('./photo');
const Idea = require('./idea');

showInfo = (user) => console.log(user.name, user.password, user.email, user.age, user.address);

const alp = new User('alp', '12323', 'alptug@gmail.com', 23, 'Berlin');
const cansu = new User('cansu', '3551', 'cansulale@gmail.com', 28, 'London');
const mark = new User('mark', '25=-9', 'markmark@outlook.com', 26, 'Dublin');

const facebook = new SocialNetwork('Facebook');

// const davinci = new Photo('davinci', 'photo', alp.name);

// console.log(alp.posts);

// mark.sharePost(davinci);

// console.log(mark.posts);
console.log(alp);
// console.log(`${alp.name} shared ${alp}`);

alp.sharePost('memoryFriends', 'photo', 'alp');

console.log(`${alp.name} shared a ${alp.posts[0].type} called ${alp.posts[0].text}`);
cansu.sharePost('To be or not to be, thats all', 'idea', 'cansu');
console.log(cansu.posts[0].text);
alp.addFriend(cansu);
