// Helper function to get elements by ID for cleaner code
const getElement = (id) => document.getElementById(id);

/* variaveis */
// esse getelement pega o elemento html pelo id ai coloca o mesmo id la e aqui 
var heroNomeInput = document.getElementById("nome-input");
var heroVidaInput = document.getElementById("vida-input");
var heroAtaqueInput = document.getElementById("ataque-input");


//variavel status player 
var heroNomeUI = document.getElementById("nome-ui");
var heroVidaUI = document.getElementById("vida-ui");
var heroAtaqueUI= document.getElementById("ataque-ui");
var heroXpUI=  document.getElementById("xp-ui");
var heroXpUpdrate= document.getElementById("xp-updrate-ui");
var heroAtkUpdrateButton = document.getElementById("atk-upgrade-ui");

//varivais de inimigos
var BossHabilitado = document.getElementById("Boss");
var JavaliHabilitado= document.getElementById("Javali");
var CaoHabilidado = document.getElementById("Cao");
var ZombieHabilidado = document.getElementById("Zombie");

//tirando as fotos
BossHabilitado.style.display = "none";
JavaliHabilitado.style.display = "none";
CaoHabilidado.style.display ="none";
ZombieHabilidado.style.display ="none";

//tirando os botoes
heroAtkUpdrateButton.style.display = "none";
heroXpUpdrate.style.display = "none";
// player variaveis
let heroName;
let heroVida;
let heroAtaque;
let heroXp;

//variaveis de sessoes
var secPlayerMenu = document.getElementById("sectPlayerMenu");


function CreateHero(){
  //alert(heroNomeInput.value); //value para input
  
  //Salvar o valor do input nas variaveis do player
  heroName = heroNomeInput.value;
  heroVida = parseInt(heroVidaInput.value);
  heroAtaque = parseInt(heroAtaqueInput.value);
  heroXp = 0;
  

  
  //fazer o men bloquear e falar se ta certo ou errado
  
  if(heroAtaque + heroVida <= 20){
   
  
    UpdateHeroStatus();
    
    //fazendo o documento html (menu) sair como for bloqueado usando display 
    secPlayerMenu.style.display = "none";
    CaoHabilidado.style.display = "inline-block";
    
  }
  
  else{
    alert("Nao pode >:( respeite as regras");
    recarregarAPagina();
  }
  
}



function UpdateHeroStatus(){
  //fazendo mostrar na tela de status player
  heroNomeUI.innerHTML = heroName; 
  heroVidaUI.innerHTML = heroVida;
  heroAtaqueUI.innerHTML = heroAtaque;
  heroXpUI.innerHTML = heroXp;
  
  if (heroXp >0){
    
    heroAtkUpdrateButton.style.display = "inline";
    heroXpUpdrate.style.display = "inline";
     }
   else {
     //tira os botoes
       heroAtkUpdrateButton.style.display = "none";
       heroXpUpdrate.style.display = "none";
     
    }
}

function numeroAleatorio(min,max){
   
  return Math.floor(Math.random() * (max-min));
  
}

function pragainimigo(){
  
  var inimigoHP  = 5;
  var inimigoATK = 1;
  var playerAtaque; 
  
  if (heroAtaque >= 20 || heroVida >= 20){
    
    alert("Você não pode mais lutar com o Pestilantor pois você ja esta muito forte, agora lute com os outros");
      CaoHabilidado.style.display = "none";
  }
  else{
  //ciclo para os inimigos
  do // enquanto..
  
    {
       var playerAtaque = numeroAleatorio(0,heroAtaque);
      
      alert("Pestilantor tem " + inimigoHP + " de vida");
  
  alert("Ataque " + heroName + " causou " + playerAtaque + " de dano😎");
  inimigoHP -= playerAtaque;
  alert("Pestilantor possui " + inimigoHP + " de vida");
  
  // caso o inimigo sobreviva
  if (inimigoHP > 0){
    alert("Inimigo atacou com " + inimigoATK+ " de dano🤕");
    heroVida -= inimigoATK;
    alert(heroName + " possui " + heroVida+ " de vida💖");
     }
    } 
  
  while (inimigoHP > 0 && heroVida > 0) // verifica se o heroi morreu
      
      if (heroVida > 0){
        alert("Você sobreviveu ao inimigo🥳");
        heroXp = heroXp + 2;
        alert("Você recebeu um ponto de XP⏫" + heroXp);
        InimigosOcultos();
      }
      else{
        alert("Infelizmente, você perdeu a guerra")
        recarregarAPagina();
      }
  
     UpdateHeroStatus();

}
}

