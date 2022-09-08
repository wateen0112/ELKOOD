
const login = function (obj){
 
    var CompaniesArr= getAllCompanies();
console.log(CompaniesArr)

console.log(obj['username'])
var userLogin  =CompaniesArr.filter((e)=>e['username']==obj['username']&&e['password']==obj['password'])||[];

try {
    
   
   if(userLogin[0]['id']){
    alert('login done ');
    localStorage.setItem('uid',userLogin[0]['id']);
    localStorage.setItem('type','2');
window.location.href='my-jobs.html'
   }
   
}


   catch(e){
        alert('invalid data');
      }


    }
