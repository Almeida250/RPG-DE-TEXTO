// Helper function to get elements by ID for cleaner code
const getElement = (id) => document.getElementById(id);

/* variaveis */
// esse getelement pega o elemento html pelo id ai coloca o mesmo id la e aqui 
let heroNomeInput = document.getElementById("nome-input");
let heroVidaInput = document.getElementById("vida-input");
let heroAtaqueInput = document.getElementById("ataque-input");


//variavel status player 
let heroNomeUI = document.getElementById("nome-ui");
let heroVidaUI = document.getElementById("vida-ui");
let heroAtaqueUI = document.getElementById("ataque-ui");
let heroXpUI = document.getElementById("xp-ui");
let heroXpUpdrate = document.getElementById("xp-updrate-ui");
let heroAtkUpdrateButton = document.getElementById("atk-upgrade-ui");

//varivais de inimigos
let BossHabilitado = document.getElementById("Boss");
let CarbonoxHabilitado = document.getElementById("Carbonox");
let CaoHabilidado = document.getElementById("Praga");
let machadonteHabilidado = document.getElementById("Lenhador");

//tirando as fotos
BossHabilitado.style.display = "none";
CarbonoxHabilitado.style.display = "none";
CaoHabilidado.style.display = "none";
machadonteHabilidado.style.display = "none";

//tirando os botoes
heroAtkUpdrateButton.style.display = "none";
heroXpUpdrate.style.display = "none";
// player variaveis
let heroName;
let heroVida;
let heroAtaque;
let heroXp;

//variaveis de sessoes
let secPlayerMenu = document.getElementById("sectPlayerMenu");


function CreateHero() {
  //alert(heroNomeInput.value); //value para input

  //Salvar o valor do input nas variaveis do player
  heroName = heroNomeInput.value;
  heroVida = parseInt(heroVidaInput.value);
  heroAtaque = parseInt(heroAtaqueInput.value);
  heroXp = 0;



  //fazer o men bloquear e falar se ta certo ou errado

  if (heroAtaque + heroVida <= 20 && heroAtaque + heroVida > 0) {
    UpdateHeroStatus();

    //fazendo o documento html (menu) sair como for bloqueado usando display 
    secPlayerMenu.style.display = "none";
    CaoHabilidado.style.display = "inline-block";
  }
  else {
    alert("ERRO: Use seus pontos corretamente!");
    recarregarAPagina();
  }
}

function UpdateHeroStatus() {
  //fazendo mostrar na tela de status player
  heroNomeUI.innerHTML = heroName;
  heroVidaUI.innerHTML = heroVida;
  heroAtaqueUI.innerHTML = heroAtaque;
  heroXpUI.innerHTML = heroXp;

  if (heroXp > 0) {
    heroAtkUpdrateButton.style.display = "inline";
    heroXpUpdrate.style.display = "inline";
  }
  else {
    //tira os botoes
    heroAtkUpdrateButton.style.display = "none";
    heroXpUpdrate.style.display = "none";
  }
}

//ataque do hero
function numeroAleatorio(min, max, heroAtaque) {
  let minGarantido = min;

  if(heroAtaque >= 10) {  
    const bonusMinimo = Math.floor((heroAtaque - 10) / 10) * 2;
    minGarantido = Math.min(min + bonusMinimo, max - 1);
  }
  minGarantido = Math.max(min, Math.min(minGarantido, max - 1));

  return Math.floor(Math.random() * (max - minGarantido)) + minGarantido;
}

function pragainimigo() {
  let inimigoHP = 5;
  let inimigoATK = 1;
  let playerAtaque;

  if (heroAtaque >= 20 || heroVida >= 20) {
    alert("Você não pode mais lutar com o Pestilantor pois você ja esta muito forte, agora lute com os outros");
    CaoHabilidado.style.display = "none";
  }
  else {
    //ciclo para os inimigos
    do // enquanto..

    {
      playerAtaque = numeroAleatorio(0, heroAtaque);

      alert(`Pestilantor tem ${inimigoHP} de vida`);

      alert(`Ataque de ${heroName} causou ${playerAtaque} de dano😎`);
      inimigoHP -= playerAtaque;
      alert(`Pestilantor possui ${inimigoHP} de vida`);

      // caso o inimigo sobreviva
      if (inimigoHP > 0) {
        alert(`Inimigo atacou com ${inimigoATK} de dano🤕`);
        heroVida -= inimigoATK;
        alert(`${heroName} possui ${heroVida} de vida💖`);
      }
    }

    while (inimigoHP > 0 && heroVida > 0) // verifica se o heroi morreu

    if (heroVida > 0) {
      alert("Você sobreviveu ao inimigo🥳");
      heroXp = heroXp + 2;
      alert(`Você recebeu ${heroXp} pontos de XP⏫`);
      InimigosOcultos();
    }
    else {
      alert("Você perdeu a batalha e toda a floresta foi destruida. FIM DE JOGO.")
      recarregarAPagina();
    }

    UpdateHeroStatus();

  }
}

