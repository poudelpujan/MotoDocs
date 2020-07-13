var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var bookingsSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bike: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bike',
        required: true
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Part',
        required: true
    },
    book_status: {
        type: String,
        default: 'Pending'
    },
    payment:{
        type: String,
        default: 'Not Done'
    },
    mechanic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mechanic',
        default:"5dbff4eadd9d4720c8b20996"
    },

    date: {
        type: String,
        required: true
    },
}, {
        timestamps: true
    });

var Bookings = mongoose.model('Booking', bookingsSchema);
module.exports = Bookings;