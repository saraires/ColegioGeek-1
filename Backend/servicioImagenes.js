'use strict';

const process = require('process');
const { format } = require('util');
const { Router } = require("express");
const Multer = require('multer');
const bodyParser = require('body-parser');
const servicioImagenes = Router();
require("dotenv").config();

const { Storage } = require('@google-cloud/storage');

const storage = new Storage();
servicioImagenes.use(bodyParser.json());

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});

// const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);
const bucket = storage.bucket('colegio_geek');


servicioImagenes.post('/subida', multer.fields('foto', 'pdf'), (req, res, next) => {
    if (!req.file) {
        res.status(400).send('No file uploaded.');
        return;
    }

    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream();

    blobStream.on('error', err => {
        next(err);
    });

    blobStream.on('finish', () => {
        const publicUrl = format(
            `https://storage.googleapis.com/${bucket.name}/${blob.name}`
        );
        res.status(200).send(publicUrl);
    });

    blobStream.end(req.file.buffer);
});

module.exports = servicioImagenes;
