
$(document).ready(()=>{
    var errs =0;
  var uid = localStorage.getItem('type')||0;
  if(uid==0){
window.location.href = 'company-login.html';
  }

$('[name="post-btn"]').click((e)=>{
    e.preventDefault();
  var title = $('[name="title"]').val();
  var hours = $('[name="hours"]').val();
  var city = $('[name="city"]').val();
  
  var description = $('[name="description"]').val();
if(checkEmpty(title)==true) {
    $('#titleerr').html('title Required !'); errs++;
}
else $('#titleerr').html('');
if (checkEmpty(hours)) {
    $('#hourserr').html('hours Required !');
    errs++;
 }else $('#hourserr').html('');

 if (checkEmpty(description)) {
    $('#descriptionerr').html('descrtiption is  Required !');
    errs++;
 }else $('#hourserr').html('');

   if (checkEmpty(city)){
    $('#cityerr').html('city Required !'); errs++;
   }else $('#cityerr').html('');
  

   if(!checkEmpty(title)&&!checkEmpty(city)&&!checkEmpty(hours)&&!checkEmpty(description))errs=0;
if(errs==0){
 try{
  var obj  = {
    hours:hours,
    title:title,
    description:description,
    city:city
  }
  addNewJob(obj);
  alert('New job Added Successfully !!!!');
  window.location.href = "my-jobs.html";

 } 
 catch(e){
  console.log(e);
 }
}

})


});