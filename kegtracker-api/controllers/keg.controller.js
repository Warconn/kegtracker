// Accessing the Service that we just created

var KegService = require('../services/keg.service')

// Saving the context of this module inside the _the variable

_this = this


// Async Controller function to get the To do Lis
exports.getKegs = async function(req, res, next){

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    try{
    
        var kegs = await KegService.getKegs({}, page, limit)
        
        // Return the todos list with the appropriate HTTP Status Code and Message.
        
        return res.status(200).json({status: 200, data: kegs, message: "Succesfully Kegs Recieved"});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.createKeg = async function(req, res, next){
    console.log(req.body);
    var keg = {
        kegnum: req.body.kegnum,
        kegcapacity: req.body.kegcapacity,
        beername: req.body.beername, 
        currentvolume: req.body.currentvolume
    }

    try{
        
        // Calling the Service function with the new object from the Request Body
    
        var createdKeg = await KegService.createKeg(keg)
        return res.status(201).json({status: 201, data: createdKeg, message: "Succesfully Created Keg"})
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: "Keg Creation was Unsuccesfull"})
    }
}

exports.updateKeg = async function(req, res, next){

    // Id is necessary for the update

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var keg = {
        id,
        kegnum: req.body.kegnum ? req.body.kegnum : null,
        kegcapacity: req.body.kegcapacity ? req.body.kegcapacity : null, 
        beername: req.body.beername ? req.body.beername : "", 
        currentvolume: req.body.currentvolume ? req.body.currentvolume : null
    }

    try{
        var updatedKeg = await KegService.updateKeg(keg)
        return res.status(200).json({status: 200, data: updatedKeg, message: "Succesfully Updated keg"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeKeg = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await KegService.deleteKeg(id)
        return res.status(204).json({status:204, message: "Succesfully Keg Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}