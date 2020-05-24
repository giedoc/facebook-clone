class user {
    constructor(id,profile_id,name,password,email,age,adress){
        this.id = id 
        this.profile_id = profile_id
        this.name = name
        this.password = password
        this.email = email
        this.age = age 
        this.adress = adress 
    }
   
    add_user(id,profile_id,name,password,email,age,adress) {
      
      var database = []
      database.push(id,profile_id,name,password,email,age,adress) 
      console.log(database)

      console.log(database.length)
    }

    edit_user() {

    }

    delete_user() {
 
    }

    search_user() {

    }

    like_post(user) {
        console.log(user.name + ' like ' + this.name + ' post ')
    }
    


}

/*class photo {
    constructor(photo_id, photo_explanation, photo_type, photo_name, photo_size) {
        this.photo_id = photo_id
        this.photo_explanation = photo_explanation
        this.photo_type = photo_type
        this.photo_name = photo_name
        this.photo_size = photo_size
    }

    add_photo(picture) {
        var photoDatabase = []
        photoDatabase.push(picture)
        console.log(photoDatabase)
    }
    


}
*/

member1 = new user ('id324', 'prof45345ile_id', 'ali', '123123', 'aliatakbak@gmail.com', '34', 'london')
member2 = new user ('id43545', 'prof53432', 'cansu', '58394532', 'cansubak@gmail.com', '23', 'istanbul')

member1.add_user('id324', 'prof45345ile_id', 'ali', '123123', 'aliatakbak@gmail.com', '34', 'london' )
member2.add_user('id43545', 'prof53432', 'cansu', '58394532', 'cansubak@gmail.com', '23', 'istanbul')

member1.like_post(member2) 





