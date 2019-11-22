var Keg = require('../models/keg.model')

_this = this

exports.getKegs = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    
    try {
        var kegs = await Keg.paginate(query, options)
        return kegs;
    } catch (e) {
        throw Error('Error while Paginating kegs')
    }
}

exports.createKeg = async function(keg){
    var newKeg = new Keg({
        kegnum: keg.kegnum,
        kegcapacity: keg.kegcapacity,
        currentvolume: keg.currentvolume,
        beer: []
    });
    newKeg.beer.push(keg.beer);

    try{
        var savedKeg = await newKeg.save()

        return savedKeg;
    }catch(e){
        throw Error("Error while Creating keg")
    }
}

exports.updateKeg = async function(keg){
    var id = keg.id
    try{  
        var oldKeg = await Keg.findById(id);
    }catch(e){;
        throw Error("Error occured while Finding the keg")
    }

    if(!oldKeg){
        return false;
    }

    oldKeg.kegnum = keg.kegnum
    oldKeg.kegcapacity = keg.kegcapacity
    oldKeg.currentvolume = keg.currentvolume
    oldKeg.beer = keg.beer

    try{
        var savedKeg = await oldKeg.save()
        return savedKeg;
    }catch(e){
        throw Error("And Error occured while updating the keg");
    }
}

exports.deleteKeg = async function(id){
    try{
        var deleted = await Keg.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Keg Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Keg" + e)
    }
}