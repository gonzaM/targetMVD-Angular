class LoginController {

  constructor($state, UsersService, AuthenticationService) {
    this.$state = $state;
    this.UsersService = UsersService;
    this.AuthenticationService = AuthenticationService;
  }

  login(){
    this.AuthenticationService.login(this.user)
    .then(response => {
      alert("Success!");
      this.AuthenticationService.setUserAuthToken(response.data.token);
      this.$state.go('home');
    }, response => {
      alert("Fail");
      this.errors = response.data.errors;
    });
  }
}

export { LoginController }
