/* eslint-disable no-new */
/* eslint-disable no-console */
// Singleton
class Logger {
  // 1. Restrict creation of objects from outside class.
  private static user:object = null;

  private constructor(user:object) {
    Logger.user = user;
  }

  // 2. Ensure only one instance of a  class.
  // Make sure objects are only created inside the class
  static login(user:object) {
    if (Logger.user === null) {
      new Logger(user);
    }
    // return Logger.user;
  }

  // 3. Provide a global access to the single instance
  static getLoggedInUser() {
    return Logger.user;
  }
}
Logger.login({ name: 'Ushindi Krystl', password: 'r19968' });
console.log(Logger.getLoggedInUser());
Logger.login({ name: 'shalom', password: 'r19968' });
console.log(Logger.getLoggedInUser());
Logger.login({ name: 'haddish', password: 'r19968' });
console.log(Logger.getLoggedInUser());
Logger.login({ name: 'faith', password: 'r19968' });
console.log(Logger.getLoggedInUser());
Logger.login({ name: 'joshua', password: 'r19968' });
console.log(Logger.getLoggedInUser());
