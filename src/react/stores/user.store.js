import AppDispatcher from '../dispatcher/Dispatcher';

import BasicStore from './basic.store';

import {
  ADD_USER
} from '../constants/constants';

let users = [
  {
    id: '1',
    name: 'Teacher'
  }
];

class UserStore extends BasicStore {

  getUserById(id){
    let index = 0;
    let isFound = false;
    let user;
    while(index < users.length && !isFound){
      if(users[index].id === id){
        isFound = true;
        user = users[index];
      }
      index++;
    }
    return user;
  }

  getUsers(){
    return users;
  }

}

let userStoreInstance = new UserStore();

AppDispatcher.register(function(payload) {
  const action = payload.action;
  switch(action.actionType) {
    case ADD_USER:
      users.push(action.data);
      userStoreInstance.emitChange();
      break;
  }
  return true;
});

export default userStoreInstance;
