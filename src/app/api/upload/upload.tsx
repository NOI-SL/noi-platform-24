"use server";

const multer = require('multer');
const path = require('path');
const fs = require('fs');

if (!fs.existsSync('./public/files')) {
    fs.mkdirSync('./public/files', { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req:any, file:any, cb:any) {
        cb(null, './public/files/');
    },
    filename: function (req:any, file:any, cb:any) {
        const { email } = req.body;
        if (!email) {
            return cb(new Error('Email not provided'));
        }
        const extname = path.extname(file.originalname);
        const filename = `${email}-${Date.now()}${extname}`;
        cb(null, filename);
    }
});

const fileFilter = (req:any, file:any, cb:any) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('Only PDF files are accepted'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

module.exports = upload;

function getURLAndStore(document:any, email:any) {
    return new Promise((resolve, reject) => {
        upload.single('document')(null, { 
            body: { email: email },
            file: document
        }, (err:any) => {
            if (err) {
                return reject(err);
            }
            
            const extname = path.extname(document.originalname);
            const filename = `${email}-${Date.now()}${extname}`;
            const url = `/files/${filename}`;
            resolve(url);
        });
    });
}
