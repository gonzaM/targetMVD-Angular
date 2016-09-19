class LoginController {

  constructor($state, UsersService, AuthenticationService) {
    this.$state = $state;
    this.UsersService = UsersService;
    this.AuthenticationService = AuthenticationService;
  }

  login(){
    this.AuthenticationService.login(this.user)
    .then(response => {
      this.AuthenticationService.setUserAuthToken(response.data.token);
      this.$state.go('app.home');
    }, response => {
      this.errors = response.data.errors;
    });
  }
}

export { LoginController }
