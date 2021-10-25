/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import { GetUserInfo } from '@zuri/utilities';

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
    if (!this.userData) return;

    // The .at(0) funtion is not a function. Doesn't work in all browsers
    this.id = this.userData[0]._id;
    this.image_url = this.userData[0].image_url;
    this.email = this.userData[0].email;
    this.user_name = this.userData[0].user_name;
  }

  static getInstance() {
    if (!this.instance) this.instance = new UserService();

    return this.instance;
  }
}
