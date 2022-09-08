
    var clickEvent =(currJobID)=>{
        
            
            $('.dialog').removeClass('hidden')
    
               var jid = localStorage.getItem('jobID');
            console.log('cccccccc',currJobID)
            console.log(jid)
                var appliers =getAllApplires()??[];
                console.log('applires',appliers)
                
            try{
                $('.dialog-box').html('');  
               appliers.forEach(e=>{

               if(currJobID==jid){
                
                var name = getUserFullName(e.uid)??'';
                $('.dialog-box').html(  `<div onclick="moveToApplier(${e.uid})" class="dialog-box w-[40%] min-w-[280px] h-auto  mb-10 bg-white rounded-md  top-[200px]">
                <div class="applied px-5 py-2 cursor-pointer my-2 mx-1 hover:bg-gray-light ">
                   <a href="applier.html"> ${name}</a>
             
                   </div>`+$('.dialog-box').html());
               }
              
            });
         
           
            if(appliers.length==0||currJobID!=jid){
                $('.dialog-box').html('');
                $('.dialog-box').html('<div><h1 class="text-center py-2">No Appliers Found!!</h1></div>')
            }
                
            }
            
            catch(e){
              
                  
                    $('.dialog-box').html(  $('.dialog-box').html()+`<div class="dialog-box w-[40%] min-w-[280px] h-auto  bg-black rounded-md fixed top-[200px]">
                    <div class="applied px-5 py-2 cursor-pointer my-2 mx-1 hover:bg-gray-light ">
                     
                 
                       </div>`);
            console.log(e)
                
            }
            
                }
    

    $('#dialog-ok-btn').click(()=>{
        $('.dialog').addClass('hidden')
        
    });

