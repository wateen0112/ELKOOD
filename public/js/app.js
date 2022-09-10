
var i =1 ; 
var y =3 ;

$(document).ready(()=>{
  
   
$('#left-arrow').click(()=>{
i = i-1;


$('.box').html('  <img src="../src/assets/slide'+((Math.abs(i)%5)+1)+'.jpg" alt="">')
setImages();
});
$('#right-arrow').click(()=>{
    i = i+1;

  
    $('.box').html('  <img data-aos="slide-right" src="../src/assets/slide'+((Math.abs(i)%5)+1)+'.jpg" alt="">')
    setImages();
    });
    $('.box').html('  <img src="../src/assets/slide'+(i)+'.jpg" alt="">')
    var setImages= ()=>{
        var x =(Math.abs(i)%5)+1;
        $('.wrapper ul').html('');
  
    }
    setImages();
   
});