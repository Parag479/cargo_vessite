var firebaseConfig = {
  apiKey: "AIzaSyABAPdvXu7PMjcCkCS9A17hIuDPxk0x9D8",
  authDomain: "brownboxcargo-73554.firebaseapp.com",
  projectId: "brownboxcargo-73554",
  storageBucket: "brownboxcargo-73554.appspot.com",
  messagingSenderId: "433863521395",
  appId: "1:433863521395:web:da32adca5992f7f5052606",
  measurementId: "G-WJKXE3TTE5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// var auth =firebase.auth();
//var db = firebase.firestore();
// firebase.auth().onAuthStateChanged(function(user) {
    
//   var userUid = auth.currentUser.uid;
  
//   db.collection('users').doc( userUid ).get().then(doc =>{
//      var o="";
   
//        o = doc.data().location; 
      

//        sessionStorage.setItem("url",o) 

//   });
// });


function signUp(){

  var email = document.getElementById("signup-email");
  var password = document.getElementById("signup-password");
  var conpassword=document.getElementById("con-password");
  var fname=document.getElementById("signup-username");
 var gst=document.getElementById("gst_num");
 var mobile=document.getElementById("Mob");
 
  var auth =firebase.auth();
  
  


  if( email.value != '' && password.value != ''  && conpassword.value != '' && gst.value !=''&& fname.value !='' && mobile.value !=''){

     if( password.value == conpassword.value){

       auth.createUserWithEmailAndPassword(email.value, password.value)
       .then(function(user)  {
        var image=document.getElementById("image").files[0];
        var imageName=image.name;
        var storageRef=firebase.storage().ref('images/'+imageName);
        var uploadTask=storageRef.put(image);

        uploadTask.on('state_changed',function (snapshot) {
 
          var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
          console.log("upload is " + progress +" done");
          uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
        
          console.log(downlaodURL);
        
             
          var userUid = auth.currentUser.uid;
          var db = firebase.firestore();
          db.settings({ timestampsInsnapshots:true });
          console.log("UID!!!!!!!!!!!!!!!!!!!!!!!", user, userUid);


          db.collection("users").doc(userUid).set({
                  email: email.value,
                  fname: fname.value,
                  id: userUid,
                  gst: gst.value,
                  mobile:mobile.value,
                  location: downlaodURL,
                  createdAt:firebase.firestore.FieldValue.serverTimestamp()

                  
              })
     
  
     .then(function() {
         console.log("Document successfully written!");
         alert("Signed Up");
         window.open("signin.html","_blank");
     })
     
     .catch(function(error) {
      
         console.error("Error writing document: ", error);
   
    }); 
   });

   });
})

  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        
          } else {
            alert(errorMessage);
          
          }
          console.log(error);
          });
      
          }
      else{
      alert("wrong password");
   
      }
     }else{
        alert("please fill up all the fields");
      }

}




function signOut(){
  var auth = firebase.auth();
  
  auth.signOut();
  alert("Signed Out");
  
  sessionStorage.setItem("u","");
  sessionStorage.setItem("url","");
  document.getElementById("user").style.visibility="hidden";
  document.getElementById("user_div").innerHTML = "";
  
  }


var email1 = document.getElementById("signin-email").value;
//console.log(email1);

// function signIn(){


// var email1 = document.getElementById("signin-email").value;
// var password = document.getElementById("signin-password").value;
// var auth=firebase.auth();

// var db = firebase.firestore();

// auth.signInWithEmailAndPassword(email1, password)
//   .then((user) => {
//     var userUid = auth.currentUser.uid;
//     db.collection('users').doc( userUid ).get().then(doc =>{
//        var h="";
     
//          h = doc.data().location;
      
    
//         alert("You Have Logged In Successfully...." ); 
//         var t=email1;
       
//         console.log(h);
//         sessionStorage.setItem("url",h)
//         window.open("index-two.html"); 
//       });
//       })
  
//     .catch(function(error) {

//    // });
// //});
//    // var t=email1;
//     // document.getElementById("user_div").innerHTML=t;
//   //var b=sessionStorage.getItem("val");
//   //console.log(b);
//    //window.location.href="index-two.html; 
  
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     alert("Error :" +errorMessage);
//   });
     
// }

// var auth=firebase.auth();
// var db= firebase.firestore();
// firebase.auth().onAuthStateChanged(function(user) {
//   if(user){
//    var url = window.location.hash.substr(1);
//   console.log(url);
//   var img = document.getElementById("user");
//   img.src =url;
// //    });
//   }
// });
// firebase.auth().onAuthStateChanged(function(user) {
//   if(user){
//     var userUid = auth.currentUser.uid;
//     var img=document.getElementById("user");

//     db.collection('users').doc( userUid ).get().then(doc =>{
//        var h="";
     
