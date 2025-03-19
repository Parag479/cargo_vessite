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
  var auth=firebase.auth();
  var db= firebase.firestore();
  firebase.auth().onAuthStateChanged(function(user) {
    
    var userUid = auth.currentUser.uid;
    var img=document.getElementById("user");
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var gst=document.getElementById("gst");
var mobile=document.getElementById("Mob");
    db.collection('users').doc( userUid ).get().then(doc =>{
       var h="";
     
         h = doc.data().location; 
         img.src=h;     
    
         name.innerHTML=doc.data().fname;
         email.innerHTML=doc.data().email;
         mobile.innerHTML=doc.data().mobile;
         gst.innerHTML=doc.data().gst;
        console.log(doc.data().gst);
        //console.log(doc.data().id);
       sessionStorage.setItem("id",doc.data().id)
        // window.open("index-two.html?#"+h); 
      });
  });




  var auth=firebase.auth();
  function upload(){
     //var m=$('#user')[0];
   // m.src = (window.URL ? URL : webkitURL).createObjectURL(input.files[0]);
    // console.log(m.src);
  //var db= firebase.firestore();
  var image=document.getElementById("imgupload").files[0];
  // image.src = URL.createObjectURL(event.target.files[0]);
  var imageName=image.name;
  var storageRef=firebase.storage().ref('images/'+imageName);
  var uploadTask=storageRef.put(image);

  uploadTask.on('state_changed',function (snapshot) {
  //firebase.auth().onAuthStateChanged(function(user) {
    
  var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
  console.log("upload is " + progress +" done");
  uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {

  console.log(downlaodURL);
  sessionStorage.setItem("u",downlaodURL);
  sessionStorage.setItem("url","");``
    var userUid = auth.currentUser.uid;
    console.log(userUid);
    db.collection('users').doc(userUid)
    .update(
        {
            location: downlaodURL,
          
        },
        
    )
  })

  .catch(function(error) {
  
    console.error("Error writing document: ", error);
  
  });
  
    });
    alert("profile updated successfully...");
  
  }
  

function loadFile2(event) {
  var image = document.getElementById('user');
  image.src = URL.createObjectURL(event.target.files[0]);
};

// var image=document.getElementById("image").files[0];
// var imageName=image.name;
// var storageRef=firebase.storage().ref('images/'+imageName);
// var uploadTask=storageRef.put(image);

// uploadTask.on('state_changed',function (snapshot) {

//   var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
//   console.log("upload is " + progress +" done");
//   uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {

//   console.log(downlaodURL);


//   });
// });

  function editable() {
    var h1 = document.getElementsByTagName("H5")[0];
    var att = document.createAttribute("contenteditable");
    att.value = "true";
    h1.setAttributeNode(att);
  }
  
  function noteditable() {
    var h1 = document.getElementsByTagName("H5")[0];
    var att = document.createAttribute("contenteditable");
    att.value = "flase";
    h1.setAttributeNode(att);
    var ha=document.getElementById("name").innerHTML;
    console.log(ha);

    var auth=firebase.auth();
  var db= firebase.firestore();
  firebase.auth().onAuthStateChanged(function(user) {
    var userUid = auth.currentUser.uid;
    console.log(userUid);
    db.collection('users').doc(userUid)
    .update(
        {
            fname: ha,
            
        },
    );
  });
}


  function editable1() {

    var m1 = document.getElementsByTagName("span")[0];
    var att = document.createAttribute("contenteditable");
    att.value = "true";
    m1.setAttributeNode(att);
  }
  
  function noteditable1() {
    var m1 = document.getElementsByTagName("span")[0];
    var att = document.createAttribute("contenteditable");
    att.value = "flase";
    m1.setAttributeNode(att);
    var mk=document.getElementById("email").innerHTML;
    console.log(mk);

    var auth=firebase.auth();
    var db= firebase.firestore();
    firebase.auth().onAuthStateChanged(function(user) {
      var userUid = auth.currentUser.uid;
      console.log(userUid);
      db.collection('users').doc(userUid)
      .update(
          {
              email: mk,
              
          },
      );
    });
  }
  

  function editable2() {

    var m = document.getElementsByClassName("gstt")[0];
    var att = document.createAttribute("contenteditable");
    att.value = "true";
    m.setAttributeNode(att);
  }
  
  function noteditable2() {
    var m = document.getElementsByClassName("gstt")[0];
    var att = document.createAttribute("contenteditable");
    att.value = "flase";
    m.setAttributeNode(att);
    var m=document.getElementById("gst").innerHTML;
    console.log(m);

    var auth=firebase.auth();
    var db= firebase.firestore();
    firebase.auth().onAuthStateChanged(function(user) {
      var userUid = auth.currentUser.uid;
      console.log(userUid);
      db.collection('users').doc(userUid)
      .update(
          {
              gst: m,
              
          },
      );
    });
  }

