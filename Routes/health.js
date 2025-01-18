import express from 'express';
const Router = express.Router();

Router.get('/',(req,res)=>{
    return res.send('App is Healthy');
})

export default Router;
