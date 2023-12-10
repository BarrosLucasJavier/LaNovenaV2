import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: 'public/img/productos',
    filename: (req, file, cb) => {
        const uniqueName = `product-${Date.now()}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage });

export default upload