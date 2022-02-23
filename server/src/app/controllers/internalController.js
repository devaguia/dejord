const express = require('express')
const authMiddleware = require('../middlewares/auth')

const Internal = require('../models/Internal')

const router = express.Router()

//AUTHENTICATION TOKEN
router.use(authMiddleware)

// LIST ALL INTERNALS
router.get('/', async (req, res) => {
    try{
        const internals = await Internal.find().populate('user')

        return res.send({ internals })
    } catch (err) {
        return res.status(400).send({ error: "Error loading internals" })
    }
})

// LIST INTERNAL BY ID
router.get('/:internalId', async (req, res ) => {
    try{
        const internal = await Internal.findById(req.params.internalId).populate('user')

        return res.send({ internal })
    } catch (err) {
        return res.status(400).send({ error: "Error loading internal" })
    }
})

// CREATE INTERNAL
router.post('/', async(req, res) => {
    try{
        const internal = await Internal.create({ ...req.body, user: req.userId })

        return res.send({ internal })
    } catch (err) {
        return res.status(400).send({ error: "Error creating internal" })
    }
})

// UPDATE INTERNAL
router.put('/:internalId', async (req, res ) => {
    try{
        const internal = await Internal.findByIdAndUpdate(req.params.internalId, {
             ...req.body}, { new: true })

        return res.send({ internal })
    } catch (err) {
        return res.status(400).send({ error: "Error updating internal" })
    }
})

//DELETE INTERNAL
router.delete('/:internalId', async (req, res ) => {
    try{
        await Internal.findByIdAndRemove(req.params.internalId)

        return res.send()
    } catch (err) {
        return res.status(400).send({ error: "Error deleting internal" })
    }
})

module.exports = app => app.use('/internals', router)