function carbonoxsInimigo() {

  let inimigoHP = 15;
  let inimigoATK = 8;
  let playerAtaque;


  if (heroAtaque >= 40 || heroVida >= 40) {
    alert("Você não pode mais lutar contra Carbonox pois você ja esta muito forte, lute contra outros Inimigos");
    CarbonoxHabilitado.style.display = "none";
  } else {
    do // enquanto..

    {
      let playerAtaque = numeroAleatorio(0, heroAtaque);

      alert(`O Carbonox tem ${inimigoHP} de vida`);

      alert(`Ataque de ${heroName} causou ${playerAtaque} de dano😎`);
      inimigoHP -= playerAtaque;
      alert(`O Carbonox possui ${inimigoHP} de vida😳`);

      // caso o inimigo sobreviva
      if (inimigoHP > 0) {
        alert("Inimigo atacou com " + inimigoATK + " de dano🤕");
        heroVida -= inimigoATK;
        alert(`${heroName} possui ${heroVida} de vida💖`);
      }
    }
    while (inimigoHP > 0 && heroVida > 0) // verifica se o heroi morreu

    if (heroVida > 0) {
      alert("Você sobreviveu ao inimigo🥳");
      heroXp = heroXp + 8;
      alert(`Você recebeu ${heroXp} pontos de XP⏫`);

    }
    else {
      alert("Você perdeu a batalha e toda a floresta foi destruida. FIM DE JOGO.")
      recarregarAPagina();
    }

    UpdateHeroStatus();
  }

}

//funçao para add ataque 
function AddAtk() {
  if (heroXp > 0) {
    heroXp--
    heroAtaque++;
  }

  UpdateHeroStatus();
  BOSS();

}
//funçao para add vida
function AddHP() {
  if (heroXp > 0) {
    heroXp--;
    heroVida++;
  }

  UpdateHeroStatus();
  BOSS();
}

//recarregando a pagina quando algo der errado 
function recarregarAPagina() {
  window.location.reload();
}

//funçao para aparecer o boss
function BOSS() {
  if (heroVida >= 1 && heroAtaque >= 1) {
    BossHabilitado.style.display = "inline-block";

  }
}

//ocultar os inimigos para aparecer somente depois de derrotar o primeiro 
function InimigosOcultos() {
  CarbonoxHabilitado.style.display = "inline-block";
  machadonteHabilidado.style.display = "inline-block";
}

function machadonteinimigo() {
  let inimigoHP = 20;
  let inimigoATK = 8;
  let playerAtaque;

  function machadadaLetal() {
    let ocorreMachadada = Math.random() <= 0.4;  // 40% de chance de ocorrer machadada

    if (ocorreMachadada) {
      alert(`${heroName} Não conseguiu esquivar da machadada do lenhador, ${heroName} perde 1 de vida neste round`);
      heroVida--;  // Decrementa a vida do herói
      UpdateHeroStatus();
    } else {
      alert(`${heroName} Desviou da habilidade do inimigo!`);
    }
  }

  // Ciclo para os inimigos
  if (heroAtaque >= 75 || heroVida >= 75) {
    alert("Você não pode mais lutar contra Machadonte pois você ja esta muito forte, lute contra outros Inimigos");
    machadonteHabilidado.style.display = "none";
  } else {
    do {
      let playerAtaque = numeroAleatorio(0, heroAtaque);

      alert(`Machadonte tem  ${inimigoHP} de vida`);

      alert(`Ataque de ${heroName} causou ${playerAtaque} de dano😎`);
      inimigoHP -= playerAtaque;
      alert(`O Machadonte possui ${inimigoHP} de vida😳`);

      // funçao da habilidade do inimigo
      machadadaLetal();
      // Caso o inimigo sobreviva
      if (inimigoHP > 0) {
        alert("Inimigo atacou com " + inimigoATK + " de dano🤕");
        heroVida -= inimigoATK;
        alert(`${heroName} possui ${heroVida} de vida💖`);
      }
    }
    while (inimigoHP > 0 && heroVida > 0);  // Verifica se o herói morreu

    if (heroVida > 0) {
      alert("Você sobreviveu ao inimigo🥳");
      heroXp = + 16;
      alert(`Você recebeu ${heroXp} pontos de XP⏫`);
    } else {
      alert("Você perdeu a batalha e toda a floresta foi destruida. FIM DE JOGO.");
      recarregarAPagina();
    }

    UpdateHeroStatus();
  }
}

function sorte() {

  let numerodasorte = Math.floor(Math.random() * 101);
  let numerodedano = Math.floor(Math.random() * 5);

  if (numerodasorte <= 50) {
    alert(`${heroName} não conseguiu esquivar, você perdeu ${numerodedano} de vida`);
    heroVida = heroVida - numerodedano;
  }
  else {
    alert(`${heroName} desviou da habilidade do inimigo, você recebe ${numerodedano}de ataque`);
    heroAtaque = heroAtaque + numerodedano;
  }
}

