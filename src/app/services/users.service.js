class Users {
  constructor($http, ENV){
    this.$http = $http;
    this.ENV = ENV;
  }

  create(user){
    return this.$http.post(`${this.ENV.API_ENDPOINT}/users`, { user: user })
  }
}
export { Users }
