// Gettign the Newly created Mongoose Model we just created 

var Keg = require('../models/keg.model')

// Saving the context of this module inside the _the variable
_this = this

exports.getKegs = async function(query, page, limit){

    // Options setup for the mongoose paginate

    var options = {
        page,
        limit
    }
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var kegs = await Keg.paginate(query, options)
        
        // Return the todod list that was retured by the mongoose promise

        return kegs;

    } catch (e) {

        // return a Error message describing the reason 

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

    console.log("keg.beer");
    console.log(keg.beer);

    oldKeg.kegnum = keg.kegnum
    oldKeg.kegcapacity = keg.kegcapacity
    oldKeg.currentvolume = keg.currentvolume
    oldKeg.beer = keg.beer

    console.log("oldKeg.beer");
    console.log(oldKeg.beer);

    try{
        var savedKeg = await oldKeg.save()
        return savedKeg;
    }catch(e){
        throw Error("And Error occured while updating the keg");
    }
}

exports.deleteKeg = async function(id){

    console.log("attempting to delete keg id" + id)

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