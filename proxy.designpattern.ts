/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
interface Subject{
    request(): void; // could be multiple
}

class RealSubject implements Subject {
  public request(): void {
    console.log('Real Subject: Handling Request'); // core business logic goes here
  }
}
class ProxySubject implements Subject {
  private realSubject:RealSubject;

  constructor(realSubject:RealSubject) {
    this.realSubject = realSubject;
  }

  request() {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }

  private checkAccess():Boolean {
    console.log('Proxy is checking if client has access to heavy weight object ');
    return true;
  }

  private logAccess():void {
    console.log('Proxy is taking the logs of clients accessing the heavy weight.');
  }
}
function clientRequest(subject:Subject) {
  subject.request();
}
// Instatiations
const realSubject = new RealSubject();
clientRequest(realSubject);

// Accessing through the proxy.
const proxy = new ProxySubject(realSubject);
clientRequest(proxy);
