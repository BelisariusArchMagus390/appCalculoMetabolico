function taxaAtividade(){
  //variaveis globais
  var tax = 0;

  var sel = document.getElementById("sexo").value;

  var p = document.getElementById("peso").value;
  var alt = document.getElementById("altura").value;
  var idade = document.getElementById("idade").value;
  
  //verificação da tava de atividade 
    if(document.getElementById("sedentario").checked){    
        tax = 1.2;    
        if(sel == "opMasc"){
            calculoMetaMasc(idade, alt, p, tax);
        }
        else if(sel == "opFem"){
            calculoMetaFem(idade, alt, p, tax)
        }
    }
    else if(document.getElementById("leveAtivo").checked){
        tax = 1.375;
        if(sel == "opMasc"){
            calculoMetaMasc(idade, alt, p, tax);
        }
        else if(sel == "opFem"){
            calculoMetaFem(idade, alt, p, tax)
        }
    }
    else if(document.getElementById("modeAtivo").checked){
        tax = 1.55;
        if(sel == "opMasc"){
            calculoMetaMasc(idade, alt, p, tax);
        }
        else if(sel == "opFem"){
            calculoMetaFem(idade, alt, p, tax)
        }
    }
    else if(document.getElementById("altaAtivo").checked){
        tax = 1.725;
        if(sel == "opMasc"){
            calculoMetaMasc(idade, alt, p, tax);
        }
        else if(sel == "opFem"){
            calculoMetaFem(idade, alt, p, tax)
        }
    }
    else if(document.getElementById("extraAtivo").checked){
        tax = 1.9;
        if(sel == "opMasc"){
            calculoMetaMasc(idade, alt, p, tax);
        }
        else if(sel == "opFem"){
            calculoMetaFem(idade, alt, p, tax)
        }
    }
}

//funções referentes ao calculo respectivo de cada sexo
function calculoMetaMasc(idade, alt, p, tax){
    var m = tax * (66 + ((13.7 * p) + (5 * alt) - (6.8 * idade)));
    document.getElementById("total").innerHTML = m;
}

function calculoMetaFem(idade, alt, p, tax){
    var f = tax * (655 + ((9.6 * p) + (1.8 * alt) - (4,7 * idade)));
    document.getElementById("total").innerHTML = f;}