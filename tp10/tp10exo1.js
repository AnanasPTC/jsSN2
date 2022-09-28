class Etudiant
{
    //constructeur
    constructor(nom,prenom,numero)
    {
        this.nom=nom;
        this.prenom=prenom;
        this.numero=numero;
    }
    //méthodes
    get getNom()
    {
        return this.nom;
    }
    get getNumero()
    {
        return this.numero; 
    }
    
    set changerNumero(unNumero)
    {
        this.numero=unNumero;
    }

    set changerNom(nom)
    {
        this.nom=nom;
    } 

    set changerPrenom(prenom)
    {
        this.prenom=prenom
    }
}

