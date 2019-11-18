var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var KegSchema = new mongoose.Schema({
    kegnum: Number,
    kegcapacity: Number,
    beername: String, 
    currentvolume: Number
})

KegSchema.plugin(mongoosePaginate)
const Keg = mongoose.model('Keg', KegSchema)

module.exports = Keg;