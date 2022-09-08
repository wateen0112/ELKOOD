const getAllUsers = function () {
    var initUsersData =[];
    var usersArr = JSON.parse(localStorage.getItem('userTable'))||initUsersData;
    return usersArr;
}
const getAllCompanies = function(){
    
var initCompanyData = [
    {
        id:1,
        name:'Elkood',
        city:'Aleepo',
        email:'elkoode@info.com',
        zip:'121222',
        username:'elkood',
        password:'123'
    }
    ,
    {
        id:2,
        name:'Sama',
        city:'Aleepo',
        email:'sama@info.com',
        zip:'213233',
        username:'sama',
        password:'456'
    }, 
]
    var CompanyArr = JSON.parse(localStorage.getItem('companyTable'))||initCompanyData;
    return CompanyArr;
}
var getAllJobs = ()=>{
    var initJobsArr = [];
var jobsArr = JSON.parse(localStorage.getItem('jobTable'))||initJobsArr;
console.log(jobsArr)
return jobsArr;

}
const  getCompanyName= function(id){
    var arr = getAllCompanies();
    
    var name=arr.filter(e=>e.id==id)[0].name||'';
    return name ; 
}
const getAllCites =function(){
    var CompaniesArr = getAllJobs(); 
    var temp  = [];
    CompaniesArr.forEach(element => {
        temp.push(element.city);
    });
    
    let cities =  temp.filter((item, i, ar) => ar.indexOf(item) === i);
   return cities
} 
const allJobs = (e)=>{
    var name = getCompanyName(e.companyId);



    $('#jobs').html( 
        $('#jobs').html()+
        `<div >
        <h1> ${name} </h1>
    <div class="details" >
    <h4>${e.title}</h4>
    <p> ${e.description}    
    
    
    </p>
    <div> <i class="fa fa-map-marker text-blue"></i> <h4>${e.city}</h4> <i class="fa fa-clock-o text-blue ml-10"></i> <h4>${e.hours}</h4> </div>
    </div>
    
          <div class="btn-container">  <span  class="cursor-pointer px-2 " onclick="applyJob(${e.id}, ${e.companyId})" >Apply Now ! </span></div>
    
    </div>`);
}
const myAllJobs = (e)=>{
    var name = getCompanyName(e.companyId);



    $('#jobs').html( 
        $('#jobs').html()+
        `<div >
        <h1> ${name} </h1>
    <div class="details job-details " onclick="clickEvent(${e.id})"  >
    <h4>${e.title}</h4>
    <p> ${e.description}    
    
    
    </p>
    <div> <i class="fa fa-map-marker text-blue"></i> <h4>${e.city}</h4> <i class="fa fa-clock-o text-blue ml-10"></i> <h4>${e.hours}</h4> </div>
    </div>
    
       
    </div>
    </div>`);
}