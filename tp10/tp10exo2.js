function bouddha()
{
    odin = new Pays("Russie",10,2000,"gdiv");
    odin.affiche();
    testPNB();
}

function testPNB()
{
    sey = new Pays("Seychelles",6700,2003,"gdiv");
    egy = new Pays("Egypte",1430,1430,"gdiv");
    sey.affiche();
    sey.tauxCroissance(7250);
    egy.affiche();
}

class Pays
{
    constructor(nom,pnb,annee,address)
    {
        this.nom=nom;
        this.pnb=pnb;
        this.annee=annee;
        this.address=address
    }

    tauxCroissance(pnbsuiv)
    {
        let result;
        result=(pnbsuiv-this.pnb)/this.pnb*100;
        return result;
    }

    affiche()
    {
        let para = document.createElement('p');
        document.getElementById(this.address).append(para);
        para.innerHTML = this.nom+" : "+this.annee+" : "+this.pnb;
    }
}