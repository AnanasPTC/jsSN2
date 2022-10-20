class partie
{
    constructor(id,name,jeux,nbjoueur,joueurCourant)
    {
        this.id=id;
        this.name=name;
        this.jeux=jeux;
        this.nbjoueur=nbjoueur;
        this.joueurCourant=joueurCourant;
    }
}

class joueur
{
    constructor(id,name,partieId,ordre,score)
    {
        this.id=id;
        this.name=name;
        this.partieId=partieId;
        this.ordre=ordre;
        this.score=score;
    }
}
let essaie=5;
export {essaie} ;