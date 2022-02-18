var Publisher = /** @class */ (function () {
    function Publisher() {
        this.subscribers = [];
    }
    // Subscription method.
    Publisher.prototype.addSubscriber = function (subscriber) {
        // Check if subscriber already exists in the list of subscribers.
        var subscriberExists = false;
        // If not, add subscriber to the list of subscriber.
        if (subscriberExists == false) {
            this.subscribers.push(subscriber);
            return true;
        }
        return false;
    };
    // Removing a subscriber.
    Publisher.prototype.removeSubscriber = function (subscriber) {
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var sub = _a[_i];
            if (sub == subscriber) {
                return true;
            }
        }
        return false;
    };
    Publisher.prototype.notifySubscribers = function () {
        var _this = this;
        this.subscribers.forEach(function (subscriber) {
            subscriber.receiveNews(_this.news);
            return true;
        });
        return false;
    };
    Publisher.prototype.publish = function (newsArg) {
        this.news = newsArg;
        this.notifySubscribers();
    };
    return Publisher;
}());
var EliteSubscriber = /** @class */ (function () {
    function EliteSubscriber(name) {
        this.name = name;
    }
    EliteSubscriber.prototype.receiveNews = function (news) {
        var result = {
            subscriber: this.name,
            news: news
        };
        console.log(result);
    };
    return EliteSubscriber;
}());
var UshindiMediaNews = /** @class */ (function () {
    function UshindiMediaNews(headline, body, author) {
        this.headline = headline;
        this.body = body;
        this.author = author;
    }
    return UshindiMediaNews;
}());
// Instatiating objects
// Observables.
var newVision = new Publisher();
var bukedde = new Publisher();
// Observers.
var subscribers = [];
subscribers[0] = new EliteSubscriber('Haddish Ushindi');
subscribers[1] = new EliteSubscriber('Brylon Dylan Ushindi');
subscribers[2] = new EliteSubscriber('Kaydn Dylan Ushindi');
subscribers[3] = new EliteSubscriber('Gryc.K. Ushindi');
subscribers[4] = new EliteSubscriber('Deshya Ushindi');
// Publisher adding subscribers
// New Vision
for (var _i = 0, subscribers_1 = subscribers; _i < subscribers_1.length; _i++) {
    var subscriber = subscribers_1[_i];
    newVision.addSubscriber(subscriber);
}
// Bukedde.
for (var _a = 0, subscribers_2 = subscribers; _a < subscribers_2.length; _a++) {
    var subscriber = subscribers_2[_a];
    bukedde.addSubscriber(subscriber);
}
// News
// Child Magazine instance.
var childMagazine = new UshindiMediaNews('BABY BOY NAMES', 'Choose from a variety of cool baby boy names', '@ushindi');
newVision.publish(childMagazine);
// Luganda News.
var lugandaNews = new UshindiMediaNews('EFFUJO', 'Abagalana, batabukidde ku mukolo', '@nakazybwe');
bukedde.publish(lugandaNews);
