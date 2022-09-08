
$(document).ready(()=>{
    var errs =0;
    var uid = localStorage.getItem('uid')??0;
    if(uid!=0)
{
  window.location.href = '/public';
} 

$('[name="btn"]').click((e)=>{
  e.preventDefault();
  $('#show1').click(toggleShow('password','show1'));
  $('#show2').click(toggleShow('c_password','show2'));
    e.preventDefault();
  var username = $('[name="username"]').val();
  var companyName = $('[name="name"]').val();
  var email = $('[name="email"]').val();
  var zip = $('[name="zip"]').val();
  var city = $('[name="city"]').val();
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
 if (checkEmpty(companyName)){
    $('#nameerr').html('Company Name  is  Required !'); errs++;
   }else $('#nameerr').html('');
   if (checkEmpty(email)){
    $('#emailerr').html('Email   is  Required !'); errs++;
   }else $('#emailerr').html('');
   if (validateEmail(email)){
    $('#emailerr').html('Email   is  not Valid !'); errs++;
   }else $('#emailerr').html('');
 if (checkEmpty(zip)){
    $('#ziperr').html('Zip Code  is  Required !'); errs++;
   }else $('#ziperr').html('');
   if (validateZip(zip)){
    $('#ziperr').html('Zip Code  is  not valid !'); errs++;
   }else
 if (checkEmpty(city)){
    $('#cityerr').html('City is  Required !'); errs++;
   }else $('#cityerr').html('');

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
   if(!checkEmpty(username)&&!checkEmpty(password)&&!checkEmpty(fullname)&&!checkEmpty(c_password)&&
   !checkEmpty(companyName)&&
   !checkEmpty(zip)&&
   !validateEmail(email)&&
   !validateZip(zip)&&
   !checkEmpty(city)&&
   checkEmpty(email)&&matchedPassword(password,c_password))errs=0;
   console.log(errs);
if(errs==0){
  var myObj = {
    name :companyName,
    email:email,
    password:password,
    username:username,
    city:city,
    zip:zip
  }
  try{
registerNewCompany(myObj);
alert('Register Done Successfully !')
window.location.href ="company-login.html";
  }
  catch(e){
    console.log(e);
  }
};

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