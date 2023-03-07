function generate ()  {
    var name = ["Maria","Laura", "Felix","Florentina", "Esteban", "David", "Estela"];
    var rand_name = Math.floor (Math.random()+ name.length);
    document.getElementById('Genera tu macho').innerHTML = "<div id='Genera tu macho'><h2>"
    + name[rand_name]
}


