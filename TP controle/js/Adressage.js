function conversion()
{
    octets=getIPstring();
    let validiteip=IPValide(octets);
    if(validiteip==false)
    {
        alert("addresse ip invalide")
        document.getElementById("dec1").value=0;
        document.getElementById("dec2").value=0;
        document.getElementById("dec3").value=0;
        document.getElementById("dec4").value=0;
    }
    let chaine=getValeurDecimale(octets);
    console.log(chaine);
    let ipbin=getIpBinaire(octets);
    let classe=getClasse(octets[0]);
    let adresse=getAdresseReseau(octets,document.getElementById("masque").value);
    let type=getTypeAdresse(classe,octets[0]);
    //affichage
    let affiche=document.getElementById("binaire");
    affiche.innerHTML=ipbin;
    affiche=document.getElementById("classe");
    affiche.innerHTML=classe;
    affiche=document.getElementById("type");
    affiche.innerHTML=type;
}

function getIPstring()
{
    let octets=[];
    octets.push(document.getElementById("dec1").value);
    octets.push(document.getElementById("dec2").value);
    octets.push(document.getElementById("dec3").value);
    octets.push(document.getElementById("dec4").value);
    return octets;
}
function IPValide(octets)
{
    let reponse=true;
    for(let i=0;i<4;i++)
    {
        if(octets[i]<0 ||octets[i]>255)
        {
            reponse=false
        }
    }
    return reponse;
}
function getValeurDecimale(octets)
{
    let chaine="";
    for(let i=0;i<4;i++)
    {
        chaine=chaine+octets[i]+".";
    }
    return chaine;
}
function decimalToBinaire(valeurDecimale)
{
    let reponse=String(parseInt(valeurDecimale,10).toString(2));
    for(let i=reponse.length;i<8;i++)
    {
        reponse="0"+reponse;
    }
    return reponse;
}
function getIpBinaire(octets)
{
    let reponse=""
    for(let i=0;i<4;i++)
    {
        reponse=reponse+decimalToBinaire(octets[i])+".";
    }
    return reponse;
}
function getClasse(premoctet)
{
    let reponse=""
    if(premoctet>=0 && premoctet<=127)
    {
        reponse="A";
    }
    if(premoctet>=128 && premoctet<=191)
    {
        reponse="B";
    }
    if(premoctet>=192 && premoctet<=223)
    {
        reponse="C";
    }
    if(premoctet>=224 && premoctet<=239)
    {
        reponse="D";
    }
    if(premoctet>=240 && premoctet<=255)
    {
        reponse="E";
    }
    return reponse;
}
function getAdresseReseau(AdresseIP,nombreBitMasque)
{
    if(nombreBitMasque>=0 && nombreBitMasque<=32)
    {

    }
    else
    {
        alert("masque invalide");
    }
}
function getTypeAdresse(classe,octets)
{
    let reponse=""
    if(classe=="A" && octets[0]==10)
    {
        reponse="privées";
    }
    if(classe=="B" && octets[0]==172)
    {
        reponse="privées";
    }
    if(classe=="C" && octets[0]==192)
    {
        reponse="privées";
    }
    if(classe=="D")
    {
        reponse="Multicast"
    }
    if(classe=="E")
    {
        reponse="Expérimentale";
    }
    
    if(classe=="A" && reponse=="")
    {
        reponse="Publique";
    }
    if(classe=="B" && reponse=="")
    {
        reponse="Publique";
    }
    if(classe=="C" && reponse=="")
    {
        reponse="Publique";
    }
    
    return reponse;
}