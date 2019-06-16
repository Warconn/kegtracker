var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var KegSchema = new mongoose.Schema({
    kegnum: BigInt64Array,
    kegcapacity: BigInt64Array,
})

KegSchema.plugin(mongoosePaginate)
const Keg = mongoose.model('Keg', KegSchema)

module.exports = Keg;