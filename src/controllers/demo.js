const createAuth=async(req,res)=>{
    const {name,email,paasword,confirmpass,role}=req.body
if(!email || !name || !paasword || !confirmpass|| !role){
    throw new Error('missing this feild')
}
if(paasword !== confirmpass){
    throw new Error("does not match")
}
const hashpassword=bcrypt.hash(paasword,8);

const payload={
    email,
    role,
    exp:moment().add(1,"days").unix()
}
const token= jwt.sign(payload.secretKey)

const filter={
    token,
    paasword:hashpassword,
    role,
    email,name,
}
const data= await User.create(filter)
}