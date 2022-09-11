$(document).ready(()=>{
 
var uid = localStorage.getItem('uid')||0;
var type =localStorage.getItem('type')||0;
if(uid==0){
    $('nav').html (`
    <button id="close-btn" class="lg:hidden fixed text-[1.5rem] text-gray bg-white px-2 mt-2 right-14 rounded-md shadow-md z-20"> <i class="fa fa-times"></i></button>
    
   <div class="flex flex-1"> <h1  ><a href='/public'>Job Search </a></h1></div>
   <div class="flex flex-1"><ul >
   <li
  
   ><a href="login.html">Login</a></li>
   <li><a href="register.html">Register</a></li>

   <li class=".am-company" ><a href="register-as-company.html">am company</a></li>



</ul>
</div>
<div class="flex flex-1">

<button
class="post-job-btn" 
><a href="post-job.html"
   >post a job</a></button>
</div>

    `)
}
else if (type==2&&uid!=0){
    $('nav').html (`
    <button id="close-btn" class="lg:hidden fixed text-[1.5rem] text-gray bg-white px-2 mt-2 right-14
     rounded-md shadow-md z-20"> <i class="fa fa-times"></i></button>
    
    <div class="flex flex-1">   <h1  ><a href='/public'>Job Search </a></h1></div>   
    <div class="flex flex-1">  <ul >
   <li
  
   ><a href="my-jobs.html">myJobs</a></li>
   <li><a href="all-jobs.html">All jobs</a></li>
   <li><span  class="cursor-pointer" id="logout-btn">logout</span></li>
   





</ul></div>
<div class="flex flex-1">   <button
class="post-job-btn" 
><a href="post-job.html"
   >post a job</a></button></div>
    `)
}
else if  (type==1 &&uid!=0){
    $('nav').html (`
    <button id="close-btn" class="lg:hidden fixed text-[1.5rem] text-gray bg-white px-2 mt-2 right-14 rounded-md shadow-md z-20"> <i class="fa fa-times"></i></button>
    
<div class ="flex flex-1">   <h1  ><a href='/public'>Job Search </a></h1></div>
<div class="flex flex-1">
<ul >

   <li><a href="all-jobs.html">All jobs</a></li>
   <li><span  class="cursor-pointer" id="logout-btn">logout</span></li>
   


</ul>
</div>

<div class="flex flex-1">

<button
class="post-job-btn" 
><a href="post-job.html"
   >post a job</a></button>
</div>
    `) 
}
else{
    $('nav').html (`
    <button id="close-btn" class="lg:hidden fixed text-[1.5rem] text-gray bg-white px-2 mt-2 right-14 rounded-md shadow-md z-20"> <i class="fa fa-times"></i></button>
    
    <div class="flex flex-1">  <h1  ><a href='/public'>Job Search </a></h1></div>
    <div class="flex flex-1">
<ul >
 
   <li><span  class="cursor-pointer" id="logout-btn">logout</span></li>




</ul> </div>

<div class="flex flex-1">


<button
class="post-job-btn" 
><a href="post-job.html"
   >post a job</a></button>
</div>
    `)
}
    $('#close-btn').click(()=>{
        $('nav').toggle();
 
    })
    $('#open-btn').click(()=>{
        $('nav').toggle();
 
    })
    $('#logout-btn').click(()=>{
        console.log('logout');
    localStorage.removeItem('uid');
    localStorage.removeItem('type');
    window.location.href="index.html";
      })
})
