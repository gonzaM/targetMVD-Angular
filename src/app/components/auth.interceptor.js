class AuthInterceptor {
  constructor(localStorageService) {
    this.localStorageService = localStorageService;
  }

  request(config){
    if(this.localStorageService.get('userAuthToken') !== null) {
       config.headers['X-USER-TOKEN'] = this.localStorageService.get('userAuthToken');
    }
    return config;
  }
}

export { AuthInterceptor }
