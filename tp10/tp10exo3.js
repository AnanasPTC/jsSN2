function testPolynome()
{
    //thor
    thor = new PolynomeDegre1(5,-3);
    thor.affiche();
    let para = document.createElement('p');
    document.getElementById("osiris").append(para);
    let result=thor.evaluation(2);
    para.innerHTML =  "f(2)="+result;
    //midas
    midas = new PolynomeDegre1(0,8);
    midas.affiche();
    result=midas.calculRacine();
    let para2 = document.createElement('p');
    document.getElementById("osiris").append(para2);
    para2.innerHTML =  midas.a+";"+midas.b+")racine="+result;
    //hercule
    hercule = new PolynomeDegre1(12,4);
    hercule.affiche();
    result=hercule.calculRacine();
    let para3 = document.createElement('p');
    document.getElementById("osiris").append(para3);
    para3.innerHTML =  hercule.a+";"+hercule.b+")racine="+result;
    
}

class PolynomeDegre1
{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }

    evaluation(x)
    {
        let f;
        f=this.a*x+this.b;
        return f;
    }

    calculRacine()
    {
        return (-this.b/this.a)
    }

    affiche()
    {
        let para = document.createElement('p');
        document.getElementById("osiris").append(para);
        para.innerHTML = "f(x)="+this.a+"*x+"+this.b;
    }
}