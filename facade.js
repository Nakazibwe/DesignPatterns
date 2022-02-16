/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
// Concrete class of Lights interface.
var MovieLights = /** @class */ (function () {
    function MovieLights() {
    }
    MovieLights.prototype.dimLights = function () {
        console.log('Lights dimmed');
    };
    MovieLights.prototype.turnOffLights = function () {
        console.log('Lights are off ');
    };
    MovieLights.prototype.turnOnLights = function () {
        console.log('Lights are on ');
    };
    return MovieLights;
}());
// Concrete class of Display
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.turnOn = function () {
        console.log('TV turned on');
    };
    TV.prototype.turnOff = function () {
        console.log('TV turned off');
    };
    return TV;
}());
// PopCorn Maker class concrete .
var PopcornMaker = /** @class */ (function () {
    function PopcornMaker() {
    }
    PopcornMaker.prototype.turnOnSnackMaker = function () {
        console.log('Popcorn maker turned on');
    };
    PopcornMaker.prototype.turnOffSnackMaker = function () {
        console.log(' Popcorn maker TV turned off');
    };
    PopcornMaker.prototype.popStart = function () {
        console.log('Making delicious popcorn');
    };
    PopcornMaker.prototype.popStop = function () {
        console.log('Stopped making the delicious popcorn');
    };
    return PopcornMaker;
}());
// Concrete class of the Player class
var BlueRayPlayer = /** @class */ (function () {
    function BlueRayPlayer() {
    }
    BlueRayPlayer.prototype.turnOnPlayer = function () {
        console.log('Blueray player turned on');
    };
    BlueRayPlayer.prototype.turnOffPlayer = function () {
        console.log('Blueray player turned off');
    };
    BlueRayPlayer.prototype.playBlueRay = function () {
        console.log('BlueRay player playing a movie');
    };
    return BlueRayPlayer;
}());
var MovieAmplifier = /** @class */ (function () {
    function MovieAmplifier() {
    }
    MovieAmplifier.prototype.turnOn = function () {
        console.log('Amplifier is turned on');
    };
    MovieAmplifier.prototype.setVolume = function (volume) {
        console.log("Amplifier volume is set  to ".concat(volume));
    };
    MovieAmplifier.prototype.turnOff = function () {
        console.log('Amplifier is turned off');
    };
    return MovieAmplifier;
}());
var autoTheatreFacade = /** @class */ (function () {
    function autoTheatreFacade(blueray, popcornmaker, tv, lights, amplifier) {
        this.blueray = blueray;
        this.popcornmaker = popcornmaker;
        this.tv = tv;
        this.lights = lights;
        this.amplifier = amplifier;
    }
    autoTheatreFacade.prototype.startMovie = function () {
        this.lights.dimLights();
        this.tv.turnOn();
        this.amplifier.turnOn();
        this.amplifier.setVolume('20');
        this.blueray.turnOnPlayer();
        this.popcornmaker.turnOnSnackMaker();
        this.popcornmaker.popStart();
    };
    autoTheatreFacade.prototype.stopMovie = function () {
        this.lights.turnOffLights();
        this.tv.turnOff();
        this.amplifier.turnOff();
        this.blueray.turnOffPlayer();
        this.popcornmaker.popStop();
        this.popcornmaker.turnOffSnackMaker();
    };
    return autoTheatreFacade;
}());
// Instatiating the subclasses
var amplfy = new MovieAmplifier();
var light = new MovieLights();
var tv = new TV();
var blueray = new BlueRayPlayer();
var popcornmaker = new PopcornMaker();
// Creating access to subclass through the facade
var autoTheatre = new autoTheatreFacade(blueray, popcornmaker, tv, light, amplfy);
autoTheatre.startMovie();
autoTheatre.stopMovie();
