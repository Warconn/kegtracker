var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var KegSchema = new mongoose.Schema({
    kegnum: String,
    kegcapacity: String,
    beername: String, 
    currentvolume: String
})

KegSchema.plugin(mongoosePaginate)
const Keg = mongoose.model('Keg', KegSchema)

module.exports = Keg;