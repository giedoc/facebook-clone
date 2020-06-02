class SocialNetwork {
  constructor(name) {
    this.name = name;
    this.participants = [];
  }

  showParticipant() {
    this.participants.forEach(showInfo);
  }
}
module.exports = SocialNetwork;
