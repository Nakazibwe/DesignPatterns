/* eslint-disable no-new */
/* eslint-disable no-console */
// Singleton
var Logger = /** @class */ (function () {
    function Logger(user) {
        Logger.user = user;
    }
    // 2. Ensure only one instance of a  class.
    // Make sure objects are only created inside the class
    Logger.login = function (user) {
        if (Logger.user === null) {
            new Logger(user);
        }
        // return Logger.user;
    };
    // 3. Provide a global access to the single instance
    Logger.getLoggedInUser = function () {
        return Logger.user;
    };
    // 1. Restrict creation of objects from outside class.
    Logger.user = null;
    return Logger;
}());
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
