function switchContent() {
    let subs = document.getElementsByName("subject");
    let sub;
    for (let i = 0; i < subs.length; i++) {
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
    for (let j = 0; j < snts.length; j++) {
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