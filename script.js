function show() {
    document.getElementById("footer").innerHTML = window.screen.width
}


function nextOption() {
    document.getElementsByClassName("sant-name-option")[0].style.display = "block";
    document.getElementById("start-btn").style.display = "none";

    let sant_names = document.getElementsByName("sant-name");
    for (let i = 0; i < sant_names.length; i++)
    {
        const element = sant_names[i];
        element.checked = false;
    }


    let subs = document.getElementsByName("subject");
    for (let i = 0; i < subs.length; i++)
    {
        const element = subs[i];
        if (element.checked == true)
        {
            let sub = element.value;
            
            if (sub == "father")
            {
                document.querySelector('[for="gioan"]').style.display = "inline-block";

                document.querySelector('[for="giuse"]').style.display = "none";
                document.querySelector('[for="anton"]').style.display = "none";
                document.querySelector('[for="maria"]').style.display = "none";
                document.querySelector('[for="terexa"]').style.display = "none";
                document.querySelector('[for="matta"]').style.display = "none";
            }
            else if (sub == "mother")
            {
                document.querySelector('[for="gioan"]').style.display = "none";
                document.querySelector('[for="giuse"]').style.display = "none";
                document.querySelector('[for="anton"]').style.display = "none";

                document.querySelector('[for="maria"]').style.display = "inline-block";
                document.querySelector('[for="terexa"]').style.display = "inline-block";
                document.querySelector('[for="matta"]').style.display = "inline-block";
            }
            else
            {
                document.querySelector('[for="gioan"]').style.display = "inline-block";
                document.querySelector('[for="giuse"]').style.display = "inline-block";
                document.querySelector('[for="anton"]').style.display = "inline-block";

                document.querySelector('[for="maria"]').style.display = "none";
                document.querySelector('[for="terexa"]').style.display = "none";
                document.querySelector('[for="matta"]').style.display = "none";
            }
        }
    }
    
}

function showButton() {
    document.getElementById("start-btn").style.display = "block";
}

function switchContent() {
    let subs = document.getElementsByName("subject");
    let sub;
    for (let i = 0; i < subs.length; i++)
    {
        const element = subs[i];
        if (element.checked != true)
        {
            document.getElementById(element.value + "-ded").style.display = "none";
        }
        else
        {
            sub = element.value;
        }
    }

    let snts = document.getElementsByName("sant-name");
    for (let j = 0; j < snts.length; j++)
    {
        const element = snts[j];
        if (element.checked == true)
        {
            let txt = "";
            if (element.value == "gioan")
            {
                txt = "Gioan";
            }
            else if (element.value == "giuse")
            {
                txt = "Giuse";
            }
            else if (element.value == "anton")
            {
                txt = "Antôn";
            }
            else if (element.value == "maria")
            {
                txt = "Maria";
            }
            else if (element.value == "matta")
            {
                txt = "Matta";
            }
            else
            {
                txt = "Têrêxa";
            }
            document.getElementById(sub + "-sant").textContent = txt;
        }
    }

    document.getElementById("welcome").style.display = "none";
    document.getElementById("content").style.display = "block";
}