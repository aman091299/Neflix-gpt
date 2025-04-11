export const  validateForm=(email,password)=>{
    console.log('inside validate form')

const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
console.log(isEmailValid)

if(!isEmailValid){
    return 'Email is invalid';
}
if(!isPasswordValid){
    return 'Password is invalid';
}
}