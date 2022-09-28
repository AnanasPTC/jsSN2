function testPolynome2()
{
    thanatos = new PolynomeDegre2(2,4,-1);
    thanatos.affiche();
    let para = document.createElement('p');
    document.getElementById("ares").append(para);
    let result=thanatos.evaluation(3);
    para.innerHTML = "evaluation(3)="+result;
    thanatos.calculRacines();

}

class PolynomeDegre2
{
    constructor(a,b,c)
    {
        this.a=a;
        this.b=b;
        this.c=c;
    }

    evaluation(x)
    {
        let f;
        f=this.a*x*x+this.b*x+this.c;
        return f;
    }

    calculRacines()
    {
        let para = document.createElement('p');
        document.getElementById("ares").append(para);
        let delta=this.b*this.b-4*this.a*this.c;
        if (delta>0)
        {
            let x1,x2;
            x1=(-this.b-Math.sqrt(delta))/2*this.a;
            x2=(-this.b+Math.sqrt(delta))/2*this.a;
            para.innerHTML = "racine1="+x1+" ; racine2="+x2;
        }
        if (delta==0)
        {
            let x;
            x=-this.b/2*this.a;
            para.innerHTML = "racine="+x;
        }
        if (delta<0)
        {
            para.innerHTML = "le polynôme n'admet aucune racine réelle"
        }
    }

    affiche()
    {
        let para = document.createElement('p');
        document.getElementById("ares").append(para);
        para.innerHTML = "f(x)="+this.a+"*x²+"+this.b+"*x+"+this.c;
    }
}