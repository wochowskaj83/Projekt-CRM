const ActionModel = require('../models/ActionModel');

module.exports = {
    addAction: (req, res) => {
        let newAction = new ActionModel({
            description: req.body.description,
            date: req.body.date,
            type: req.body.type,
            clientId: req.body.customerId,
        })

        newAction.save()
        .then((addActionRes)=>{
            return res.json(newAction)
        })
    },

    getActions: (req, res) => {
        ActionModel.find({ clientId: req.params.id })
            .then((actionsRes) => {
                
                return res.json(actionsRes)
            }) 
    }
}

