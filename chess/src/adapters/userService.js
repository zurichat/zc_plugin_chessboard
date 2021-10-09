import { GetUserInfo } from "@zuri/control";
export class UserService {
  constructor() {
    this.userData = null;
    this.id = null;
    this.image_url = null;
    this.email = null;
    this.user_name = null;
  }

  async fetchUserData() {
    this.userData = await GetUserInfo();

    this.id = this.userData[0]._id;
    this.image_url = this.userData[0].image_url;
    this.email = this.userData[0].email;
    this.user_name = this.userData[0].user_name;
    console.log("from User Service", this.userData);
  }

  static getInstance() {
    if (!this.instance) this.instance = new UserService();

    return this.instance;
  }
}
