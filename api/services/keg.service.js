// Gettign the Newly created Mongoose Model we just created 

var Keg = require('../models/keg.model')

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the To do List

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
    
    // Creating a new Mongoose Object by using the new keyword

    var newKeg = new Keg({
        kegnum: keg.kegnum,
        kegcapacity: keg.kegcapacity,
        beername: keg.beername, 
        currentvolume: keg.currentvolume
    });

    try{
        var savedKeg = await newKeg.save()

        return savedKeg;
    }catch(e){
      
        // return a Error message describing the reason     

        throw Error("Error while Creating keg")
    }
}

exports.updateKeg = async function(keg){
    var id = keg.id

    try{
        //Find the old Todo Object by the Id
    
        var oldKeg = await Keg.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the keg")
    }

    // If no old Todo Object exists return false

    if(!oldKeg){
        return false;
    }

    console.log(oldKeg)

    oldKeg.kegnum = keg.kegnum
    oldKeg.kegcapacity = keg.kegcapacity
    oldKeg.beername = keg.beername
    oldKeg.currentvolume = keg.currentvolume

    console.log(oldKeg)

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
        throw Error("Error Occured while Deleting the Keg")
    }
}