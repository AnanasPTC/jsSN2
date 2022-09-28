function testClient()
{
    hestia=new Client("theo",123456,654321);
    hestia.consulterComptes();
}

class Client
{
    constructor(nom,NCC,NCE)
    {
        this.nom=nom;
        this.NCC=NCC;
        this.NCE=NCE;
    }

    consulterComptes()
    {
        let para = document.createElement('p');
        document.getElementById("zeus").append(para);
        para.innerHTML=this.nom+" numéro du compte courant: "+this.NCC+" numéro du compte epargne: "+this.NCE;
    }

    getNom()
    {

    }

    crediter()
    {

    }

    debiter()
    {

    }

    calculInterets()
    {

    }
}