$(document).ready(()=>{

var jobsArr = getAllJobs();
var citiesArr = getAllCites();
var city =$('input[name=city]:checked', '#myForm').val()||'';
var hours =$('input[name=hours]:checked','#hours').val()||'';
var type = localStorage.getItem('type');
var getJobsElements  = (e)=>{
    type =='1' ?allJobs(e):myAllJobs(e)
    console.log(type)
}


citiesArr.forEach(e=>{
    
    $('#city').html($('#city').html()+
` <div >
<input type="radio" value="${e}" name="city" id="">  <span class="ml-1">${e}</span>
</div>`);
})
$('[name="city"]').on('change', function() {
    $('#jobs').html('');
city    =$('input[name=city]:checked').val();
hours =$('input[name=hours]:checked').val();
console.log(hours);

jobsArr.forEach(e => {
if (hours==''){
    if(e.city==city){
        getJobsElements(e);
    }
}

 if (hours=='part'){
    if(e.city==city&&e.hours<=6){
        getJobsElements(e);
    }
    
}else if (hours=='full'){
    if(e.city==city&&e.hours>6){
        getJobsElements(e);
    }
   
}
else{
    $('#jobs').html('No Jobs Found !')
}
}

    

);
  });


$('[name="hours"]').on('change', function() {
    
    console.log('hours :',hours)
    city =$('input[name=city]:checked').val();
    $('#jobs').html('');

jobsArr.forEach(e => {
if(city==''){
if(hours=='part'){
    if(e.hours<6){

        getJobsElements(e);

    }
}
else if (hours=='full'){
    if(e.hours>6){
        getJobsElements(e);
    }
}
else{
    $('#jobs').html('No Jobs Found!');
}
}
else{
    if(hours=='part'){
        
        if(e.hours<=6&&e.city==city){
            getJobsElements(e);
        }
    }
    else if (hours=='full'){
        if(e.hours>6&&e.city==city){
            getJobsElements(e);
        }
    }
    else{
   $('#jobs').html('No Jobs Found!');
    } 
}

}
);
  });

jobsArr.forEach(e => {
    var name = getCompanyName(e.companyId);
    getJobsElements(e)
});
console.log('input',$('.input-search input'))
$('.input-search input').on('keyup',()=>{
    
    var val = $('.input-search input').val();
    console.log('val : ',val);
  var arr=[];
  $('#jobs').html('');
  jobsArr.forEach(e=>
        {
              var name = getCompanyName(e.companyId);
            if(e.description.includes(val)||e.title.includes(val)||name.includes(val)){
arr.push(e);
            }
        })


    arr.forEach(e => {
        // var name = getCompanyName(e.companyId);
        getJobsElements(e)
    });
    if(arr.length==0){
        $('#jobs').html('<h1>No Matchs Found !</h1>')
    }
})
});