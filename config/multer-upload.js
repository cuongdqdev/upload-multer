let multer                     = require('multer');
let path                       = require('path');
const { uploadFilter }         = require('../utils/upload-filter');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let outputPath = path.resolve(__dirname, '../images');
      cb(null, outputPath)
    },
    filename: function (req, file, cb) {
        let newFileName =`${file.originalname}_${Date.now()}`;
        cb(null, `${newFileName}${path.extname(file.originalname)}`)
    }
})

let upload = multer({ storage: storage, fileFilter: uploadFilter });

let uploadSingle = upload.single('file');

module.exports = {
  uploadSingle,
}