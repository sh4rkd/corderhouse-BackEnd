const express = require('express');
const userRouter = express.Router();

userRouter.get("/:userId",(req,res)=>{
    res.send({userId: req.params.userId});
});

module.exports = userRouter;