class RegistrationController {

  constructor(UsersService, AuthenticationService) {
    this.user = {};
    this.UsersService = UsersService;
    this.AuthenticationService = AuthenticationService;
  }

  submit(){
    this.UsersService.create(this.user)
    .then(response => {
      alert("Success!");
      this.AuthenticationService.setUserAuthToken(response.data.token);
    }, response => {
      alert("Fail");
      this.errors = response.data.errors;
    });
  }
}
export { RegistrationController }
