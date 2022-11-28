// DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const { Band, Meet_greet, Event, Set_time, Stage, Stage_event } = db
const { Op } = require('sequelize')

//FIND ALL EVENTS- index route
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll()
        res.status(200).json(foundEvents)
    } catch {
        res.status(500).json(error)
    }
})

//FIND SPECIFIC EVENT- show route
events.get('/:name', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { name: req.params.name },
            include: [{
                model: Meet_greet,
                as: "meet_greets",
                include: { model: Band, as: "band" }
            },
            {
                model: Set_time,
                as: "set_times",
                include: [{ model: Band, as: "band" },
                { model: Stage, as: "stage" }]
            },
            {
                model: Stage,
                as: "stages",
                through: { attributes: []}
            }
                
            ]
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE AN EVENT- create route
events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE AN EVENT- update route
events.put('/:id', async (req, res) => {
    try {
        const updatedEvents = await Event.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} event(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE AN EVENT- delete route
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvents = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvents} event(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})




// EXPORT
module.exports = events
