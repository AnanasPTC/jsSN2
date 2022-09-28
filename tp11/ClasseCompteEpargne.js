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
        document.getElementById("ares").append(para);
        if (this.blocage==true)
        {
            textb="compte bloqué"
        }
        else
        {
            textb="compte non bloqué"
        }
        para.innerHTML="Compte épargne numéro "+this.NC+"a "+ this.TauxInteret+"de taux d'intérêts,de solde de "+this.solde+" euros, "+this.blocage;
    }

    crediter()
    {

    }

    debiter()
    {

    }

    ajouterInterets()
    {

    }

    getSolde()
    {
        
    }
}