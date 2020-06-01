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
		console.log('Hi ' + user.name + ' :) ' + ' , I am ' + this.name + ' I want to be a friend ');
	}

	attend(socialnetwork) {
		this.socialnetworks.push(socialnetwork);
		socialnetwork.participants.push(this);
	}

	sharePost(post) {
		this.posts.push(post);
		post.shares.push(this.posts);
		// console.log(this.posts);
	}

	sendMessage(user) {
		console.log('Hi ' + user.name + ',' + ' will you available tonight ?');
	}
}

class SocialNetwork {
	constructor(name) {
		this.name = name;
		this.participants = [];
	}

	showParticipant() {
		this.participants.forEach(showInfo);
	}
}

class Post {
	constructor(text, type, author) {
		this.text = text;
		this.type = type;
		this.shares = [];
		this.author = author;
	}
}

class Photo extends Post {
    constructor(text, type, author) {
		super(text, type, author);
	}
}

const showInfo = (user) => console.log(user.name, user.password, user.email, user.age, user.address);

const alp = new User('alp', '12323', 'alptug@gmail.com', 23, 'Berlin');
const cansu = new User('cansu', '3551', 'cansulale@gmail.com', 28, 'London');
const mark = new User('mark', '25=-9', 'markmark@outlook.com', 26, 'Dublin');

const facebook = new SocialNetwork('Facebook');

const davinci = new Photo('davinci', 'photo', alp.name);

const yosemite = new Photo('yosemite', 'photo', cansu.name);
alp.sharePost(davinci);
console.log(alp.posts);

mark.sharePost(davinci);

console.log(mark.posts);
// mark.sharePostAnyone(alp.posts);

// console.log(mark.shares);
