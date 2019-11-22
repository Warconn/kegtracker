var KegService = require('../services/keg.service')
_this = this

exports.getKegs = async function(req, res, next){
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    try{
    
        var kegs = await KegService.getKegs({}, page, limit)   
        return res.status(200).json({status: 200, data: kegs, message: "Succesfully Kegs Recieved"});
        
    }catch(e){
       return res.status(400).json({status: 400, message: e.message});      
    }
}

exports.createKeg = async function(req, res, next){
    var keg = {
        kegnum: req.body.kegnum,
        kegcapacity: req.body.kegcapacity,
        currentvolume: req.body.currentvolume,
        beer: req.body.beer
    }

    try{
        var createdKeg = await KegService.createKeg(keg)
        return res.status(201).json({status: 201, data: createdKeg, message: "Succesfully Created Keg"})
    }catch(e){
        return res.status(400).json({status: 400, message: "Keg Creation was Unsuccesfull" + e})
    }
}

exports.updateKeg = async function(req, res, next){
    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;
    var keg = {
        id,
        kegnum: req.body.kegnum ? req.body.kegnum : 0,
        kegcapacity: req.body.kegcapacity ? req.body.kegcapacity : null, 
        currentvolume: req.body.currentvolume ? req.body.currentvolume : null,
        beer: req.body.beer ? req.body.beer : null
    }

    try{
        var updatedKeg = await KegService.updateKeg(keg)
        return res.status(200).json({status: 200, data: updatedKeg, message: "Succesfully Updated keg"})
    }catch(e){
        return res.status(400).json({status: 400., message: "404" + e.message})
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