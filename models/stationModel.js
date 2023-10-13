const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');

const stationSchema = mongoose.Schema({
    fid: {
        type: Number,
        required: [true, "Pls add fid value"]
    },
    id: {
        type: Number,
        required: [true, "Pls add id value"]
    },
    Name: {
        type: String
    },
    Address: {
        type: String
    },
    x: {
        type: String
    },
    y: {
        type: String
    },
    total_journeys_starting: {
        type: Number
    },
    total_journeys_ending: {
        type: Number
    }
}, {
    timestamps: true, // Fixed the typo here
});

stationSchema.plugin(mongoosastic, {
    host: 'localhost', // Elasticsearch cluster URL
    port: 9200,
    index: 'station', // Target Elasticsearch index
});

// Create your Station model
const Station = mongoose.model('Station', stationSchema); // Changed the model name to start with a capital letter

// Index existing data in MongoDB into Elasticsearch
Station.synchronize();



module.exports = Station; 
