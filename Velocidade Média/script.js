


function Calcular() {

    var dist = Number(document.getElementById("dist").value)
    var tempo =  Number(document.getElementById("tempo").value)


    var resposta = dist / tempo
    var respostaFixed = resposta.toFixed(1)
    document.getElementById("resp").value = respostaFixed

    document.getElementById("historico").innerHTML += respostaFixed + " Km/h" + "<br>"

    localStorage.setItem("respostaFixed", respostaFixed + " Km/h") = []
}

function Limpar() {
    dist = (" ")
    tempo = (" ")
    resp = (" ")
    var limpDist = document.getElementById("dist").value = limpDist
    var limpTempo = document.getElementById("tempo").value = limpTempo
    var limpResp = document.getElementById("resp").value = limpResp
}

function LimparHistórico() {
    historico = ("")
    var limpHist = document.getElementById("historico").innerHTML = historico
}
