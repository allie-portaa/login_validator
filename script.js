
function validate(){
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    if(password == "hello")
    {
        alert("You are Logged In!");
        return false;
    } else {
        alert("Login failed")
    }

}



