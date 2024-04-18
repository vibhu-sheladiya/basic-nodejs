const jwt = require("jsonwebtoken");
const Teacher = require("../model/teacher.model");
const scretKey = "csvscvsvsuwdvdfyd";

const teacherAuth = () => (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      throw new Error("please authenticated");
    }
    const decoded = jwt.verify(token.replace("Bearer ", ""), scretKey);
    if (!decoded) {
      throw new Error("invalid token");
    }
    let teacher = Teacher.findOne({ email: decoded.email });
    token = req.token;
    teacher = req.teacher;
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = { teacherAuth };
