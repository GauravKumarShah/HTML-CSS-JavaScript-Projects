const getColor = () =>{
    //hex code
    const randomNumber= Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor= randomCode;

    // Showing the color code int the box
    document.getElementById("color-code").innerHTML= randomCode;


    // for copying in clipboard for color code
    navigator.clipboard.writeText(randomCode);
}

// event call
document.getElementById("btn").addEventListener("click",getColor);
// init call
getColor();