$(document).ready(function(){
    const myId = localStorage.getItem('uid');
var jobs = myJobs(myId)||[];
console.log(jobs);
if(jobs.length!=0){
    jobs.forEach(e=>{
        myAllJobs(e);
        
     })
}
else{
    $('#jobs').html(`<div class="px-32"> <h1 class="text-center">No jobs Found!!!</h1>  </div>`);
}
$('.input-search input').keyup(()=>{
    $('#jobs').html('');
    var val = $('.input-search input').val();
    console.log('val : ',val);
  var arr=[];

  jobs.forEach(e=>
        {
            var name = getCompanyName(e.companyId);
            if(e.description.includes(val)||e.title.includes(val)||name.includes(val)){
arr.push(e);
            }
        })


    arr.forEach(e => {
        // var name = getCompanyName(e.companyId);
        myAllJobs(e)
    });
    if(arr.length==0){
        $('#jobs').html('No jobs Found!!');   
    }
})
});