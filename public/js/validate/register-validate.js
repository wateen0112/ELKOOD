
$(document).ready(()=>{
    var errs =0;
    var uid = localStorage.getItem('uid')??0;
    if(uid!=0)
{
  window.location.href = '/public';
}
$('[name="user-register-btn"]').click((e)=>{
    e.preventDefault();
  var username = $('[name="username"]').val();
  var fullname = $('[name="fullname"]').val();
  var password = $('[name="password"]').val();
  
  var c_password = $('[name="c_password"]').val();
if(checkEmpty(username)==true) {
    $('#usernameerr').html('Username Required !'); errs++;
}
else $('#usernameerr').html('');
 if (checkEmpty(fullname)) {
    $('#fullnameerr').html('fullname Required !');
    errs++;
 }else $('#fullnameerr').html('');


   if (checkEmpty(password)){
    $('#passworderr').html('password Required !'); errs++;
   }else $('#passworderr').html('');
   if (checkEmpty(c_password))
   {
    $('#c_passworderr').html('confirm password Required !'); errs++;
   }
   else $('#c_passworderr').html('');
   if(matchedPassword(password,c_password)==false)
   {
    $('#passworderr').html('password Not Matching !');
    errs++;
   }
   else  if (!checkEmpty(password))  $('#passworderr').html('');
   if(!checkEmpty(username)&&!checkEmpty(password)&&!checkEmpty(fullname)&&!checkEmpty(c_password)&&matchedPassword(password,c_password))errs=0;
if(errs==0){
 try{
  var obj  = {
    fullname:fullname,
    username:username,
    password:password
  }
  registerNewUser(obj);
  


 } 
 catch(e){
  console.log(e);
 }
}

})
$('#show1').click(()=>{
    
    toggleShow('password','show1')
});

$('#show2').click(()=>{
    
  toggleShow('c_password','show2');
});
$('#hide2').click(()=>{
 toggleHide('c_password','show2','hide2');
});

});