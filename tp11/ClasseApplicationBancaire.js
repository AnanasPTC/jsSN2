class ApplicationBancaire extends Client
{
    constructor()
    {
        super("theo",123456,987654,500,2,false,1000);
    }

    test()
    {
        super.consulterComptes()
    }

    crediter(compte)
    {
        if(compte==true)
        {
            super.crediter(Number(document.getElementById("NCC").value),true);
        }
        else
        {
            super.crediter(Number(document.getElementById("NCE").value),false);
        }
        
    }

    debiter(compte)
    {
        if(compte==true)
        {
            super.debiter(Number(document.getElementById("NCC").value),true);
        }
        else
        {
            super.debiter(Number(document.getElementById("NCE").value),false);
        }
    }
}