// var db = firebase.firestore();
// db.settings({ timestampsInsnapshots:true });

//         const coverTransTableBody = document.getElementById('fields1');
//        //  db.collection("users").get().then((snapshot) => {
//        //   snapshot.forEach((doc) => {
//        //   //  var id= doc.id;
//        //   //  console.log(id);
         
//        //    var u=0;
       
//          // let params = (new URL(document.location)).searchParams;
//             let id = sessionStorage.getItem("id");
//             console.log(id);
          
//             db.collection('users').doc(id).collection('orderDetail').get().then(snap => {
//               snap.forEach(doc => {
//                   console.log(doc.data());
              
//                var coverSummary = doc.id;
//                console.log(coverSummary);
//                let html = `<tr>
//                        <td>${coverSummary}</td>
                       
//                        <td>${doc.data().createdAt.toDate().toDateString()}</td>
//                         <td> 
//                        <div class="button-list"style="margin-left:-6px">
//                          <a href="profiledetail.html?a=${coverSummary}&b=${id}" class="btn"><i class="ti ti-files">View</i></a>
                      
//                        </div>
//                      </td>
//                        </tr>`;
//                //content += html;
//                coverTransTableBody.innerHTML += html;
           
//              }, error => {
//                console.log(error.message);
//              });
           
         
//             });
         // });
         var db = firebase.firestore();
         db.settings({ timestampsInsnapshots:true });
         
                 const coverTransTableBody = document.getElementById('fields1');
                //  db.collection("users").get().then((snapshot) => {
                //   snapshot.forEach((doc) => {
                //   //  var id= doc.id;
                //   //  console.log(id);
                  
                //    var u=0;
                
                  // let params = (new URL(document.location)).searchParams;
                     let id = sessionStorage.getItem("id");
                     console.log(id);
                   
                     db.collection('users').doc(id).collection('orderDetail').get().then(snap => {
                       snap.forEach(doc => {
                           console.log(doc.data());
                     
                      db.collection('users').doc(id).collection('orderDetail').doc(doc.id).collection("pickup").get().then((hoo) => {
                             hoo.docs.forEach(u=>{
                           var t=u.id;
                           
                          console.log(t);
                      db.collection('users').doc(id).collection('orderDetail').doc(doc.id).collection("pickup").doc(t).collection("shipAddresss").get().then((k) => {
                           k.docs.forEach(i=>{
                             var x=i.data().trackid;
         
                        var coverSummary = doc.id;
                        console.log(coverSummary);
                        let html = `<tr>
                                <td>${coverSummary}</td>
                                <td>${doc.data().createdAt.toDate().toLocaleString("en-IN")}</td>
                                <td>${x}</td>
                                 <td> 
                                <div class="button-list"style="margin-left:-6px">
                                  <a href="profiledetail.html?a=${coverSummary}&b=${id}" class="btn"><i class="ti ti-files">View</i></a>
 
                                
                                </div>
                              </td>
                                </tr>`;
                        //content += html;
                        coverTransTableBody.innerHTML += html;
                    
                      }, error => {
                        console.log(error.message);
                      });
                     });
                   });
                 });
               });
                  
                     });