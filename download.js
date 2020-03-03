var btn = document.getElementById('btn');

btn.addEventListener('click', submit);

function submit() {
    var text = document.getElementById('text');
    text.value = "";
    
    var db = firebase.database().ref('friends');
    db.once('value').then(function(snapshot) {
        var temp = snapshot.val();
        console.log(temp);
        for(var key in temp) {
            var t = temp[key];
            var s = t.panda + " " + t.temp + " " + t.pets + " " + t.name;
            text.value += s + "\n";
        }
        
        alert("Submitted!");
    });
    
}
