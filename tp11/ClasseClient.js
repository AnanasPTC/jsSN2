function ApplicationBancaire()
{
    Dupont=new Client(Dupont,123456,654321,400,2.5,false,3500);
    
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