//          h = doc.data().id; 
//          alert(h);
//          img.src=h;  

  
//       });
//   }
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });




function signIn(){


  var email1 = document.getElementById("signin-email").value;
  var password = document.getElementById("signin-password").value;
  var auth=firebase.auth();
  
  var db = firebase.firestore();
  
  auth.signInWithEmailAndPassword(email1, password)
    .then((user) => {
      var userUid = auth.currentUser.uid;
      db.collection('users').doc( userUid ).get().then(doc =>{
         var h="";
       
           h = doc.data().location;
        
      
          alert("You Have Logged In Successfully...." ); 
          var t=email1;
         
          console.log(h);
          sessionStorage.setItem("url",h)
          window.open("index-two.html"); 
        });
        })
    
      .catch(function(error) {
alert("Please Enter correct Email and Password");
window.open("signin.html","_self");
     // });
  //});
     // var t=email1;
      // document.getElementById("user_div").innerHTML=t;
    //var b=sessionStorage.getItem("val");
    //console.log(b);
     //window.location.href="index-two.html; 
    
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error :" +errorMessage);



      
    });
       
  }
  








function profile1(){
  firebase.auth().onAuthStateChanged(function(user) {
    var user = firebase.auth().currentUser;
    
    
  
    if (user) {
      //var uid=user.uid;
      //email = user.email;
      document.getElementById("user_div").innerHTML = user.email; 
      document.getElementById("user_div").style.display="display";
     
      document.getElementById("myDropdown1").classList.toggle("show");
     // alert("Error :" +user.email);
      
    
     }
     else {
      
     
      document.getElementById("user_div").style.display="none";
     
    }
  });
  }

  




// function uploadFile() {

// var image=document.getElementById("image").files[0];

// var imageName=image.name;

// var storageRef=firebase.storage().ref('images/'+imageName);


// var uploadTask=storageRef.put(image);

// uploadTask.on('state_changed',function (snapshot) {
 
//   var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
//   console.log("upload is " + progress +" done");
//   uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {

//     console.log(downlaodURL);
// });
// },function (error) {  
// });
// }

function resetPass() {

var auth = firebase.auth();

var email =document.getElementById("reset-email");

if(email != ""){

auth.sendPasswordResetEmail(email.value).then(function(){

window.alert("Email has been sent to you successfully...Please Check");

})
.catch(function(error){
var errorCode = error.code;
var errorMessage = error.message;

window.alert("Error :" +errorMessage);

})
}
else{
window.alert("Please Write Your Email First....!")
}
}


function myFunction(){



var t =  firebase.auth().currentUser;

  if (t==null) {
      alert("Please Login First");
      window.open("login.html","_self");
    
  }
  else {
      
      window.open("orderdetail.html","_self");
     
} 

}

function sendMessage(){

  var username = document.getElementById("contact_name");
  var email_id = document.getElementById("contact_email");
  // var password=document.getElementById("con-password");
  var contact=document.getElementById("contact_number");
  var subject=document.getElementById("contact_subject");
  var message=document.getElementById("contact_message");

  if( username.value != '' && email_id.value != ''  && contact.value != '' && subject.value !='' && message.value !=''){

  var userUid = auth.currentUser.uid;
   var db = firebase.firestore();
  db.settings({ timestampsInsnapshots:true });
  
db.collection("Getintouch").doc().set({
  username: username.value,
  email_id: email_id.value,
  message: message.value,
  contact: contact.value,
  subject: subject.value,
   //id: userUid,
   createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      });
      alert("Thank You For Contact Us....We Will Call You Soon...");
      window.open("index-two.html","_blank");
     }else{
       alert("Please Fill Up All The Details");
     }

}


function askQuestion(){

  var username = document.getElementById("contact_name1");
  var email_id = document.getElementById("contact_email1");
  // var password=document.getElementById("con-password");
  var contact=document.getElementById("contact_number1");
  var subject=document.getElementById("contact_subject1");
  var message=document.getElementById("contact_message1");

  if( username.value != '' && email_id.value != ''  && contact.value != '' && subject.value !='' && message.value !=''){

  var userUid = auth.currentUser.uid;
   var db = firebase.firestore();
  db.settings({ timestampsInsnapshots:true });
  
db.collection("Askanyquestion").doc().set({
  username: username.value,
  email_id: email_id.value,
  message: message.value,
  contact: contact.value,
  subject: subject.value,
   //id: userUid,
   createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      });
      alert("Thank You For Contact Us....We Will Call You Soon...");
      window.open("index-two.html","_blank");
     }else{
       alert("Please Fill Up All The Details");
     }

}

