function calcular(){
    var valor1= parseFloat(document.getElementById('valor1').value)
    var valor2= parseFloat(document.getElementById('valor2').value)
    var operacao= (document.getElementById('operacao').value)
    var resultado= (document.getElementById('caixaResultado'))
    switch (operacao) {
        case "+":
            resultado=valor1+valor2
            break;
        case "-":
            resultado=valor1-valor2
            break;
        case "*":
            resultado=valor1*valor2
            break;
        case "/":
            resultado=valor1/valor2
            break;
        default:
            break;
    }
    document.getElementById('caixaResultado').innerHTML = `O resultado da operação é ${resultado}`
    
}

function calculoEnergia(){
    var quantidadeKwh= parseFloat(document.getElementById('qtdeKwh').value);
    var valorKwh= parseFloat(document.getElementById('valorKwh').value);
    var resultado2= quantidadeKwh*valorKwh
    var acrescimo=0
    
    if (resultado2>100 && resultado2<200){
        acrescimo=resultado2*0.25
        resultado2=resultado2+acrescimo
    }
    else if (resultado2>200){
        acrescimo=resultado2*0.50
        resultado2=resultado2+acrescimo
    }

    document.getElementById('caixaResultado2').innerHTML= `O seu consumo de energia teve ${acrescimo} reais de acréscimo e o total é ${resultado2}`;
}

function mostrarMaiorValor1(){
    var valores = document.getElementById("valores").value;
    valores= valores.split(',')
    var maiorValor1=0
    

    for (i = 0; i < valores.length; i++) {
        var valor=parseFloat(valores[i])
        if(maiorValor1 < valor){
            maiorValor1=valor
        }
       
    }
    document.getElementById('valores1').innerHTML=`O maior valor apresentado foi ${maiorValor1}`;
}

function mostrarMaioreseMenores(){
    var idades= document.getElementById("idades").value;
    idades=idades.split(",");
    var menoresIdade=0
    var maioresIdade=0

        for (i = 0; i < idades.length; i++) {
            if(idades[i] >= 18){
                maioresIdade=maioresIdade+1
            }
            if(idades[i]<18){
                menoresIdade=menoresIdade+1
            }
           
        }
        document.getElementById('mostrarMenorEMaiorValor').innerHTML=`O número de pessoas menores de idade é ${menoresIdade} e maiores de idade é ${maioresIdade}`;
    }