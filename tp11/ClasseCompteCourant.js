class CompteCourant
{
    constructor(NCC,soldeCC)
    {
        this.NCC=NCC;
        this.soldeCC=soldeCC;
    }
    infosCC()
    {
        let para = document.createElement('p');
        document.getElementById("zeus").append(para);
        para.innerHTML = "compte courant numéro:"+this.NCC+",solde="+this.soldeCC+" euro";
    }
    crediterCC(montant)
    {
        this.soldeCC=this.soldeCC+montant;
        let para = document.createElement('p');
        document.getElementById("zeus").append(para);
        para.innerHTML = "operation effectuer";
    }
    debiterCC(montant)
    {
        let para = document.createElement('p');
        document.getElementById("zeus").append(para);
        if(this.soldeCC>0)
        {
            if(montant>this.soldeCC)
            {
                this.soldeCC=0;
                para.innerHTML = "solde insufisant l'argent restant sur le compte a été débiter ";
            }
            else
            {
                this.soldeCC=this.soldeCC-montant;
                para.innerHTML = "operation effectuer";
            }
        }
        else
        {
            para.innerHTML = "solde insufisant";
        }
    }
}