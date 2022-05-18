const express = require('express');
const app = express();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname+"-"+Date.now());
    }
});

const upload = multer({storage: storage});

app.post("/upload", upload.single('file'), (req, res) => {
    console.log(req.file);
    res.send("Archivo subido");
});

app.get("/upload",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.listen(8080,()=>{
    console.log("Servidor corriendo en el puerto 8080");
});