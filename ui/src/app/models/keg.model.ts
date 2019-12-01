class Keg {
    kegnum: number;
    kegcapacity: number;
    currentvolume: number;
    beer: [{ 
        beername: string, //Name of the beer in the keg 
        abv: Number,        //ABV level of the beer
        ibu: Number,        //IBU Level of the beer
        srm: Number         //Color of the beer (SRM which will be converted on the fly to hex)
    }]

    constructor(){
        this.kegnum = 0;
        this.kegcapacity = 0;
        this.currentvolume = 0;
        this.beer = [{
            "beername": "",
            "abv": 0,
            "ibu": 0,
            "srm": 0
        }]
    }
    
}
export default Keg;