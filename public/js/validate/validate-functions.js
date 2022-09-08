const  toggleShow=(selector , show , hide )=>{
  
    var x = $('[name="'+selector+'"]');
    x.attr('type')=='text'?   x.attr('type','password'): x.attr('type','text');
    $('#'+show).toggleClass('fa-eye-slash');

}
const validateEmail = (email) => {
    if (email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) return false ; return true ;
  };
  const matchedPassword = (pass1 , pass2)=>{
    if (pass1==pass2) return true  ; 
    return false ;
  }
  const checkEmpty = (str)=>{
if(str=='')return true ;
return false

  }
  const validateZip = (zip)=>{
if(
   !isNaN(zip)) return false ; return true ;
  }
  