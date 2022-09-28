function testCompteCourant()
{
    odin= new CompteCourant(123456,100);
    odin.infos();
    odin.crediter(400);
    odin.infos();
    odin.debiter(500);
    odin.infos();
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
        let para = document.createElement('p');
        document.getElementById("ares").append(para);
        para.innerHTML = "operation effectuer";
    }
    debiter(montant)
    {
        let para = document.createElement('p');
        document.getElementById("ares").append(para);
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
}