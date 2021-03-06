/* eslint-disable max-classes-per-file */
// Creating abstract type for Observer
interface News{
    headline:string,
    body:string,
    author:string
}

interface Subscriber{
    receiveNews(news:News):void;
}

class Publisher {
  private news:News;

  private subscribers: Array<Subscriber> = [];

  // subscrition
  addSubscriber(subscriber: Subscriber):Boolean {
    // Check if subscriber already exists in the list of subscribers
    const subscriberExists = false;
    // If not, add subscriber to the list of subscribers
    if (subscriberExists == false) {
      this.subscribers.push(subscriber);
      return true;
    }
    return false;
  }

  removeSubscriber(subscriber: Subscriber):Boolean {
    const subscriberIndex = this.subscribers.indexOf(subscriber);
    if (subscriberIndex < 0) {
      return false;
    }
    delete this.subscribers[subscriberIndex];
    return true;
  }

  notifySubscribers():Boolean {
    this.subscribers.forEach(
      (subscriber: Subscriber) => {
        subscriber.receiveNews(this.news);
      },
    );
    return false;
  }

  publish(news:News) {
    this.news = news;
    this.notifySubscribers();
  }
}

class EliteSubscriber implements Subscriber {
  private name:string;

  constructor(name:string) {
    this.name = name;
  }

  receiveNews(news:News):void {
    const result = {
      subscriber: this.name,
      news,
    };
    console.log(result);
  }
}

class NVnews implements News {
  headline:string;

  body:string;

  author:string;

  constructor(headline, body, author) {
    this.headline = headline;
    this.body = body;
    this.author = author;
  }
}

// Testing the program

// Observable
const NewVision:Publisher = new Publisher();

// Observer
const subscribers = [];
subscribers[0] = new EliteSubscriber('Jackson Ssenengo');
subscribers[1] = new EliteSubscriber('Amanya Ziyal');
subscribers[2] = new EliteSubscriber('Sabiiti Raymond');
subscribers[3] = new EliteSubscriber('Joshua Murali');
subscribers[4] = new EliteSubscriber('Rogers Birimumaaso');

for (const subscriber of subscribers) {
  NewVision.addSubscriber(subscriber);
}

// News
const news:News = new NVnews("Ugandan Gov't to loose Billions over Oil scandal", "The Ugandan Gov't is set to loose over 10 Billions ..........", 'New Vision');
NewVision.publish(news);

// Observable
const Bukedde:Publisher = new Publisher();
for (const subscriber of subscribers) {
  Bukedde.addSubscriber(subscriber);
}
const eggulire:News = new NVnews('Effujjo!!', 'Abagalana babiri bakoze katemba', 'Bukedde');
Bukedde.publish(eggulire);
