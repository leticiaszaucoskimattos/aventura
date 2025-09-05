// Estados do jogo
let currentScene = 0;

// História do jogo - cenas e escolhas
const story = [
    {
        text: "Você está andando pela cidade quando avista um food truck misterioso com uma placa piscante: 'Comida que vale a pena morrer por!'. Você decide se aproximar...",
        image: "https://placehold.co/600x400/222/fff?text=Food+Truck+Misterioso",
        choices: [
            { text: "Pedir o hambúrguer do dia", next: 1 },
            { text: "Pedir apenas uma bebida", next: 2 },
            { text: "Ir embora, isso parece suspeito", next: 3 }
        ]
    },
    {
        text: "O atendente, com um sorriso perturbadoramente largo, prepara seu hambúrguer. Ele tem um brilho estranho e um cheiro que você nunca sentiu antes. Quando você morde, sente um gosto metálico...",
        image: "https://placehold.co/600x400/330000/fff?text=Hambúrguer+Estranho",
        choices: [
            { text: "Continuar comendo - você pagou por isso!", next: 4 },
            { text: "Cuspir e questionar o atendente", next: 5 },
            { text: "Fingir que vai comer e jogar fora quando ninguém estiver olhando", next: 6 }
        ]
    },
    {
        text: "Você pede uma bebida. O atendente serve um líquido roxo fumegante em um copo sujo. 'Nossa especialidade da casa', ele sussurra.",
        image: "https://placehold.co/600x400/330033/fff?text=Bebida+Fumegante",
        choices: [
            { text: "Beber de uma vez - você está com sede", next: 7 },
            { text: "Cheirar a bebida primeiro", next: 8 },
            { text: "Perguntar os ingredientes", next: 9 }
        ]
    },
    {
        text: "Você decide que isso é muito estranho e começa a se afastar. De repente, o atendente grita: 'Espera! Você precisa experimentar nossa comida!' Ele começa a correr atrás de você!",
        image: "https://placehold.co/600x400/000033/fff?text=Atendente+Perseguindo",
        choices: [
            { text: "Correr o mais rápido possível", next: 10 },
            { text: "Virar e enfrentar o atendente", next: 11 },
            { text: "Tentar se esconder", next: 12 }
        ]
    },
    {
        text: "Você termina o hambúrguer. Seu estômago começa a doer horrivelmente. Sua visão fica embaçada. A última coisa que você vê é o atendente sorrindo enquanto tudo fica escuro...",
        image: "https://placehold.co/600x400/000000/fff?text=FIM+-+Você+morreu",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    },
    {
        text: "Você pergunta o que há no hambúrguer. O atendente ri: 'Ingredientes secretos... muito secretos.' Ele puxa uma faca enorme de debaixo do balcão!",
        image: "https://placehold.co/600x400/330000/fff?text=Facada+no+Balcão",
        choices: [
            { text: "Tentar lutar", next: 13 },
            { text: "Correr", next: 10 },
            { text: "Tentar negociar", next: 14 }
        ]
    },
    {
        text: "Você espera o atendente se distrair e joga o hambúrguer no lixo. Quando você vira para ir embora, o atendente está bem atrás de você. 'Não gostou da minha comida?' Ele está segurando uma frigideira pesada...",
        image: "https://placehold.co/600x400/333300/fff?text=Frigideira+na+Mão",
        choices: [
            { text: "Tentar explicar", next: 15 },
            { text: "Gritar por ajuda", next: 16 },
            { text: "Atacar primeiro", next: 13 }
        ]
    },
    {
        text: "Você bebe a bebida de uma vez. Tem gosto de cerejas e... gasolina? De repente, você sente seu corpo ficando quente. Muito quente. Você começa a soltar fumaça pelas orelhas. Tudo fica preto...",
        image: "https://placehold.co/600x400/000000/fff?text=FIM+-+Explosão+Interna",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    },
    {
        text: "Você cheira a bebida. Tem um aroma doce, mas com um undertone químico forte. De repente, sua visão fica turva e você se sente tonto. A bebida estava liberando vapores tóxicos!",
        image: "https://placehold.co/600x400/003300/fff?text=Vapores+Tóxicos",
        choices: [
            { text: "Jogar a bebida longe", next: 17 },
            { text: "Tentar aguentar e não desmaiar", next: 18 },
            { text: "Gritar por ajuda", next: 16 }
        ]
    },
    {
        text: "Você pergunta sobre os ingredientes. O atendente suspira: 'É uma receita de família... com alguns ingredientes especiais que coletamos localmente.' Ele abre uma geladeira mostrando frascos com substâncias suspeitas e... é uma orelha humana?",
        image: "https://placehold.co/600x400/003333/fff?text=Ingredientes+Suspeitos",
        choices: [
            { text: "Correr o mais rápido possível", next: 10 },
            { text: "Ligar para a polícia", next: 19 },
            { text: "Confrontar o atendente", next: 20 }
        ]
    },
    {
        text: "Você corre desesperadamente. Ouve passadas pesadas atrás de você. Você consegue alcançar uma área movimentada e se esconder entre a multidão. Você escapou do Food Truck Assassino!",
        image: "https://placehold.co/600x400/000033/fff?text=FIM+-+Você+sobreviveu",
        choices: [
            { text: "Jogar novamente", next: 0 }
        ]
    },
    {
        text: "Você se vira para enfrentar o atendente. Ele é muito maior de perto. Ele ri: 'Ah, um bravo...' Ele avança com uma velocidade surpreendente e...",
        image: "https://placehold.co/600x400/000000/fff?text=FIM+-+Destino+Brutal",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    },
    {
        text: "Você se esconde atrás de uma lixeira. O atendente passa correndo. Você espera alguns minutos e sai do esconderijo, apenas para encontrar o atendente esperando: 'Te encontrei!'",
        image: "https://placehold.co/600x400/333300/fff?text=Esconde-Esconde+Perigoso",
        choices: [
            { text: "Tentar correr de novo", next: 10 },
            { text: "Lutar pela sua vida", next: 13 },
            { text: "Se render", next: 21 }
        ]
    },
    {
        text: "Você pega um guarda-chuva próximo e se prepara para lutar. O atendente parece impressionado com sua coragem. Ele hesita por um momento, então recua. 'Outro dia...' Ele volta para o food truck. Você sobreviveu!",
        image: "https://placehold.co/600x400/003300/fff?text=FIM+-+Coragem+Recompensada",
        choices: [
            { text: "Jogar novamente", next: 0 }
        ]
    },
    {
        text: "Você tenta negociar: 'Talvez possamos chegar a um acordo?' O atendente inclina a cabeça: 'Que tipo de acordo?' Ele parece genuinamente curioso.",
        image: "https://placehold.co/600x400/330033/fff?text=Negociação+Perigosa",
        choices: [
            { text: "Oferecer dinheiro", next: 22 },
            { text: "Oferecer para trabalhar para ele", next: 23 },
            { text: "Distraí-lo e tentar fugir", next: 24 }
        ]
    },
    {
        text: "Você tenta explicar que não estava com fome. O atendente balança a cabeça: 'Todos estão com fome para o que eu sirvo.' Ele avança com a frigideira...",
        image: "https://placehold.co/600x400/000000/fff?text=FIM+-+Explicações+Inúteis",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    },
    {
        text: "Você grita por ajuda. Algumas pessoas se viram, mas o atendente sorri: 'Tudo bem, querido, não precisa fazer escândalo por causa da comida.' As pessoas voltam ao que estavam fazendo, pensando que é uma discussão conjugal. Você está sozinho...",
        image: "https://placehold.co/600x400/333333/fff?text=Gritos+Ignorados",
        choices: [
            { text: "Tentar correr", next: 10 },
            { text: "Tentar lutar", next: 13 },
            { text: "Tornar-se agressivo", next: 25 }
        ]
    },
    {
        text: "Você joga a bebida longe. Ela explode em contato com o chão, liberando uma nuvem de gás verde. O atendente fica furioso: 'Você desperdiçou meu precioso preparado!'",
        image: "https://placehold.co/600x400/003300/fff?text=Poção+Explosiva",
        choices: [
            { text: "Correr enquanto ele está distraído", next: 10 },
            { text: "Tentar acalmar o atendente", next: 26 },
            { text: "Jogar outra coisa nele", next: 27 }
        ]
    },
    {
        text: "Você tenta aguentar, mas os vapores são muito fortes. Seus joelhos cedem e você desmaia. A última coisa que vê é o atendente arrastando você para dentro do food truck...",
        image: "https://placehold.co/600x400/000000/fff?text=FIM+-+Ingrediente+Futuro",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    },
    {
        text: "Você liga para a polícia. O atendente ouve e começa a rir: 'A polícia nunca acreditará em você!' Dois agentes à paisana se aproximam - eles eram clientes do food truck! Você caiu em uma armadilha!",
        image: "https://placehold.co/600x400/000000/fff?text=FIM+-+Cúmplices+Policiais",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    },
    {
        text: "Você confronta o atendente sobre a orelha humana. Ele suspira: 'É difícil encontrar bons ingredientes frescos nos dias de hoje.' Ele puxa uma serra elétrica...",
        image: "https://placehold.co/600x400/000000/fff?text=FIM+-+Confronto+Fatal",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    },
    {
        text: "Você se rende. O atendente amarra você e joga no fundo do food truck. 'Você vai fazer um ótimo especial amanhã', ele ri. Tudo fica escuro...",
        image: "https://placehold.co/600x400/000000/fff?text=FIM+-+Próximo+Prato",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    },
    {
        text: "Você oferece dinheiro. O atendente ri: 'O que eu faria com dinheiro? Eu coleciono... experiências.' Ele avança rapidamente...",
        image: "https://placehold.co/600x400/000000/fff?text=FIM+-+Oferta+Recusada",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    },
    {
        text: "Você oferece para trabalhar para ele. O atendente parece considerar: 'Hmm, preciso de ajuda para... adquirir ingredientes.' Ele estende a mão: 'Bem-vindo à família.' Você sobrevive, mas a que custo?",
        image: "https://placehold.co/600x400/330033/fff?text=FIM+-+Novo+Recruta",
        choices: [
            { text: "Jogar novamente", next: 0 }
        ]
    },
    {
        text: "Você tenta distrair o atendente apontando para trás dele e gritando 'O que é aquilo?'. Quando ele vira, você corre. Você escapa por pouco!",
        image: "https://placehold.co/600x400/003300/fff?text=FIM+-+Fuga+por+Um+Triz",
        choices: [
            { text: "Jogar novamente", next: 0 }
        ]
    },
    {
        text: "Você fica agressivo e xinga o atendente. Ele fica surpreso, então sorri: 'Gosto do seu espírito. Vou guardá-lo em um frasco especial.' Ele joga um pó em sua direção e tudo fica escuro...",
        image: "https://placehold.co/600x400/000000/fff?text=FIM+-+Espírito+Coletado",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    },
    {
        text: "Você tenta acalmar o atendente, elogiando a criatividade da bebida. Ele fica visivelmente lisonjeado: 'Finalmente alguém que aprecia minha arte!' Ele deixa você ir em paz.",
        image: "https://placehold.co/600x400/003333/fff?text=FIM+-+Elogios+que+Salvam",
        choices: [
            { text: "Jogar novamente", next: 0 }
        ]
    },
    {
        text: "Você joga um banco próximo no atendente. Ele se esquiva com agilidade surpreendente: 'Más maneiras à mesa? Isso vai custar caro.' Ele avança com raiva...",
        image: "https://placehold.co/600x400/000000/fff?text=FIM+-+Maneiras+à+Mesa",
        choices: [
            { text: "Recomeçar", next: 0 }
        ]
    }
];

// Função para atualizar a cena atual
function updateScene() {
    const scene = story[currentScene];
    document.getElementById('story-text').innerHTML = `<p>${scene.text}</p>`;
    document.getElementById('story-image').src = scene.image;
    document.getElementById('story-image').alt = "Cena do jogo";
    
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice.text;
        button.onclick = () => makeChoice(choice.next);
        choicesContainer.appendChild(button);
    });
}

// Função para processar a escolha do jogador
function makeChoice(nextScene) {
    currentScene = nextScene;
    updateScene();
}

// Inicializar o jogo
updateScene();