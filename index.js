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

	sharePost(share) {
		this.posts.push(share);
		share.shares.push(this.posts);
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

class Share {
	constructor(name, type) {
		this.name = name;
		this.type = type;
		this.shares = [];
	}
}

class Photo extends Share {
	constructor(name, type) {
		super(name, type);
	}
}

showInfo = (user) => console.log(user.name, user.password, user.email, user.age, user.address);

alp = new User('alp', '12323', 'alptug@gmail.com', 23, 'berlin');
cansu = new User('cansu', '3551', 'cansulale@gmail.com', 28, 'london');

facebook = new SocialNetwork('Facebook');

davinci = new Photo('davinci', 'photo');

yosemite = new Photo('yosemite', 'photo');

//alp.likeShare(cansu);
//cansu.addFriend(alp);

//console.log(facebook);

alp.attend(facebook);
cansu.attend(facebook);

//console.log(alp, cansu);

//console.log(facebook.participants[1]);

//console.log(facebook.showParticipant());

//console.log(davinci);

alp.sharePost(davinci);
cansu.sharePost(yosemite);

//console.log(alp.shares);

alp.sendMessage(cansu);

//console.log(showInfo(alp));