function javalisinimigo(){
  
  var inimigoHP  = 15;
  var inimigoATK = 8;
  var playerAtaque; 
  
  
  //ciclo para os inimigos
  do // enquanto..
  
    {
       var playerAtaque = numeroAleatorio(0,heroAtaque);
      
      alert("O Javali tem " + inimigoHP + " de vida");
  
  alert("Ataque " + heroName + " causou " + playerAtaque + " de dano😎");
  inimigoHP -= playerAtaque;
  alert("O javali possui " + inimigoHP + " de vida😳");
  
  // caso o inimigo sobreviva
  if (inimigoHP > 0){
    alert("Inimigo atacou com " + inimigoATK+ " de dano🤕");
    heroVida -= inimigoATK;
    alert(heroName + "possui " + heroVida+ " de vida💖");
     }
    } 
  while (inimigoHP >0 && heroVida > 0) // verifica se o heroi morreu
      
      if (heroVida > 0){
        alert("Você sobreviveu ao inimigo🥳");
        heroXp = 10 + 10;
        alert("Você recebeu "+ heroXp + "pontos de XP⏫");
       
      }
      else{
        alert("Você foi de base da virginia, americanas, de F, comes e bebes,drake e josh😪")
        recarregarAPagina();
      }
  
     UpdateHeroStatus();
  
}

//funçao para add ataque 
function AddAtk(){
  if (heroXp > 0)
    {
      heroXp--
      heroAtaque++;
    }
  
    UpdateHeroStatus();
   BOSS();
  
}
//funçao para add vida
 function AddHP(){
    if (heroXp > 0)
      {
        heroXp--;
        heroVida++;    
      }
    
    UpdateHeroStatus();
   BOSS();
 }

//recarregando a pagina quando algo der errado 
function recarregarAPagina(){
    window.location.reload();
} 
          
//funçao para aparecer o boss
function BOSS(){
  if(heroVida >= 1 && heroAtaque >= 1){
    BossHabilitado.style.display = "inline-block";
    
  }
}

//ocultar os inimigos para aparecer somente depois de derrotar o primeiro 
function InimigosOcultos(){
  JavaliHabilitado.style.display = "inline-block";
  ZombieHabilidado.style.display = "inline-block";
}

function zombieinimigo() {
  var inimigoHP = 20;
  var inimigoATK = 8;
  var playerAtaque;

  function mordidaLetal() {
    var ocorreMordida = Math.random() <= 0.4;  // 40% de chance de ocorrer mordida

    if (ocorreMordida) {
      alert(heroName + " Não conseguiu esquivar da mordida, você perde 1 de vida neste round");
      heroVida--;  // Decrementa a vida do herói
      UpdateHeroStatus();
    } else {
      alert(heroName + " Desviou da habilidade do inimigo!");
    }
  }

  // Ciclo para os inimigos
  do 
  {
    var playerAtaque = numeroAleatorio(0, heroAtaque);

    alert("O Zombie tem " + inimigoHP + " de vida");
    
    alert("Ataque " + heroName + " causou " + playerAtaque + " de dano😎");
    inimigoHP -= playerAtaque;
    alert("O Zombie possui " + inimigoHP + " de vida😳");

     // funçao da habilidade do inimigo
  mordidaLetal();
    // Caso o inimigo sobreviva
    if (inimigoHP > 0) {
      alert("Inimigo atacou com " + inimigoATK + " de dano🤕");
      heroVida -= inimigoATK;
      alert(heroName + " possui " + heroVida + " de vida💖");
    }
  }
  while (inimigoHP > 0 && heroVida > 0);  // Verifica se o herói morreu

  if (heroVida > 0) {
    alert("Você sobreviveu ao inimigo🥳");
    heroXp = 10 + 10;
    alert("Você recebeu " + heroXp + " pontos de XP⏫");
  } else {
    alert("Você foi de base da virginia, americanas, de F, comes e bebes, drake e josh😪");
    recarregarAPagina();
  }

  UpdateHeroStatus();
}

