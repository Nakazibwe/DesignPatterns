"use strict";
exports.__esModule = true;
/* eslint-disable no-console */
/* eslint-disable no-new */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
/* eslint-disable dot-notation */
/* eslint-disable max-classes-per-file */
var database_js_1 = require("./database.js");
var EmailAndPassword = /** @class */ (function () {
    function EmailAndPassword() {
    }
    EmailAndPassword.prototype.authenticate = function (credential) {
        var results = { isAuthenticated: false, user: null };
        for (var _i = 0, database_1 = database_js_1.database; _i < database_1.length; _i++) {
            var dbUser = database_1[_i];
            if (dbUser['email'] === credential['email'] && dbUser['password'] === credential['password']) {
                results = { isAuthenticated: true, user: dbUser };
                break;
            }
        }
        return results;
    };
    return EmailAndPassword;
}());
var UsernameAndPassword = /** @class */ (function () {
    function UsernameAndPassword() {
    }
    UsernameAndPassword.prototype.authenticate = function (credential) {
        var results = { isAuthenticated: false, user: null };
        for (var _i = 0, database_2 = database_js_1.database; _i < database_2.length; _i++) {
            var dbUser = database_2[_i];
            if (dbUser['username'] === credential['username'] && dbUser['password'] === credential['password']) {
                results = { isAuthenticated: true, user: dbUser };
                break;
            }
        }
        return results;
    };
    return UsernameAndPassword;
}());
var UserIDAndPassword = /** @class */ (function () {
    function UserIDAndPassword() {
    }
    UserIDAndPassword.prototype.authenticate = function (credential) {
        var results = { isAuthenticated: false, user: null };
        for (var _i = 0, database_3 = database_js_1.database; _i < database_3.length; _i++) {
            var dbUser = database_3[_i];
            if (dbUser['userID'] === credential['userID'] && dbUser['password'] === credential['password']) {
                results = { isAuthenticated: true, user: dbUser };
                break;
            }
        }
        return results;
    };
    return UserIDAndPassword;
}());
function dropPasswordFieldFromObject(user) {
    delete user['password'];
    return user;
}
var Logger = /** @class */ (function () {
    function Logger(user) {
        Logger.user = user;
    }
    Logger.login = function (scheme, credentials) {
        if (Logger.user === null) {
            // Altered logic
            var dbUser = null;
            if (scheme === 'emailAndPassword') {
                Logger.authenticator = new EmailAndPassword();
            }
            else if (scheme === 'usernameAndPassword') {
                Logger.authenticator = new UsernameAndPassword();
            }
            else if (scheme === 'userIDandPassword') {
                Logger.authenticator = new UserIDAndPassword();
            }
            var authenticationResults = Logger.authenticator.authenticate(credentials);
            if (authenticationResults['isAuthenticated']) {
                dbUser = authenticationResults['user'];
                new Logger(dropPasswordFieldFromObject(dbUser));
            }
        }
    };
    Logger.getLoggedInUser = function () {
        return Logger.user;
    };
    Logger.user = null; // Acting as the user session
    return Logger;
}());
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
