const User = require('./user');
const SocialNetwork = require('./socialnetwork');
const Photo = require('./photo');
const Idea = require('./idea');
const userDatabase = require('./user-database');

// const showInfo = (user) => console.log(user.id, user.name, user.password, user.email, user.age, user.address);

function showInfo(user) {
  console.log(user);
}

// const alp = new User(undefined, 'alp', '12323', 'alptug@gmail.com', 23, 'Berlin');
// const cansu = new User(undefined, 'cansu', '3551', 'cansulale@gmail.com', 28, 'London');
// const mark = new User(undefined, 'mark', '25=-9', 'markmark@outlook.com', 26, 'Dublin');

// const facebook = new SocialNetwork('Facebook');


// alp.sharePost('blabla', 'photo', 'alp');
// alp.sharePost('fbsdjh', 'idea', 'alp');
// alp.sharePost('ndfkngjdf', 'photo', 'alp');
// alp.sharePost('fjnksdnf', 'idea', 'alp');

// userDatabase.save([alp, cansu]);

const alp = userDatabase.findByName('alp');


alp.sharePost('dsdsfdsf', 'sdfsdf', 'sfdsf');
showInfo(alp);


// alp.sharePost('fsdf', 'gnkdfjg', 'alp');

// userDatabase.update(alp)

// // const davinci = new Photo('davinci', 'photo', alp.name);

// // console.log(alp.posts);

// // mark.sharePost(davinci);

// // console.log(mark.posts);
// // console.log(alp);
// // console.log(`${alp.name} shared ${alp}`);

// // alp.sharePost('memoryFriends', 'photo', 'alp');

// // console.log(`${alp.name} shared a ${alp.posts[0].type} called ${alp.posts[0].text}`);
// // cansu.sharePost('To be or not to be, thats all', 'idea', 'cansu');
// // console.log(cansu.posts[0].text);
// // alp.addFriend(cansu);

// // db.save('users', [alp]);
// // db.save('users', [cansu]);

// // const bilge = new User('bilge', '31234');

// // db.insert('users', bilge);
// // db.remove('users',0);

// const cansu = db.findByName('users', 'cansu');
// showInfo(cansu);
// // const users = db.load('users');

// // users.forEach((u) => console.log(u.name));

