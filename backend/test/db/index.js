const mongoose=require('mongoose');

function connect(){
  return new Promise((resolve,reject) =>{
    mongoose.connect("mongodb+srv://RafiGooty:WyxbdBZnNqfCxL4i@cluster0-fl562.mongodb.net/bootcamp18?retryWrites=true&w=majority",{useCreateIndex:true,useNewUrlParser: true,useUnifiedTopology:true})
    // .then(()=>{
    //   console.log('connected to database!');
    // })
    // .catch((err)=>{
    //   console.log(err,'connection failed!');
    // })
    .then((res,err)=>{
      if(err) {console.log('failed connection'); return reject(err)};
      console.log('connected');
      resolve();
    })

  });
}

function close(){
  return mongoose.disconnect();
}


module.exports={connect, close}
