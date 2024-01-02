const form = document.getElementById("form")

form.addEventListener("submit", function(event){
  event.preventDefault();

  let userEmail = event.target.email.value
  let userName = event.target.name.value
  let userPw1 = event.target.pw1.value
  let userPw2 = event.target.pw2.value
  let userPhone1 = event.target.phone1.value;
  let userPhone2 = event.target.phone2.value;
  let userPhone3 = event.target.phone3.value;
  let userRegion = event.target.region.value
  let userGender = event.target.gender.value

  console.log(userEmail);
  console.log(userName);
  console.log(userPw1);
  console.log(userPw2);
  console.log(userPhone1,userPhone2,userPhone3);
  console.log(userRegion);
  console.log(userGender);

  const userData ={
    email : userEmail,
    name : userName,
    password1 : userPw1,
    password2 : userPw2,
    phone : {
      number1 : userPhone1,
      number2 : userPhone2,
      number3 : userPhone3,
    },
    region : userRegion,
    gender : userGender
  }
  const userString = JSON.stringify(userData)
  localStorage.setItem("user",userString)

  console.log(userData)

})