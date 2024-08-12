alert("Welcome to Javascript!")
alert("Please create an account...")

username = prompt("Enter a username: ")
password = prompt("Enter a password: ")

alert("Your account has been created successfully!")
alert("Please login...")

username2 = prompt("Enter your username: ")
password2 = prompt("Enter your password: ")

if (username === username2 && password === password2){
    alert("You have been logged in successfully")
}
else{
    alert("Invalid credentials")
}