const login = function (obj){
    var usersArr = getAllUsers();
   


console.log(obj['username'])
var userLogin  =usersArr.filter((e)=>e['username']==obj['username']&&e['password']==obj['password'])||[];

try {
    
   
   if(userLogin[0]['id']){
    alert('login done ');
    localStorage.setItem('uid',userLogin[0]['id']);
    localStorage.setItem('type','1');
window.location.href='all-jobs.html';
   }
   
}


   catch(e){
        alert('invalid data');
      }


    }