function CEOVortex() {
  let inimigoHP = 60;
  let inimigoATK = 10;

  function Prender() {

    let prender = Math.random() <= 0.5;

    if (prender) {
      alert(`${heroName} você foi atacado pelos tentáculos do inimigo, você ficará um round sem movimentos`);

      alert("Inimigo atacou com " + inimigoATK + " de dano🤕");
      heroVida -= inimigoATK;
      alert(`${heroName} possui ${heroVida} de vida💖`);

      alert("Inimigo atacou com " + inimigoATK + " de dano🤕");
      heroVida -= inimigoATK;
      alert(`${heroName} possui ${heroVida} de vida💖`);
    }

    else {
      alert("O inimigo tentou usar os tentáculos, mas ele errou.");
    }
  }

  function escolherAcaoAleatoria() {

    let sorteio = Math.random(); // Gera um número aleatório entre 0 e 1

    // Use as probabilidades para escolher uma ação
    if (sorteio < 0.3) {
      Derreter();
    } else if (sorteio < 0.6) {
      Prender();
    }
    else {
      Disolver();
      recarregarAPagina();
    }
  }


  while (inimigoHP > 0 && heroVida > 0) {

    let playerAtaque = numeroAleatorio(20, heroAtaque);

    escolherAcaoAleatoria(); // Execute uma ação aleatória do inimigo a cada rodada

    alert(`Ataque ${heroName} causou ${playerAtaque} de dano😎`);
    inimigoHP -= playerAtaque;
    alert("O inimigo possui " + inimigoHP + " de vida😳");


    if (inimigoHP < 0) {
      alert("Você sobreviveu ao inimigo🥳");
      heroXp++;
      alert(`Você recebeu ${heroXp} pontos de XP⏫`);

    }
    else if (heroVida <= 0 || Disolver == true) {
      alert("Você perdeu a batalha e toda a floresta foi destruida. FIM DE JOGO.");
      recarregarAPagina();
    }

    UpdateHeroStatus();
  }
}

// Função para derreter o rosto do jogador
function Derreter() {
  let derreterRosto = true;

  let heroAtaque1 = Math.random() <= 0.5;

  if (derreterRosto) {
    alert(`${heroName} o inimigo está aproximando você perto do rosto dele. Ele está prestes a derreter uma parte do seu rosto. Você precisa tirar 20 de dano.`);

    if (heroAtaque1) {
      alert(heroName + " conseguiu se livrar, não derretendo seu rosto. Você recebeu mais um de dano");
      heroAtaque++;
      alert("Agora seu dano é de " + heroAtaque);
      UpdateHeroStatus();
    }
    else {
      alert("Seu rosto está parcialmente derretido, você perdeu 7 de vida.");
      heroVida = heroVida - 7;
      alert(`Sua vida é de " + ${heroVida}`);

      UpdateHeroStatus();
    }
  }
}

// Função para dissolver o jogador
function Disolver() {

  let absorver = Math.random() <= 0.9;

  if (absorver) {
    alert("Junto com seus capangas, CEO Vortex te prende e prepara para um golpe poderoso que pode Você irá morrer, mas você tem a chance de mais um ataque");
    heroVida = 0;
    recarregarAPagina();
  }
  UpdateHeroStatus();
}

function numeroAleatorio(min, max, heroAtaque) {
  // Calcula o mínimo garantido baseado no ataque do herói
  let minGarantido = min;
  
  if (heroAtaque >= 10) {
    const bonusMinimo = Math.floor((heroAtaque - 10) / 10) * 2;
    minGarantido = Math.min(min + bonusMinimo, max - 1);
  }
  
  minGarantido = Math.max(min, Math.min(minGarantido, max - 1));
  
  const resultado = Math.floor(Math.random() * (max - minGarantido)) + minGarantido;
  
  console.log(`Heroi Ataque: ${heroAtaque} | Min: ${minGarantido} | Max: ${max} | Rolou: ${resultado}`);
  
  return resultado;
}

// Testando com diferentes valores de ataque
console.log("--- Testes da função ---");
numeroAleatorio(1, 10 + 1, 10);   // Ataque 10 (mínimo 1)
numeroAleatorio(1, 15 + 1, 15);   // Ataque 15 (ainda mínimo 1)
numeroAleatorio(1, 20 + 1, 20);   // Ataque 20 (mínimo 3)
numeroAleatorio(1, 25 + 1, 25);   // Ataque 25 (ainda mínimo 3)
numeroAleatorio(1, 30 + 1, 30);   // Ataque 30 (mínimo 5)
numeroAleatorio(1, 50 + 1, 50);   // Ataque 50 (mínimo 9)

// Teste com valor baixo (menor que 10)
numeroAleatorio(1, 5 + 1, 5);     // Ataque 5 (mínimo permanece 1)

// Teste com valor muito alto para ver o limite
numeroAleatorio(1, 10 + 1, 100); // Máximo é 11, então o mínimo ajusta para não passar