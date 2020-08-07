//imagens do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;


//sons do jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;


function preload()
{
  imagemDaEstrada = loadImage("images/estrada.png");
  imagemDoAtor = loadImage("images/ator-1.png");
  imagemDoCarro = loadImage("images/carro-1.png");
  imagemDoCarro2 = loadImage("images/carro-2.png");
  imagemDoCarro3 = loadImage("images/carro-3.png");
    imagemDosCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3,imagemDoCarro, imagemDoCarro2, imagemDoCarro3]
  
  somDaTrilha = loadSound("Music/trilha.mp3");
  somDaColisao = loadSound("Music/colidiu.mp3");
  somDoPonto = loadSound("Music/pontos.wav");
  
}