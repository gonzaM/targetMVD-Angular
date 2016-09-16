class RegistrationController {

  constructor(UsersService, AuthenticationService) {
    this.user = {};
    this.UsersService = UsersService;
    this.AuthenticationService = AuthenticationService;
  }

  submit(){
    this.UsersService.create(this.user)
    .then(response => {
      this.AuthenticationService.setUserAuthToken(response.data.token);
    }, response => {
      this.errors = response.data.errors;
    });
  }
}
export { RegistrationController }
