"use strict"
// let suma = 100;
// let busena = true;
// busena = false;
// let vardas = "Irma";
// let elPastas = "irmalinartaite@gmail.com";
// let svajoniuDarbas = "svajoniu darbas";
// console.log('Mano vardas: ' + vardas);
// console.log('Mano el. pastas: ' + elPastas);
// console.log('Mano svajoniu darbas: ' + svajoniuDarbas);

// console.log(typeof(12))
// console.log(typeof('JS yra jega'))
// console.log(typeof(true))

// let vardukas = "Irma";
// let pirkiniai = ['Duona', 'Cesnakai', 'Keptuve', 'Druska', 'Aliejus']
// console.log(pirkiniai[1]);
// let zmogus = {
// akis:2,
// kojas:2,
// vardas:'Irma',
// savybes:{
// iq:'nezinomas',
// ugis:'>1em'
// }
// }

// console.log(zmogus.kojas)

// let pirkiniai2 = [
//     {
//     pavadinimas:'Labai gera preke',
//     kiekis:10
//     }
//     ,
//     {
//     pavadinimas:'Kita gera preke',
//     kiekis:15
//     }
// ]

// console.log(pirkiniai2[0].pavadinimas);

// let suma2 = 10;
// suma2 = suma2 + 100;
// suma2 += 100;
// let preke = "Labai gera ";
// preke += "Nuostabi"
// console.log(suma2);
// console.log(preke);

// let kiekis = 10;
// console.log(kiekis++)
// console.log(kiekis)
// console.log(++kiekis)
// console.log(++kiekis)

// console.log(10 == "10")
// console.log(10 === "10")
// console.log(10 === 10)

// let kiekis2 = 1;
// console.log(kiekis2 >= 1 ? "Preke yra" : "Prekes nera");
// console.log(kiekis2 ? "Preke yra" : "Prekes nera");

// if(kiekis){
// console.log("turim")
// } else{
// console.log("neturim")
// }

// let filmas = 'Geras filmas apie knyga "Java"';
// console.log(filmas)

// let filmas2 = 'Geras filmas apie knyga \"Java\"';
// console.log(filmas2)

// let vardas2 = "Irma";
// console.log(vardas2.length);
// console.log(vardas2[0]);
// console.log(vardas2.indexOf('a'));
// console.log(vardas2.slice(0,4));
// console.log(vardas2.toLowerCase());
// console.log(vardas2.toUpperCase());
// let pakeistasVardas2 = vardas2.replace("Irm","Ing");
// console.log(pakeistasVardas2);
// let pakeistasVardas3 = vardas2.replace("Irm", "Rim");
// console.log(pakeistasVardas3);


// let miestai = ['Kaunas', 'Vilnius', 'Klaipeda', 'Siauliai', 'Panevezys', 'Birstonas', 'Druskininkai', 'Ukmerge', 'Utena', 'Zarasai'];
// console.log(miestai);
// miestai.splice(6,1, "Rokiskis","Jonava");
// console.log(miestai);

// let vidurkis = 10;


// if(vidurkis == 10)
// {
// console.log("Puikus mokinys");

// } else if(vidurkis == 9)
// {
// console.log("Geras mokinys");

// } else if(vidurkis == 8 && lankomumas == 6)
// {
// console.log("Vidutinis mokinys")

// } else if(vidurkis == 7)
// {
// console.log("Patenkinamas mokinys")

// } else if(vidrukis == 6)
// {
// console.log("Nepatenkinamas mokinys")

// } else if(vidurkis == 5)
// {
// console.log("Blogas mokinys")
// }
// else
// {
// console.log("Pats blogiausias mokinys");
// }

// let vidurkis2 = 8;

// switch(vidurkis2) {
// case 8:
// console.log("Puikus mokinys");
// break;

// case 7:
// console.log("Geras mokinys");
// break;

// case 6:
// console.log("Normalus mokinys");
// break;

