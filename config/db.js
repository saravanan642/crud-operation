const Database = async(mongoose)=>{
    try{
       await mongoose.connect(process.env.MONGO_URL);
        console.log("momgoose connected successfullly");
    }catch(error){
        console.log("Error connected to mongoose :",error);

    }
};

module.exports =Database;