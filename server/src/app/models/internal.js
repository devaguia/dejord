const mongoose = require('../../database')
const bcrypt = require('bcryptjs')

//ToDo:. CREATE CONTRACT FRONT/BACK INTERNAL
const InternalSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    nickname: {
        type: String,
        require: true,
    },
    address: {
        street: {
            type: String,
            require: true,
        },
        number: {
            type: Number,
            require: true,
        },
        neighborhood: {
            type: String,
            require: true,
        },
        city: {
            type: String,
            require: true,
        },
        uf: {
            type: String,
            require: true,
        },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Internal = mongoose.model('Internal', InternalSchema)

module.exports = Internal