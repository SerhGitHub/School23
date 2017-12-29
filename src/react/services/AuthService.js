import AuthAction from '../actions/auth.action';

export default {

  showRegistrationWindow(data) {
    AuthAction.showRegistrationWindow(data);
  },

  showSingWindow(data) {
    AuthAction.showSingWindow(data);
  },

  createUser(username, password){
    AuthAction.createUser(username, password);
  },

  logOut(){
    AuthAction.logOut();
  }
}


