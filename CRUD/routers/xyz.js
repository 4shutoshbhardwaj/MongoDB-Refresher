const express=require('express');
const router=express.Router();
const xyz=require('../models/xyz');

router.get('/',async(req,res)=>{
    try {
        const data=await xyz.find();
        res.json(data);
    } catch (error) {
        res.send(error);
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const dataS=await xyz.findById(req.params.id);
        res.json(dataS);
    } catch (error) {
        res.send(error);
    }
})

router.post('/',async(req,res)=>{
    const xyzP=new xyz({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })

    try {
        const a1=await xyzP.save();
        res.json(a1);
    } catch (error) {
        res.send(error);
    }
})

router.patch('/:id',async(req,res)=>{
    try {
        const xyzP=await xyz.findById(req.params.id);
        xyzP.sub=req.body.sub;
        const a1=await xyzP.save();
        res.json(a1);
    } catch (error) {
        res.send(error);
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const xyzP=await xyz.findById(req.params.id);
        // xyzP.sub=req.body.sub;
        const a1=await xyzP.remove();
        res.json(a1);
    } catch (error) {
        res.send(error);
    }
})

module.exports=router;