function sorte(){
  
  var numerodasorte = Math.floor(Math.random() * 101);
  var numerodedano =  Math.floor(Math.random() * 5);
  
  if (numerodasorte <= 50)
    {
      alert(heroName + " não conseguiu esquivar, você recebe menos " + numerodedano + " de vida");
      heroVida = heroVida - numerodedano;
    }
  else{
    alert(heroName + " desviou da habilidade do inimigo, você recebe " + numerodedano + "de ataque");
    heroAtaque = heroAtaque + numerodedano;
  }
}
    
  
function AmigoImaginario() {
    var inimigoHP = 60;
    var inimigoATK = 10;
  
  function Prender() 
  {
       
    var prender = Math.random() <= 0.5;

   if (prender) {
      alert(heroName + " você foi atacado pelos tentáculos do inimigo, você ficará um round sem movimentos");
     
      alert("Inimigo atacou com " + inimigoATK + " de dano🤕");
      heroVida -= inimigoATK;
      alert(heroName + " possui " + heroVida + " de vida💖");
      
      alert("Inimigo atacou com " + inimigoATK + " de dano🤕");
      heroVida -= inimigoATK;
      alert(heroName + " possui " + heroVida + " de vida💖");
    }
    
      else {
      alert("O inimigo tentou usar os tentáculos, mas ele errou.");
    }  
}
  
  function escolherAcaoAleatoria() 
{
  
    var sorteio = Math.random(); // Gera um número aleatório entre 0 e 1

  // Use as probabilidades para escolher uma ação
    if (sorteio < 0.3) 
  {
    Derreter();
  } else if (sorteio < 0.6)
  {
    Prender();
  } 
  else
  {
     Disolver();
    recarregarAPagina();
  }
}
  
  
    while (inimigoHP > 0 && heroVida > 0){
    
      var playerAtaque = numeroAleatorio(20, heroAtaque);

      escolherAcaoAleatoria(); // Execute uma ação aleatória do inimigo a cada rodada
      
      alert("Ataque " + heroName + " causou " + playerAtaque + " de dano😎");
      inimigoHP -= playerAtaque;
      alert("O inimigo possui " + inimigoHP + " de vida😳"); 
       
  
    if (inimigoHP < 0) {
      alert("Você sobreviveu ao inimigo🥳");
      heroXp++;
      alert("Você recebeu um ponto de XP⏫" + heroXp);

    }
  else if (heroVida <= 0 || Disolver == true) 
    {
      alert("Você foi de base da virginia, americanas, de F, comes e bebes, drake e josh😪");
      recarregarAPagina();
    }
  
    UpdateHeroStatus();

}
  }

/*function escolherAcaoAleatoria() {
  
  var sorteio = Math.random();

  // Use as probabilidades para escolher uma ação
  if (sorteio < 0.3) {
    Derreter();
  } else if (sorteio < 0.6) {
    Prender();
  } else {
     Disolver();
  }
}
*/

// Função Derreter
// Função para derreter o rosto do jogador
function Derreter() 
{
  var derreterRosto = true;
  
  var heroAtaque1 = Math.random() <= 0.5;
  
  if (derreterRosto)
  {
    alert(heroName + " o inimigo está aproximando você perto do rosto dele. Ele está prestes a derreter uma parte do seu rosto. Você precisa tirar 20 de dano.");
    
    if (heroAtaque1) 
    {
      alert(heroName + " conseguiu se livrar, não derretendo seu rosto. Você recebeu mais um de dano");
      heroAtaque++;
      alert("Agora seu dano é de " + heroAtaque);
      UpdateHeroStatus();
    }
    else 
    {
      alert("Seu rosto está parcialmente derretido, você perdeu 7 de vida.");
      heroVida = heroVida - 7;
      alert("Sua vida é de " + heroVida);
      
      UpdateHeroStatus();
    }
    }
}



// Função para dissolver o jogador
function Disolver() {
  
  var absorver = Math.random() <= 0.9;
  
  if (absorver) {
    alert("O inimigo pegou seu corpo e o absorveu por completo, te derretendo completamente. Você irá morrer, mas você tem a chance de mais um ataque");
    heroVida = 0;
    recarregarAPagina();
    
  }
   UpdateHeroStatus();
}
