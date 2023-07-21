//Moralité du bousin, quand on sait quoi lui demander, stackoverflow trouve en deux secondes

function calcul() {
    //dans le cas où on veut récup  la valeur d'une input, il veut value, point !
    let mensuel = (document.querySelector("#montant").value/12)*0.77
    if (isNaN(mensuel)) {
        window.alert("Veuillez mettre des chiffres")
    }
    
    document.querySelector(".résultat").innerHTML = `votre salaire mensuel est de ${Math.round(mensuel)} euros`
}



