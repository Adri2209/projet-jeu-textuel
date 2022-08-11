let btnWin = document.querySelector("#win")
let btnLose = document.querySelector("#lose")
function choice(choix) {

    if (choix == "cave") {
        btnWin.classList.add('d-none')
        btnLose.classList.add('d-none')
        document.querySelector('#para').innerText = "Chercher à la cave, une cachete de trésor idéale mais pas de trésor à l'intérieur PERDU!!!"
        btnLose.classList.remove('d-none')
    } else if (choix == "jardin") {
        btnWin.classList.add('d-none')
        btnLose.classList.add('d-none')
        document.querySelector('#para').innerText = "Ou bien chercher le butin enterré dans le jardin mais toujours rien. PERDU!!! Tu dois recommencer"
        btnLose.classList.remove('d-none')
    }
    else if (choix == "mur") {
        btnWin.classList.add('d-none')
        btnLose.classList.add('d-none')
        document.querySelector('#para').innerText = "Verifier si le butin est caché dans le mur de la maison. PERDU! Après démolition à part les gravats rien d'autre. Ne perds pas espoir et recommence!"
        btnLose.classList.remove('d-none')

    } else if (choix == "chemine") {
        btnWin.classList.add('d-none')
        btnLose.classList.add('d-none')
        document.querySelector('#para').innerText = "Ou bien dans la cheminée.PERDU! Rien non plus dans la cheminée mais tu y est presque!!!"
        btnLose.classList.remove('d-none')

    }
    else if (choix == "grenier") {
        btnWin.classList.add('d-none')
        btnLose.classList.add('d-none')
        document.querySelector('#para').innerText = "Chercher le butin dans le grenier. Une bonne cachette aussi mais pas de butin à l'inérieur. PERDU!!!"*
        btnLose.classList.remove('d-none')
    } else if (choix == "garage") {
        btnWin.classList.add('d-none')
        btnLose.classList.add('d-none')
        document.querySelector('#para').innerText = "Ou bien le chercher dans le garage. PERDU! Trop facile c'est pour ça qu'il n'y a rien dans le  garage non plus! Il te reste plus qu'un seul endroit. C'est sur c'est le bon."
        btnLose.classList.remove('d-none')
    }
    else if (choix == "escalier") {
        btnWin.classList.add('d-none')
        btnLose.classList.add('d-none')
        document.querySelector('#para').innerText = "Le butin est finalement trouvé dans les marches de l'escalier. TU AS GAGNE!!!"
        btnWin.classList.remove('d-none')
    }

}
