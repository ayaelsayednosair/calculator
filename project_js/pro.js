function validate() {

    var x = document.from1.hight.value;
    var y = document.from1.weight.value;
    var text = '';
    if (x == "" || isNaN(x)) {
        text = "please enter your height (number)"
        document.getElementById("hight").innerHTML = text;
        document.from1.hight.focus();
        return false;
    }

    if (y == "" || isNaN(y)) {
        text = "please enter your Weight (number)"
        document.getElementById("weight").innerHTML = text;
        document.from1.weight.focus();
        return false;
    }
    else {
        calculateWeight(x, y)


    }
    return(true)
}
function calculateWeight(x, y) {
    var xm = x / 100;
    var z = (y / (xm * xm));
    document.getElementById("print").innerHTML = z.toFixed(2);
    var text = ""
    if (z < 20) {
        text = "You are Less weight than normal"
        document.getElementById("print").innerHTML = z.toFixed(2) + "<br>" + text;
    }
    if (z >= 20) {
        text = "You are normal weight"
        document.getElementById("print").innerHTML = z.toFixed(2) + "<br>" + text;
    }
    if (z >= 25) {
        text = "You are Over weight"
        document.getElementById("print").innerHTML = z.toFixed(2) + "<br>" + text;
    }
    if (z >= 31) {
        text = "You are Excessive obesity"
        document.getElementById("print").innerHTML = z.toFixed(2) + "<br>" + text;
    }
}
