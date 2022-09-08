$(document).ready(()=>{
    
    var applier  = getSingleApplier();
    console.log(applier);
    $('#applierPhone').html(applier.phone);
    $('#applierName').html(applier.fullname);
    $('#applierEmail').html(applier.email);
    $('#applierUsername ').html(applier.username);
    $('#acc-btn').click(acceptApply);
    $('#rej-btn').click(rejectApply);
})
