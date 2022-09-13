function Calcular() {
    var dist = document.getElementById("dist")
    var tempo = document.getElementById("tempo")

    var dist1 = Number(dist.value)
    var tempo1 = Number(tempo.value)

    var resposta = dist1 / tempo1
    var respostaFixed = resposta.toFixed(3)
    document.getElementById("resp").value = respostaFixed

    document.getElementById("resultados").innerHTML += respostaFixed + "<br>"
}

function Limpar() {
    dist = (" ")
    tempo = (" ")
    resp = (" ")
    var limpDist = document.getElementById("dist").value = limpDist
    var limpTempo = document.getElementById("tempo").value = limpTempo
    var limpResp = document.getElementById("resp").value = limpResp
}

