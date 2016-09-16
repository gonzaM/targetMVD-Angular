class AuthenticationService {

  constructor($http, localStorageService, ENV){
    this.$http = $http;
    this.localStorageService = localStorageService;
    this.ENV = ENV;
  }

  setUserAuthToken(user) {
    this.localStorageService.set('userAuthToken', user);
  }

  getUserAuthToken() {
    return this.localStorageService.get('userAuthToken');
  }

  login(user){
    return this.$http.post(`${this.ENV.API_ENDPOINT}/users/sign_in`, { user: user })
  }

}
export { AuthenticationService }
