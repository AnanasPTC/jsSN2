function testCompteEpargne()
{
    midas=new CompteEpargne(123456,1000,2,false);
    midas.infos();
    midas.crediter(100);
    midas.infos();
    midas.debiter(300);
    midas.infos();
}

class CompteEpargne
{
    constructor(NC,solde,TauxInteret,blocage)
    {
       this.NC=NC;
       this.solde=solde;
       this.TauxInteret=TauxInteret;
       this.blocage=blocage; 
    }

    infos()
    {
        let textb;
        let para = document.createElement('p');
        document.getElementById("thanatos").append(para);
        if (this.blocage==true)
        {
            textb="compte bloqué"
        }
        else
        {
            textb="compte non bloqué"
        }
        para.innerHTML="Compte épargne numéro "+this.NC+" a "+ this.TauxInteret+"% de taux d'intérêts,de solde de "+this.solde+" euros, "+this.blocage;
    }

    crediter(montant)
    {
        let para = document.createElement('p');
        document.getElementById("thanatos").append(para);
        this.solde=this.solde+montant;
        para.innerHTML="operation effectuer"
    }

    debiter(montant)
    {
        let para = document.createElement('p');
        document.getElementById("thanatos").append(para);
        if(this.solde>0)
        {
            if(montant>this.solde)
            {
                this.solde=0;
                para.innerHTML = "solde insufisant l'argent restant sur le compte a été débiter ";
            }
            else
            {
                this.solde=this.solde-montant;
                para.innerHTML = "operation effectuer";
            }
        }
        else
        {
            para.innerHTML = "solde insufisant";
        }
    }

    ajouterInterets(montantinteret)
    {
        this.TauxInteret=this.TauxInteret+montantinteret;
    }

    getSolde()
    {
        return this.solde;
    }
}