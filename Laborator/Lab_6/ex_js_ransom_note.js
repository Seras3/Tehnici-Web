function randInt(a,b){
	return Math.trunc(a+(b-a)*Math.random());
}



/*
class Culoare{
	constructor(???){// TO DO definiti trei parametri _r, _g, _b cu valori implicite 0
		this.r=_r;
		??? TO DO completati pentru g si b
	}
	generateRandom(){
		??? //TO DO generati o culoare aleatoare folosind functia randInt definita mai sus
	}
	
	toString(){
		return "rgb("+this.r+","+this.g+","+this.b+")";
	}
	invert(){
		return new Culoare(???);//TO DO calculati culoarea complementara
	}
};

function ransom(sir)
{
	//TO DO setati culoarea de background a body-ului la gri
	var scrisorica=???;//selectati elementul cu id-ul "scrisorica"
	scrisorica.style.backgroundImage=???; //setati imaginea de background ceruta in enunt
	for (let i=0;i<???;i++) //TO DO parcurgere sir
		{

			var patt1=/\s/g;

			if(!sir[i].match(patt1))
			{
				lit=document.createElement("span");
				scrisorica.appendChild(lit);
				lit.innerHTML=??? //litera i
				c=new Culoare();
				c.generateRandom();
				lit.style.color=c.toString();
				lit.style.background=c.invert().toString();
				lit.style.fontSize=randInt(20,31)+"px";
				nr=randInt(0,2);
				lit.style.fontWeight=(nr%2==0?"bold":"normal")
				nr=randInt(0,2);
				lit.style.fontStyle=??? // TO DO - setare random  daca sa fie font italic sau nu (ca si la bold)
				fonturi=["Times New Roman","Comic Sans MS","Impact","Arial Black","Courier New","Lucida Console","Trebuchet MS"];
				lit.style.fontFamily=??? //TO DO element aleator din fonturi
				lit.onclick= function(){
					// TO DO afisati in consola culoarea elementului (atat de text cat si de background)
				}
			}
			else
			{
				scrisorica.appendChild(document.createTextNode(" ")); // pentru spatii nu mai facem span
			}
		}
}

*/