class CompteEpargne extends CompteCourant
{
    constructor(NCE,soldeCE,TauxInteret,blocage,NCC,soldeCC)
    {
        super(NCC,soldeCC)
        this.NCE=NCE;
        this.soldeCE=soldeCE;
        this.TauxInteret=TauxInteret;
        this.blocage=blocage; 
    }

    infosCE()
    {
        let textb;
        let para = document.createElement('p');
        document.getElementById("zeus").append(para);
        if (this.blocage==true)
        {
            textb="compte bloqué"
        }
        else
        {
            textb="compte non bloqué"
        }
        para.innerHTML="Compte épargne numéro "+this.NCE+" a "+ this.TauxInteret+"% de taux d'intérêts,de solde de "+this.soldeCE+" euros, "+this.blocage;
    }

    crediterCE(montant)
    {
        let para = document.createElement('p');
        document.getElementById("zeus").append(para);
        this.soldeCE=this.soldeCE+montant;
        para.innerHTML="operation effectuer"
    }

    debiterCE(montant)
    {
        let para = document.createElement('p');
        document.getElementById("zeus").append(para);
        if(this.soldeCE>0)
        {
            if(montant>this.soldeCE)
            {
                this.solde=0;
                para.innerHTML = "solde insufisant l'argent restant sur le compte a été débiter ";
            }
            else
            {
                this.soldeCE=this.soldeCE-montant;
                para.innerHTML = "operation effectuer";
            }
        }
        else
        {
            para.innerHTML = "solde insufisant";
        }
    }

    ajouterInteretsCE(montantinteret)
    {
        this.soldeCC=this.TauxInteret+montantinteret;
    }

    getSoldeCE()
    {
        return this.soldeCE;
    }
}