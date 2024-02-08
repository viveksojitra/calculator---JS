var showdata = document.getElementById("showdata");
var clear = document.getElementById('clear');
var backspace = document.getElementById("backspace");

// Display
var getdata = (data) => {
    if (showdata.innerHTML == 0) {
        showdata.innerHTML = '';
        showdata.innerHTML += data;
    } else {
        showdata.innerHTML += data;
    }
}

// Clear
var cleardata = () => {
    showdata.innerHTML = 0;
}

// Backspace
var removedata = () => {

    var string = showdata.innerHTML;

    var arr = string.split("");

    arr.pop();

    var updatedArr = arr.join("");

    showdata.innerHTML = updatedArr;

    if (updatedArr == '') {
        showdata.innerHTML = 0;
    }
}

// Equal
var result = () => {
    var total = eval(showdata.innerHTML);

    showdata.innerHTML = total;
}

// Percentage ( % )
function percentage() {
  var getData = (showdata.innerHTML);

  var result = eval(getData);

  var dataUpdated = result / 100;

  showdata.innerHTML =  dataUpdated.toString();
}