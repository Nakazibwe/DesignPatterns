/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */

// Theatre automated system.
// Lights Interface.
interface Lights{
  dimLights();
  turnOffLights();
  turnOnLights();

}

// Concrete class of Lights interface.
class MovieLights implements Lights {
  dimLights() {
    console.log('Lights dimmed');
  }

  turnOffLights() {
    console.log('Lights are off ');
  }

  turnOnLights() {
    console.log('Lights are on ');
  }
}
// Interface of display.
interface Display {
  turnOn();
  turnOff();
}

// Concrete class of Display
class TV implements Display {
  turnOn() {
    console.log('TV turned on');
  }

  turnOff() {
    console.log('TV turned off');
  }
}
// Snack maker Interface.
interface SnackMaker{
  turnOnSnackMaker();
  turnOffSnackMaker()

}
// PopCorn Maker class concrete .
class PopcornMaker implements SnackMaker {
  turnOnSnackMaker() {
    console.log('Popcorn maker turned on');
  }

  turnOffSnackMaker() {
    console.log(' Popcorn maker TV turned off');
  }

  popStart() {
    console.log('Making delicious popcorn');
  }

  popStop() {
    console.log('Stopped making the delicious popcorn');
  }
}
// Interface of the player.
interface Player{
  turnOnPlayer();
  turnOffPlayer();
}
// Concrete class of the Player class
class BlueRayPlayer implements Player {
  turnOnPlayer() {
    console.log('Blueray player turned on');
  }

  turnOffPlayer() {
    console.log('Blueray player turned off');
  }

  playBlueRay() {
    console.log('BlueRay player playing a movie');
  }
}
// Interface of the Amplifier.
interface Amplifier{
  turnOn();
  setVolume(volume:string);
  turnOff();
}

class MovieAmplifier implements Amplifier {
  turnOn() {
    console.log('Amplifier is turned on');
  }

  setVolume(volume:string) {
    console.log(`Amplifier volume is set  to ${volume}`);
  }

  turnOff() {
    console.log('Amplifier is turned off');
  }
}
class autoTheatreFacade {
  private blueray:BlueRayPlayer;

  private popcornmaker:PopcornMaker;

  private tv:TV;

  private lights:MovieLights;

  private amplifier:MovieAmplifier;

  constructor(blueray:BlueRayPlayer, popcornmaker:PopcornMaker, tv:TV, lights:MovieLights, amplifier:MovieAmplifier) {
    this.blueray = blueray;
    this.popcornmaker = popcornmaker;
    this.tv = tv;
    this.lights = lights;
    this.amplifier = amplifier;
  }

  public startMovie() {
    this.lights.dimLights();
    this.tv.turnOn();
    this.amplifier.turnOn();
    this.amplifier.setVolume('20');
    this.blueray.turnOnPlayer();
    this.popcornmaker.turnOnSnackMaker();
    this.popcornmaker.popStart();
  }

  public stopMovie() {
    this.lights.turnOffLights();
    this.tv.turnOff();
    this.amplifier.turnOff();
    this.blueray.turnOffPlayer();
    this.popcornmaker.popStop();
    this.popcornmaker.turnOffSnackMaker();
  }
}
// Instatiating the subclasses
const amplfy = new MovieAmplifier();
const light = new MovieLights();
const tv = new TV();
const blueray = new BlueRayPlayer();
const popcornmaker = new PopcornMaker();

// Creating access to subclass through the facade
const autoTheatre = new autoTheatreFacade(blueray, popcornmaker, tv, light, amplfy);
autoTheatre.startMovie();
autoTheatre.stopMovie();
