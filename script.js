let flag=0;
let input_choise;
function updateINC(cin) {
    if (cin == 1)
        input_choise = document.getElementById("rin1").value;
    else if (cin == 2)
        input_choise = document.getElementById("rin2").value;
    else if (cin == 3)
        input_choise = document.getElementById("rin3").value;
    else
        input_choise = NULL;
}

let output_choise;
function updateOUTC(cout) {
    if (cout == 1)
        output_choise = document.getElementById("rout1").value;
    else if (cout == 2)
        output_choise = document.getElementById("rout2").value;
    else if (cout == 3)
        output_choise = document.getElementById("rout3").value;
    else
        output_choise = NULL;
}

function cal() {
    let t = document.getElementById("in").value;
     if (input_choise == output_choise) {
        document.getElementById("out").value = t;
    }
    else if (input_choise == "c") {
        if (output_choise == "f") {
            document.getElementById("out").value = (((9 * t) / 5) + 32);
        }
        else if (output_choise == "k") {
            document.getElementById("out").value = (t - 273);
        }
    }
    else if (input_choise == "f") {
        if (output_choise == "c") {
            document.getElementById("out").value = (((t - 32) * 5) / 9);
        }
        else if (output_choise == "k") {
            document.getElementById("out").value = ((((t - 32) * 5) / 9) - 273);
        }
    }
    else if (input_choise == "k") {
        if (output_choise == "c") {
            document.getElementById("out").value = (t+273);
        }
        else if (output_choise == "f") {
            document.getElementById("out").value = (((9 * t) / 5) + 32 + 273);
        }
    }
    if(flag==0)
    {
        document.getElementById("cnvrt").style.display="none";
        document.getElementById("rst").style.display="block";
        flag=1;
    }
}
function reset() {
    document.getElementById("in").value = "";
    document.getElementById("out").value = ""
    var r = document.getElementsByName("rin");
    var r2 = document.getElementsByName("rout");
    for (var i = 0; i < r.length; i++) {
        r[i].checked = false;
        r2[i].checked = false;
    }
    if(flag==1)
    {
        document.getElementById("rst").style.display="none";
        document.getElementById("cnvrt").style.display="block";
        flag=0;
    }
}