window.onload = document.getElementById("Input").value = "";


document.getElementById("Submit").addEventListener("click", function()
{
    if(document.getElementById("Input").value == "")
    {
        document.getElementById("A").href = "";
        window.alert("Write Your Email");
    }
    else if(document.getElementById("Input").name == email)
    {
        document.getElementById("A").href = "./index2.html";
    }
})

