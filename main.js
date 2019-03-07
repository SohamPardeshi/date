
document.getElementById("submit").addEventListener('click', submit);

function submit() {
    var a = document.getElementById('a');
    var b = document.getElementById('b');
    var c = document.getElementById('c');
    var d = document.getElementById('d');
    
    // TODO validation
    
    var db = firebase.database().ref('dates');
    var newPostKey = db.push({
        name: a.value,
        something: b.value,
        pets: c.value,
        panda: d.value
    });
    
    
    a.value = b.value = c.value = d.value = '';
}