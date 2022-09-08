const addNewApplier= (obj)=>{
    var initArray  = [];
    var uid= localStorage.getItem('uid');
    var jid= localStorage.getItem('jobID');
    var cid = localStorage.getItem('cid')||0;
    var arr  =JSON.parse(localStorage.getItem('applierTable'))??initArray;
    var length = arr.length+1??1    ;
    var newApplier= {
        email:obj.email,
        phone:obj.phone,
        id:length,
     uid:uid,
jobID : jid,
        cid: cid,
        status:1
    }  ;

    arr.push(newApplier);
    localStorage.setItem('applierTable',JSON.stringify(arr));

    
}
const getAllApplires  = ()=>{
    const jobID = localStorage.getItem('jobID')||0;
    var arr = JSON.parse(localStorage.getItem('applierTable'))??[];
    var z =[];
 
   try{
   arr.forEach(e => {
    if(e.jobID==jobID){
z.push(e);
    }

   });
    // localStorage.setItem('applierTable',JSON.stringify(z))
   }
   catch(e){
    arr= [];
    
   }
//    var arr = JSON.parse(localStorage.getItem('applierTable'))??[];
console.log(z);
    return z ;

}
const moveToApplier = (id)=>{
    var users = getAllUsers();
    var appliers = getAllApplires();
    var user = users.filter((e)=>e.id==id)[0]??{};
    var moreData =appliers.filter((e)=>e.uid==id)[0]??{};
    var applier = {
        phone:moreData.phone,
        email:moreData.email,
        fullname:user.fullname,
         username:user.username
    }??{};
    console.log('my applier',applier)
    
    console.log('my more data',moreData)
    console.log('my user',user)
    localStorage.setItem('user',JSON.stringify(applier));
    window.location.href="applier.html"
}
const getSingleApplier = ()=>{

    var applier  = JSON.parse(localStorage.getItem('user'))??{};
    return applier;

}
const acceptApply =()=>{
    var appliers =getAllApplires();
    var uid   =localStorage.getItem('uid');
    var jid = localStorage.getItem('jobID');
    appliers = appliers.filter(e=>e.uid!=uid);
 var   allJobs = getAllJobs();
    allJobs= allJobs.filter(e=>e.id!=jid);
    localStorage.setItem('jobTable',JSON.stringify(allJobs));
    localStorage.setItem('applierTable',JSON.stringify(appliers));
    alert('user accepted succeffully !');
    window.location.href = 'my-jobs.html';
}
const rejectApply =()=>{
    var appliers =getAllApplires();
    var uid   =localStorage.getItem('uid'); 
    console.log(uid)
 console.log(appliers.length)
 var temp = [];
      appliers.forEach(e=>{if(e.uid!=uid) temp.push(e)});
   console.log(appliers.length);

    localStorage.setItem('applierTable',JSON.stringify(temp));
    alert('user rejected succeffully !');
    window.location.href = 'my-jobs.html';
}