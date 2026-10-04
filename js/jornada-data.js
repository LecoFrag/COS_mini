// A jornada · a campanha inteira contada como uma história, por UM caminho possível.
// Escrita a partir dos capítulos (story-data.js), da leitura de tarokka e das linhas de missão do Atlas.
// Marcação no texto: [[id]] ou [[id|texto]] abre a ficha do personagem; {{capitulo|texto}} abre o capítulo.
const JORNADA = {
  intro: [
    'Maldição de Strahd não tem um roteiro fixo: o vale é aberto, as cartas de Madame Eva mudam onde estão os tesouros e cada mesa faz escolhas diferentes. O que vem a seguir é uma das campanhas possíveis, contada do começo ao fim como se já tivesse acontecido, para mostrar como as peças se encaixam.',
    'O caminho segue a ordem por níveis sugerida pelo livro e amarra as nove linhas de missão do mapa da campanha. Ao fim de cada parte, o quadro “Outros caminhos” lembra o que poderia ter sido diferente.'
  ],

  // A leitura de tarokka escolhida para esta versão da história (todas são resultados válidos do livro).
  leitura: [
    {pos:'O Memorial de Strahd', card:'Traidor', say:'Procure uma mulher rica. Uma forte aliada do demônio, ela mantém o tesouro sob sete chaves, com os ossos de um inimigo antigo.', where:'Casa Wachter, em Vallaki', chapter:'vallaki'},
    {pos:'O Símbolo Sagrado do Corvo-Bondoso', card:'Curandeiro', say:'Olhe para o oeste. Encontre um lago abençoado pela luz do sol branco.', where:'Sob o Santuário do Sol Branco, em Krezk', chapter:'krezk'},
    {pos:'A Espada Solar', card:'Encantador', say:'Eu vejo uma mulher ajoelhada — uma rosa de grande beleza arrancada muito cedo. O mestre do pântano sabe de quem falo.', where:'Sob o monumento de Marina, em Berez', chapter:'berez'},
    {pos:'O aliado contra Strahd', card:'Brumas', say:'Uma Vistana vagueia nesta terra sozinha, em busca de seu mentor. Procure-a na Abadia de Santa Markóvia, perto das brumas.', where:'Ezmerelda d’Avenir', chapter:'krezk', person:'ezmerelda'},
    {pos:'Onde Strahd espera', card:'Violado', say:'Ele assombra o túmulo do homem que ele invejava acima de tudo.', where:'Túmulo de Sergei, nas catacumbas de Ravenloft', chapter:'ravenloft'}
  ],

  atos: [
    {id:'prologo', num:'Prólogo', title:'O vale que deixou o mundo', place:'Baróvia, há quatro séculos', chapters:['abertura'],
      lead:'Antes de os aventureiros chegarem, a história já tinha um vilão, uma noiva morta e uma prisão de névoa.',
      text:[
        '[[strahd|Strahd von Zarovich]] era um príncipe guerreiro. Depois da morte do pai, o rei [[barov|Barov]], encurralou os últimos inimigos da família num vale entre montanhas, matou todos e deu à terra o nome de Baróvia. Ali ergueu um castelo e o batizou com o nome da mãe: Ravenloft.',
        'A paz o deixou vazio. Sentindo a juventude escapar, foi ao {{templo|Templo Âmbar}} e firmou um pacto com os Poderes das Trevas em troca de imortalidade. Ao mesmo tempo, apaixonou-se por [[tatyana|Tatyana]], uma jovem do vale. Mas Tatyana amava o irmão dele, [[sergei|Sergei]].',
        'No dia do casamento, Strahd matou Sergei e bebeu seu sangue, selando o pacto. Perseguiu Tatyana pelos jardins até que ela se atirou de uma varanda. Os guardas o crivaram de flechas, e ele não morreu: levantou-se vampiro. O vale inteiro foi arrancado do mundo e preso num semiplano cercado por névoa mortal.',
        'Desde então, a alma de Tatyana renasce em outras mulheres. A mais recente é [[ireena|Ireena Kolyana]], filha adotiva do burgomestre da vila de Baróvia, já mordida duas vezes. É o ano 735 do calendário baroviano, e o conde está prestes a buscá-la.'
      ],
      fios:['Os três objetivos de Strahd: Ireena, o caçador van Richten e os estrangeiros que a névoa traz.'],
      outros:['A aba “A história” conta esse passado em detalhes, com as árvores das famílias e a linha do tempo.']},

    {id:'brumas', num:'Parte 1', title:'A névoa e a casa', place:'Estrada de Baróvia · Casa da Morte', chapters:['casa','abertura'], level:'1–3',
      lead:'A névoa engole o acampamento e uma casa assombrada exige um sacrifício.',
      text:[
        'Tudo começou numa noite comum de viagem. O grupo acampou numa floresta e acordou cercado por uma névoa espessa, diante de árvores que não eram as mesmas. Toda direção levava à mesma estrada lamacenta: a Antiga Estrada Svalich. Os portões de ferro de Baróvia se abriram sozinhos para eles e se fecharam às suas costas.',
        'Na rua da vila, duas crianças pálidas, [[rose|Rose]] e [[thorn|Thorn]], pediram socorro: havia um monstro no porão da casa deles. A casa era a {{casa|Casa da Morte}}, e as crianças eram ilusões dela. Lá dentro, os retratos contavam a história dos Durst: [[gustav|Gustav]] e [[elisabeth|Elisabeth]] lideravam um culto que sacrificava visitantes e deixaram os filhos morrerem de fome no sótão.',
        'O grupo encontrou os pequenos esqueletos, deu paz aos fantasmas levando os restos às criptas e desceu às masmorras do culto. Na câmara do ritual, treze aparições cercaram o altar cantando “Um deve morrer!”. Os aventureiros se recusaram. O monstro Lorghoth despertou, e a casa se voltou contra eles: janelas viraram tijolo, portas viraram lâminas. Escaparam por pouco, já sabendo que aquele vale não seria um lugar comum.'
      ],
      fios:['Primeiro contato com a regra de Baróvia: o mal do lugar testa quem chega.'],
      outros:['Se aceitarem o sacrifício, a casa deixa todos saírem em paz, mas o grupo carrega essa escolha.','Sem a Casa da Morte, a campanha começa direto na taverna, com um dos outros ganchos: a carta falsa de Kolyan, os Vistani de Stanimir ou os lobisomens na névoa.']},

    {id:'vila', num:'Parte 2', title:'O enterro de Kolyan', place:'Vila de Baróvia', chapters:['vila'], level:'3',
      lead:'Ismark pede ajuda; Ireena só parte depois que o pai for enterrado.',
      text:[
        'Na taverna Sangue da Videira, um jovem bebia sozinho. Era [[ismark|Ismark Kolyanovich]], o filho do burgomestre. Contou que o pai, [[kolyan|Kolyan]], morrera do coração depois de semanas de ataques de lobos e mortos-vivos à mansão, e pediu que o grupo escoltasse sua irmã adotiva até Vallaki, longe da vista do castelo.',
        'Ireena os recebeu desconfiada, com a porta barrada. Tinha marcas no pescoço e nenhuma lembrança da própria infância. Recusou-se a partir enquanto o pai estivesse no chão da sala. Então o grupo carregou o caixão até a igreja, onde o padre [[donavich|Donavich]] rezava à beira da loucura: sob o piso, preso numa galeria, gritava seu filho [[doru|Doru]], transformado em cria vampírica. Os aventureiros desceram e deram fim a Doru, e o padre, devastado, chorou de alívio.',
        'Pela vila passou a carroça de [[morgantha|Morgantha]], uma velha vendendo “pastéis de sonhos”. O grupo a viu levar num saco o menino [[lucianjarov|Lucian Jarov]], recebido como pagamento, e a obrigou a soltá-lo. Ela partiu resmungando para o velho moinho da estrada. À meia-noite, uma luz verde encheu o cemitério e cem espíritos de aventureiros mortos marcharam em silêncio rumo a Ravenloft.',
        'Ao amanhecer, Kolyan foi enterrado. Donavich sugeriu levar Ireena para Vallaki ou para a abadia de Krezk. O grupo escolheu Vallaki, e Ismark seguiu com eles.'
      ],
      fios:['Ireena, a noiva desejada: começa a escolta pelo vale.','Crianças perdidas: os pastéis de sonho apontam para o moinho; [[mary|Mary Maluca]] chora a filha [[gertruda|Gertruda]], que fugiu.'],
      outros:['Poupar Doru e libertá-lo é um desastre: ele ataca o grupo ou a vila.','O grupo poderia ter levado Ireena direto para Krezk, onde o poço sagrado a espera.']},

    {id:'cartas', num:'Parte 3', title:'As cartas de Madame Eva', place:'Estradas de Baróvia · Lago Tser', chapters:['terras','abertura'], level:'3–4',
      lead:'A leitura de tarokka espalha o destino do grupo pelo vale, e Strahd vem conhecer seus convidados.',
      text:[
        'Na encruzilhada do Rio Ivlis, a forca rangeu e um dos aventureiros viu o próprio corpo pendurado. Mais adiante, no acampamento Vistani do Lago Tser, a velha [[eva|Madame Eva]] chamou cada um pelo nome antes de se apresentarem e embaralhou as cartas.',
        'O Traidor disse que o Memorial de Strahd estava com “uma mulher rica, aliada do demônio”, junto dos ossos de um inimigo antigo. O Curandeiro mandou procurar o Símbolo Sagrado do Corvo-Bondoso a oeste, num lugar “abençoado pela luz do sol branco”. O Encantador mostrou “uma mulher ajoelhada, uma rosa arrancada muito cedo”: ali estava a Espada Solar. A carta das Brumas apontou o grande aliado: uma Vistana sozinha procurando o mentor. E o Violado revelou onde o conde esperaria no fim: no túmulo do irmão que ele invejava.',
        'Na estrada para Vallaki, ao entardecer, um cavaleiro de capa negra montado num pesadelo cruzou o caminho. Era o próprio [[strahd|Strahd]]. Cumprimentou Ireena com uma cortesia gelada, mediu cada aventureiro com o olhar, provocou o mais orgulhoso e partiu sem atacar. Não era uma emboscada; era uma apresentação.'
      ],
      fios:['A leitura de Madame Eva: três tesouros, o aliado e o local do confronto.','Strahd começa a testar o grupo.'],
      outros:['Cada leitura muda a campanha: os tesouros poderiam estar no castelo, na abadia, no moinho ou no Templo Âmbar.','Os Vistani do Lago Tser servem Strahd, mas só atacam se provocados.']},

    {id:'vallaki', num:'Parte 4', title:'A cidade dos festivais', place:'Vallaki', chapters:['vallaki','terras'], level:'4',
      lead:'Vallaki parece um refúgio, mas vive de falsa alegria, prisões e vampiros escondidos.',
      text:[
        'Vallaki era murada e alegre à força. O barão [[vargas|Vargas Vallakovich]] acreditava que, se todos fossem felizes, Strahd não os alcançaria, e prendia quem falasse mal de seus festivais. O capanga dele, [[izek|Izek Strazni]], tinha um braço de demônio e um quarto cheio de bonecas com o rosto de Ireena. Ele não sabia que ela era sua irmã.',
        'O grupo se hospedou na Estalagem Água Azul, de [[urwin|Urwin Martikov]], que reclamava do vinho atrasado. Ali também estava [[vanrichten|Rictavio]], um bardo meio-elfo excêntrico que, na verdade, era o caçador Rudolph van Richten. Ireena ficou na igreja de Santo Andral, com o padre [[lucian|Lucian]]. Mas a igreja tinha perdido sua proteção: os ossos do santo haviam sumido. A pista levou do coroinha [[yeska|Yeska]] ao coveiro [[milivoj|Milivoj]] e à oficina do fabricante de caixões [[henrik|Henrik van der Voort]], onde seis crias vampíricas dormiam. O grupo as destruiu, recuperou os ossos e frustrou o ataque que Strahd preparava para a Festa de Santo Andral.',
        'No Festival do Sol Ardente, a chuva apagou a tocha do barão, um guarda riu e foi castigado, e os filhos dos Wachter soltaram o tigre de Rictavio pelas ruas. Na confusão, o caçador pediu ajuda para fugir para sua torre, a oeste. Enquanto isso, [[fiona|Lady Fiona Wachter]], que preferia “servir ao diabo do que a um louco”, convidou o grupo para jantar. Era a “mulher rica” da carta: no cofre de seu quarto, com os ossos de [[leo|Leo Dilisnya]], estava o Memorial de Strahd, que os aventureiros tomaram depois de descobrir o culto no porão.',
        'Antes de partir, o grupo encontrou no Lago Zarovich o pescador [[bluto|Bluto]] prestes a afogar [[arabelle|Arabelle]] num saco. Devolveram a menina ao pai, [[luvash|Luvash]], e ganharam a gratidão dos Vistani. No acampamento, o elfo [[kasimir|Kasimir]] falou de um templo nas montanhas onde talvez pudesse trazer de volta a irmã morta.'
      ],
      fios:['O Memorial de Strahd é encontrado.','O vinho e as três gemas: Urwin pede que descubram o que houve na vinícola.','Kasimir e o Templo Âmbar; Van Richten e sua torre.'],
      outros:['Se a Festa de Santo Andral não for impedida, Strahd mata o padre Lucian e a cidade apedreja o barão.','O grupo pode apoiar Lady Wachter contra o barão; ela simpatiza com Strahd, mas é menos cruel com o povo.']},

    {id:'moinho', num:'Parte 5', title:'O moinho das bruxas', place:'O Velho Moedor de Ossos', chapters:['moedor'], level:'4',
      lead:'Os pastéis de sonho são feitos de ossos de crianças.',
      text:[
        'Seguindo a pista de Morgantha, o grupo voltou pela estrada até o velho moinho entre a vila e Vallaki. Um corvo gritou sobre a porta, tentando avisá-los, e voou na direção da cidade.',
        'Lá dentro, Morgantha moía ossinhos numa pedra de moinho, e suas filhas, [[bella|Bella]] e [[offalia|Offalia]], cutucavam com agulhas duas crianças presas em caixas. As bruxas só queriam crianças com alma: as que choravam com a agulhada. O grupo separou o conventículo, enfrentou as três e libertou Freek e Myrtle, trocadas pelos próprios pais por pastéis. As crianças não quiseram voltar para casa e pediram para ficar com Ismark e Ireena.'
      ],
      fios:['Crianças perdidas: o moinho é fechado.'],
      outros:['Enfrentar o conventículo inteiro de uma vez é muito perigoso nesse nível; separá-lo é a chave.']},

    {id:'vinho', num:'Parte 6', title:'O vinho e as três gemas', place:'O Mago dos Vinhos', chapters:['vinhos'], level:'5',
      lead:'Druidas tomaram a vinícola dos Martikov, e as gemas que mantinham o vinhedo vivo sumiram.',
      text:[
        'A pedido de Urwin, o grupo seguiu para o oeste, até a vinícola Mago dos Vinhos. No bosque ao norte, um homem encapuzado acenou: era [[davian|Davian Martikov]], escondido com a família depois que druidas e uma horda de infectados os expulsaram e envenenaram as cubas.',
        'Os aventureiros retomaram a adega e quebraram o cajado de Gulthias que animava os infectados. Só então Davian contou o segredo: os Martikov eram homens-corvo, os Guardiões da Pena que espionam Strahd. E o vinhedo vivia de três gemas mágicas. A primeira sumira há dez anos, e Davian culpava o filho Urwin por isso. A segunda estava com a bruxa Baba Lysaga, em Berez. A terceira, com os druidas da Colina Yester.',
        'Escoltados por enxames de corvos, os barris voltaram para Vallaki, e uma carroça seguiu para Krezk, a vila que não abre os portões a estranhos.'
      ],
      fios:['O vinho e as três gemas: falta recuperar duas.','Os Guardiões da Pena passam a confiar no grupo.'],
      outros:['Se o grupo sair e voltar antes de impedir o ritual da Colina Yester, encontra o vinhedo destruído.']},

    {id:'krezk', num:'Parte 7', title:'O poço e a noiva de carne', place:'Krezk · Abadia de Santa Markóvia', chapters:['krezk'], level:'5',
      lead:'O Abade costura uma noiva para Strahd, e o poço sagrado quase leva Ireena embora.',
      text:[
        'Com o vinho, os portões de Krezk se abriram. O burgomestre [[dmitri|Dmitri Krezkov]] e a esposa, [[anna|Anna]], choravam o filho [[ilya|Ilya]], morto de doença. Na abadia acima da vila vivia o [[abbot|Abade]], um anjo corrompido. Ele ressuscitou Ilya, mas o menino voltou estranho, e Dmitri passou a lhe dever um favor: um vestido de noiva para [[vasilka|Vasilka]], a noiva de carne que o Abade costurou para apresentar a Strahd, convencido de que ela curaria o conde e o vale.',
        'No quartel da abadia, entre os párias de [[clovin|Clovin]], estava [[ezmerelda|Ezmerelda d’Avenir]], a Vistana caçadora de monstros da carta das Brumas. Procurava o mentor, van Richten, e aceitou se juntar ao grupo.',
        'Ao norte da vila, perto do poço abençoado, ficava o Santuário do Sol Branco. Sob o mirante, como dizia o Curandeiro, estava o Símbolo Sagrado do Corvo-Bondoso. O grupo desmontou o santuário para pegá-lo e o reconstruiu, para não ofender os moradores.',
        'Então uma voz chamou Ireena até o poço. Da água surgiu o espírito de [[sergei|Sergei]], de braços abertos: “Tatyana!”. Ireena deu um passo para a água, e Ismark a segurou pelo braço. Ela hesitou, olhou o grupo e escolheu ficar: ainda não. A visão se desfez. Do céu veio um grito, “Ela é minha!”, e um raio caiu sobre o poço, apagando sua bênção. Dias depois, uma carta com o selo do conde chegou: um convite para jantar em Ravenloft.'
      ],
      fios:['O Símbolo Sagrado é encontrado.','Ezmerelda, o aliado da leitura, entra no grupo.','O Abade e o vestido de noiva; Strahd convida o grupo ao castelo.'],
      outros:['No livro, se ninguém segurar Ireena, ela entra na água com Sergei e fica a salvo, fora do alcance de Strahd para sempre.','O vestido de Lydia, em Vallaki, pode ir para o Abade, o que leva Vasilka a Ravenloft. Strahd não a quer: quer Ireena.']},

    {id:'convite', num:'Parte 8', title:'Jantar em Ravenloft', place:'Castelo Ravenloft', chapters:['ravenloft','terras'], level:'6',
      lead:'O conde abre as portas do castelo, e o grupo sai com um crânio de dragão e um lobisomem.',
      text:[
        'Uma carruagem negra os esperava na bifurcação da montanha e não aceitava outro caminho. Nos portões, o mordomo [[rahadin|Rahadin]] os conduziu à sala de jantar, onde Strahd tocava órgão. Era uma ilusão. Ele deu boas-vindas, disse que estavam livres para explorar, riu e sumiu. As portas bateram e a ponte levadiça subiu.',
        'O castelo era um labirinto vertical. Encontraram o contador [[lief|Lief Lipsiege]] acorrentado à mesa, a cria [[helga|Helga]] fingindo ser prisioneira e, num quarto de conto de fadas, [[gertruda|Gertruda]], encantada pelo conde. Nas masmorras alagadas, libertaram [[emil|Emil Toranescu]], o lobisomem que Strahd prendeu para ajudar o rival dele, Kiril. No salão de ossos, sobre as portas do leste, estava o crânio do dragão [[argynvost|Argynvost]]. Arrastaram os mais de cem quilos de osso até a saída.',
        'Strahd os deixou ir. Ainda queria vê-los crescer.'
      ],
      fios:['A Ordem do Dragão de Prata: o crânio sai do castelo.','A matilha de Kiril: Emil está livre.'],
      outros:['O convite pode chegar mais cedo (por exemplo, depois da Festa de Santo Andral). Ir ao castelo cedo demais é mortal.','Destruir o Coração da Dor nesta visita enfraquece muito o conde para o confronto final.']},

    {id:'dragao', num:'Parte 9', title:'O farol do dragão', place:'Argynvostholt', chapters:['argynvostholt'], level:'7',
      lead:'Cavaleiros mortos que odeiam Strahd, mas não querem que o tormento dele acabe.',
      text:[
        'A mansão de Argynvost era meio ruína, meio assombração. Uma sombra de dragão atravessava as paredes. Na lareira, um fogo em forma de dragão pediu: “Meus cavaleiros caíram na escuridão, salve-os se puder!”.',
        'O cavaleiro [[godfrey|Sir Godfrey]] contou a história da Ordem e da guerra perdida. No trono, [[vladimir|Vladimir Horngaard]] ouviu tudo com desprezo: Strahd já tinha morrido uma vez e não podia morrer de novo, e o sofrimento dele era o único consolo de Vladimir. O grupo levou o crânio ao mausoléu do dragão. O farol da torre se acendeu e foi visto em quase todo o vale, até no castelo. Os cavaleiros ressurgidos encontraram descanso, e a luz passou a proteger os inimigos de Strahd.'
      ],
      fios:['A Ordem do Dragão de Prata se cumpre: o farol está aceso.'],
      outros:['Vladimir mata quem tenta libertar Strahd do tormento. Enfrentá-lo é opcional e perigoso.']},

    {id:'matilha', num:'Parte 10', title:'A torre e a matilha', place:'Torre de Van Richten · Covil dos Lobisomens', chapters:['torre','lobos'], level:'6–7',
      lead:'Ezmerelda reencontra o mentor, e os lobisomens trocam de líder.',
      text:[
        'Ezmerelda guiou o grupo até a torre de Khazan, numa ilha do Lago Baratok. A porta de ferro só se abria imitando a “dança” das oito figuras do símbolo. Lá dentro estava [[vanrichten|van Richten]], escondido desde a fuga de Vallaki. Mestre e pupila se reencontraram depois de anos, e o caçador se juntou à luta.',
        'O barulho na torre atraiu [[kiril|Kiril Stoyanovich]] e sua matilha. Depois da batalha, Emil guiou o grupo até o covil dos lobisomens, nas montanhas. No santuário da Mãe Noite, [[zuleika|Zuleika]] rezava pela volta do companheiro e vigiava crianças presas em gaiolas. Quando Kiril voltou da caçada, Emil o desafiou e venceu. A matilha rompeu com Strahd, e as crianças foram levadas para a Estalagem Água Azul, onde os Martikov as abrigaram.'
      ],
      fios:['A matilha de Kiril se encerra.','Van Richten e Ezmerelda lutam juntos.','Crianças perdidas: as do covil voltam.'],
      outros:['Sem Emil, só se negocia com a matilha depois que Kiril morre; se Emil e Kiril morrem, Zuleika assume.']},

    {id:'yester', num:'Parte 11', title:'O ritual da Colina Yester', place:'Colina Yester', chapters:['yester'], level:'6',
      lead:'Druidas preparam uma árvore-monstro para destruir a vinícola, e Strahd vem assistir.',
      text:[
        'No alto da colina, um anel de pedras negras cercava uma estátua de galhos com a forma de Strahd. No peito dela brilhava a gema roubada da vinícola. O grupo chegou antes do ritual, arrancou a gema e derrubou a estátua.',
        'Strahd chegou montado em [[beucephalus|Beucephalus]] e encontrou os druidas mortos. Não lutou. Ficou na borda da colina olhando a parede de névoa a oeste, onde aparece a miragem de sua terra natal, a tortura que os Poderes das Trevas preparam para ele. Ao sul, o grupo queimou a árvore de Gulthias até a raiz, e o espírito de [[kavan|Kavan]], antigo chefe das montanhas, ofereceu sua lança de sangue a quem quisesse governar no lugar dele.'
      ],
      fios:['O vinho e as três gemas: a segunda volta para casa.'],
      outros:['Se o ritual se completar, o Estilhaço de Inverno, uma árvore gigante com a gema no coração, marcha para destruir a vinícola.']},

    {id:'berez', num:'Parte 12', title:'A rosa afogada', place:'Ruínas de Berez', chapters:['berez'], level:'8',
      lead:'A vila afogada guarda a Espada Solar e a mulher que se diz mãe de Strahd.',
      text:[
        'No pântano onde Berez afundou, a mulher-corvo [[muriel|Muriel]] sinalizou com uma lanterna e contou a história: séculos antes, Strahd amou [[marina|Marina]], outra vida da alma de Tatyana. Para salvá-la de virar cria, o burgomestre [[lazlo|Lazlo]] e o irmão [[grigor|Grigor]] a mataram, e Strahd afogou a vila em vingança.',
        'O fantasma de Lazlo apontou o monumento escondido no charco: uma camponesa ajoelhada com uma rosa, a mulher da carta do Encantador. O rosto era o de Ireena. Sob a estátua estava a Espada Solar, o punho da espada de Sergei, viva e sedenta de vingança.',
        'Na cabana erguida sobre raízes vivia [[baba|Baba Lysaga]], a parteira que se acha a verdadeira mãe de Strahd. A cabana se levantou e caminhou para esmagá-los, mas o grupo arrancou de seu assoalho a gema verde que a animava. Com a terceira gema de volta, o vinhedo dos Martikov voltou a respirar.'
      ],
      fios:['A Espada Solar é encontrada.','O vinho e as três gemas se cumprem (a primeira gema continua perdida, como no livro).'],
      outros:['Na leitura, a Espada Solar poderia estar na própria cabana de Baba Lysaga ou na mansão de Ulrich.']},

    {id:'ambar', num:'Parte 13', title:'Onde o pacto nasceu', place:'Passagem Tsolenka · Templo Âmbar', chapters:['tsolenka','templo'], level:'8–9',
      lead:'Kasimir leva o grupo ao templo onde Strahd vendeu a alma.',
      text:[
        'Kasimir, que esperava desde Vallaki, guiou o grupo pela passagem gelada do Monte Ghakis. Apagaram a cortina de chama verde, enfrentaram os demônios disfarçados de estátuas e, no meio da ponte sobre o abismo, um cavaleiro encapuzado, um eco de Strahd, mandou que voltassem. Ao ser tocado, desfez-se em cinzas.',
        'O {{templo|Templo Âmbar}} era uma cripta de gelo com sarcófagos que sussurram. Em cada um, um vestígio de deus morto oferecia uma dádiva sombria com um preço. O arcanaloth [[neferon|Neferon]] atacou da cabeça da grande estátua. O lich [[exethanter|Exethanter]], tão velho que esqueceu o próprio nome, perguntou: “Eu conheço vocês?”. Ali o grupo entendeu de onde vinha o poder do conde e por que matá-lo talvez não bastasse.',
        'Kasimir encontrou o que procurava: um modo de trazer de volta a irmã, [[patrina|Patrina]], cujos restos estão nas catacumbas de Ravenloft. Na volta, um roc milenar mergulhou sobre a ponte. Agora o caminho levava a um lugar só.'
      ],
      fios:['Kasimir e o Templo Âmbar: o caminho até Patrina passa pelo castelo.'],
      outros:['Quem aceita uma dádiva sombria ganha poder e uma marca, e pode se tornar maligno.','Destruir os sarcófagos elimina os vestígios para sempre.']},

    {id:'final', num:'Parte 14', title:'O túmulo do irmão', place:'Castelo Ravenloft', chapters:['ravenloft'], level:'9–10',
      lead:'O confronto final acontece onde a carta do Violado apontou.',
      text:[
        'Desta vez ninguém foi convidado. O grupo entrou em Ravenloft com Ezmerelda, van Richten, Ismark e Ireena, armado com a Espada Solar e o Símbolo Sagrado. Primeiro subiram a escada viva da torre e destruíram o Coração da Dor, o cristal que absorvia os ferimentos do conde. Depois desceram às catacumbas, entre milhares de morcegos e criptas com epitáfios.',
        'No túmulo de Sergei, de mármore branco e anjos de pedra, Strahd chorava sobre o caixão do irmão. Levantou-se devagar. A luta foi longa: o conde surgia e sumia pelas sombras, invocava lobos e morcegos, encantava aliados. A Espada Solar queimou sua carne e o Símbolo Sagrado brilhou como o sol que Baróvia não via havia séculos.',
        'Reduzido a névoa, Strahd fugiu para o próprio túmulo, logo ao lado, onde as três noivas, [[ludmilla|Ludmilla]], [[anastrasya|Anastrasya]] e [[volenta|Volenta]], guardavam o caixão negro. O grupo abriu caminho entre elas e cravou a estaca no coração do conde. Então [[rahadin|Rahadin]] surgiu para vingar o mestre, e caiu também.'
      ],
      fios:['Ireena, a noiva desejada: o fim da perseguição.','A leitura de Madame Eva se cumpre no túmulo de Sergei.'],
      outros:['Strahd só pode ser destruído no caixão; derrubá-lo em outro lugar apenas o manda para lá.','Com outra carta, o confronto seria na capela, na biblioteca, na sala de audiências ou no alto da torre.']},

    {id:'epilogo', num:'Epílogo', title:'O primeiro amanhecer', place:'Baróvia', chapters:['abertura'],
      lead:'A névoa recua, e uma alma finalmente descansa.',
      text:[
        'Quando o coração do vampiro parou, a névoa começou a recuar. Pela primeira vez em quatro séculos, um sol de verdade nasceu sobre Baróvia.',
        'Na luz da manhã, o espírito de Sergei apareceu diante de Ireena. Desta vez ela não hesitou. Tomou a mão dele, e os dois caminharam juntos para a claridade. A alma de Tatyana estava livre.',
        '[[ismark|Ismark]] voltou à vila e se tornou burgomestre, como o pai. Os Martikov voltaram a fazer vinho, e o farol de Argynvostholt continuou aceso. Madame Eva sorriu: o irmão que ela nunca revelou estava enfim em paz. Mas os Poderes das Trevas guardam seus pactos. O livro avisa que, depois de alguns meses, Strahd pode voltar, e as brumas com ele.'
      ],
      fios:['Todas as linhas de missão se fecham.'],
      outros:['Se o grupo falhar, Strahd pode transformar Ireena em sua consorte e oferecer a um dos aventureiros o lugar de sucessor.','Os barovianos sem alma deixam de existir se saírem do vale: a liberdade não é igual para todos.']}
  ]
};
