class Keg {
    _id:string;
    kegnum: number;
    kegcapacity: number;
    beername: String;
    currentvolume: number;


    constructor(){
        this.kegnum = 0;
        this.kegcapacity = 0;
        this.beername = "";
        this.currentvolume = 0;
    }
    
}
export default Keg;