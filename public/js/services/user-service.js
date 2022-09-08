
const registerNewUser = function (obj) {
   
    var arr =getAllUsers();
   var length = arr.length+1;
  
    var newUser = {
id :length,
fullname:obj.fullname,
username:obj.username,
password:obj.password

    }
arr.push(newUser);
length = arr.length;

console.log('woking on updte ')
localStorage.setItem('type','1');

localStorage.setItem('uid',JSON.stringify(parseInt(length+1)));
localStorage.setItem('userTable',JSON.stringify(arr));
alert('user Added Successfully !!!!');

window.location.href = "login.html";
console.log(arr);

  }
  const getUserFullName = (id)=>{
    var users  = getAllUsers()??[];
try{
    users = users.filter (e=>e.id ==id);
    return users[0].fullname??[];
}
catch(e){
 
    return [];
}

  }