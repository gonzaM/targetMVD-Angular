class LoginController {

  constructor(UsersService, AuthenticationService) {
    this.UsersService = UsersService;
    this.AuthenticationService = AuthenticationService;
  }

  login(){
    this.AuthenticationService.login(this.user)
    .then(response => {
      alert("Success!");
      this.AuthenticationService.setUserAuthToken(response.data.token);
    }, response => {
      alert("Fail :(");
    });
  }
}

export { LoginController }
