// get and set use as same constructor , get always return and set always set values..


class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(val) {
    this._email = val;
  }
  get password() {
    return this._password.toUpperCase();
  }
  set password(val) {
    this._password = val;
  }
}

const hitesh = new user("h@iam", "123");
console.log(hitesh.password);
console.log(hitesh.email);

