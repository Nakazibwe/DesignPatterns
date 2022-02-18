/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-delete-var */
/* eslint-disable no-restricted-syntax */
// Creating abstract type for observer.
interface News{
 headline:string,
 body:string,
 author: string,

}
interface Subscriber{

    receiveNews(news:News):void;
}
class Publisher {
  private news:News;

  private subscribers:Array<Subscriber> = [];

  // Subscription method.
  addSubscriber(subscriber:Subscriber):Boolean {
    // Check if subscriber already exists in the list of subscribers.
    const subscriberExists = false;
    // If not, add subscriber to the list of subscriber.
    if (subscriberExists == false) {
      this.subscribers.push(subscriber);
      return true;
    }

    return false;
  }

  // Removing a subscriber.
  removeSubscriber(subscriber:Subscriber) {
    for (const sub of this.subscribers) {
      if (sub == subscriber) {
        return true;
      }
    } return false;
  }

  notifySubscribers():Boolean {
    this.subscribers.forEach((subscriber:Subscriber) => {
      subscriber.receiveNews(this.news);
      return true;
    });
    return false;
  }

  publish(newsArg:News) {
    this.news = newsArg;
    this.notifySubscribers();
  }
}

class EliteSubscriber implements Subscriber {
  private name:string;

  constructor(name:string) {
    this.name = name;
  }

  receiveNews(news: News): void {
    const result = {
      subscriber: this.name,
      news,
    };
    console.log(result);
  }
}
class UshindiMediaNews implements News {
  headline: string;

  body: string;

  author: string;

  constructor(headline: string, body: string, author: string) {
    this.headline = headline;
    this.body = body;
    this.author = author;
  }
}

// Instatiating objects
// Observables.
const newVision:Publisher = new Publisher();
const bukedde:Publisher = new Publisher();

// Observers.
const subscribers = [];
subscribers[0] = new EliteSubscriber('Haddish Ushindi');
subscribers[1] = new EliteSubscriber('Brylon Dylan Ushindi');
subscribers[2] = new EliteSubscriber('Kaydn Dylan Ushindi');
subscribers[3] = new EliteSubscriber('Gryc.K. Ushindi');
subscribers[4] = new EliteSubscriber('Deshya Ushindi');

// Publisher adding subscribers
// New Vision
for (const subscriber of subscribers) {
  newVision.addSubscriber(subscriber);
}
// Bukedde.
for (const subscriber of subscribers) {
  bukedde.addSubscriber(subscriber);
}
// News
// Child Magazine instance.
const childMagazine:UshindiMediaNews = new UshindiMediaNews('BABY BOY NAMES', 'Choose from a variety of cool baby boy names', '@ushindi');
newVision.publish(childMagazine);

// Luganda News.
const lugandaNews:UshindiMediaNews = new UshindiMediaNews('EFFUJO', 'Abagalana, batabukidde ku mukolo', '@nakazybwe');
bukedde.publish(lugandaNews);
