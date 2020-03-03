
document.getElementById("submit").addEventListener('click', submit);

function submit() {
    var a = document.getElementById('a');
    var b = document.getElementById('b');
    var c = document.getElementById('c');
    var d = document.getElementById('d');
    
    if(empty(a.value) || empty(b.value) || empty(c.value) || empty(d.value)) {
        alert("Not all data fields filled out");
    }
    
    
    else if(!isInt(c.value)) {
        alert("Number of pets is not an int");
    }
    
    else if(!isInt(b.value) && !isFloat(b.value)) {
        alert("Ideal temperature is not a double");
    }
    
    else {
        var db = firebase.database().ref('dates');
        var newPostKey = db.push({
            name: a.value,
            temp: parseFloat(b.value),
            pets: parseInt(c.value),
            panda: d.value
        });

        a.value = b.value = c.value = d.value = '';
    }
}


function empty(str) {
    return str === "" || str == null;
}

function isInt(n){
    n = parseInt(n);
    return Number(n) === n && n % 1 === 0;
}

function isFloat(n){
    n = parseFloat(n);
    return Number(n) === n && n % 1 !== 0;
}
