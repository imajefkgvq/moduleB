document.getElementById("click").addEventListener("click",(e)=>{
    e.preventDefault()
    const namevalue = document.getElementById("input").value.trim()
    const passwordvalue = document.getElementById("password").value.trim()
    
    const users = {
        user:"imangali",
        password:"imangali2008",
        user2:"alibi",
        password2:"alibi2008"
    }
    if(namevalue ==users.user && passwordvalue == users.password){
         location.href = "bill.html"
    }
})
