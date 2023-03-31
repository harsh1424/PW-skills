class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get getPassword() {
      return this._password.replace(/./g, '*');
    }
  
    set setPassword(newPassword) {
      if (newPassword.length < 8 || !/\d/.test(newPassword) || !/[A-Z]/.test(newPassword)) {
        console.log('Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
      } else {
        this._password = newPassword;
      }
    }
  }

const user1 = new User("mithun", "Mithun123")
console.log(user1.getPassword)

user1.setPassword = 'Newpassword123'
console.log(user1.getPassword)

user1.setPassword = 'password'
