
$(document).ready(()=>{
  var uid = localStorage.getItem('uid')??0;
  if(uid!=0)
{
window.location.href = '/public';
} 
    var errs =0;
    console.log('login is working !');

$('[name="login-btn"]').click((e)=>{
    e.preventDefault();
  var username = $('[name="username"]').val();
  
  var password = $('[name="password"]').val();
  

if(checkEmpty(username)) {
    $('#usernameerr').html('Username Required !'); errs++;
}
else $('#usernameerr').html('');


   if (checkEmpty(password)){
    $('#passworderr').html('password Required !'); errs++;
   }else $('#passworderr').html('');
  
   if(!checkEmpty(username)&&!checkEmpty(password))errs=0;
if(errs==0){
 try{
  var obj  = {
  
    username:username,
    password:password
  }
  console.log(username);
  console.log(password);
  var loginFlag = login(obj);
  console.log(loginFlag);



 } 
 catch(e){
  console.log(e);
 }
}

})
$('#show1').click(()=>{
    
    toggleShow('password','show1')
});


});