function testCompteCourant()
{
    odin= new CompteCourant();
}

class CompteCourant
{
    constructor(NC,solde)
    {
        this.NC=NC;
        this.solde=solde;
    }
    infos()
    {
        let para = document.createElement('p');
        document.getElementById("ares").append(para);
        para.innerHTML = "compte courant numéro:"+this.NC+",solde="+this.solde+" euro";
    }
    crediter(montant)
    {
        this.solde=this.solde+montant;
    }
    debiter(montant)
    {
        if(this.solde>0)
        {
            if(montant>this.solde)
            {
                solde=0;
            }
            else
            {
                this.solde=this.solde-montant;
            }
        }
    }
}