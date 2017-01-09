const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    settings: {
        envelope: {
            attack: Number,
            decay: Number,
            sustain: Number,
            release: Number
        },
        wave: String,
        portamento: Number,
        filter: {
            type: String,
            frequency: {
                value: Number
            },
            Q: Number
        },
        combFilter: {
            delayTime: Number,
            resonance: Number
        }
    },
    votes: {
        type: Number,
        default: 0
    },
    favorites: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Patch', schema);