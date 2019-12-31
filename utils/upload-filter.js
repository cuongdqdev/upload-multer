exports.uploadFilter = function(req, file, cb) {
    const message = 'cannot_upload';
    //Kiểm tra đuôi file
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        return cb(message, false);
    }
    
    //Kiểm tra mime type
    let mimetypeSuccess = ['image/jpeg', 'image/pjpeg', 'image/png'];
    if(!mimetypeSuccess.includes(file.mimetype)) {
        return cb(message, false);
    }
    cb(null, true);
};