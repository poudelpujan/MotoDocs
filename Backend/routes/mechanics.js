var express = require('express');
var Mechanics = require('../models/mechanics');
var verify = require('../verify');
// var fs = require('fs');
var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        Mechanics.find({})
            .then((mechanics) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(mechanics);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Mechanics.create(req.body)
            .then((mechanic) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(mechanic);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported!');
    })
    .delete((req, res, next) => {
        Mechanics.deleteMany({})
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

router.route('/:id')
    .get((req, res, next) => {
        Mechanics.findById(req.params.id)
            .then((mechanic) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(mechanic);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        Mechanics.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
            .then((mechanic) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(mechanic);
            }, (err) => next(err))
            .catch((err) => next(err));
    });


// router.route('/:id/comments')
//     .get((req, res, next) => {
//         Heroes.findById(req.params.id)
//             .then((hero) => {
//                 if (hero != null) {
//                     res.statusCode = 200;
//                     res.setHeader('Content-Type', 'application/json');
//                     res.json(hero.comments);
//                 }
//                 else {
//                     err = new Error('Hero ' + req.params.id + ' not found');
//                     err.status = 404;
//                     return next(err);
//                 }
//             }, (err) => next(err))
//             .catch((err) => next(err));
//     })
//     .post((req, res, next) => {
//         Heroes.findById(req.params.id)
//             .then((hero) => {
//                 if (hero != null) {
//                     hero.comments.push(req.body);
//                     hero.save()
//                         .then((hero) => {
//                             res.statusCode = 200;
//                             res.setHeader('Content-Type', 'application/json');
//                             res.json(hero);
//                         }, (err) => next(err));
//                 } else {
//                     err = new Error('Hero ' + req.params.id + ' not found');
//                     err.status = 404;
//                     return next(err);
//                 }
//             }, (err) => next(err))
//             .catch((err) => next(err));
//     });

module.exports = router;