// Create  interfaces.
// Create concrete classes implementing the same interfaces.
// Create a facade class.
// Use the facade to access the different sub-classes and their methods. 
interface Lights{
    dimlights();
    turnOn()
    turnOff();
}
interface Display{
    turnOn();
    turnOff();
}
interface Amplifier{
    turnOn();
    turnOff()
    setVolume(volume:string)
}
interface SnackMaker{
    turnOnSnackMaker();
    turnOffSnackMaker();
    StopSnackMaker();
}
class MovieLights implements Lights{
    dimlights(){
        console.log('Movie lights dimmed');
    };
    turnOn(){
        console.log('Movie lights on');
    }
    turnOff(){
        console.log('Movie lights on');
    };
}
class TV implements Display{
    turnOn(){
        console.log('TV ON')
    };
    turnOff(){
        console.log('TV OFF')
    };
    stopTv(){
        console.log('TV has stopped');
    }
}
class MovieAmplifier implements Amplifier{
    turnOn(){
        console.log('Movie Amplifier ON');
    };
    turnOff(){
        console.log('Movie Amplifier OFF');
    }
    setVolume(volume:string){
        console.log(`you have set the movie volume to ${volume}`);
    }
}

class PopcornMaker implements SnackMaker{
    turnOnSnackMaker(){
        console.log('Popcorn maker ON')
    };
    turnOffSnackMaker(){
        console.log('Popcorn maker OFF')
    };
    StopSnackMaker(){
        console.log('Popcorn maker stopped')
    };
}
// Facade, 
class MovieTheatreFacade {
    private movielight:MovieLights;
    private tv:TV;
    private movieamplifier :MovieAmplifier;
    private popcornmaker:PopcornMaker;

    constructor(movielight:MovieLights,tv:TV,movieamplifier :MovieAmplifier,popcornmaker:PopcornMaker){
     this.movielight = movielight;
     this.tv = tv;
     this.popcornmaker = popcornmaker;
     this.movieamplifier = movieamplifier;

    }
    watchMovie(){
        this.movielight.dimlights();
        this.tv.turnOn();
        this.movieamplifier.turnOn();
        this.movieamplifier.setVolume('20');
        this.popcornmaker.turnOnSnackMaker();
    }

    stopMovie(){
        this.movielight.turnOn();
        this.tv.turnOff();
        this.movieamplifier.turnOff();
        this.popcornmaker.StopSnackMaker();
        this.popcornmaker.turnOffSnackMaker();
    }

}
//Instatations.
let tv = new TV();
let amp = new MovieAmplifier();
let light = new MovieLights();
let popcorn = new PopcornMaker();

let movieTheatre = new MovieTheatreFacade(light,tv,amp,popcorn);
movieTheatre.watchMovie();
console.log("==================================")
movieTheatre.stopMovie();