function cal(){
    
  var res =document.getElementById("length").value;
  var res1 = document.getElementById("breight").value;
  var res2 =document.getElementById("height").value;
  var weight1 =(res*res1*res2/5000);
  var res3 =document.getElementById("weight").value;
  var res4 =document.getElementById("nop").value;
  var ct = document.getElementById("countryto").value;
  var num = Math.max(weight1,res3);
  console.log(num);
  console.log(ct);
  db.collection("rainfall").get().then((snapshot) => {
           
    var content = '';  
    
      snapshot.docs.forEach(doc => {
        var m=doc.id;
        var i;
        const articleRef = db.collection('rainfall').doc(m);
        articleRef.get().then(articleDoc => {
         var j= articleDoc.data();
          
         const article = db.collection('Calculation').doc("FUEL");
          article.get().then(artD => {
          var p = parseFloat(artD.data().AMOUNT);
           console.log(p);
        for(i=0;i<m.length;i++){
          if(m==num){
            var value = parseFloat(j[ct]);
            var f = value+p;
          sessionStorage.setItem("s",f);
            console.log(f);
          }
        }
       
       
      });
      });
    });
    });
   var   price1 = sessionStorage.getItem("s")*res4;
  document.getElementById("price").innerHTML = price1;
  sessionStorage.setItem("PRICE1",price1);
  }

function submitR(){

  var freight = document.getElementById("inlineRadio");
  var length = document.getElementById("length");
  // var password=document.getElementById("con-password");
  var height=document.getElementById("height");
  var breight=document.getElementById("breight");
  var weight=document.getElementById("weight");
  var country=document.getElementById("country");
  var countryto=document.getElementById("countryto");
  var email=document.getElementById("email");
  var NoOfPackage=document.getElementById("nop");
  var price = sessionStorage.getItem('PRICE1');

  if( freight.value != '' && length.value != ''  && height.value != '' && breight.value !='' && countryto.value !=''&& country.value !=''&& weight.value !=''&& email.value !=''&& NoOfPackage.value !=''){

  var userUid = auth.currentUser.uid;
   var db = firebase.firestore();
  //db.settings({ timestampsInsnapshots:true });
  
db.collection("Quatation").doc().set({
  freight: freight.value,
  length: length.value,
  height: height.value,
  breight: breight.value,
  weight: weight.value,
  country: country.value,
  countryto: countryto.value,
  email: email.value,
  NoOfPackage:NoOfPackage.value,
  Price:price,
  
  
   //id: userUid,
   createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      });
      
      alert("Thank You ");
      window.open("index-two.html");
     }else{
       alert("Please Fill Up All The Details");
     }

}

function track(){
  var e=[]; 
  var mu=[];  
  var ka=document.getElementById("trackno").value;
  console.log(ka);
  var db=firebase.firestore();
  var auth=firebase.auth();
  firebase.auth().onAuthStateChanged(function(user) {
   
    var userUid = auth.currentUser.uid;
    

    db.collection('users').doc( userUid ).get().then(doc =>{
       var h="";
     
         h = doc.data().id; 
        
        console.log(doc.data().id);
       
  
  db.collection('users').doc(h).collection('orderDetail').get().then((snapshot) => {
         
    var content = '';  
    
      snapshot.docs.forEach(doc => {

        db.collection('users').doc(h).collection('orderDetail').doc(doc.id).collection("pickup").get().then((hoo) => {
          hoo.docs.forEach(u=>{
        var t=u.id;
        
       console.log(t);
       db.collection('users').doc(h).collection('orderDetail').doc(doc.id).collection("pickup").doc(t).collection("shipAddresss").get().then((k) => {
        k.docs.forEach(i=>{
          var x=i.data().trackid;
          var f=i.data().track;
          console.log(i.data().track);
          console.log(x);
         e.push(x);
         mu.push(f);
         
        //var coverSummary = doc.id;
        sessionStorage.setItem("mkk", JSON.stringify(e));
        sessionStorage.setItem("mkh", JSON.stringify(mu));
        //console.log(coverSummary);

        // var ka=document.getElementById("trackno").value;
        // console.log(ka);

       
               
      
      }, error => {
        console.log(error.message);
      
      })
      
      
      
      });
    });
  });
});
  });
    
  //window.open("https://abcharshada4n.aftership.com/9405511200882546699381?page-name=tracking-page","_blank");

});


})

var uuuu=JSON.parse(sessionStorage.getItem("mkk"));
var uuu=JSON.parse(sessionStorage.getItem("mkh"));
console.log(uuuu);
var i;
for (i = 0; i < uuuu.length; i++) {
            // alert(storedArray[i]);
            console.log(uuuu);
if(ka == uuuu[i])
              
{ 
   
    window.open(uuu[i]);
   // console.log("uggg");
    //break;
//  throw BreakException;
    return false;
}

}
alert("Please Enter Valid TrackID");
}







