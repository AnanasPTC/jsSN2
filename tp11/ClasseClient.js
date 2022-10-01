
function test()
{
    let ACC = document.getElementById("ACC");
    let hermes=Number(ACC.value);
    hermes=hermes+5;
    ACC.value=hermes;
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
        let affichage = document.getElementById("ACC");
        affichage.value=this.soldeCC;
        affichage = document.getElementById("ACE");
        affichage.value=this.soldeCE;
        //super.infosCE();
        //super.infosCC();
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
        this.consulterComptes();

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
        this.consulterComptes();
    }

    calculInterets()
    {
        
    }
}