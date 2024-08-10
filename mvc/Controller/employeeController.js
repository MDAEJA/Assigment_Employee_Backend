const employeeModel = require("../Model/model");


const create = async(req,res)=>{
    try{
        const {firstName,lastName,email,password,confirmPassword,department,designation,salary} = req.body;

        if (!firstName || !lastName || !email || !password || !confirmPassword || !department || !designation || !salary) {
            return res.status(404).json({
                status: false,
                message: "All fields are required!"
            });
        }

        const findEmployee = await employeeModel.findOne({email});

        if(findEmployee){
            return res.status(401).json({
                status : false,
                message : "Email is already registered !!!"
            })
        }

        if(password !== confirmPassword){
            return res.status(404).json({
                status: false,
                message: "PASSWORD AND CONFIRM PASSWORD IS NOT SAME !!!"
            });
        }

        if(!(email.includes("@"))){
            return  res.status(404).json({
                status : false,
                message : "Incorrect Email"
            })
        };

        

        const userData = {firstName,lastName,email,password,confirmPassword,department,designation,salary};
        const newEmployee = new employeeModel({firstName,lastName,email,password,confirmPassword,department,designation,salary})
        await newEmployee.save();

        res.json({
            status : true,
            userData,
            message : "Successs !!"
        })

    }
    catch(err){
        return res.status(404).json({
            status : false,
            message : err.message
        })
    }
}

const listOfEmployee = async(req,res)=>{
    try{
     const employeeData = await employeeModel.find();
     res.json({
        status :true,
        employeeData,
      })
    }
    catch(err){
        res.json({
            status :false,
            message : "Somethings went wrong, please try again but later"
        })
    }
}

const updateEmployee = async(req,res)=>{
    try{
     const {email,password,confirmPassword} = req.body;
     const employeeIsPresent = await employeeModel.findOne({email});
     const data = req.body;

     if(!employeeIsPresent){
        return res.status(401).json({
            status : false,
            message : "Email is not  registered !!!"
        })
    }
    if(password !== confirmPassword){
        return res.status(404).json({
            status: false,
            message: "PASSWORD AND CONFIRM PASSWORD IS NOT SAME !!!"
        });
    }
    await employeeModel.findByIdAndUpdate(employeeIsPresent._id,req.body);
    res.json({
        status :true,
        message : 'Update Successfully !!!!'
      })
    }
    catch(err){
        res.json({
            status :false,
            message : "Somethings went wrong, please try again but later"
        })
    }
}

const deleteEmployee = async(req,res)=>{
    try{
    const {email} = req.body
    const employeeIsPresent = await employeeModel.findOne({email});
    if(!employeeIsPresent){
        return res.status(401).json({
            status : false,
            message : "Email is not  registered !!!"
        })
    }
    await employeeModel.findByIdAndDelete(employeeIsPresent._id);
    res.json({
        status :true,
        content :"Delete Success"
      })
    }
    catch(err){
        res.json({
            status :false,
            message : "Somethings went wrong, please try again but later"
        })
    }
}

const employeecontrollers = {
    create,listOfEmployee,updateEmployee,deleteEmployee
}

module.exports = employeecontrollers;