// case 5:
// console.log("Blogas mokinys");
// break;

// case 4:
// console.log("Labai blogas mokinys");
// break;

// default:
// console.log("Jus negavote jokio pazymio");
// }

// let miestai = ['Kaunas', 'Vilnius', 'Klaipeda', 'Siauliai', 'Panevezys', 'Birstonas', 'Druskininkai', 'Ukmerge', 'Utena', 'Zarasai'];

// let atsakymas = prompt("Koks Jusu miestas?");
// console.log(atsakymas);

// for(let i=0; i<miestai.length; i++){
// 	console.log(miestai[i]);
// }


// let sveciuKiekis = prompt("Kiek bus sveciu?");
// let sveciuVardai = [];


// // for(let i=0; i<sveciuKiekis; i++)
// // {
// // 	sveciuVardai[i] = prompt("Koks svecio vardas?");
// // }

// for(let i=0; i<sveciuKiekis; i++)
// {
// 	sveciuVardai.push (prompt("Koks svecio vardas?"));
// }

// console.log("Sveciu sarasas: ");

// for (let i=0; i<sveciuVardai.length; i++)
// {
// 	console.log(sveciuVardai[i]);
// }

let ivertinimasZodziais = [];
ivertinimasZodziais[1]='vienas';
ivertinimasZodziais[2]='du';
ivertinimasZodziais[3]='trys';
ivertinimasZodziais[4]='keturi';
ivertinimasZodziais[5]='penki';
ivertinimasZodziais[6]='sesi';
ivertinimasZodziais[7]='septyni';
ivertinimasZodziais[8]='astuoni';
ivertinimasZodziais[9]='devyni';
ivertinimasZodziais[10]='desimt';

let dalykoPavadinimas = [];
let dalykoIvertinimas = [];
let dalykuSkaicius = prompt("Koks yra dalyku skaicius?");

for(let i=0; i<dalykuSkaicius; i++){
	dalykoPavadinimas.push(prompt("Koks yra dalyko pavadinimas?"));
	dalykoIvertinimas.push(prompt("Koks yra dalyko ivertinimas?"));
}

console.log("Jusu dalyku ivertinimas: ")

// for(let i=0; i<dalykuSkaicius; i++){
// 	if(dalykoIvertinimas[i] == 1){
// 	console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[1]+")");
// } else if(dalykoIvertinimas[i] == 2){
// 	console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[2]+")");
// } else if(dalykoIvertinimas[i] == 3){
// 	console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[3]+")");
// } else if(dalykoIvertinimas[i] == 4){
// 	console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[4]+")");
// } else if(dalykoIvertinimas[i] == 5){
// 	console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[5]+")");
// } else if(dalykoIvertinimas[i] == 6){
// 	console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[6]+")");
// } else if(dalykoIvertinimas[i] == 7){
// 	console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[7]+")");
// } else if(dalykoIvertinimas[i] == 8){
// 	console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[8]+")");
// } else if(dalykoIvertinimas[i] == 9){
// 	console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[9]+")");
// } else {
// 	console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[10]+")");
// }
// }

for(let i=0; i<dalykuSkaicius; i++){
	switch (dalykoIvertinimas[i]){
		case '1':
		console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[1]+")");
		break;
		case '2':
		console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[1]+")");
		break;
		case '3':
		console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[3]+")");
		break;
		case '4':
		console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[4]+")");
		break;
		case '5':
		console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[5]+")");
		break;
		case '6':
		console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[6]+")");
		break;
		case '7':
		console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[7]+")");
		break;
		case '8':
		console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[8]+")");
		break;
		case '9':
		console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[9]+")");
		break;
		case '10':
		console.log(dalykoPavadinimas[i]+" "+dalykoIvertinimas[i]+" "+"("+ivertinimasZodziais[10]+")");
		break;
		default:
		console.log("Jus nieko nesimokote!");
	}
}	