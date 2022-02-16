/* eslint-disable no-console */
/* eslint-disable no-new */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
/* eslint-disable dot-notation */
/* eslint-disable max-classes-per-file */
import { database } from './database.js';

/*
    - Authentication Strategy
        - Interface: Authentication
            - Method Declaration: authenticate()

        // Algorithms: Concrete classes
            - Class: EmailAndPassword <- Authentication
                - Method Definition: authenticate(){}
            - Class: UsernameAndPassword <- Authentication
                - Method Definition: authenticate(){}
            - Class: UserIDandPassword <- Authentication
                - Method Definition: authenticate(){}
*/

// Authentication Strategy
interface Authentication{
    authenticate(credential:object): object;
}

class EmailAndPassword implements Authentication {
  authenticate(credential:object): object {
    let results = { isAuthenticated: false, user: null };
    for (const dbUser of database) {
      if (dbUser['email'] === credential['email'] && dbUser['password'] === credential['password']) {
        results = { isAuthenticated: true, user: dbUser };
        break;
      }
    }
    return results;
  }
}

class UsernameAndPassword implements Authentication {
  authenticate(credential:object): object {
    let results = { isAuthenticated: false, user: null };
    for (const dbUser of database) {
      if (dbUser['username'] === credential['username'] && dbUser['password'] === credential['password']) {
        results = { isAuthenticated: true, user: dbUser };
        break;
      }
    }
    return results;
  }
}

class UserIDAndPassword implements Authentication {
  authenticate(credential:object): object {
    let results = { isAuthenticated: false, user: null };
    for (const dbUser of database) {
      if (dbUser['userID'] === credential['userID'] && dbUser['password'] === credential['password']) {
        results = { isAuthenticated: true, user: dbUser };
        break;
      }
    }
    return results;
  }
}

function dropPasswordFieldFromObject(user:object) {
  delete user['password'];
  return user;
}

class Logger {
  private static authenticator:Authentication;

  private static user:object = null; // Acting as the user session

  private constructor(user:object) {
    Logger.user = user;
  }

  static login(scheme:string, credentials:object) {
    if (Logger.user === null) {
      // Altered logic
      let dbUser = null;
      if (scheme === 'emailAndPassword') {
        Logger.authenticator = new EmailAndPassword();
      } else if (scheme === 'usernameAndPassword') {
        Logger.authenticator = new UsernameAndPassword();
      } else if (scheme === 'userIDandPassword') {
        Logger.authenticator = new UserIDAndPassword();
      }

      const authenticationResults = Logger.authenticator.authenticate(credentials);
      if (authenticationResults['isAuthenticated']) {
        dbUser = authenticationResults['user'];
        new Logger(dropPasswordFieldFromObject(dbUser));
      }
    }
  }

  static getLoggedInUser() {
    return Logger.user;
  }
}

Logger.login('userIDandPassword', { userID: '12345', password: 'x12345' });
console.log(Logger.getLoggedInUser());
Logger.login('usernameAndPassword', { username: 'todeke', password: 'p@ssw0rdx' });
console.log(Logger.getLoggedInUser());
Logger.login('emailAndPassword', { email: 'aumagabriella@gmail.com', password: 'm55855' });
console.log(Logger.getLoggedInUser());
Logger.login('usernameAndPassword', { username: '@ushindi', password: 'x86991' });
console.log(Logger.getLoggedInUser());
Logger.login('usernameAndPassword', { username: 'josh', password: 'passjosh' });
console.log(Logger.getLoggedInUser());
Logger.login('usernameAndPassword', { username: 'ziyalogy', password: 'food' });
console.log(Logger.getLoggedInUser());
Logger.login('usernameAndPassword', { username: 'raymondcolor', password: 'ray345' });
console.log(Logger.getLoggedInUser());
Logger.login('usernameAndPassword', { username: 'b.rojas', password: '7890x' });
console.log(Logger.getLoggedInUser());

// console.log(database);
