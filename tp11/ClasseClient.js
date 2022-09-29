function ApplicationBancaire()
{
    //Dupont
    Dupont=new Client("Dupont",123456,654321,400,2.5,false,3500);
    Dupont.consulterComptes();
    Dupont.crediter(200,true);
    Dupont.debiter(50,false);
    //Dupont.calculInterets();
    Dupont.consulterComptes();
    //Martin
    Martin=new Client("Martin",987654,456789,1000,3.5,true,200);
    Martin.consulterComptes();
    Martin.debiter(500,true);
    Martin.debiter(500,false);
    //Martin.calculInterets();
    Martin.consulterComptes();
}

class Client extends CompteEpargne
{
    constructor(nom,NCC,NCE,soldeCE,tauxCE,blocageCE,soldeCC)
    {
        super(NCC,soldeCE,tauxCE,blocageCE,NCC,soldeCC);
        this.nom=nom;
    }

    consulterComptes()
    {
        super.infosCE();
        super.infosCC();
    }

    getNom()
    {
        return this.nom;
    }

    crediter(montant,compte)
    {
        let para = document.createElement('p');
        document.getElementById("zeus").append(para);
        if(compte==true)
        {
            super.crediterCC(montant);
            para.innerHTML="opération effectuer sur le compte courant "
        }
        else
        {
            super.crediterCE(montant);
            para.innerHTML="opération effectuer sur le compte Epargne "
        }
    }

    debiter(montant,compte)
    {
        let para = document.createElement('p');
        document.getElementById("zeus").append(para);
        if(compte==true)
        {
            super.debiterCC(montant);
            para.innerHTML="opération effectuer sur le compte courant "
        }
        else
        {
            super.debiterCE(montant);
            para.innerHTML="opération effectuer sur le compte Epargne "
        }
    }

    calculInterets()
    {

    }
}