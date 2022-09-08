const addNewJob= function(obj ){
    
    
    var arr = getAllJobs();
    const companyId = localStorage.getItem('uid')||0;
    const newJob = {
        id:arr.length+1,
        companyId:companyId,
        title :obj.title,
        description:obj.description,
        city:obj.city,
        hours:obj.hours
    }
arr.push(newJob);
localStorage.setItem('jobTable',JSON.stringify(arr));
console.log(arr)
}

const myJobs =function (  id){
const jobs  = getAllJobs()||[];
var newjobs = [];
jobs.forEach(job=>{

if(job.companyId== id ){
    newjobs.push(job);
    
}


});
return newjobs;
}
const applyJob = (id,cid)=>{
localStorage.setItem('jobID',id);
console.log('cid:',cid)
console.log('id',id);
localStorage.setItem('cid',JSON.stringify(cid));
window.location.href='job-apply.html';
}
