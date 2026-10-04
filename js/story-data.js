// Síntese de consulta da aventura, conferida com o livro. O conteúdo é carregado localmente, sem abrir o PDF.
// Campos: story (contexto), beats (o que acompanhar), lore (o que os moradores sabem), events (eventos especiais),
// locations (com código de área quando houver), fortune (onde fica o tesouro da tarokka, se a carta apontar para cá).
const storyChapters = [
  {
    id:'abertura', number:'01', title:'Nas Brumas', type:'Estrutura da campanha', area:'Baróvia inteira',
    intro:'Prepara o mestre para a campanha: a história e os objetivos de Strahd, a leitura das cartas tarokka que define a sua versão da aventura e os ganchos que levam os aventureiros às brumas.',
    story:[
      'Strahd von Zarovich foi conde, príncipe, soldado e conquistador. Depois da morte do pai, o rei Barov, travou guerras sangrentas, encurralou os últimos inimigos da família num vale e o batizou de Baróvia. Fez um pacto com os Poderes das Trevas, ergueu Ravenloft e, no dia do casamento do irmão Sergei com Tatyana, matou-o e bebeu seu sangue. Tatyana se atirou de uma varanda; guardas desleais o crivaram de flechas, e ele se levantou vampiro. O vale foi arrancado do mundo e preso num semiplano cercado de névoa mortal.',
      'Strahd tem três objetivos: transformar Ireena Kolyana, que acredita ser a reencarnação de Tatyana, em sua consorte vampírica na próxima visita; capturar o caçador Rudolph van Richten e quebrar seu espírito; e testar os recém-chegados à procura de um sucessor ou consorte. Ele se interessa especialmente por aventureiros carismáticos e arrogantes, explora a falta de união do grupo e oferece a personagens malignos a promessa de se tornarem vampiros, que ele nunca cumpre.',
      'Strahd não é um vilão que espera no fim da masmorra: circula por todo o domínio e deve encontrar os personagens várias vezes antes do confronto final. Essas visitas servem para testá-los, não para matá-los. Ele tenta enfeitiçar alguém para ser convidado a entrar, joga com o grupo por algumas rodadas e se retira. Nem ele nem seus servos jamais atacam Ireena.',
      'A leitura das cartas tarokka, feita antes da campanha e repetida por Madame Eva em jogo, determina: onde estão o Memorial de Strahd, o Símbolo Sagrado do Corvo-Bondoso e a Espada Solar; quem é o aliado poderoso do grupo; e em que sala de Ravenloft Strahd será enfrentado. Três cartas vêm do baralho comum (os tesouros) e duas do baralho nobre (o aliado e o local do confronto). Um baralho de cartas comum pode substituir o tarokka. Ezmerelda também sabe ler as cartas, se tiver o próprio baralho.',
      'A carta do confronto indica sempre um lugar dentro do castelo, como a capela, a sala de audiências, a biblioteca, o tesouro, o salão de ossos, o túmulo de Sergei, o túmulo de Strahd ou o dos pais dele. Na primeira vez que o grupo chega ali, Strahd estará presente, a menos que tenha sido forçado a voltar ao caixão. A carta das Brumas não revela o local: Madame Eva pede que voltem em três dias.'
    ],
    beats:['Escolher o gancho e decidir se a Casa da Morte será usada como abertura.','Fazer a leitura de tarokka e anotar os cinco resultados: três tesouros, o aliado e o local do confronto.','Planejar os primeiros encontros de Strahd como testes, não como emboscadas mortais.','Apresentar os três objetivos do conde: Ireena, van Richten e os próprios aventureiros.'],
    events:[
      {name:'Pedido de Ajuda', text:'Numa taverna, o Vistana Arrigal entrega uma carta assinada por Kolyan Indirovich pedindo socorro e paga uma rodada para todos. A carta é uma isca escrita por Strahd; o selo é o brasão do conde. Ismark reconhece que a letra não é do pai.'},
      {name:'Visitantes Misteriosos', text:'Perto de Vau da Adaga, a duquesa Morwen pede que o grupo leve aos Vistani de Stanimir uma ordem de partida. Stanimir conta, à fogueira, a história do príncipe amaldiçoado; quem aceita o convite desperta numa estrada enevoada de Baróvia.'},
      {name:'Lobisomens nas Brumas', text:'Uma matilha que sai da Floresta das Brumas ataca aldeias e rouba crianças. Cada facção da Liga dos Aventureiros recebe uma pista ou um pedido próprio. Perseguir a matilha leva o grupo para dentro da névoa. O confronto com Kiril pode acontecer na Torre de Van Richten.'},
      {name:'Névoa Rastejante', text:'O grupo acampa numa floresta e acorda cercado de névoa, diante de árvores que não são as mesmas. Qualquer direção leva à estrada de Baróvia. É o gancho recomendado para a Casa da Morte.'}
    ],
    locations:[
      {name:'Brumas de Ravenloft', text:'Quem começa o turno na névoa faz um teste de resistência de Constituição CD 20 ou ganha um nível de exaustão. Quem avança se perde em círculos e sempre volta a Baróvia. Só os Vistani atravessam livremente.', chapter:'terras'},
      {name:'Acampamento Vistana do Lago Tser', text:'Onde Madame Eva espera o grupo para ler as cartas.', people:['eva'], chapter:'terras'},
      {name:'Castelo Ravenloft', text:'Sede de Strahd. A leitura sempre aponta um local do castelo para o confronto final.', chapter:'ravenloft'}
    ],
    people:['strahd','ireena','tatyana','sergei','eva','vanrichten','ezmerelda','arrigal','stanimir','duquesa'], next:['terras','vila','casa']
  },
  {
    id:'terras', number:'02', title:'As Terras de Baróvia', type:'Capítulo 2 · região', area:'Estradas, bosques e ermos',
    intro:'As regras do domínio de Strahd, o que barovianos e Vistani sabem, os encontros aleatórios e os locais marcados de A a Z no mapa do vale.',
    story:[
      'Baróvia existe num semiplano isolado. Nenhuma magia, nem mesmo desejo, permite sair: teletransporte, viagem planar e banimento para outro plano não funcionam. Magias de contato com outros planos funcionam, mas Strahd pode sentir a conjuração e se colocar como o ser contatado. O sol nunca brilha de verdade: a luz do dia em Baróvia não conta como luz solar para vampiros, embora a luz solar criada por magia funcione.',
      'As almas dos mortos também ficam presas. Quem volta à vida depois de mais de 24 horas morto ganha uma loucura permanente. Apenas cerca de um em cada dez barovianos tem alma; os desalmados são apáticos, vestem-se sem cor e não riem nem choram. Strahd só se alimenta de quem tem alma. Se ele for derrotado, a névoa se dissipa, mas os desalmados deixam de existir ao sair do vale.',
      'Menos de três mil pessoas vivem no vale, descendentes de gente que Strahd trouxe de outras terras conquistadas. Desconfiam de estrangeiros, encaram em silêncio e usam moedas antigas com o perfil do conde. Pelo calendário baroviano, Strahd nasceu em 306, herdou a coroa em 346, conquistou o vale em 347, terminou Ravenloft em 350 e se tornou vampiro em 351. O ano atual é 735.',
      'Os Vistani salvaram Strahd quando ele era soldado e, por isso, podem ir e vir pela névoa. Muitos acampamentos se deixaram corromper e servem ao conde como espiões e iscas, mentem para protegê-lo e vendem poções falsas “contra a névoa”. Qualquer Vistana pode lançar uma maldição, com um custo psíquico para si quando ela termina, ou usar o Mau-Olhado para enfeitiçar, imobilizar ou acalmar animais.',
      'Na estrada, verifique encontros a cada 30 minutos (18 ou mais no d20); na floresta, com mais frequência. As tabelas incluem Vistani, batedores barovianos, druidas com infectados, enxames de corvos, espantalhos, fantasmas, furiosos, lobisomens, ressurgidos, zumbis de Strahd e o próprio Strahd.'
    ],
    lore:[
      'Strahd é um vampiro e vive em Ravenloft. Ninguém é bem-vindo no castelo.',
      'O diabo Strahd seria uma punição por um pecado esquecido dos antepassados. Isso não é verdade, mas os barovianos acreditam.',
      'Quem tenta deixar Baróvia começa a sufocar na névoa. Muitos estrangeiros já chegaram, e todos morreram ou sumiram.',
      'Duas forças divinas zelam pelo povo: o Senhor da Alvorada, que não responde mais às preces desde que o sol deixou de brilhar, e a Mãe Noite, que teria abandonado Baróvia.',
      'Todas as noites, espíritos marcham pela Antiga Estrada Svalich até Ravenloft: são os inimigos de Strahd.',
      'O vinho do Mago dos Vinhos é a força vital de Baróvia. Um mago louco assombra o sopé do Monte Baratok.',
      'Nunca fira um corvo. Os Vistani dizem que eles carregam almas perdidas, o que não é verdade.',
      'Krezk fica a oeste, Vallaki no coração do vale e a vila de Baróvia a leste. Strahd tem espiões nas três. O velho moinho entre a vila e Vallaki deve ser evitado.'
    ],
    beats:['Aplicar as regras do domínio: névoa, magia, luz do sol, almas e ressurreição.','Rolar encontros aleatórios nas estradas e nos bosques.','Usar a forca, a carruagem negra e os presságios para mostrar que Strahd observa.','Registrar quais Vistani o grupo encontrou e se são servos de Strahd.'],
    events:[
      {name:'O Enforcado', text:'Ao deixar a encruzilhada do Rio Ivlis, o grupo ouve a forca ranger e vê um corpo pendurado. Um personagem aleatório vê a si mesmo; os outros veem um baroviano desconhecido. O corpo derrete se tocado.'},
      {name:'Fábulas Vistani', text:'No acampamento do Lago Tser, um Vistana conta como, há pouco mais de um ano, um mago carismático levou camponeses até Ravenloft e foi jogado por Strahd das Cataratas Tser. O mago é o Mago Louco do Monte Baratok.'},
      {name:'A carruagem negra', text:'Se Strahd convidou o grupo, uma carruagem com dois cavalos negros espera na bifurcação da área I. Ela leva os personagens até os portões de Ravenloft e não pode ser desviada.'},
      {name:'O corpo de Dalvan', text:'Nos Bosques de Svalich, perto da estrada, jaz o mensageiro Dalvan Olensky, morto por lobos atrozes, com a carta verdadeira de Kolyan. Quem fica no bosque ouve uivos e, em 5 rodadas, cinco lobos atrozes atacam. Se o grupo tentar deixar Baróvia, vinte lobos vêm juntos.'}
    ],
    locations:[
      {name:'Antiga Estrada Svalich', area:'A', text:'Estrada lamacenta entre lagoas escuras. Leva cinco horas a pé até os portões; em carroças Vistani, metade disso.'},
      {name:'Portões de Baróvia', area:'B', text:'Portões de ferro com guardiões decapitados, um a oeste e outro a leste da vila. Abrem-se sozinhos para quem chega e se fecham atrás. O portão leste não deixa ninguém sair sem os Vistani. Se Strahd for derrotado, ele se abre e a névoa some.'},
      {name:'Bosques de Svalich', area:'C', text:'Árvores anormalmente próximas e um silêncio de sepultura. Aqui está o corpo de Dalvan Olensky, com a carta verdadeira de Kolyan.', people:['dalvan','kolyan']},
      {name:'Rio Ivlis', area:'D', text:'Rio de 15 metros de largura, com pontes de pedra perto da vila e das Cataratas Tser.'},
      {name:'Vila de Baróvia', area:'E', text:'Descrita no capítulo 3.', chapter:'vila'},
      {name:'Encruzilhada do Rio Ivlis e forca', area:'F', text:'Forca rangendo, placa para a vila, o Lago Tser e Ravenloft/Vallaki, e onze túmulos sem nome dos enforcados. Cenário do Enforcado.'},
      {name:'Acampamento do Lago Tser', area:'G', text:'Doze Vistani bêbados, três sóbrios e a grande tenda de Madame Eva. São aliados de Strahd, mas só atacam se provocados. Eva chama cada personagem pelo nome, cita seus feitos e oferece a leitura.', people:['eva']},
      {name:'Cataratas Tser', area:'H', text:'Ponte de pedra com gárgulas sobre um abismo de quase 300 metros. Daqui Strahd atirou o Mago Louco.'},
      {name:'Carruagem sombria', area:'I', text:'Bifurcação na montanha onde a carruagem negra de Strahd espera os convidados.'},
      {name:'Portões de Ravenloft', area:'J', text:'Torres quebradas e uma ponte levadiça sobre um abismo de 300 metros; cada travessia tem 5% de chance de uma tábua quebrar. Há limo verde no portão, que cai sobre quem sai.', chapter:'ravenloft'},
      {name:'Lago Zarovich', area:'L', text:'Lago imóvel ao norte de Vallaki. Bluto está num barco, em transe, com Arabelle amarrada num saco. Ele a joga na água se o grupo observar por alguns minutos ou se aproximar.', people:['bluto','arabelle']},
      {name:'Mago Louco do Monte Baratok', area:'M', text:'Na base do Monte Baratok, um alce se transforma num homem de túnica preta: Mordenkainen, enlouquecido. Ele ataca achando que o grupo é inimigo. Com a sanidade restaurada, oferece abrigo em sua mansão extradimensional.', people:['madmage']},
      {name:'Encruzilhada do Rio Luna', area:'P', text:'Placa quebrada que, remontada, aponta para Krezk e Tsolenka, o Lago Baratok, Vallaki/Ravenloft e Berez.'},
      {name:'Encruzilhada do Rio Corvo', area:'R', text:'Ramos para a Torre de Van Richten, a Passagem Tsolenka e o Mago dos Vinhos.'},
      {name:'Outros locais', text:'O Velho Moedor de Ossos (O), Argynvostholt (Q), Krezk (S), Tsolenka (T), Berez (U), a Torre de Van Richten (V), o Mago dos Vinhos (W), o Templo Âmbar (X), a Colina Yester (Y) e o Covil dos Lobisomens (Z) têm capítulos próprios.'}
    ],
    fortune:[
      ['Encruzilhada do Rio Ivlis (F)','Enterrado numa das sepulturas: cada cova aberta tem 10% de chance cumulativa de revelar o tesouro.'],
      ['Acampamento do Lago Tser (G)','Escondido num dos vagões Vistani; Madame Eva permite a busca se o grupo pedir.']
    ],
    people:['eva','madmage','bluto','arabelle','dalvan','strahd'], next:['vila','vallaki','ravenloft']
  },
  {
    id:'vila', number:'03', title:'A Vila de Baróvia', type:'Capítulo 3 · assentamento', area:'Vila de Baróvia',
    intro:'O lugar mais triste do vale, à sombra de Ravenloft. A morte de Kolyan e as visitas de Strahd a Ireena dão ao grupo sua primeira missão.',
    story:[
      'Os moradores quase não saem de casa. Com exceção do mercadinho de Bildrath e da taverna, todas as lojas estão fechadas e saqueadas, e marcas de garras cobrem as paredes. O único som é o choro de Mary Maluca. Casas aleatórias podem abrigar aldeões assustados, enxames de ratos a serviço de Strahd ou zumbis.',
      'Na taverna Sangue da Videira, Ismark Kolyanovich, “o Menor”, paga vinho aos forasteiros e pede ajuda para escoltar a irmã adotiva, Ireena, até Vallaki, fora da vista do castelo. Kolyan, o burgomestre, morreu do coração há três dias, depois de semanas de ataques de lobos, zumbis e carniçais à mansão. Desde a morte dele, os ataques pararam.',
      'Ireena, jovem de cabelos castanho-avermelhados, foi mordida duas vezes e não se lembra da infância nem de como chegou a Baróvia. Só abre a porta a quem a convença de que não serve a Strahd, ou se Ismark estiver junto. Recusa-se a partir enquanto o pai não for enterrado e pede que o grupo leve o corpo até o padre Donavich.',
      'Na igreja, Donavich reza há dias, rouco e à beira da loucura. Pouco mais de um ano atrás, o filho Doru seguiu com outros aldeões um mago de vestes negras numa revolta contra Ravenloft e voltou como cria vampírica. Donavich o prendeu na galeria sob a igreja, onde Doru grita de fome. Depois do enterro, ao amanhecer, o padre sugere levar Ireena para a Abadia de Santa Markóvia, em Krezk, ou para Vallaki, sem saber que a abadia virou um covil do mal.'
    ],
    lore:[
      'Donavich sabe que Kolyan encontrou Ireena ainda menina, à margem dos Bosques de Svalich, perto do Pilar de Ravenloft, sem lembrança alguma do passado.',
      'Todas as noites, à meia-noite, os espíritos dos aventureiros mortos saem do cemitério e marcham até o castelo.',
      'Os moradores temem Ireena e a evitam desde que Strahd começou a visitá-la.'
    ],
    beats:['Conhecer Ismark na taverna e entender o perigo que Ireena corre.','Conquistar a confiança de Ireena e levar o corpo de Kolyan até a igreja.','Decidir o que fazer com Doru, preso sob a igreja.','Enterrar Kolyan ao amanhecer e escolher o destino de Ireena: Vallaki ou Krezk.'],
    events:[
      {name:'A Marcha dos Mortos', text:'À meia-noite, uma luz verde enche o cemitério e cem espíritos de aventureiros mortos marcham pela estrada até Ravenloft. No castelo, sobem pela capela e pela torre e se atiram no poço até as catacumbas. Não podem ser feridos nem detidos e não se comunicam.'},
      {name:'Doces Sonhos', text:'Morgantha, uma bruxa da noite disfarçada de velha, empurra uma carroça vendendo pastéis de sonhos a 1 po. Numa das casas, recebe como pagamento o menino Lucian Jarov, de sete anos, e o leva num saco. Se o grupo exigir, ela o solta a contragosto e oferece informações em troca da vida.'}
    ],
    locations:[
      {name:'Mercadorias de Bildrath', area:'E1', text:'Vende equipamento comum de até 25 po, pelo décuplo do preço, e nunca pechincha: “Se você precisa mesmo, vai pagar por isso.” Se houver confusão, chama o sobrinho Parriwimple, forte como um gladiador.', people:['bildrath','parriwimple']},
      {name:'Taverna Sangue da Videira', area:'E2', text:'O barman Arik limpa copos sem parar. As donas, Alenka, Mirabel e Sorvia, são espiãs Vistani e só conversam de verdade se o grupo chegar com outros Vistani; então recomendam Madame Eva. Ismark espera numa mesa de canto.', people:['ismark','arik','alenka','mirabel','sorvia']},
      {name:'Moradia de Mary Maluca', area:'E3', text:'Mary chora no segundo andar, abraçada a uma boneca feita por Blinsky. Só fala com quem é gentil. A filha Gertruda fugiu há uma semana e está em Ravenloft.', people:['mary','gertruda']},
      {name:'Mansão do burgomestre', area:'E4', text:'Portões retorcidos, marcas de garras e de fogo, janelas pregadas e símbolos sagrados em cada cômodo. O corpo de Kolyan está num caixão feito pelos filhos.', people:['ireena','ismark','kolyan']},
      {name:'Igreja', area:'E5', text:'Igreja desgastada ao pé do Pilar de Ravenloft. Donavich reza na capela; o alçapão trancado leva à galeria subterrânea onde está Doru.', people:['donavich','doru']},
      {name:'Cemitério', area:'E6', text:'Tranquilo de dia. À meia-noite, ponto de partida da Marcha dos Mortos.'},
      {name:'Casa assombrada', area:'E7', text:'A Casa da Morte, abertura opcional para personagens de 1º nível.', chapter:'casa'}
    ],
    fortune:[['Galeria subterrânea da igreja (E5g)','Dentro de um velho baú mofado no canto sudoeste, destrancado e sem armadilha.']],
    people:['ireena','ismark','kolyan','donavich','doru','mary','gertruda','bildrath','parriwimple','arik','alenka','mirabel','sorvia','morgantha','lucianjarov'], next:['terras','moedor','vallaki','krezk','casa']
  },
  {
    id:'ravenloft', number:'04', title:'Castelo Ravenloft', type:'Capítulo 4 · masmorra', area:'Castelo Ravenloft',
    intro:'A residência de Strahd sobre o Pilar de Ravenloft: uma masmorra vertical de salões, torres, masmorras e catacumbas, onde o conde conhece cada passagem.',
    story:[
      'O castelo foi erguido sobre as ruínas de uma fortaleza antiga por artesãos, magos e trabalhadores leais à família de Strahd. O arquiteto Artimus e o arquimago Khazan participaram da obra. Recebeu o nome da mãe do conde, Ravenovia, que está sepultada nas catacumbas. Encontros aleatórios incluem Rahadin, bruxas, crias vampíricas, inumanos, sombras, servos invisíveis, brinquedos de Blinsky e o próprio Strahd.',
      'Se o grupo vem por convite, Rahadin recebe os visitantes no salão de entrada e os conduz à sala de jantar. Ali, uma ilusão de Strahd toca órgão, dá boas-vindas e diz que são livres para explorar. Depois de três rodadas desaparece com uma gargalhada, as portas batem, o portão se fecha e a ponte levadiça sobe. A comida e o vinho são bons.',
      'O Coração da Dor, um coração de cristal de 3 metros que flutua no alto da torre principal, está ligado a Strahd: todo dano que o vampiro sofre vai para o coração até ele se quebrar. Tem CA 15 e 50 pontos de vida e se recupera ao amanhecer. Destruí-lo exige subir a escada viva da torre, que tenta derrubar quem sobe, enfrentar alabardas animadas e as crias que Strahd envia.',
      'Nas catacumbas há dezenas de criptas com epitáfios, milhares de morcegos e armadilhas de teletransporte. Ao norte fica o túmulo de Sergei, sereno; ao sul, o de Strahd, guardado pelas três noivas vampíricas. A leste, uma cortina de luz azul só deixa passar criaturas leais e boas até o túmulo de Barov e Ravenovia. O crânio de Argynvost está no salão de ossos; o Ícone de Ravenloft, no altar da capela.',
      'Quando Strahd é reduzido a 0 pontos de vida, vira névoa e volta ao caixão; só pode ser destruído ali. Se Rahadin estiver vivo, ele surge em seguida para vingar o mestre.'
    ],
    beats:['Registrar a rota do grupo pelos andares, torres e passagens secretas.','Decidir quando Strahd aparece e o que quer descobrir sobre os visitantes.','Cruzar a leitura de tarokka com as salas exploradas: tesouros e local do confronto.','Anotar o Coração da Dor, o crânio de Argynvost, Emil, Gertruda e outras missões ligadas a outros capítulos.'],
    events:[
      {name:'O jantar com Strahd', text:'Na sala de jantar (K10), uma ilusão do conde recebe os convidados ao órgão. Quando ela some, o vento apaga as tochas e o castelo se fecha. O órgão esconde uma porta secreta, aberta por um dos pedais.'},
      {name:'O bolo e o ódio de Strahd', text:'Na sala de jantar do conde (K36), o bolo de casamento de Sergei e Tatyana apodrece há quatro séculos. Se alguém levar a estatueta do noivo, o bolo explode e a janela se quebra; em uma versão, o “ódio de Strahd” ganha corpo e caça quem estiver com a estatueta.'},
      {name:'O fantasma de Pidlwick', text:'Tocar bem a harpa de K36 invoca o fantasma do bobo Pidlwick, que aponta um tesouro em sua cripta e conta que “caiu das escadas”. Se Pidlwick II estiver presente, diz: “Ele me empurrou pelas escadas.”'},
      {name:'A torre desperta', text:'Ao pisar na escada do Coração da Dor, a torre ganha vida e tenta derrubar quem sobe a cada rodada (teste de Destreza CD 10). Quem se arrasta ou se deita na escada passa automaticamente.'}
    ],
    locations:[
      {name:'Pátio, portões e mirante', area:'K1–K7', text:'O pátio frontal, os pátios internos e o mirante (K6), de onde um vulto observa o vale. O mirante é um dos locais possíveis do confronto.'},
      {name:'Entrada principal', area:'K8', text:'Oito gárgulas agachadas. Depois que todos saem, atacam quem voltar. Aqui Rahadin recebe os convidados.', people:['rahadin']},
      {name:'Sala de jantar', area:'K10', text:'Lustres, banquete e o grande órgão onde a ilusão de Strahd recebe o grupo.', people:['strahd']},
      {name:'Capela', area:'K15', text:'Capela arruinada com o Ícone de Ravenloft no altar; tocá-lo fere criaturas malignas. Ao lado jaz Gustav Herrenghast, clérigo mau que tentou roubá-lo, com uma maça de terror. Local possível do confronto.'},
      {name:'Coração da Dor', area:'K20', text:'O coração de cristal que absorve o dano de Strahd. Destruí-lo vale 1.500 EXP e enfraquece muito o conde.'},
      {name:'Sala de audiências', area:'K25', text:'O “trono sombrio” da besta: local possível do confronto.'},
      {name:'Contador real', area:'K30', text:'Lief Lipsiege, acorrentado à mesa, puxa a corda de alarme se ameaçado. Tratado com bondade, revela onde está o Símbolo Sagrado do Corvo-Bondoso, conforme a leitura de tarokka, e desenha um mapa bruto até lá, sem conhecer os perigos do caminho.', people:['lief']},
      {name:'Criada do inferno', area:'K32', text:'Helga Ruvak, cria vampírica que finge ser uma prisioneira para ser “resgatada”.', people:['helga']},
      {name:'Sala de jantar do conde', area:'K36', text:'O bolo de casamento podre, a harpa que invoca Pidlwick e o Alaúde de Doss.'},
      {name:'Biblioteca', area:'K37', text:'Aconchegante e impecável. Sobre a lareira, um retrato de Tatyana idêntico a Ireena esconde a passagem para o tesouro (K41). Local possível do confronto.'},
      {name:'Tesouro', area:'K41', text:'O “cofre de tentações atrás de uma mulher de grande beleza”. Local possível do confronto.'},
      {name:'Quarto do rei', area:'K42', text:'Gertruda, enfeitiçada por Strahd, vive aqui numa visão de conto de fadas.', people:['gertruda']},
      {name:'Retrato de Strahd e quarto de hóspedes', area:'K47–K50', text:'Um retrato guardião que ataca quem o toca e salas onde Escher, o consorte, se esconde magoado.', people:['escher']},
      {name:'Caldeirão das bruxas', area:'K56', text:'Sete bruxas barovianas, servas de Strahd, em torno de um caldeirão. Capturadas, trocam informações pela vida.'},
      {name:'Pico da torre alta', area:'K59–K60', text:'Topo da torre acima do Coração. Pidlwick II se esconde nas vigas. Local possível do confronto.', people:['pidlwick']},
      {name:'Salão dos serviçais e adega', area:'K62–K63', text:'Cyrus Belview, cozinheiro e faz-tudo, com seus ratos e esculturas de ossos.', people:['cyrus']},
      {name:'Salão de ossos', area:'K67', text:'Obra de ossos de criados e aventureiros. O crânio de Argynvost está sobre as portas do leste. Local possível do confronto.', people:['argynvost']},
      {name:'Masmorras', area:'K73–K76', text:'Celas alagadas ligadas por armadilhas de teletransporte. Emil Toranescu está preso aqui e implora por resgate.', people:['emil']},
      {name:'Catacumbas', area:'K84', text:'Dezenas de criptas com epitáfios, como as de Artimus, Khazan, Patrina, Sasha, Tasha Petrovna e Lorde Klutz, além de morcegos e armadilhas.', people:['khazan','patrina','sasha','tasha','lorde_klutz','beucephalus']},
      {name:'Túmulo de Sergei', area:'K85', text:'Mármore branco e três estátuas de anjos. O corpo preservado de Sergei veste armadura de placas +2. Se o confronto for aqui, Strahd chora sobre o caixão.', people:['sergei']},
      {name:'Túmulo de Strahd', area:'K86', text:'Caixão negro sobre terra revirada, guardado por Ludmilla, Anastrasya e Volenta. Onde Strahd deve estar para ser destruído.', people:['strahd','ludmilla','anastrasya','volenta']},
      {name:'Túmulo do rei Barov e da rainha Ravenovia', area:'K88', text:'Protegido por uma cortina de luz que só criaturas leais e boas atravessam. Se o confronto for aqui, Strahd está em fúria e aflição.', people:['barov','ravenovia']}
    ],
    fortune:[
      ['Capela (K15)','No chão, atrás do altar.'],
      ['Sala de audiências (K25)','No estrado de mármore, atrás do trono.'],
      ['Biblioteca (K37)','Na lareira, sob o retrato de Tatyana.'],
      ['Tesouro (K41)','Sobre as moedas, no piso térreo da torre do tesouro.'],
      ['Pico da torre alta (K59)','Dentro do baú de ferro.'],
      ['Adega (K63)','Num dos barris vazios da parede norte, escondido por Cyrus Belview.'],
      ['Salão de ossos (K67)','Sobre a mesa de ossos.'],
      ['Catacumbas (K84)','Em criptas específicas, como sob as garrafas de vinho ou em compartimentos secretos sob os restos de Endorovich e de Grislek.'],
      ['Túmulo de Sergei (K85)','No caixão, ao lado do corpo de Sergei.'],
      ['Túmulo de Strahd (K86)','Na alcova central.'],
      ['Túmulo de Barov e Ravenovia (K88)','Sobre o caixão da rainha.']
    ],
    people:['strahd','rahadin','escher','ludmilla','anastrasya','volenta','helga','cyrus','lief','pidlwick','gertruda','emil','sergei','tatyana','barov','ravenovia','khazan','argynvost','beucephalus'], next:['abertura','argynvostholt','templo','lobos']
  },
  {
    id:'vallaki', number:'05', title:'A Cidade de Vallaki', type:'Capítulo 5 · cidade', area:'Vallaki',
    intro:'Cidade murada às margens do Lago Zarovich, fora da vista do castelo. Parece um refúgio, mas vive de falsa esperança: festivais obrigatórios, prisões arbitrárias, um culto secreto e vampiros escondidos.',
    story:[
      'O barão Vargas Vallakovich, descendente do fundador, acredita que, se todos forem felizes, Vallaki escapará do domínio de Strahd. Organiza um festival por semana e prende quem fala mal deles; o último foi a Grande Festa da Cabeça de Lobo, e o próximo, o Festival do Sol Ardente, acontece em três dias. Izek Strazni, seu capanga de braço demoníaco que conjura fogo, mantém os inimigos à margem.',
      'Lady Fiona Wachter, de família com laços antigos com Strahd, diz preferir “servir ao diabo do que a um louco” e procura aliados para derrubar o barão. Algumas casas da cidade escondem cultistas que adoram diabos e a veem como líder espiritual.',
      'Os ossos de Santo Andral, que protegiam a igreja, foram roubados pelo coveiro Milivoj e vendidos a Henrik van der Voort, cuja oficina abriga seis crias vampíricas. Se nada for feito em três dias, Strahd orquestra um ataque à igreja.',
      'Na Estalagem Água Azul vivem os Martikov, homens-corvo dos Guardiões da Pena, e está hospedado Rictavio, na verdade Rudolph van Richten, cuja carroça com um tigre-dentes-de-sabre está no Estaleiro Arasek. Fora da cidade ficam o acampamento dos Vistani de Luvash e Arrigal, servos de Strahd, e os elfos das sombras de Kasimir.',
      'Vallaki tem três portões de ferro (Zarovich, Pôr do Sol e Aurora), fechados com correntes à noite, uma paliçada de 4,5 metros e vinte e quatro guardas. Quem chega à noite precisa de um teste de Persuasão CD 20 para entrar.'
    ],
    lore:[
      'Um estrangeiro de orelhas pontudas está hospedado na Estalagem Água Azul; chegou numa carroça de espetáculos.',
      'O Festival do Sol Ardente será daqui a três dias. Quem critica os festivais é declarado aliado do diabo Strahd e preso.',
      'Izek Strazni tem um braço monstruoso com o qual conjura fogo. Lady Wachter prefere “servir ao diabo do que a um louco”; seus filhos causam problemas e ela mantém uma filha louca trancada.',
      'Luzes púrpuras foram vistas no sótão da mansão do burgomestre.',
      'Bluto Krogarov pesca no lago todos os dias e nunca pega nada. Os Vistani da floresta não são bem-vindos.',
      'Não há notícias do Mago Louco, que costumava matar peixes com relâmpagos no lago.',
      'A oeste há uma mansão assombrada onde um dragão morreu; ao sul, uma aldeia abandonada cujo burgomestre despertou a ira de Strahd.'
    ],
    beats:['Contar os dias até o Festival do Sol Ardente e a Festa de Santo Andral.','Acompanhar a disputa entre Vargas e Fiona e quem o grupo apoia.','Seguir a pista dos ossos: Yeska, Milivoj e a oficina de Henrik.','Decidir o que revelar sobre Rictavio, o tigre e os Guardiões da Pena.'],
    events:[
      {name:'O Festival do Sol Ardente', text:'Três dias após a chegada, crianças tristes desfilam e um sol de vime é pendurado na praça. A chuva apaga a tocha do barão, e o guarda Lars Kjurls ri. O barão manda arrastá-lo atrás do cavalo. Quem desafiar o barão é banido; se as armas forem tomadas, os Guardiões da Pena as roubam de volta.'},
      {name:'Tigre, Tigre', text:'Durante o festival, Karl e Nikolai Wachter balançam por desafio a carroça de Rictavio, e o tigre-dentes-de-sabre foge pelas ruas. Izek caça a fera. Depois, os Arasek confessam que o “dono esquisito” pagou pelo silêncio, e o barão manda prender Rictavio, que pede ajuda para fugir para a torre a oeste.'},
      {name:'O desejo de Lady Wachter', text:'Ernst Larnak passa a seguir o grupo. Se Fiona julgar os personagens úteis, convida-os para jantar. Se recusarem ou se declararem inimigos de Strahd, ela paga os Vistani para eliminá-los na estrada; se o grupo salvou Arabelle, os Vistani devolvem o ouro.'},
      {name:'A Festa de Santo Andral', text:'Se os ossos não voltarem à igreja ou as crias não forem destruídas em três dias, crias vampíricas e morcegos atacam a congregação e Strahd mata o Padre Lucian, que se levanta como cria. A cidade culpa o barão e, sem intervenção, a família Vallakovich é apedrejada. Se o grupo frustrar o ataque, Strahd envia pela casa Wachter um convite para Ravenloft.'}
    ],
    locations:[
      {name:'Igreja de Santo Andral', area:'N1', text:'Padre Lucian, o coroinha Yeska e o coveiro Milivoj. Sem os ossos do santo, a igreja perdeu a proteção. Willemina reza pelo filho preso.', people:['lucian','yeska','milivoj','willemina','andral']},
      {name:'Estalagem Água Azul', area:'N2', text:'Urwin e Danika Martikov, os filhos Brom e Bray, Rictavio no quarto privado e os caçadores Szoldar e Yevgeni. Urwin pede que o grupo descubra por que o vinho atrasou.', people:['urwin','danika','brom','bray','vanrichten','szoldar','yevgeni','nikolai','karl']},
      {name:'Mansão do burgomestre', area:'N3', text:'Vargas, Lydia e Victor, o quarto de Izek com as bonecas de Ireena, o vestido de noiva de Lydia e, no sótão, a sala de trabalho de Victor com o círculo de teletransporte.', people:['vargas','lydia','victor','izek','udo']},
      {name:'Casa Wachter', area:'N4', text:'Fiona, o espião Ernst, Stella trancada, o cadáver preservado de Nikolai, os ossos de Leo Dilisnya e a sede do culto no porão.', people:['fiona','ernst','stella','nikolaiold','leo']},
      {name:'Estaleiro Arasek', area:'N5', text:'Gunther e Yelena guardam a carroça de espetáculos de Rictavio, com o tigre trancado e um arsenal de caçador.', people:['gunther','yelena','vanrichten']},
      {name:'Fabricante de caixões', area:'N6', text:'Henrik van der Voort e seis crias vampíricas escondidas em caixões. Os ossos de Santo Andral estão num compartimento secreto do guarda-roupa.', people:['henrik']},
      {name:'Brinquedos Blinsky', area:'N7', text:'Brinquedos macabros, o macaco Piccolo e a etiqueta “Se não é divertido, não é Blinsky!”.', people:['blinsky','piccolo']},
      {name:'Praça da cidade', area:'N8', text:'Troncos para punições públicas e palco dos festivais do barão.', people:['vargas','lars']},
      {name:'Acampamento Vistani', area:'N9', text:'Luvash e Arrigal, servos de Strahd, procuram Arabelle e estão sem vinho. Os elfos das sombras de Kasimir vivem sob a “proteção” deles. Um vagão guarda o tesouro Vistani.', people:['luvash','arrigal','arabelle','kasimir']},
      {name:'Lago Zarovich', text:'Onde Bluto tenta afogar Arabelle.', people:['bluto','arabelle'], chapter:'terras'}
    ],
    fortune:[
      ['Estalagem Água Azul (N2)','Os Guardiões da Pena só revelam onde está depois que o grupo provar seu valor, recuperando o vinho.'],
      ['Mansão do burgomestre (N3)','Num baú do sótão: 20% de chance cumulativa por hora de busca.'],
      ['Casa Wachter (N4)','No cofre de ferro com os ossos de Leo Dilisnya.'],
      ['Estaleiro Arasek (N5)','Na carroça de Rictavio, numa caixa forrada de chumbo sob o banco da frente.'],
      ['Casebre de Kasimir (N9a)','Com Kasimir, que o entrega se o grupo prometer acompanhá-lo ao Templo Âmbar.'],
      ['Vagão do tesouro Vistani (N9i)','Entre os outros itens do vagão.']
    ],
    people:['vargas','lydia','victor','izek','fiona','ernst','stella','lucian','milivoj','henrik','urwin','danika','vanrichten','blinsky','luvash','arrigal','arabelle','kasimir','bluto','lars'], next:['moedor','krezk','vinhos','torre','argynvostholt']
  },
  {
    id:'moedor', number:'06', title:'O Velho Moedor de Ossos', type:'Capítulo 6 · local isolado', area:'Moinho entre a vila e Vallaki',
    intro:'O velho moinho de grãos que servia Vallaki abriga um conventículo de bruxas da noite que moem ossos de crianças para fazer os pastéis de sonhos.',
    story:[
      'Morgantha e as filhas Bella Perdição-do-Sol e Offalia Vermes-Serpenteantes assumem a forma de uma mãe frágil e duas filhas caseiras. Os pastéis de sonhos provocam um transe de felicidade de várias horas e um desejo de voltar ao sonho. Quando os adultos não podem mais pagar, as bruxas aceitam seus filhos como pagamento; não os tomam à força, porque o que querem é semear a corrupção.',
      'As bruxas só se interessam por crianças com alma: furam cada uma com uma agulha, e se ela chorar, tem alma. Juntas formam um conventículo com magias compartilhadas; Morgantha só tolera as filhas por isso e, se uma morrer, pretende devorar uma criança para gerar outra.',
      'Morgantha deu o olho do conventículo a Cyrus Belview, servo de Strahd, para espiar Ravenloft. As bruxas temem o conde e respeitam seu domínio.',
      'Ao se aproximar, um corvo empoleirado sobre a porta grita, tentando avisar o grupo, e depois voa para Vallaki. O moinho é de pedra fácil de escalar e não tem luz: as bruxas enxergam no escuro.'
    ],
    beats:['Ligar os pastéis vendidos na vila ao moinho e a Lucian Jarov.','Libertar Freek e Myrtle, presos nas caixas do segundo andar.','Enfrentar ou evitar o conventículo: separá-lo o enfraquece.','Profanar ou limpar o círculo das Quatro Cidades.'],
    events:[
      {name:'Negócios de Morgantha', text:'Morgantha recebe visitantes que vêm comprar e oferece pastéis a 1 po. Se o grupo recusar, grita “Vão embora!”; se atacarem ou se recusarem a sair, chama as filhas.'},
      {name:'As crianças que não querem voltar', text:'Freek, de sete anos, e Myrtle, de cinco, foram trocadas pelos pais por pastéis. Libertas, não querem ir para casa e pedem para ser levadas a Ismark e Ireena.'}
    ],
    locations:[
      {name:'Térreo', area:'O1', text:'Cozinha imunda com ossinhos no chão, pastéis no forno, uma carroça de mascate e um barril de fluido demoníaco que serve para vidência e para invocar até nove dretches. O armário guarda os elixires “Juventude”, “Rir” e “Leite da mãe”, este último um veneno.'},
      {name:'Moenda', area:'O2', text:'Morgantha mói ossos de crianças numa grande pedra de moinho.', people:['morgantha']},
      {name:'Quarto das filhas', area:'O3', text:'Bella e Offalia dançam e cutucam com agulhas as crianças presas em caixas. Joias baratas estão escondidas no colchão.', people:['bella','offalia']},
      {name:'Sótão abobadado', area:'O4', text:'Maquinário antigo e ninhos de pássaros.'},
      {name:'Pedras das Quatro Cidades', text:'Quatro megálitos com cidades das quatro estações, primeira morada lendária do Senhor da Alvorada, da Mãe Noite e dos deuses antigos. As bruxas os profanaram com pastéis e dentes de crianças, oferendas a Ceithlenn dos Dentes Tortos.'}
    ],
    fortune:[['Sótão abobadado (O4)','Fácil de achar: num ninho de pássaro ou sob a sujeira de um canto.']],
    people:['morgantha','bella','offalia','lucianjarov','cyrus'], next:['vila','vallaki']
  },
  {
    id:'argynvostholt', number:'07', title:'Argynvostholt', type:'Capítulo 7 · mansão arruinada', area:'Argynvostholt',
    intro:'A mansão do dragão de prata Argynvost, sede da Ordem do Dragão de Prata, hoje assombrada por cavaleiros ressurgidos que odeiam Strahd, mas não querem que o tormento dele termine.',
    story:[
      'Argynvost chegou ao vale disfarçado de nobre para vigiar o Templo Âmbar e reuniu cavaleiros na Ordem do Dragão de Prata. Na guerra, a Ordem abrigou os inimigos de Strahd e foi esmagada. Vladimir Horngaard viu Strahd matar seu amado, Sir Godfrey, antes de cair, e o dragão lutou até o fim diante da mansão. Strahd levou o esqueleto de Argynvost como troféu.',
      'O ódio de Vladimir trouxe de volta os cavaleiros como ressurgidos. Katarina, a futura Madame Eva, disse a eles que Strahd já tinha morrido e estava preso a um inferno próprio; desde então, Vladimir destrói quem possa aliviar o tormento do conde. Em Baróvia, um ressurgido pode permanecer indefinidamente, e, se o corpo for destruído, o espírito procura outro cadáver.',
      'O espírito de Argynvost também não descansa e procura aventureiros capazes de salvar seus cavaleiros. Levar o crânio do dragão, que está no salão de ossos de Ravenloft, ao mausoléu acende o farol de Argynvostholt: os ressurgidos encontram a paz, e os inimigos de Strahd ganham +1 na CA e nos testes de resistência enquanto estiverem em Baróvia.',
      'A mansão tem um terço desmoronado, aranhas gigantes, uma sombra de dragão que aparece e some, ressurgidos pelos quartos e torres, e uma torre octogonal com o farol.'
    ],
    beats:['Descobrir a história da Ordem e o papel de Vladimir e Godfrey.','Ouvir o apelo do fogo em forma de dragão na sala de estar.','Recuperar o crânio de Argynvost em Ravenloft e acender o farol.','Decidir o que fazer com Vladimir, que não luta contra Strahd, mas mata quem tentar libertá-lo.'],
    events:[
      {name:'Entrega especial', text:'Um Vistana louco chamado Kolya deixa diante da mansão uma carroça com um caixão feito por Henrik van der Voort, com o nome de um personagem gravado. Ao ser aberto, solta um enxame de morcegos que ataca esse personagem.'},
      {name:'A caçada de Arrigal', text:'Ezmerelda chega num cavalo roubado dos Vistani de Vallaki, atrás de segredos contra Strahd. Arrigal a persegue com duas Vistani montadas em lobos atrozes para levá-la de volta e puni-la; não ataca o grupo se não for provocado.'}
    ],
    locations:[
      {name:'Estátua do dragão e entrada', area:'Q1–Q2', text:'Estátua de dragão de prata diante da mansão meio desmoronada.'},
      {name:'Salão do dragão', area:'Q3', text:'Tapeçaria de Lorde Argynvost e bustos de suas outras formas humanas. Uma grande sombra alada atravessa as paredes.'},
      {name:'Baile das aranhas', area:'Q4', text:'Salão desmoronado tomado por nove aranhas gigantes.'},
      {name:'Caverna do dragão e chamas vivas', area:'Q6', text:'Se o farol não estiver aceso, um fogo em forma de dragão surge na lareira: “Meus cavaleiros caíram na escuridão, salve-os se puder!”. Se for atacado, explode.'},
      {name:'Mausoléu do dragão', area:'Q16', text:'Porta de mármore com o nome ARGYNVOST e inscrição em dracônico. Aqui o crânio deve ser selado.', people:['argynvost']},
      {name:'Salão de audiência do dragão', area:'Q36', text:'Vladimir Horngaard caído num trono de dragão: “Strahd já morreu uma vez. Ele não pode morrer de novo.”', people:['vladimir']},
      {name:'Cavaleiros da Ordem', area:'Q37', text:'Sir Godfrey Gwilym e outros ressurgidos. Godfrey sente que Argynvost não descansa e pode contar a história da Ordem.', people:['godfrey']},
      {name:'Estudo e quarto de Argynvost', area:'Q40–Q42', text:'Uma página de diário e pistas sobre o dragão.'},
      {name:'Farol de Argynvostholt', area:'Q53', text:'Torre de onde se veem Vallaki, o moinho, Berez e a abadia de Krezk. Aceso, o farol é visível em grande parte do vale, e até Strahd vê o brilho no céu do oeste.'},
      {name:'Crânio de Argynvost', text:'Está no salão de ossos de Ravenloft (K67), sobre as portas do leste. Pesa 113 kg.', chapter:'ravenloft'}
    ],
    fortune:[
      ['Salão de audiência do dragão (Q36)','Com Vladimir, que só o entrega de boa vontade depois que o farol for aceso.'],
      ['Farol (Q53)','No peitoril da janela oeste.']
    ],
    people:['argynvost','vladimir','godfrey','ezmerelda','arrigal','strahd'], next:['ravenloft','vallaki','krezk']
  },
  {
    id:'krezk', number:'08', title:'O Vilarejo de Krezk', type:'Capítulo 8 · assentamento', area:'Krezk e Abadia de Santa Markóvia',
    intro:'Vila murada e nevada no extremo oeste, que só abre os portões a quem prova boa-fé. Acima dela, a Abadia de Santa Markóvia virou um hospício de horrores dirigido por um anjo corrompido.',
    story:[
      'Os antepassados de Dmitri Krezkov fundaram Krezk ao pé da abadia depois da conquista. O burgomestre põe a segurança da vila acima de estranhos e não quer abrigar nem inimigos nem aliados de Strahd. A única forma de ganhar sua hospitalidade é ajudar a vila; ele pede um carregamento de vinho do Mago dos Vinhos, que atrasou. Esconde o luto por Ilya, o último de seus quatro filhos, morto de doença há sete dias.',
      'Krezk funciona como cooperativa, sem estalagens ou tavernas. Os caixões dos cemitérios familiares dos últimos dez anos estão vazios: os párias da abadia os roubam à noite. Ao norte da vila fica o poço abençoado por Santa Markóvia, cuja água concede restauração menor na primeira vez que se bebe, e o Santuário do Sol Branco, um mirante frágil com uma estátua do Senhor da Alvorada.',
      'O Abade, um deva milenar que reabriu a abadia há mais de um século, foi corrompido. Com a ajuda de Strahd, disfarçado de Vasili von Holtz, transformou a família Belview em párias e criou Vasilka, uma noiva de carne costurada com partes de mulheres mortas de Krezk, que ele treina em etiqueta para apresentar ao conde. Precisa de um vestido de noiva e, em troca, oferece ressuscitar os mortos até três vezes ou curar o grupo.',
      'O Abade não quer ferir o grupo, porque sabe que Strahd os trouxe por um motivo. Se ameaçado, ou se Vasilka for ameaçada, revela a forma angelical. Acredita sinceramente que a noiva vai curar o conde e libertar a terra, e ninguém o convence do contrário.'
    ],
    lore:[
      'Os moradores nunca saem da vila por medo de lobos, lobos atrozes e lobisomens.',
      'Uma vez por mês chega uma carroça de vinho do Mago dos Vinhos.',
      'O Abade chegou há mais de um século e não envelheceu um dia. Exige tributo em vinho, e muitos acham que ele é Strahd disfarçado ou um servo do conde.',
      'Santa Markóvia, sacerdotisa do Senhor da Alvorada, invadiu Ravenloft e foi destruída. A abadia, que já foi hospital e convento, caiu em fome, loucura e canibalismo.',
      'Ninguém visita mais a abadia; o sino toca em horas estranhas e gritos e gargalhadas descem até a vila.'
    ],
    beats:['Ganhar a entrada em Krezk: vinho, ajuda concreta ou persuasão.','Apresentar o Abade e Vasilka e a oferta de ressurreição em troca de um vestido de noiva.','Acompanhar a cadeia “Algo Velho, Algo Emprestado” e o destino de Anna e Dmitri.','Se Ireena estiver presente, preparar a cena do poço com Sergei.'],
    events:[
      {name:'Algo Velho', text:'Se o grupo não reviver Ilya, o Abade o faz: o menino volta com 1 ponto de vida e uma loucura. Anna louva o Abade, e Dmitri passa a se sentir em dívida com ele.'},
      {name:'Uma alma perdida', text:'Durante o parto de Dimira Yolensky, o bebê nasce saudável, mas não chora. A parteira Kretyana diz, com certeza: “Aquela criança não tem alma.”'},
      {name:'Algo Emprestado', text:'O Abade exige que Dmitri consiga um vestido de noiva em um mês. Anna parte com uma pequena comitiva para Vallaki, onde a baronesa Lydia tem o vestido ideal. Sem escolta, a expedição se perde. Se tudo der errado, o Abade solta os párias para saquear a vila e Dmitri se enforca dias depois.'},
      {name:'Algo Azul', text:'Se Ireena vier a Krezk, uma voz a chama ao poço abençoado, onde surge Sergei: “Tatyana!”. Se ninguém a puxar, ela é levada para a água e fica a salvo com ele. Strahd grita “Ela é minha!”, um raio atinge o poço e acaba com sua bênção. Strahd culpa o grupo e envia um convite para Ravenloft.'}
    ],
    locations:[
      {name:'Junção da estrada', area:'S1', text:'A oeste, a estrada mergulha na névoa. Ao norte fica a muralha de Krezk.'},
      {name:'Portão e muralhas', area:'S2', text:'Muralha de 6 metros e portão de madeira barrado, com dois arqueiros e quatro guardas. Uma milícia de quarenta aldeões com machadinhas responde a alarmes.'},
      {name:'Vilarejo e cabana do burgomestre', area:'S3', text:'Cabanas de pinho entre árvores nevadas. A maior é a de Dmitri e Anna, com o cemitério da família e o túmulo fresco de Ilya.', people:['dmitri','anna','ilya']},
      {name:'Poço abençoado e Santuário do Sol Branco', area:'S4', text:'Água que resiste à corrupção e um mirante frágil com a estátua do Senhor da Alvorada virada para o leste. Cena de Ireena e Sergei.', people:['ireena','sergei']},
      {name:'Portão norte da abadia', area:'S6', text:'Otto e Zygfrek Belview, guardas desatentos e coveiros do Abade.', people:['otto','zygfrek']},
      {name:'Cemitério e sepultura do sol', area:'S7', text:'Uma lápide PETROVNA com um recorte em forma de sol, que se abre com o símbolo sagrado de Tasha Petrovna.', people:['tasha']},
      {name:'Jardins', area:'S9', text:'Espantalhos e um corvo que amaldiçoa quem o matar.'},
      {name:'Salão principal', area:'S13', text:'O Abade ensina etiqueta a Vasilka diante de uma mesa posta.', people:['abbot','vasilka']},
      {name:'Pátio e poço', area:'S12', text:'Mishka Belview no poço e Marzena acorrentada a um poste.', people:['mishka','marzena']},
      {name:'Hospício dos párias', area:'S15', text:'Celas com párias assustados, brigando ou famintos, que Clovin se recusa a alimentar.'},
      {name:'Sótão e campanário', area:'S17', text:'Clovin, o pária de duas cabeças, toca o sino do jantar.', people:['clovin']},
      {name:'Barracas', area:'S19', text:'Onde Ezmerelda pode ser encontrada.', people:['ezmerelda']},
      {name:'Sala de operações, berçário e necrotério', area:'S22–S24', text:'Ecos de gritos e o reflexo de uma freira de branco.'}
    ],
    fortune:[
      ['Santuário do Sol Branco (S4)','Sob o mirante, que precisa ser demolido; se não for reconstruído, os aldeões ficam hostis.'],
      ['Jardins (S9)','Na garganta de palha do espantalho mais ao sul; retirá-lo faz sete inumanos se erguerem.'],
      ['Salão principal (S13)','No nicho, junto com a poção.'],
      ['Berçário (S23)','Sob os destroços de um dos berços.']
    ],
    people:['dmitri','anna','ilya','abbot','vasilka','clovin','otto','zygfrek','mishka','marzena','ireena','sergei','markovia','ezmerelda','lydia'], next:['vinhos','argynvostholt','vallaki','tsolenka']
  },
  {
    id:'tsolenka', number:'09', title:'Passagem Tsolenka', type:'Capítulo 9 · travessia', area:'Monte Ghakis',
    intro:'Estrada gelada que contorna o Monte Ghakis rumo ao Templo Âmbar, guardada por um portão de chama verde, uma torre assombrada e uma ponte sobre o abismo.',
    story:[
      'A estrada sobe pela encosta, com neve contínua e vento cortante. Sem proteção contra o frio, a viagem desgasta. À frente fica uma muralha preta com estátuas de abutres demoníacos e, no centro, uma treliça levadiça de ferro atrás da qual queima uma cortina de chama verde. Junto a ela há uma torre de guarda branca coroada por estátuas douradas de guerreiras.',
      'As estátuas demoníacas são na verdade dois vrocks, que atacam quem tentar contornar o portão voando ou escalando. A cortina causa 33 de dano de fogo e pode ser suprimida por um minuto com dissipar magia (CD 16) ou por um campo antimagia.',
      'Depois do portão, uma ponte de pedra de 27 metros cruza um abismo 150 metros acima do Rio Luna, entre dois arcos com estátuas de cavaleiros. No meio dela, um cavaleiro encapuzado num cavalo cor de carvão, uma manifestação de Strahd, avisa para não avançar e se desfaz em cinzas se tocado. Após 4,8 km, a estrada se divide: ao norte fica o Templo Âmbar; ao sul, a névoa.'
    ],
    beats:['Preparar o grupo para o frio e a exposição.','Resolver a cortina de chama verde e os vrocks.','Atravessar a ponte diante do aviso de Strahd.','Considerar o roc na volta do Templo Âmbar.'],
    events:[
      {name:'O ataque do roc', text:'Na travessia da ponte de leste para oeste, geralmente na volta do templo, um roc milenar do Monte Ghakis mergulha e agarra um cavalo, uma mula ou um personagem. Quem se abriga nos postos de guarda dos arcos fica fora de alcance.'},
      {name:'Sangzor, o Chifre Sangrento', text:'Um bode gigante de pele cinza investe do alto de um penhasco e pode arremessar um personagem 30 metros encosta abaixo. Foge após sofrer 10 de dano. Quem o respeita ganha o respeito dos furiosos.'}
    ],
    locations:[
      {name:'Treliça levadiça', area:'T1', text:'Portão de ferro de 9 metros na muralha preta cravejada.'},
      {name:'Estátuas demoníacas', area:'T2', text:'Dois vrocks disfarçados de estátuas de abutres com chifres.'},
      {name:'Cortina da chama verde', area:'T3', text:'Fogo mágico que fecha o arco leste do portão.'},
      {name:'Torre da guarda', area:'T4–T5', text:'Porta trancada por dentro, lareira fria e a cabeça de um lobo atroz. É destino de um teletransporte a partir de Ravenloft (K78).'},
      {name:'Telhado da torre', area:'T6', text:'Esqueletos de antigos guardas sob a neve. Se o tesouro estiver aqui, seis donzelas de neve o reclamam.'},
      {name:'Arco oeste, ponte de pedra e arco leste', area:'T7–T9', text:'Postos de guarda vazios, a ponte sobre o Rio Luna e o cavaleiro sombrio de Strahd.'}
    ],
    fortune:[['Telhado da torre da guarda (T6)','Seis donzelas de neve gritam “O tesouro é nosso!”; ao cair a última, o tesouro surge na neve.']],
    people:['strahd'], next:['templo','krezk']
  },
  {
    id:'berez', number:'10', title:'As Ruínas de Berez', type:'Capítulo 10 · ruínas', area:'Pântano de Berez',
    intro:'A vila afogada por Strahd depois que seus líderes mataram Marina, reencarnação de Tatyana. Hoje é o covil de Baba Lysaga, a “outra mãe” do conde.',
    story:[
      'Muito antes de Ireena, Strahd conheceu Marina, uma plebeia de Berez igual a Tatyana. Seduziu-a e bebeu seu sangue, mas, antes que ela se tornasse sua cria, o burgomestre Lazlo Ulrich e o Irmão Grigor a mataram para salvar sua alma. Strahd matou os dois e fez o rio inundar a vila. Depois mandou erguer um monumento a Marina, escondido no pântano.',
      'Baba Lysaga, parteira de Ravenovia que se considera a verdadeira mãe de Strahd, vive numa cabana erguida sobre raízes gigantes, animada por uma gema mágica roubada do Mago dos Vinhos e mantida como isca para os homens-corvo. Ela voa num crânio de gigante, cria espantalhos com penas de corvo para caçá-los e se banha em sangue de bode para conter a velhice. Na cabana, uma ilusão de bebê num berço é chamada de “Strahd”.',
      'O pântano é terreno difícil, a névoa limita a visão a 24 metros e enxames de moscas incomodam quem descansa. Sete espantalhos guardam o charco. Muriel Vinshaw, mulher-corvo, observa de um círculo de pedras e sinaliza ao grupo com uma lanterna.'
    ],
    beats:['Fazer contato com Muriel e ouvir seus avisos.','Encontrar o fantasma de Lazlo e o monumento de Marina.','Enfrentar Baba Lysaga, a cabana rastejante e os espantalhos.','Recuperar a gema do Mago dos Vinhos.'],
    events:[
      {name:'A cabana rastejante', text:'Se o grupo sobreviver à recepção, Baba Lysaga ordena que a cabana se anime: as raízes se soltam da lama e a casa caminha esmagando tudo. Sem a gema, ela para.'},
      {name:'A batalha fantasma', text:'Ao deixar Berez rumo ao norte, as brumas viram soldados a cavalo e lanceiros de elmos com chifres de diabo lutando uma batalha antiga. Se o grupo ainda não esteve em Argynvostholt, um dragão de névoa prateada passa por cima e revela a mansão.'}
    ],
    locations:[
      {name:'Cabanas abandonadas', area:'U1', text:'Casebres mofados separados por muretas.'},
      {name:'Mansão de Ulrich e curral', area:'U2', text:'Ruínas da mansão de Lazlo, cujo fantasma pode apontar o monumento de Marina e a verdadeira localização do tesouro. Ao lado, o curral de bodes cercado de crânios que uivam como alarme.', people:['lazlo']},
      {name:'Cabana de Baba Lysaga', area:'U3', text:'Gaiolas com enxames de corvos, a banheira de sangue, o crânio voador e a gema verde sob o assoalho.', people:['baba']},
      {name:'Jardim da igreja', area:'U4', text:'Casca de igreja com o sino meio afundado e um cemitério engolido pela lama.'},
      {name:'Monumento a Marina', area:'U5', text:'Estátua de uma camponesa ajoelhada com uma rosa, parecida com Ireena. Sete cadáveres inchados, cheios de cobras, se erguem da lama.', people:['marina']},
      {name:'Pedras verticais', area:'U6', text:'Doze menires onde Muriel espera.', people:['muriel']}
    ],
    fortune:[
      ['Mansão de Ulrich (U2)','No baú com os outros itens; se o tesouro estiver em Berez, o fantasma de Ulrich indica o lugar exato.'],
      ['Monumento a Marina (U5)','Numa cavidade sob o monumento (Força CD 15 para movê-lo).'],
      ['Cabana de Baba Lysaga (U3)','Indicada por uma das cartas na leitura de Madame Eva.']
    ],
    people:['baba','marina','lazlo','grigor','muriel','strahd'], next:['vinhos','argynvostholt','vallaki']
  },
  {
    id:'torre', number:'11', title:'A Torre de Van Richten', type:'Capítulo 11 · refúgio', area:'Lago Baratok',
    intro:'A antiga torre de Khazan, numa ilha do Lago Baratok, usada por van Richten e depois por Ezmerelda. Suas defesas são tão perigosas quanto qualquer monstro.',
    story:[
      'Khazan, arquimago que ajudou a construir Ravenloft, ergueu a torre ao se retirar e a protegeu: nenhuma magia pode ser conjurada nela ou até 1,5 metro dela, como num campo antimagia. As armadilhas e construtos de Khazan continuam funcionando. Ele morreu tentando se tornar demilich; seus restos estão em Ravenloft.',
      'Van Richten usou a torre como base, memorizou suas anotações sobre Strahd e queimou tudo, inclusive os diários, antes de se mudar para Vallaki. Ezmerelda ocupou a torre procurando o mentor e guardou na carroça um mapa de Baróvia e uma página queimada do diário dele. Ela não está presente quando o grupo chega.',
      'A porta de ferro traz a palavra KHAZAN e um símbolo com oito figuras. Tocá-la sem desarmar faz raios envolverem a torre; na terceira vez, a torre desmorona. Para abrir, é preciso imitar em sequência as posições dos braços das figuras, seguindo as linhas do símbolo; errar invoca um jovem dragão azul.'
    ],
    beats:['Examinar a carroça de Ezmerelda sem acionar a armadilha.','Decifrar a “dança” da porta de Khazan.','Explorar os andares com o elevador dos golens de barro.','Encontrar as pistas de van Richten e a cabeça de Yan.'],
    events:[
      {name:'O ataque da matilha', text:'Se a carroça explodir, os raios forem acionados ou a torre cair, o barulho ecoa até Krezk e Vallaki. Em uma hora, Kiril chega com seis lobisomens e nove lobos. É o confronto final do gancho “Lobisomens nas Brumas”. Um lobisomem capturado revela onde estão as crianças.'},
      {name:'O retorno de Ezmerelda', text:'Ezmerelda volta ferida, com 30 pontos de vida, depois de enfrentar Strahd em Ravenloft. A partir daí, Strahd quer matá-la e usa druidas, lobisomens e espiões para caçá-la; se souber que ela está com o grupo, convida todos ao castelo.'}
    ],
    locations:[
      {name:'Carroça mágica de Ezmerelda', area:'V1', text:'Carroça roxa com a placa “Dê o Fora”. As palavras “Drovash” e “Arvesh” invocam e dispensam cavalos. A porta dispara cem frascos de fogo de alquimista; o único acesso seguro é um alçapão sob o piso. Dentro estão armas prateadas, disfarces, um baralho tarokka, pergaminhos, o mapa e a página do diário.', people:['ezmerelda']},
      {name:'Porta de Khazan', area:'V2', text:'Porta de ferro sem maçaneta, com o símbolo das oito figuras e a armadilha de raios.', people:['khazan']},
      {name:'Andaimes frágeis', area:'V3', text:'Só aguentam 90 kg; levam a um rombo no terceiro andar.'},
      {name:'Térreo e elevador', area:'V4', text:'Quatro golens de barro operam o elevador de correntes e só obedecem a comandos de subir e descer.'},
      {name:'Segundo e terceiro andares', area:'V5–V6', text:'Pisos apodrecidos que desabam sob pouco peso.'},
      {name:'Quarto andar', area:'V7', text:'O quarto onde van Richten estudou Strahd. Uma armadura animada é ativada pela palavra “Khazan”. Num baú perfumado de lavanda está a cabeça embalsamada do Vistana Yan, que, com falar com os mortos, conta que Rictavio planeja atacar os Vistani.', people:['vanrichten']}
    ],
    fortune:[['Quarto andar (V7)','Num compartimento na parede atrás da armadura; ativada, ela o retira. Se a torre cair, 1d8+2 horas de escavação.']],
    people:['khazan','vanrichten','ezmerelda','kiril'], next:['vallaki','lobos','krezk']
  },
  {
    id:'vinhos', number:'12', title:'O Mago dos Vinhos', type:'Capítulo 12 · vinícola', area:'Vinícola Martikov',
    intro:'A vinícola que dá a Baróvia um de seus últimos consolos. Os Martikov, homens-corvo, foram expulsos por druidas e infectados, e as três gemas que mantinham o vinhedo vivo sumiram.',
    story:[
      'Um mago esquecido fundou o vinhedo e plantou três gemas mágicas do tamanho de pinhas que mantêm as vinhas saudáveis mesmo sob a maldição. Strahd deu a vinícola aos Krezkov como recompensa; um casamento arranjado a passou aos Martikov. A família, toda de homens-corvo, fornece vinho de graça às tavernas. Os vinhos são a Uva Púrpura Triturada Nº 3, a Moenda Dragão Vermelho e o Champanhe de Pisão.',
      'Há dez anos a primeira gema foi desenterrada e roubada, e o champanhe deixou de existir. Davian culpa o filho do meio, Urwin, que estava de vigia e teria saído para ver a noiva; Urwin nega, e os dois estão brigados desde então. Três semanas atrás, Baba Lysaga levou a segunda gema. Cinco dias atrás, os druidas levaram a terceira para a Colina Yester, e os homens-corvo falharam em recuperá-la.',
      'Dois dias atrás, druidas e uma horda de infectados expulsaram a família e envenenaram as cubas. Davian, Adrian, Elvir, Stefania, Dag e as crianças se escondem no bosque ao norte. Só depois que o grupo retoma a adega Davian fala das gemas e pede que busquem as de Berez e da Colina Yester.'
    ],
    beats:['Encontrar os Martikov no bosque, com um homem-corvo encapuzado acenando.','Retomar a adega de druidas e infectados; destruir o cajado de Gulthias faz os infectados murcharem.','Recuperar as gemas em Berez e na Colina Yester.','Escoltar o vinho até Vallaki, o acampamento Vistani ou Krezk.'],
    events:[
      {name:'Entrega de vinho', text:'Retomada a adega, Adrian e Elvir levam os barris na carroça, escoltados pelo grupo e por dois enxames de corvos. Os seis barris compram o tesouro dos Guardiões da Pena ou dos Vistani, ou a entrada em Krezk.'},
      {name:'O ataque do Estilhaço de Inverno', text:'Se o grupo sair e voltar antes de impedir o ritual na Colina Yester, encontra o vinhedo pisoteado e a adega em ruínas. Os Martikov fogem para Vallaki, e Baba Lysaga manda os espantalhos de Berez ocupar o vinhedo.'}
    ],
    locations:[
      {name:'Bosque ao norte', text:'Nove homens-corvo encapuzados, entre eles Davian e sua família.', people:['davian','adrian','elvir','stefania','dag','claudiu','martin','viggo','yolanda']},
      {name:'Estábulos, doca e oficinas', area:'W1–W4', text:'Estábulos, doca de carga com três barris e as oficinas do fabricante de barris.'},
      {name:'Tanques de fermentação', area:'W9', text:'Um druida envenena as cubas com 24 galhos infectados.'},
      {name:'Oficina do soprador de vidro', area:'W10', text:'Barril de areia onde o tesouro da tarokka pode estar enterrado.'},
      {name:'Adega', area:'W14', text:'Três barris e várias garrafas, com um druida e espetos infectados.'},
      {name:'Guincho de carregamento', area:'W16', text:'O druida que carrega o cajado de Gulthias.'},
      {name:'Aposentos da família', area:'W17–W19', text:'Quarto de Davian, cozinha e quartos de dormir.'},
      {name:'Prensa', area:'W20', text:'Um druida com vinhas infectadas.'},
      {name:'Destinos das gemas', text:'A gema de Baba Lysaga está em Berez; a dos druidas, no peito da estátua da Colina Yester. A primeira sumiu há dez anos sem pista no livro.', chapter:'yester'}
    ],
    fortune:[['Oficina do soprador de vidro (W10)','Enterrado no barril de areia.']],
    people:['davian','adrian','elvir','stefania','dag','urwin','baba'], next:['yester','berez','krezk','vallaki']
  },
  {
    id:'templo', number:'13', title:'O Templo Âmbar', type:'Capítulo 13 · masmorra', area:'Monte Ghakis',
    intro:'Cripta gelada de mais de dois mil anos onde vestígios de deuses mortos oferecem dádivas sombrias. Foi aqui que Strahd firmou o pacto.',
    story:[
      'Uma sociedade secreta de magos ergueu o templo para aprisionar vestígios de entidades malignas e guardar saberes proibidos, dedicando-o a um deus dos segredos. As forças presas corromperam os magos. Muito depois, o arquimago Exethanter aprendeu com um vestígio a se tornar lich, transformou os antigos defensores em caveiras flamejantes e passou a oferecer os segredos a quem viesse.',
      'Quando Strahd chegou procurando imortalidade, comungou com uma escuridão mais forte que as outras e firmou o pacto, selado depois com o sangue de Sergei. Os Poderes das Trevas nasceram aqui e alimentam o mal que Strahd representa. Exethanter hoje está decrépito: não lembra o próprio nome nem suas magias.',
      'O templo fica a -23 °C; sem proteção, vale a regra de frio extremo. O salão principal, com uma estátua de 18 metros sem rosto, é guardado pelo arcanaloth Neferon, escondido na cabeça da estátua em escuridão mágica, e por caveiras flamejantes atrás de seteiras. Golens de âmbar patrulham os corredores.',
      'Cada sarcófago de âmbar contém um vestígio que oferece uma dádiva sombria a quem o toca. Quem aceita ganha o poder e uma marca ou falha física que só desejo remove; uma criatura não maligna faz um teste de resistência de Carisma CD 12 ou passa a ser maligna. Destruir um sarcófago (CA 16, 80 pontos de vida) elimina o vestígio.'
    ],
    beats:['Controlar o frio e o tempo de exploração.','Lidar com Neferon, as caveiras flamejantes e os golens de âmbar.','Apresentar cada dádiva sombria com calma e deixar a escolha ao jogador.','Acompanhar Kasimir e a busca pelo meio de trazer Patrina de volta.'],
    locations:[
      {name:'Fachada do templo', area:'X1', text:'Seis estátuas âmbar de figuras encapuzadas e sem rosto, com 6 metros, imunes a dano. Uma fissura a oeste leva a outra entrada.'},
      {name:'Templo dos segredos perdidos', area:'X5', text:'Salão com a grande estátua, colunas negras e paredes revestidas de âmbar. Neferon ataca da cabeça da estátua.', people:['neferon']},
      {name:'Salões e anexos superiores', area:'X8–X17', text:'Galerias com seteiras, salão de leitura e repositórios de pergaminhos. Vilnius se esconde num deles.', people:['vilnius']},
      {name:'Sala do arquiteto', area:'X20', text:'Um castelo em miniatura onde o tesouro pode estar escondido.'},
      {name:'Covil do lich', area:'X27', text:'Sala ornamentada e empoeirada. Exethanter pergunta: “Eu conheço vocês?”', people:['exethanter']},
      {name:'Filactério escondido e biblioteca preservada', area:'X28–X30', text:'Segredos do lich e saberes proibidos.'},
      {name:'Catacumbas centrais e jazigos de âmbar', area:'X31–X33', text:'Salas de sarcófagos com vestígios; a senha “Shalx” suprime a tranca de uma delas.'},
      {name:'Tesouros saqueado e selado', area:'X39–X40', text:'Pilhas de tesouro; a tarokka pode esconder aqui o item da leitura.'},
      {name:'Fissura e jazigo âmbar', area:'X41–X42', text:'Os níveis mais fundos do templo.'},
      {name:'Jakarion', text:'O mago morto, mestre de Vilnius, incinerado pelas caveiras flamejantes.', people:['jakarion']}
    ],
    fortune:[
      ['Sala do arquiteto (X20)','Dentro do castelo em miniatura; é preciso entrar nele para alcançá-lo.'],
      ['Tesouro selado (X40)','Enterrado numa pilha aleatória de tesouros (role 1d6).']
    ],
    people:['strahd','exethanter','neferon','vilnius','jakarion','kasimir','patrina'], next:['tsolenka','ravenloft','krezk']
  },
  {
    id:'yester', number:'14', title:'Colina Yester', type:'Capítulo 14 · local ritual', area:'Borda oeste do domínio',
    intro:'Colina de druidas que veneram Strahd como senhor da terra e do clima. Ali nascem os infectados dos Bosques de Svalich, e ali Strahd vem contemplar uma miragem de sua terra natal.',
    story:[
      'No topo, um anel de pedregulhos negros atingidos por raios cerca uma estátua de 15 metros feita de galhos e terra, parecida com Strahd. No peito dela está a gema roubada do Mago dos Vinhos. Seis druidas e seis furiosos, descendentes da antiga tribo enterrada na colina e cobertos de lama cinza-azulada, dormem em covas escondidas à espera de Strahd para começar o ritual. A cada anoitecer, os mortos são repostos.',
      'Ao sul, uma árvore de Gulthias sangra seiva vermelha, cercada de infectados; suas raízes sustentam a estátua. É a única árvore do tipo em Baróvia: destruí-la de vez, arrancando o toco ou usando consagrar, impede a criação de novos infectados e o próprio ritual.',
      'A oeste, a parede de névoa mostra uma fortaleza branca sobre uma grande cidade e o eco de um sino. É uma falsa imagem da terra natal de Strahd, criada pelos Poderes Sombrios para atormentá-lo. Os antigos chamavam essa névoa de Parede Sussurrante, o último suspiro de um deus antigo.'
    ],
    beats:['Chegar antes de Strahd para impedir o ritual: destruir a estátua ou tirar a gema.','Enfrentar ou driblar druidas e furiosos no círculo.','Destruir a árvore de Gulthias para cortar a fonte dos infectados.','Oferecer ao personagem certo a lança de Kavan.'],
    events:[
      {name:'O ritual dos druidas', text:'Strahd chega em Beucephalus ou como morcego. Os druidas cantam por 10 rodadas seguidas e o Estilhaço de Inverno, uma árvore infectada de 9 metros com a gema no coração, rompe a estátua e marcha para destruir o Mago dos Vinhos. Strahd defende os druidas, depois os dispensa e fica sozinho olhando a miragem da terra natal.'},
      {name:'A lança sangrenta de Kavan', text:'O espírito de Kavan sussurra a um personagem, de preferência bárbaro, druida ou patrulheiro, e o guia até sua tumba nos dólmens, onde está a lança de sangue: “Recuperem-na, e governarão estas montanhas em meu lugar.”'}
    ],
    locations:[
      {name:'Trilha', area:'Y1', text:'A trilha sobe pela colina de grama morta sob raios constantes.'},
      {name:'Dólmen dos furiosos', area:'Y2', text:'Dois anéis de montes de pedra negra sobre os ossos da antiga tribo das montanhas. A tumba de Kavan está entre eles.', people:['kavan']},
      {name:'Círculo dos druidas', area:'Y3', text:'Anel de 76 metros; subir nos pedregulhos tem 10% de chance de atrair um raio. A estátua tem CA 10 e 50 pontos de vida; cavar a gema exige 13 ou mais no d20.'},
      {name:'Árvore de Gulthias', area:'Y4', text:'CA 15 e 250 pontos de vida, com infectados. Um machado mágico está cravado nela, ao lado do esqueleto de um aventureiro.'},
      {name:'Parede de névoa', area:'Y5', text:'A miragem da terra natal de Strahd. Entrar nela aplica os efeitos das brumas.'}
    ],
    fortune:[['Árvore de Gulthias (Y4)','Enterrado entre as raízes, sob o esqueleto do aventureiro morto.']],
    people:['strahd','kavan','davian','beucephalus'], next:['vinhos','berez','argynvostholt']
  },
  {
    id:'lobos', number:'15', title:'Covil dos Lobisomens', type:'Capítulo 15 · caverna', area:'Montanhas a oeste do Lago Baratok',
    intro:'O complexo de cavernas dos Herdeiros da Mãe Noite, a matilha de Kiril, com crianças raptadas em gaiolas e uma disputa de liderança pronta para explodir.',
    story:[
      'Os lobisomens adoram a Mãe Noite e servem Strahd por medo, acreditando que a deusa o abençoou com vida eterna. Strahd deixa a matilha atravessar a névoa periodicamente para trazer ou atrair outros ao domínio, mas, ao contrário dos Vistani, eles não vão e vêm como querem.',
      'Kiril Stoyanovich faz as crianças raptadas lutarem com lanças no anel de pedras até restar uma, que é mordida; os mortos são devorados. Emil Toranescu defendia transformar todas para aumentar a matilha. Kiril sumiu por dias e voltou com dezenas de lobos atrozes de Strahd, que levaram Emil para Ravenloft. Os mais velhos desaprovam Kiril, e Zuleika, companheira de Emil, está confinada no covil vigiando os prisioneiros.',
      'Quando o grupo chega, a maior parte da matilha, inclusive Kiril, está caçando. A entrada é uma caverna em forma de cabeça de lobo, iluminada por tochas; ossos no chão servem de alarme.'
    ],
    beats:['Localizar o covil, talvez interrogando um lobisomem capturado.','Libertar as oito crianças do santuário da Mãe Noite.','Negociar com Zuleika: o destino de Emil muda tudo.','Controlar o retorno do bando de Kiril e a perseguição.'],
    events:[
      {name:'O líder do bando', text:'A cada hora dentro do covil, 18 ou mais no d20 faz o bando de caça voltar: Kiril, com 90 pontos de vida, seis lobisomens e nove lobos. Enquanto Kiril viver, não há negociação. Se Emil estiver presente, tenta matar o rival e assumir a matilha. Se Kiril e Emil morrerem, Zuleika assume e rompe com Strahd; sem ela, o feroz Franz Graza assume.'},
      {name:'Resgate das crianças', text:'As crianças choram sem parar; acalmar emoções ou um teste de Carisma CD 15 as mantém quietas. Um homem-corvo sugere levá-las a Krezk e depois avisa Davian. Em Vallaki, os Martikov as abrigam na Estalagem Água Azul. Se Kiril estiver vivo, persegue o grupo.'}
    ],
    locations:[
      {name:'Boca da caverna', area:'Z1', text:'Mandíbulas de pedra de um lobo sobre a entrada; ouve-se uma flauta desafinada. Com Emil, o grupo pode entrar sem ser atacado.'},
      {name:'Posto de guarda', area:'Z2', text:'Aziana e Davanka, lobisomens de lança, dão o alarme.'},
      {name:'Covil dos lobos', area:'Z3', text:'Skennis, velho demais para caçar, toca flauta cercado por nove lobos.', people:['skennis']},
      {name:'Fonte subterrânea', area:'Z4', text:'Bacia de água fresca sob uma fenda no teto.'},
      {name:'Cavernas profundas', area:'Z5', text:'Labirinto com ossos no chão. Bianca, companheira de Kiril, dorme numa caverna; Wensencia e Kellen, em outra.', people:['bianca','wensencia','kellen']},
      {name:'Túnel secreto', area:'Z6', text:'Atrás de uma cortina de carne costurada, escadas levam ao anel de pedras.'},
      {name:'Santuário da Mãe Noite', area:'Z7', text:'Seis gaiolas, quatro delas com crianças, uma estátua de mulher com cabeça de lobo e oferendas. Zuleika reza pela libertação de Emil. Quem rouba do tesouro é amaldiçoado com pesadelos que impedem o descanso noturno.', people:['zuleika']},
      {name:'Anel de pedras', area:'Z8', text:'Onde as crianças lutam até a morte sob os olhos da matilha.', people:['kiril']}
    ],
    fortune:[['Santuário da Mãe Noite (Z7)','Entre as oferendas na base da estátua; a maldição do roubo também vale para ele.']],
    people:['kiril','emil','zuleika','bianca','skennis','wensencia','kellen','strahd','davra'], next:['torre','ravenloft','krezk']
  },
  {
    id:'casa', number:'B', title:'Casa da Morte', type:'Apêndice B · abertura opcional', area:'Vila de Baróvia',
    intro:'Miniaventura para personagens de 1º nível que os leva até o 3º por marcos. Uma casa assombrada que atrai os heróis com duas crianças e exige um sacrifício.',
    story:[
      'A família rica que construiu a casa praticava artes sombrias e formou um culto que sacrificava visitantes. Quando Strahd chegou, os cultistas o viram como um messias, mas ele os rejeitou. Depois, o culto capturou aventureiros que Strahd havia atraído como brinquedos, e o conde veio numa carruagem negra e matou todos. Os espíritos dos cultistas assombram a masmorra, e a casa, queimada muitas vezes, sempre se reergue.',
      'Na rua, Rose, de dez anos, e Thorn, de sete, pedem ajuda: “Há um monstro em nossa casa!”. Dizem que os pais o mantêm no porão e que há um bebê no berçário. São ilusões criadas pela casa e desaparecem se forem atacadas ou forçadas a entrar. Enquanto durar a aventura, as brumas bloqueiam qualquer outro caminho.',
      'Os andares superiores contam a história: Gustav e Elisabeth Durst negligenciaram os filhos e os trancaram no sótão até morrerem de fome. Walter, filho de Gustav com a ama, não está no berçário. Mexer na casa de bonecas ou no baú do quarto das crianças faz surgirem os fantasmas de Rose e Thorn, que podem possuir personagens. Pôr os restos de cada criança no seu caixão da cripta lhe dá paz.',
      'Na câmara do ritual, treze aparições com tochas de fogo negro cantam “Um deve morrer!”. Se o grupo sacrificar uma criatura no altar, o culto se cala e a casa deixa todos saírem. Se recusar, os cultistas despertam Lorghoth, o Decadente, e, depois dele, a casa ataca: janelas viram tijolo, portas viram lâminas de foice, lareiras soltam fumaça venenosa e as paredes apodrecidas liberam ratos.'
    ],
    beats:['Seguir Rose e Thorn e entrar na casa.','Encontrar a escada secreta do sótão (área 21): 2º nível.','Descobrir o destino das crianças e dar paz aos fantasmas.','Enfrentar a escolha do sacrifício e escapar: 3º nível.'],
    events:[
      {name:'Um deve morrer!', text:'Treze aparições cercam o estrado da câmara do ritual (38) e exigem um sacrifício no altar. Elas não se deixam enganar por ilusões. Aceitar encerra a ameaça; recusar desperta Lorghoth, o Decadente, um arbusto errante.'},
      {name:'A casa se volta contra o grupo', text:'Se o sacrifício foi recusado, a subida vira uma fuga em iniciativa: tijolos nas janelas, lâminas de foice nas portas (Acrobacia CD 15), fumaça venenosa e paredes apodrecidas que soltam ratos.'}
    ],
    locations:[
      {name:'Entrada, salão e canil', area:'1–3', text:'Retratos de Durst mortos e o retrato de família em que Elisabeth olha o bebê com desprezo.'},
      {name:'Cozinha, jantar e salão superior', area:'4–7', text:'A vida aparente de uma família rica.'},
      {name:'Biblioteca e sala secreta', area:'8–9', text:'Pistas do culto e acesso a áreas ocultas.'},
      {name:'Suíte principal e suíte da ama', area:'12–15', text:'Vestígios de Gustav, Elisabeth e da ama, mãe de Walter.', people:['gustav','elisabeth','walter']},
      {name:'Sótão e quarto das crianças', area:'16–21', text:'O quarto trancado com os esqueletos de Rose e Thorn, a casa de bonecas que revela todas as portas secretas e a escada secreta para a masmorra.', people:['rose','thorn']},
      {name:'Criptas da família', area:'23', text:'Criptas de Walter (vazia), Gustav, Elisabeth, Rose e Thorn.'},
      {name:'Níveis do culto', area:'24–37', text:'Quartos dos iniciados e cultistas, poço de espinhos, carniçais, o Santuário do Senhor Negro, o relicário, a prisão e a ponte levadiça. No quarto dos líderes do culto (34), Gustav e Elisabeth espreitam como lívidos nas paredes de terra e atacam quem mexer no baú.', people:['gustav','elisabeth']},
      {name:'Câmara do ritual', area:'38', text:'Onde Lorghoth dorme sob uma pilha de refugo e as aparições exigem o sacrifício.'}
    ],
    people:['rose','thorn','gustav','elisabeth','walter','strahd'], next:['vila']
  }
];

// Introdução, tabela "Área por Níveis"; Casa da Morte, apêndice B.
const suggestedLevels = {
  vila:'1–3', vallaki:'4', moedor:'4', krezk:'5', vinhos:'5',
  torre:'6', yester:'6', argynvostholt:'7', lobos:'7',
  tsolenka:'8', berez:'8', ravenloft:'9', templo:'9', casa:'1–3'
};
for (const chapter of storyChapters) {
  if (suggestedLevels[chapter.id]) chapter.suggestedLevel = suggestedLevels[chapter.id];
}
const storyById = Object.fromEntries(storyChapters.map(chapter => [chapter.id, chapter]));
