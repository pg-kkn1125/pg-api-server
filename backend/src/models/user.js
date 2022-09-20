class User {
  // fields
  id = null;
  email = null;
  name = null;
  password = null;
  gender = null;
  age = null;
  nation = null;
  created_at = null;
  updated_at = null;

  constructor(email, name, password, gender, age, nation) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.gender = gender;
    this.age = age;
    this.nation = nation;
  }

  // 추후 update 데이터를 받기 위함
  setBodyData(data) {
    Object.entries(data).forEach(([key, value]) => {
      this[key] = value;
    });
  }
}

module.exports = User;
