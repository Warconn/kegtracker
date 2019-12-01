var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var KegSchema = new mongoose.Schema({
    kegnum: Number,         //which keg is this in (currently only have two)
    kegcapacity: Number,    //How many ounces went into the keg originally
    currentvolume: Number,   //Track the current level of the beer           
    beer: [{ 
            beername: String, //Name of the beer in the keg 
            abv: Number,        //ABV level of the beer
            ibu: Number,        //IBU Level of the beer
            srm: Number         //Color of the beer (SRM which will be converted on the fly to hex)
        }],

})

KegSchema.plugin(mongoosePaginate)
const Keg = mongoose.model('Keg', KegSchema)

module.exports = Keg;
