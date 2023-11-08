function toggleMode() {
  //alert("Mudando para Fundo Branco")
  const html = document.documentElement
  /* Esse código pode ser trocado pelo código abaixo por já existe a função na classlit
  if (html.classList.contains(`light`)) {
    html.classList.remove(`light`)
  } else {
    html.classList.add(`light`)
  }*/
  html.classList.toggle(`light`) /* esse código faz a mesma função do de cima*/
  /* Pegar a tag img*/
  const img = document.querySelector("#profile img")
  // Substituir a imagem
  if (html.classList.contains(`light`)) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute(`scr`, `./assets/avatar.png`)
    // Se tiver sem light mode, manter a imagem normal
  } else {
    img.setAttribute(`scr`, `./assets/Foto-Selfie.png`)
  }
}
