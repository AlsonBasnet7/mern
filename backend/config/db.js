import mongoose from "mongoose"
export const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb+srv://alsonbasnet:<db_password>@cluster0.fkqwynd.mongodb.net/?appName=Cluster0");
        console.log("MongoDB connected Successfully");
    }
    catch(error){
        console.log("MongoDB didnt connected successfully", error);
        process.exit(1)//exit when the system has the failure
    }

}
