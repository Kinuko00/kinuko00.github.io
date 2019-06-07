var binData;
var lastDev = {};

var request = new Request('https://api.jsonbin.io/b/5cf6dc79d2127723845c0f05', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'versioning': 'false',
            'secret-key': '$2a$10$1GpAYMrphpShylJpN8X6oOLDX/Cnxs2cgGJkKk0crcRp4a6dexevK'
        },
});

fetch(request)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        binData = data;
    })
    .catch(function(err) {
        console.error(err);
    });

function squealer(){
	if (binData.devs.length==0) {
		binData.devs.push("Pablo Pineda", "Walther Graciano", "Julian Noziglia", "Ezequiel Zink", "Fernando Gutierrez", "Ivan Müller", "Miguel Ramos", "Lucas Fiorini", "Rodrigo Salvay");
	}
	var num = Math.floor(Math.random()*binData.devs.length)
	var name = binData.devs[num];
	binData.devs.splice(num, 1);
	console.log(name);
	var tbl = document.getElementById("myTable");
	var row = tbl.insertRow();
	var cell1 = row.insertCell();
	var cell2 = row.insertCell();
	cell1.innerHTML = Date();
	cell2.innerHTML = name;
	lastDev.dev = name;
	lastDev.date = Date();
	binData.history.push(lastDev);
	
	var update = new Request('https://api.jsonbin.io/b/5cf6dc79d2127723845c0f05', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'versioning': 'false',
            'secret-key': '$2a$10$1GpAYMrphpShylJpN8X6oOLDX/Cnxs2cgGJkKk0crcRp4a6dexevK'
        },
        body: JSON.stringify(binData)
	});

	

	fetch(update)
	    .then(function(response) {
	        return response.json();
	    })
	    .then(function(data) {
	        console.log(data);
	    })
	    .catch(function(err) {
	        console.error(err);
	    });



}
