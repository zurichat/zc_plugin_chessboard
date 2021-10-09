import { GetUserInfo } from "@zuri/control";
export class UserService {
  constructor() {
    this.userData = null;
  }

  async fetchUserData() {
    this.userData = await GetUserInfo();
    console.log("chess-zc-main-userService", this.userData);
    return this.userData;
  }

  static getInstance() {
    if (!this.instance) this.instance = new UserService();

    return this.instance;
  }
}
