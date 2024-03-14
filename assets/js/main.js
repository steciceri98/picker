var data = '{"dataSet": [' +
'{"A": "Gufo", "B": "Cavallo", "C": "Bisonte", "D": "Toro", "E": "Aquila", "F": "Cervo", "G": "Serpente", "H": "Asino", "I": "Castoro", "J": "Coniglio", "K": "Abete", "L": "Lince", "M": "Marmotta", "N": "Amico", "O": "Orso", "P": "Topo", "Q": "Alligatore", "R": "Ghiro", "S": "Lupo", "T": "Cane", "U": "Rana", "V": "Capra", "W": "Capo", "X": "Gatto", "Y": "Scoiattolo", "Z": "Salice"},' +
'{"A": "Furioso", "B": "Ribelle", "C": "Selvaggio", "D": "Rosso", "E": "Verde", "F": "Fiero", "G": "Giocoso", "H": "Viziato", "I": "Del temporale", "J": "Arguto", "K": "Mitico", "L": "Imbizzarrito", "M": "Pazzo", "N": "Veloce", "O": "Fedele", "P": "Dei grandi laghi", "Q": "Bianco", "R": "Zoppo", "S": "Ostinato", "T": "Fulminante", "U": "Svelto", "V": "Seduto", "W": "Felice", "X": "Del bosco", "Y": "Delle praterie", "Z": "Della notte"}]}';

const obj = JSON.parse(data);

$(document).on('submit', '#inForm', function(e){
  e.preventDefault();

  var nome = $('#nome').val();
  if (nome == "" || nome == "undefined") {
    alert("Inserisci un nome o almeno l'iniziale");
    return false;
  }
  var cognome = $('#cognome').val();
  if (cognome == "" || cognome == "undefined") {
    alert("Inserisci un cognome o almeno l'iniziale");
    return false;
  }

  var iNome = nome[0].toUpperCase();
  var iCognome = cognome[0].toUpperCase();


  console.log(obj.dataSet[0][iNome] + " " + obj.dataSet[1][iCognome]);
  $('#newName').html(obj.dataSet[0][iNome]);
  $('#newSname').html(obj.dataSet[1][iCognome]);
  $('#modalName').modal('show');
  });

$(document).on('click', '#endNew', function(e){
  $('#modalName').modal('hide');
  $(document).find('input').val("");
  });
