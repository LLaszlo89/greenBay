export default class AddNewUser {
  constructor({ passwordValidationService, userRepository }) {
    this.userRepository = new userRepository();
    this.passwordValidationService = new passwordValidationService();
  }

  async addUser(user_data) {
    console.log("THIS IS >>>>>>>>>>>", user_data )
    this.userRepository.saveNewUser({ user_data });
  }
}
