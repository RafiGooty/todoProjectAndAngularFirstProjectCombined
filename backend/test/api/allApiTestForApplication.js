const express=require('express');
const app=express();
const expect=require('chai').expect;
const request=require('supertest');
const conn= require('../db/index.js');
const path=require("path")

//Post Data
const postRouter = require('../../routes/posts.js');
//User Data
const userRouter=require("../../routes/user.js");
const User =require('../../models/user');
const Post =require('../../models/post');
// Trying for Post
var bodyParser = require('body-parser');

describe('POST,GET,PUT,DELETE /apps/user/signup & /apps/data',()=>{
  var token='x';
  var getUserObjectId='x';
  var getPostObjectId='x';

  before((done)=>{
    conn.connect()
    .then(()=>done())
    .catch((err)=> done(err));
  })

  after((done)=>{
    conn.close()
    .then(()=>done())
    .catch((err)=>done(err));
  })

    it('Ok, SignUp User data',(done)=>{
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({
        extended: false
     }));

  function createUser(){
          //Create User
          signUpURL="/apps/user/signup";
          app.use("/apps/user",userRouter);
           request(app)
           .post(signUpURL )
           .send({  email: 'bootcamp18@investec.co.za',
                    password: 'My12Pro#$p' })
            .set('Accept','application/json')
            .expect(201)
            .end(function (err,res){
              if(err ) return done (err);
              console.log("user Created")
              const body=res.body;
              console.log(body);
              console.log(body.user.email);
              expect(body.user.email).to.be.equal("bootcamp18@investec.co.za")
              done();
            });
        }

     // get the User Info
     User.findOne({email:'bootcamp18@investec.co.za'})
     .then((user)=>{
       console.log(user)
              // Delete User if already Exists
              // and then create the same user again
              if ( !user){
                //Create User
                createUser();
              }
              else done();
     })
  });
//********************************************************START */
 // Login Test
 it('Ok, /login User data',(done)=>{

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
}));

//Login User
loginUpURL="/apps/user/login";
app.use("/apps/user",userRouter);
request(app)
.post(loginUpURL )
.send({  email: 'bootcamp18@investec.co.za',
      password: 'My12Pro#$p' })
.set('Accept','application/json')
.expect(200)
.end(function (err,res){
if(err ) return done (err);
console.log("user Created")
const body=res.body;
token="Bearer "+body.token;
 getUserObjectId=body.userId;
console.log(body.userId,"getUserObjectId");
done();
});

});
// Login Ends
//********************************************************START */
  // Create Post Test
it('Ok, /Create Post',(done)=>{
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
}));
app.use("/apps/data",postRouter);
request(app)
.post("/apps/data")
.set( 'authorization', token)
.field("Content-Type","multipart/form-data")
.field("title","Good Morning BootCamp18")
.field("content","Let your soul bloom with happiness and feelings of joy and renewal")
.attach("image", path.resolve(__dirname,"../../fileStore/goodMorning.JPG"))
.expect(201)
.end(function(err,res){
  console.log("hello")
  if(err) {
    throw err
  };
    done();
})
});
//********************************************************START */
  // Get all post Test Check if the data coming through
  // or not
  it('Ok, getting ALL posts data',(done)=>{
    getUrl="/apps/data?pages=100&currentPage=1";
    app.use("/apps/data",postRouter);
     request(app).get(getUrl)
    .then((res)=>{
       const body= JSON.parse(res.text).posts ;
       console.log(body);
       expect(body.length).greaterThan(0)
       done();
     })
     .catch((err)=>done(err))
    })
//********************************************************START */

// Get user Object ID to Get the Post Object ID
it('Ok, Get Specific object ID to be selected',(done)=>{
  app.use(bodyParser.urlencoded({
    extended: false
 }));
 app.use(bodyParser.json());

 Post.findOne({creator:getUserObjectId})
 .then(response=>{
   getPostObjectId=response._id;
   console.log(response);
   done();
 })
});


// Delete Post Test
it('Ok, /Get Specific Post ',(done)=>{
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use("/apps/data",postRouter);
request(app)
.get("/apps/data/"+getPostObjectId)
.expect(200)
.end(function(err,res){
console.log(res.body);
if(err) {
  throw err
};
  done();
})
});
//********************************************************START */

// Update Single  Post Test
it('Ok, /Update Specific Post Test Includes Login',(done)=>{
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
}));
app.use("/apps/data",postRouter);
request(app)
.put("/apps/data/"+getPostObjectId)
.set( 'authorization', token)
.field("Content-Type","multipart/form-data")
.field("title","Good Morning BootCamp18 Updated")
.field("content","Let your soul bloom with happiness and feelings of joy and renewal")
.attach("image", path.resolve(__dirname,"../../fileStore/goodMorning.JPG"))
.expect(200)
.end(function(err,res){
  console.log(res.body);
  if(err) {
    throw err
  };
    done();
})

});

//********************************************************START */
// Delete Post Test
it('Ok, /Delete Specific Post ',(done)=>{
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
}));


app.use("/apps/data",postRouter);
request(app)
.delete("/apps/data/"+getPostObjectId)
.set( 'authorization', token)
.expect(200)
.end(function(err,res){
  console.log(res.body);
  if(err) {
    throw err
  };
    done();
})

});
// Delete Post Endsb
//********************************************************END */
});
