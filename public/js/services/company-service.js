

const registerNewCompany = (obj)=>{
     var initCompanyData= []
    var arr  =JSON.parse(localStorage.getItem('companyTable'))||initCompanyData;
    var length = arr.length+1;

 console.log('cccccc',obj.username);
 console.log(obj.password)
    var newObj = {
        id:length,
        name:obj.name,
        city:obj.city,
        email:obj.email,
        username:obj.username,
        password:obj.password
    }
arr.push(newObj);

localStorage.setItem('companyTable',JSON.stringify(arr));
console.log(arr);
localStorage.setItem('id',length+1);
localStorage.setItem('type',2);
var arr  =JSON.parse(localStorage.getItem('companyTable'))||initCompanyData;

}
