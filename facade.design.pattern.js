var MovieLights = /** @class */ (function () {
    function MovieLights() {
    }
    MovieLights.prototype.dimlights = function () {
        console.log('Movie lights dimmed');
    };
    ;
    MovieLights.prototype.turnOn = function () {
        console.log('Movie lights on');
    };
    MovieLights.prototype.turnOff = function () {
        console.log('Movie lights on');
    };
    ;
    return MovieLights;
}());
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.turnOn = function () {
        console.log('TV ON');
    };
    ;
    TV.prototype.turnOff = function () {
        console.log('TV OFF');
    };
    ;
    TV.prototype.stopTv = function () {
        console.log('TV has stopped');
    };
    return TV;
}());
var MovieAmplifier = /** @class */ (function () {
    function MovieAmplifier() {
    }
    MovieAmplifier.prototype.turnOn = function () {
        console.log('Movie Amplifier ON');
    };
    ;
    MovieAmplifier.prototype.turnOff = function () {
        console.log('Movie Amplifier OFF');
    };
    MovieAmplifier.prototype.setVolume = function (volume) {
        console.log("you have set the movie volume to ".concat(volume));
    };
    return MovieAmplifier;
}());
var PopcornMaker = /** @class */ (function () {
    function PopcornMaker() {
    }
    PopcornMaker.prototype.turnOnSnackMaker = function () {
        console.log('Popcorn maker ON');
    };
    ;
    PopcornMaker.prototype.turnOffSnackMaker = function () {
        console.log('Popcorn maker OFF');
    };
    ;
    PopcornMaker.prototype.StopSnackMaker = function () {
        console.log('Popcorn maker stopped');
    };
    ;
    return PopcornMaker;
}());
// Facade, 
var MovieTheatreFacade = /** @class */ (function () {
    function MovieTheatreFacade(movielight, tv, movieamplifier, popcornmaker) {
        this.movielight = movielight;
        this.tv = tv;
        this.popcornmaker = popcornmaker;
        this.movieamplifier = movieamplifier;
    }
    MovieTheatreFacade.prototype.watchMovie = function () {
        this.movielight.dimlights();
        this.tv.turnOn();
        this.movieamplifier.turnOn();
        this.movieamplifier.setVolume('20');
        this.popcornmaker.turnOnSnackMaker();
    };
    MovieTheatreFacade.prototype.stopMovie = function () {
        this.movielight.turnOn();
        this.tv.turnOff();
        this.movieamplifier.turnOff();
        this.popcornmaker.StopSnackMaker();
        this.popcornmaker.turnOffSnackMaker();
    };
    return MovieTheatreFacade;
}());
//Instatations.
var tv = new TV();
var amp = new MovieAmplifier();
var light = new MovieLights();
var popcorn = new PopcornMaker();
var movieTheatre = new MovieTheatreFacade(light, tv, amp, popcorn);
movieTheatre.watchMovie();
console.log("==================================");
movieTheatre.stopMovie();
