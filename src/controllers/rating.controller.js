const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const scretKey = "csvscvsvsuwdvdfyd";
const moment = require("moment");
const Teacher = require("../model/teacher.model");
const fs = require("fs");
const path = require("path");

const createRating = async (req, res) => {
    try{
    const {teacherid,studentid}=req.body;
    if(!teacherid || !studentid){
        return res.status(400).send({message:"Teacher id and student id are required"});
    }
    const teacher=await Teacher.findById({studentid})
    if(!teacher){
        return  res.status(404) .send({ message: `No user found for `})
    }
    const teachers=await  Teacher.create() 
    res.status(200).json({data:teachers,message:'create rating success'});  
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

module.exports = {
    createRating
};
