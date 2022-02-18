var RealSubject = /** @class */ (function () {
    function RealSubject() {
    }
    RealSubject.prototype.request = function () {
        console.log('Real Subject: Handling Request'); // core business logic goes here
    };
    return RealSubject;
}());
var ProxySubject = /** @class */ (function () {
    function ProxySubject(realSubject) {
        this.realSubject = realSubject;
    }
    ProxySubject.prototype.request = function () {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    };
    ProxySubject.prototype.checkAccess = function () {
        console.log('Proxy is checking if client has access to heavy weight object ');
        return true;
    };
    ProxySubject.prototype.logAccess = function () {
        console.log('Proxy is taking the logs of clients accessing the heavy weight.');
    };
    return ProxySubject;
}());
function clientRequest(subject) {
    subject.request();
}
// Instatiations
var realSubject = new RealSubject();
clientRequest(realSubject);
// Accessing through the proxy.
var proxy = new ProxySubject(realSubject);
clientRequest(proxy);
