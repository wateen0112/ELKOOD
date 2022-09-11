
$(document).ready(()=>{
    var errs =0;
    console.log('login is working !');

$('[name="apply-btn"]').click((e)=>{
    e.preventDefault();
  var phone = $('[name="phone"]').val();
  
  var email = $('[name="email"]').val();
  var cv = $('[name="cv"]').val();

if(checkEmpty(phone)) {
    $('#phoneerr').html('phone Required !'); errs++;
    
}
else $('#phoneerr').html('');

if(validateZip(phone)) {
    $('#phoneerr').html('phone is Invalid !'); errs++;
}
else $('#phoneerr').html('');


if(checkEmpty(cv)) {
    $('#cverr').html('cv Required !'); errs++;
}
else $('#cverr').html('');

   if (checkEmpty(email)){
    $('#emailerr').html('email Required !'); errs++;
   }else $('#emailerr').html('');
  
   if (validateEmail(email)){
    $('#emailerr').html('email isunvalid     !'); errs++;
   }else $('#emailerr').html('');
  
if(checkEmpty(phone)) {
    $('#phoneerr').html('phone Required !'); errs++;
    
}
else $('#phoneerr').html('');

   if(!checkEmpty(phone)&&!checkEmpty(email))errs=0;
if(errs==0){
 try{
  var obj  = {
  
   phone:phone,
   email:email,

  }
  console.log(phone);
  console.log(email);
  addNewApplier(obj);
 alert('apply done !!');    


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