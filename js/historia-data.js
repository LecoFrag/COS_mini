// Dados da aba "A história", extraídos de historia.js do Atlas (texto idêntico).
const HIST = {};
HIST.icons = {
  amber:'<path d="M12 2 20 7v10l-8 5-8-5V7z"/><path d="M12 2v20M4 7l16 10M20 7 4 17" opacity=".45"/>',
  stones:'<path d="M3 21h18"/><path d="M5 21V9l2-3 2 3v12M11 21V6l2-3 2 3v15M17 21v-9l2-2 1 2v9"/>',
  dragon:'<path d="M3 15c3-1 5-4 6-8 1 3 3 5 6 5l6-3-2 5 2 3-6-1c-3 2-7 3-12-1z"/>',
  cradle:'<path d="M16 3a8 8 0 1 0 5 12A7 7 0 0 1 16 3z"/><circle cx="8" cy="9" r="1"/>',
  crown:'<path d="m3 8 4 4 5-7 5 7 4-4-2 11H5z"/><path d="M5 19h14"/>',
  sword:'<path d="m14 4 6-1-1 6-9 9-5-5z"/><path d="m5 13-2 2 6 6 2-2M4 20l3-3"/>',
  shield:'<path d="M12 3 20 6v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/><path d="M8 12c2-1 3-3 4-5 1 2 2 4 4 5-2 1-3 3-4 5-1-2-2-4-4-5z"/>',
  castle:'<path d="M3 21V9h3V6h2v3h2V4l2-2 2 2v5h2V6h2v3h3v12z"/><path d="M10 21v-4a2 2 0 0 1 4 0v4"/>',
  rose:'<circle cx="12" cy="8" r="5"/><path d="M12 13v8M12 17c-3 0-4-2-5-3M12 19c2 0 4-1 5-3"/><path d="M10 7c1-2 3-2 4 0" opacity=".6"/>',
  arrow:'<path d="M4 20 20 4M20 4h-6M20 4v6M4 20l2-5M4 20l5-2"/>',
  sunsword:'<circle cx="17" cy="7" r="3"/><path d="M17 1v2M23 7h-2M21 3l-1 1M14.5 9.5 3 21"/><path d="m6 15 3 3"/>',
  stone:'<path d="M4 16c0-5 3-9 8-9s8 4 8 9c0 3-3 4-8 4s-8-1-8-4z"/><path d="M9 11l2 3 3-2"/>',
  cards:'<rect x="3" y="5" width="11" height="15" rx="1.5" transform="rotate(-8 8 12)"/><rect x="10" y="4" width="11" height="15" rx="1.5" transform="rotate(8 15 11)"/><path d="m15 9 1 2 2 .3-1.5 1.4.4 2-1.9-1-1.9 1 .4-2L12 11.3l2-.3z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  drop:'<path d="M12 2c4 6 7 9 7 13a7 7 0 0 1-14 0c0-4 3-7 7-13z"/>',
  wave:'<path d="M2 8c3-3 5 3 8 0s5-3 8 0 3 1 4 0M2 14c3-3 5 3 8 0s5-3 8 0 3 1 4 0M2 20c3-3 5 3 8 0s5-3 8 0 3 1 4 0"/>',
  wing:'<path d="M3 20c2-8 7-14 18-16-2 5-5 7-8 8 2 0 4 0 6-1-2 4-6 7-12 7"/><path d="M3 20l8-8"/>',
  stake:'<path d="M12 2 9 22h6z"/><path d="M8 7h8"/>',
  mist:'<path d="M3 9h13a3 3 0 1 0-3-3M3 14h17a3 3 0 1 1-3 3M5 19h6"/>',
  eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  soul:'<path d="M12 21c-5-3-8-6-8-10a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 4-3 7-8 10z"/>',
  book:'<path d="M4 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H4z"/><path d="M20 4h-6a3 3 0 0 0-3 3"/><path d="M20 4v15h-6"/><path d="M7 9h4M7 12h4" opacity=".6"/>',
  skull:'<path d="M5 11a7 7 0 1 1 14 0v4h-3v3H8v-3H5z"/><circle cx="9" cy="11" r="1.5"/><circle cx="15" cy="11" r="1.5"/>'
};
HIST.eras = [
  {id:'antigo', num:'I', title:'Antes do nome', sub:'O vale de Balinok já guardava segredos mais velhos que Strahd.'},
  {id:'casa', num:'II', title:'A casa de Barov', sub:'Um rei guerreiro, dois filhos e uma filha que ninguém conhece.'},
  {id:'conquista', num:'III', title:'A conquista', sub:'O vale ganha um senhor, um nome e muitos mortos.'},
  {id:'pacto', num:'IV', title:'O pacto', sub:'Imortalidade prometida, amor recusado.'},
  {id:'noite', num:'V', title:'A noite do casamento', sub:'O dia em que Baróvia deixou o mundo.'},
  {id:'seculos', num:'VI', title:'Os séculos de névoa', sub:'Cerca de quatrocentos anos de prisão, ecos e tentativas de resistência.'},
  {id:'agora', num:'VII', title:'O presente', sub:'O que está em movimento quando os aventureiros chegam.'}
];
HIST.events = [
  {era:'antigo', when:'Há mais de 2.000 anos', title:'O Templo Âmbar', icon:'amber', tone:'amber', chapter:'templo',
    lead:'Magos erguem nas montanhas uma cripta para aprisionar o mal.',
    text:['Uma sociedade secreta de magos bem-intencionados constrói o Templo Âmbar nas montanhas Balinok para conter vestígios de deuses mortos: fragmentos de mal consciente presos em sarcófagos de âmbar.','Muito depois, com os magos já desaparecidos, o arquimago Exethanter rompe as defesas, aprende com um vestígio a se tornar lich e passa a guardar o templo não para esconder seus segredos, mas para compartilhá-los.'],
    people:['exethanter']},
  {era:'antigo', when:'Séculos antes de Strahd', title:'Deuses antigos, reis bárbaros', icon:'stones', tone:'mist', chapter:'yester',
    lead:'O vale já tinha fé, lendas e sangue.',
    text:['Os primeiros habitantes erguem pedras que lembram as Quatro Cidades, morada lendária do Senhor da Alvorada, da Mãe Noite e de outros deuses antigos. Essas duas divindades ainda organizam a fé baroviana: uma promete o amanhecer; a outra, segundo o povo, abandonou o vale.','Nas montanhas, Kavan, chefe impiedoso da tribo Jived, dorme de dia, caça à noite e bebe o sangue das presas. Sua arma é a primeira lança de sangue.'],
    people:['kavan']},
  {era:'antigo', when:'Antes da guerra', title:'Um dragão entre os homens', icon:'dragon', tone:'silver', chapter:'argynvostholt',
    lead:'Argynvost se instala no vale para vigiar o Templo Âmbar.',
    text:['Um dragão de prata, disfarçado de nobre sob o nome de Lorde Argynvost, constrói a mansão fortificada de Argynvostholt para garantir que nada escape do Templo Âmbar.','Com sua riqueza, atrai campeões do bem e funda a Ordem do Dragão de Prata. Só os iniciados conhecem a verdadeira natureza de seu senhor.'],
    people:['argynvost','vladimir','godfrey']},

  {era:'casa', when:'O nascimento de Strahd', title:'Duas mães', icon:'cradle', tone:'night', chapter:'berez',
    lead:'A rainha dá à luz; a parteira passa a acreditar que o menino é dela.',
    text:['Strahd nasce da rainha Ravenovia van Roeyen. A parteira real, Baba Lysaga, devota da Mãe Noite, sente no bebê um potencial de grandeza e escuridão. Canta rimas mágicas junto ao berço e desperta nele a “faísca da magia”.','Diante de relatos perturbadores, Ravenovia bane a parteira do reino. Lysaga nunca mais vê Strahd, mas oferece sacrifícios à Mãe Noite pedindo doença e morte para a rainha. Ainda hoje acredita ser a verdadeira mãe dele.'],
    people:['ravenovia','baba','strahd']},
  {era:'casa', when:'As cruzadas de Barov', title:'O rei e seus filhos', icon:'crown', tone:'gold', chapter:'ravenloft',
    lead:'Guerras, um aliado élfico e uma filha escondida.',
    text:['O rei Barov passa a vida em campanhas. Rahadin, elfo das sombras exilado, o ajuda a esmagar o reino de seu próprio povo; em troca, Barov o torna membro honorário da família.','Numa dessas cruzadas, Barov tem uma filha com uma mulher Vistana: Katarina, a futura Madame Eva. Ela sabe quem é o pai. Strahd nunca soube que tinha uma irmã.','Ravenovia mantém o caçula, Sergei, longe do campo de batalha, e Strahd, o primogênito soldado, cresce invejando esse afeto. Numa guerra, gravemente ferido, é salvo pelos Vistani, que nada pedem em troca. É uma dívida que ele ainda honra.'],
    people:['barov','rahadin','eva','sergei','strahd']},

  {era:'conquista', when:'Após a morte de Barov', title:'A conquista do vale', icon:'sword', tone:'blood', chapter:'terras',
    lead:'Strahd massacra os últimos inimigos da família e batiza a terra de Baróvia.',
    text:['Com o pai morto, Strahd trava guerras longas e sangrentas contra os inimigos da família e encurrala os últimos deles num vale remoto entre montanhas. Mata todos. Impressionado com a beleza do lugar, decide ficar e o chama de Baróvia, em honra ao rei morto.','Pouco depois, um antepassado dos Vallakovich funda Vallaki. A família ainda se julga de sangue nobre.'],
    people:['strahd','vargas']},
  {era:'conquista', when:'Durante a guerra', title:'A queda do Dragão de Prata', icon:'shield', tone:'silver', chapter:'argynvostholt',
    lead:'A Ordem abriga os inimigos de Strahd e é aniquilada.',
    text:['A Ordem do Dragão de Prata protege os inimigos de Strahd e vence as primeiras batalhas. Depois, os reforços do conde varrem o vale, matam o último cavaleiro e cercam Argynvost em sua própria mansão.','Strahd despoja o dragão até os ossos e leva o esqueleto a Ravenloft como troféu. A fúria de Vladimir Horngaard, o maior dos cavaleiros, faz com que ele volte como ressurgido e traga outros consigo. Por meses, eles matam centenas de soldados de Strahd.'],
    people:['argynvost','vladimir','godfrey','strahd']},

  {era:'pacto', when:'A paz inquieta', title:'Patrina e o segredo do âmbar', icon:'amber', tone:'amber', chapter:'templo',
    lead:'Uma elfa das sombras oferece a Strahd aquilo que ele mais deseja.',
    text:['A paz deixa Strahd inquieto: ele sente que os melhores anos ficaram para trás. Recusa o caminho do pai e passa a estudar magia.','Patrina Velikovna, elfa das sombras, conta-lhe a lenda do Templo Âmbar, onde estaria o segredo da imortalidade. Strahd vai até lá, comunga com um vestígio ainda mais sombrio que os demais e firma um pacto com os Poderes das Trevas. Rahadin desconfia de Patrina desde o primeiro dia.'],
    people:['patrina','strahd','rahadin','exethanter']},
  {era:'pacto', when:'A construção', title:'Um castelo com o nome da mãe', icon:'castle', tone:'gold', chapter:'ravenloft',
    lead:'Ravenloft é erguido; a rainha nunca chega a vê-lo.',
    text:['Strahd reúne magos e artesãos das terras conquistadas e ergue um castelo capaz de rivalizar com as fortalezas da pátria ancestral. Para demonstrar seu amor pela mãe, dá a ele o nome dela: Ravenloft.','Ele convoca Ravenovia e Sergei. Sergei passa a morar no castelo, mas a rainha morre durante a viagem. Strahd sela o corpo da mãe numa cripta sob Ravenloft.'],
    people:['ravenovia','sergei','strahd']},
  {era:'pacto', when:'Na corte de Ravenloft', title:'Tatyana', icon:'rose', tone:'rose', chapter:'ravenloft',
    lead:'Strahd escolhe uma noiva. Ela escolhe Sergei.',
    text:['Tatyana, jovem baroviana de linhagem fina e beleza notável, atrai a atenção de Strahd, que a cobre de presentes. Mas ela se apaixona pelo irmão mais novo, mais afetuoso. Rahadin aproveita para dispensar Patrina do castelo.','A corte ainda tem alguma luz: a duquesa Dorfniya Dilisnya visita o castelo com o bobo Pidlwick, que encanta Sergei e Tatyana. Entre os criados está uma jovem chamada Katarina, a meia-irmã que Strahd desconhece.','O orgulho impede Strahd de atrapalhar o romance. Até o dia do casamento.'],
    people:['tatyana','sergei','strahd','patrina','dorfniya','pidlwick','eva']},

  {era:'noite', special:'noite'},

  {era:'seculos', when:'Logo depois', title:'Os primeiros ecos', icon:'arrow', tone:'mist', chapter:'argynvostholt',
    lead:'Os traidores são caçados; os cavaleiros mortos recuam.',
    text:['Leo Dilisnya, um dos guardas que atiraram em Strahd, foge de Ravenloft, mas é caçado e morto pelo vampiro. Os Wachter guardam seus ossos trancados para que ele nunca seja reerguido.','Os ressurgidos de Vladimir, que deveriam descansar, marcham até o castelo. Katarina os encontra e diz que Strahd já morreu: agora é prisioneiro da própria terra, atormentado por Tatyana e por Sergei. Vladimir recua para Argynvostholt. Desde então, seus cavaleiros matam quem possa aliviar esse tormento e, nesse ódio, perderam a própria honra.'],
    people:['leo','vladimir','eva']},
  {era:'seculos', when:'Logo depois', title:'A Espada Solar desmontada', icon:'sunsword', tone:'sun', chapter:'torre',
    lead:'Strahd manda destruir a lâmina do irmão.',
    text:['A espada de Sergei tinha punho de platina e lâmina de cristal. Strahd encarrega o arquimago Khazan de destruí-la. Khazan separa punho e lâmina, mas o aprendiz foge com o punho e depois é encontrado morto nos Bosques de Svalich, sem ele.','Para escapar da ira do vampiro, Khazan diz que a arma foi inteiramente destruída. O punho, senciente, continua existindo e deseja vingança.'],
    people:['khazan','sergei']},
  {era:'seculos', when:'Logo depois', title:'Patrina é apedrejada', icon:'stone', tone:'blood', chapter:'vallaki',
    lead:'Seu próprio povo a mata para que Strahd não a tome como esposa.',
    text:['Ao saber da maldição, Patrina volta a Ravenloft desejando o poder de Strahd. Antes que ele a torne esposa, os elfos das sombras a condenam à morte. O apedrejamento é orquestrado por seu próprio irmão, Kasimir.','Furioso, Strahd sepulta Patrina nas criptas e envia Rahadin: todas as elfas são mortas, para que o clã nunca mais se reproduza, e Kasimir perde as orelhas. Hoje ele procura o Templo Âmbar para trazer a irmã de volta.'],
    people:['patrina','kasimir','rahadin','strahd']},
  {era:'seculos', when:'Depois da tragédia', title:'Katarina se torna Madame Eva', icon:'cards', tone:'night', chapter:'abertura',
    lead:'A meia-irmã troca a juventude por clarividência.',
    text:['Katarina foge do castelo e se refugia entre os Vistani. Faz um pacto com a Mãe Noite: entrega a juventude em troca do poder de desfazer o mal que Strahd causou. Torna-se uma anciã sem idade, dotada de visão mágica.','Seu desejo é ver Strahd livre da maldição. Suas carroças atravessam as brumas e trazem aventureiros de outros mundos, na esperança de que eles o destruam ou o libertem. Os Poderes Sombrios a consideram digna de substituí-lo, mas ela não quer esse lugar.'],
    people:['eva','strahd']},
  {era:'seculos', when:'Após a transformação', title:'Santa Markóvia desafia o vampiro', icon:'sun', tone:'sun', chapter:'krezk',
    lead:'A sacerdotisa do Senhor da Alvorada invade Ravenloft e não volta.',
    text:['Markóvia destrói, um a um, os vampiros enviados à sua abadia e marcha contra o castelo. A batalha vai das catacumbas aos parapeitos. Ela nunca mais é vista. Desde então, Strahd manca e carrega uma careta de dor.','Dizem que ela jaz numa cripta sob Ravenloft. Sem ela, a abadia de Krezk se isola, cai na fome e na loucura e acaba abandonada.'],
    people:['markovia','strahd']},
  {era:'seculos', when:'Ao longo dos séculos', title:'Noivas, consortes e almas vazias', icon:'drop', tone:'blood', chapter:'ravenloft',
    lead:'Nenhuma substitui Tatyana. Todas se tornam crias vampíricas.',
    text:['Rahadin atrai mulheres ao castelo para tirar Tatyana da mente de seu mestre. Strahd toma várias consortes e transforma todas em crias vampíricas; algumas ainda vivem em Ravenloft.','O vale se enche de desalmados, pessoas sem alma que existem para povoar a terra de Strahd. Ele só consegue se alimentar de quem tem alma. De tempos em tempos, as brumas trazem estranhos para um jogo de gato e rato.'],
    people:['escher','ludmilla','anastrasya','volenta','sasha','rahadin']},
  {era:'seculos', when:'Muito antes de Ireena', title:'Marina e o afogamento de Berez', icon:'wave', tone:'water', chapter:'berez',
    lead:'A alma de Tatyana volta, e uma vila inteira paga o preço.',
    text:['Em Berez, às margens do rio Luna, Strahd encontra Marina, igual a Tatyana no rosto e nos modos. Ele a seduz e se alimenta dela. Antes que ela se torne sua cria, o burgomestre Lazlo Ulrich e o Irmão Grigor a matam para salvar sua alma.','Strahd mata os dois e faz o rio transbordar sobre a vila. Berez vira pântano e ruína; hoje é o lar de Baba Lysaga.'],
    people:['marina','lazlo','grigor','baba']},
  {era:'seculos', when:'Há mais de um século', title:'Um anjo chega a Krezk', icon:'wing', tone:'silver', chapter:'krezk',
    lead:'O Abade reabre a abadia e começa a cair.',
    text:['Um deva enviado dos Planos Superiores para honrar o legado de Markóvia reabre a abadia e passa a cuidar dos doentes. Ao tentar “aperfeiçoar” a família Belview, aceita a ajuda de um nobre chamado Vasili von Holtz, que depois revela ser Strahd. Juntos, transformam os Belview em párias.','Convencido de que vai curar a “doença” do conde ao reuni-lo com o amor perdido, o Abade costura uma noiva feita de carne: Vasilka.'],
    people:['abbot','vasilka','strahd']},

  {era:'agora', when:'Longe de Baróvia', title:'A tragédia de van Richten', icon:'stake', tone:'mist', chapter:'torre',
    lead:'Um médico perde tudo para os vampiros e se torna caçador.',
    text:['Em Darkon, o estudioso Rudolph van Richten vive com Ingrid e o filho Erasmus. Aos catorze anos, Erasmus é raptado por Vistani e vendido ao vampiro Barão Metus, que o transforma em cria. A pedido do próprio filho, Rudolph lhe crava uma estaca. Metus se vinga matando Ingrid.','Ezmerelda d’Avenir, uma menina da família dos raptores, vê van Richten poupar seus pais. Anos depois, foge de casa, encontra o caçador e se torna sua pupila.'],
    people:['vanrichten','erasmus','ingrid','metus','ezmerelda']},
  {era:'agora', when:'Anos recentes', title:'Uma menina nos Bosques de Svalich', icon:'rose', tone:'rose', chapter:'vila',
    lead:'Kolyan adota uma criança sem passado.',
    text:['O burgomestre Kolyan Indirovich encontra uma menina perto dos Bosques de Svalich e a cria como filha. Ela é Ireena Kolyana, irmã adotiva de Ismark, e não se lembra da infância anterior à adoção.','Um dia, Strahd a vê na vila e sente um déjà vu intenso: ela é idêntica a Tatyana. Para ele, Ireena é a nova morada da mesma alma.'],
    people:['kolyan','ireena','ismark','strahd']},
  {era:'agora', when:'Semanas antes', title:'Duas mordidas', icon:'drop', tone:'blood', chapter:'vila',
    lead:'Strahd visita Ireena duas vezes. Na próxima, pretende transformá-la.',
    text:['Strahd encanta a entrada da casa do burgomestre e bebe o sangue de Ireena duas vezes. Os ataques à mansão se repetem por semanas, e Kolyan morre.','Ismark, sem forças para enfrentar o conde, procura ajuda na taverna Sangue da Videira. Enquanto isso, van Richten se esconde em Vallaki como Rictavio, e Ezmerelda percorre o vale atrás do mentor.'],
    people:['ireena','ismark','kolyan','vanrichten','ezmerelda']},
  {era:'agora', when:'Agora', title:'As brumas se abrem', icon:'mist', tone:'gold', chapter:'abertura',
    lead:'Sangue novo entra no vale.',
    text:['Strahd percebe a chegada dos estrangeiros. Deixa Ireena e van Richten de lado por um momento para testá-los: procura um sucessor, uma consorte ou apenas uma distração.','Madame Eva espera com as cartas. Daqui em diante, a história pertence à mesa.'],
    people:['strahd','eva']}
];
HIST.nightSteps = [
  {t:'O espelho', d:'No dia do casamento de Sergei e Tatyana, Strahd se olha no espelho e percebe que foi um tolo.'},
  {t:'Sangue de irmão', d:'Strahd mata Sergei e bebe seu sangue. O pacto firmado no Templo Âmbar é selado.'},
  {t:'Pelos jardins', d:'Ele persegue a noiva do irmão pelos jardins, decidido a obrigá-la a aceitá-lo e amá-lo.'},
  {t:'A varanda', d:'Para escapar, Tatyana se atira de uma varanda do castelo e morre na queda.'},
  {t:'As flechas', d:'Guardas desleais, entre eles Leo Dilisnya, veem a chance de livrar o mundo de Strahd e disparam contra ele.'},
  {t:'Olhos vermelhos', d:'Strahd não morre. O céu escurece e seus olhos ardem em vermelho: ele se tornou vampiro. Mata os guardas e vê, nas nuvens, os rostos do pai e da mãe julgando o que fez.'},
  {t:'As brumas', d:'O castelo e o vale são arrancados do mundo e presos num semiplano cercado por névoa mortal. Para Strahd e seu povo, não haverá saída.'}
];
HIST.trees = {
  zarovich:{
    label:'Casa von Zarovich', lead:'Sangue, desejo e a alma que Strahd persegue.',
    nodes:[
      {k:'rahadin', x:90, y:330, sub:'Membro honorário da família', note:'Elfo das sombras exilado. Ajudou Barov a conquistar seu próprio povo e foi adotado como “membro honorário” da família. Serve os von Zarovich há quase quinhentos anos e hoje é o mordomo de Ravenloft.'},
      {k:'vistana', ghost:true, name:'Mulher Vistana', x:265, y:95, sub:'Mãe de Katarina', note:'Uma mulher Vistana com quem o rei Barov teve uma filha durante uma de suas cruzadas. O livro não informa seu nome.'},
      {k:'barov', x:445, y:95, sub:'Rei · o pai', note:'Rei guerreiro. Sua morte dá início às guerras de Strahd, e é em sua honra que o vale recebe o nome de Baróvia.'},
      {k:'ravenovia', x:640, y:95, sub:'Rainha · a mãe', note:'Mantém Sergei longe da guerra e teme a frieza de Strahd. O castelo recebe seu nome, mas ela morre a caminho dele. Seu corpo está selado sob Ravenloft.'},
      {k:'baba', x:880, y:95, sub:'Parteira · “a outra mãe”', note:'Parteira de Ravenovia, devota da Mãe Noite. Desperta a magia em Strahd bebê, é banida e passa séculos acreditando ser a verdadeira mãe dele.'},
      {k:'eva', x:265, y:330, sub:'Katarina · meia-irmã oculta', note:'Filha de Barov com uma mulher Vistana. Serviu como criada em Ravenloft, presenciou o casamento e, depois, pelo pacto com a Mãe Noite, tornou-se Madame Eva. Strahd não sabe que ela é sua irmã.'},
      {k:'strahd', x:470, y:330, main:true, sub:'O primogênito · vampiro', note:'Soldado, conquistador, mago e, desde a noite do casamento, vampiro e prisioneiro de Baróvia. Acredita que a alma de Tatyana lhe pertence.'},
      {k:'sergei', x:680, y:330, sub:'O caçula', note:'O irmão mais novo e mais afetuoso. Noivo de Tatyana, é assassinado por Strahd no dia do casamento. Sua espada deu origem à Espada Solar.'},
      {k:'tatyana', x:885, y:330, sub:'Noiva de Sergei', note:'Amou Sergei e rejeitou Strahd. Atirou-se de uma varanda de Ravenloft na noite do casamento. Sua alma retorna em outras vidas.'},
      {k:'patrina', x:120, y:560, sub:'Pretendente élfica', note:'Elfa das sombras que revelou a Strahd o Templo Âmbar. Queria seu poder e foi apedrejada pelo próprio povo antes de se tornar sua esposa.'},
      {k:'consortes', group:['escher','ludmilla','anastrasya','volenta','sasha'], name:'Noivas e consortes', x:410, y:560, sub:'Crias vampíricas', note:'Nenhuma substituiu Tatyana. Strahd transformou todas as consortes em crias vampíricas; várias ainda estão em Ravenloft.'},
      {k:'marina', x:720, y:560, sub:'Reencarnação passada', note:'Viveu em Berez muito antes de Ireena. Foi morta pelos próprios protetores para não se tornar cria de Strahd; a vila foi afogada em vingança.'},
      {k:'ireena', x:900, y:560, sub:'Reencarnação atual', note:'Filha adotiva de Kolyan. Idêntica a Tatyana, já foi mordida duas vezes. É o centro do desejo atual de Strahd.'}
    ],
    families:[{parents:['barov','ravenovia'], children:['strahd','sergei']},{parents:['vistana','barov'], children:['eva'], faint:true}],
    edges:[
      {a:'barov', b:'ravenovia', type:'marriage'},
      {a:'vistana', b:'barov', type:'affair'},
      {a:'rahadin', b:'barov', type:'bond', label:'família honorária', bend:-100},
      {a:'baba', b:'strahd', type:'bond', label:'parteira obcecada', bend:120},
      {a:'strahd', b:'sergei', type:'kill', label:'matou o irmão', bend:95},
      {a:'sergei', b:'tatyana', type:'love', label:'noivos'},
      {a:'strahd', b:'tatyana', type:'desire', label:'desejo', bend:190},
      {a:'eva', b:'strahd', type:'secret', label:'irmã desconhecida', bend:-80},
      {a:'patrina', b:'strahd', type:'desire', label:'pretendente'},
      {a:'strahd', b:'consortes', type:'bond', label:'transformou'},
      {a:'tatyana', b:'marina', type:'soul', label:'mesma alma'},
      {a:'marina', b:'ireena', type:'soul', label:'mesma alma'}
    ]
  },
  martikov:{
    label:'Martikov · Guardiões da Pena', lead:'A família de homens-corvo que resiste em segredo.',
    nodes:[
      {k:'davian', x:420, y:95, main:true, sub:'Patriarca · Mago dos Vinhos', note:'Administra a vinícola Mago dos Vinhos e lidera a família. Todos os Martikov são homens-corvo e membros dos Guardiões da Pena, a sociedade secreta que espiona e resiste a Strahd.'},
      {k:'adrian', x:90, y:330, sub:'Filho · vinícola', note:'Filho de Davian. Trabalha na vinícola da família.'},
      {k:'elvir', x:250, y:330, sub:'Filho · vinícola', note:'Filho de Davian. Trabalha na vinícola da família.'},
      {k:'stefania', x:420, y:330, sub:'Filha', note:'Filha de Davian. Vive na vinícola com o marido Dag e os quatro filhos.'},
      {k:'dag', x:570, y:330, sub:'Marido de Stefania', note:'Homem-corvo casado com Stefania; membro dos Guardiões da Pena.'},
      {k:'urwin', x:745, y:330, sub:'Filho afastado · Vallaki', note:'Dono da Estalagem Água Azul, em Vallaki, e membro de alto escalão dos Guardiões da Pena. Está afastado do pai.'},
      {k:'danika', x:905, y:330, sub:'Esposa de Urwin', note:'Sócia e esposa de Urwin, também mulher-corvo.'},
      {k:'claudiu', x:330, y:560, sub:'Neto', note:'Filho adolescente de Stefania e Dag.'},
      {k:'martin', x:440, y:560, sub:'Neto', note:'Filho de Stefania e Dag.'},
      {k:'viggo', x:550, y:560, sub:'Neto', note:'Filho de Stefania e Dag.'},
      {k:'yolanda', x:660, y:560, sub:'Neta', note:'Filha de Stefania e Dag; ainda não consegue mudar de forma.'},
      {k:'brom', x:790, y:560, sub:'Neto · criança', note:'Filho de Urwin e Danika. Homem-corvo, jovem demais para lutar.'},
      {k:'bray', x:915, y:560, sub:'Neto · criança', note:'Filho de Urwin e Danika. Homem-corvo, jovem demais para lutar.'}
    ],
    families:[{parents:['davian'], children:['adrian','elvir','stefania','urwin']},{parents:['stefania','dag'], children:['claudiu','martin','viggo','yolanda']},{parents:['urwin','danika'], children:['brom','bray']}],
    edges:[
      {a:'stefania', b:'dag', type:'marriage'},
      {a:'urwin', b:'danika', type:'marriage'},
      {a:'davian', b:'urwin', type:'rift', label:'afastados', bend:-70}
    ]
  },
  richten:{
    label:'Van Richten', lead:'A perda que criou o maior caçador de vampiros.',
    nodes:[
      {k:'vistani', ghost:true, name:'Família d’Avenir', x:110, y:95, sub:'Vistani raptores', note:'A família de Ezmerelda raptou Erasmus e o vendeu. Van Richten os encontrou, interrogou e poupou.'},
      {k:'vanrichten', x:400, y:95, main:true, sub:'Médico · caçador', note:'Estudioso de Darkon. Depois de perder filho e esposa, passou a vida caçando monstros. Veio a Baróvia para matar Strahd e se esconde em Vallaki como Rictavio. Strahd, por sua vez, quer capturá-lo e quebrar seu espírito.'},
      {k:'ingrid', x:640, y:95, sub:'Esposa', note:'Amor de infância de Rudolph. Foi morta pelo Barão Metus como vingança.'},
      {k:'erasmus', x:520, y:330, sub:'Filho', note:'Raptado aos catorze anos por Vistani e vendido ao Barão Metus, que o transformou em cria vampírica. Implorou ao pai que o libertasse.'},
      {k:'metus', x:850, y:330, sub:'Vampiro', note:'Vampiro que comprou Erasmus. Matou Ingrid em vingança e depois foi destruído por van Richten.'},
      {k:'ezmerelda', x:260, y:560, sub:'Pupila', note:'Ainda criança na família dos raptores, viu van Richten poupar seus pais. Fugiu aos quinze anos, encontrou-o e tornou-se sua pupila. Agora o procura em Baróvia.'}
    ],
    families:[{parents:['vanrichten','ingrid'], children:['erasmus']}],
    edges:[
      {a:'vanrichten', b:'ingrid', type:'marriage'},
      {a:'vistani', b:'erasmus', type:'kill', label:'raptaram'},
      {a:'vanrichten', b:'erasmus', type:'kill', label:'estaca, a pedido', bend:-40},
      {a:'metus', b:'erasmus', type:'kill', label:'transformou'},
      {a:'metus', b:'ingrid', type:'kill', label:'matou'},
      {a:'vanrichten', b:'metus', type:'kill', label:'destruiu', bend:-60},
      {a:'ezmerelda', b:'vistani', type:'bond', label:'família'},
      {a:'ezmerelda', b:'vanrichten', type:'bond', label:'pupila'}
    ]
  }
};
HIST.edgeLegend = [['marriage','casamento'],['love','amor'],['desire','desejo / obsessão'],['kill','violência'],['soul','mesma alma'],['secret','segredo'],['bond','vínculo'],['rift','ruptura']];
HIST.board = [
  {id:'ireena', side:'alvo', a:90, r:1.0, rel:'persegue', want:'Quer sobreviver e decidir o próprio destino. Strahd pretende transformá-la na próxima visita.'},
  {id:'rahadin', side:'serve', a:160, rel:'mordomo', want:'Lealdade absoluta. Faria qualquer coisa por Strahd, inclusive morrer.'},
  {id:'escher', side:'serve', a:185, rel:'consorte', want:'Consorte vampírico que teme perder o favor do mestre.'},
  {id:'baba', side:'serve', a:210, rel:'“mãe”', want:'Caça os homens-corvo que espionam seu “filho”, de longe, sem nunca encará-lo.'},
  {id:'arrigal', side:'serve', a:235, rel:'agente', want:'Vistana que trabalha para Strahd dentro do acampamento de Vallaki.'},
  {id:'fiona', side:'serve', a:135, rel:'simpatizante', want:'Quer tomar Vallaki do barão e simpatiza abertamente com o conde.'},
  {id:'eva', side:'ambiguo', a:262, rel:'irmã oculta', want:'Quer Strahd livre da maldição, seja pela morte, seja por um sucessor. Os aventureiros são apenas um meio.'},
  {id:'abbot', side:'ambiguo', a:288, rel:'quer “curá-lo”', want:'Acredita que uma noiva perfeita curará Strahd e Baróvia. Strahd apenas se diverte corrompendo um anjo.'},
  {id:'vladimir', side:'ambiguo', a:314, rel:'ódio', want:'Odeia Strahd, mas não quer que o tormento dele termine. Por isso não o enfrenta.'},
  {id:'kasimir', side:'ambiguo', a:340, rel:'Templo Âmbar', want:'Busca no Templo Âmbar um meio de trazer Patrina de volta à vida.'},
  {id:'vanrichten', side:'contra', a:8, rel:'caçador', want:'Espera o momento certo, disfarçado de Rictavio em Vallaki.'},
  {id:'ezmerelda', side:'contra', a:32, rel:'caçadora', want:'Procura o mentor e quer enfrentar Strahd.'},
  {id:'urwin', side:'contra', a:56, rel:'Guardiões da Pena', want:'Os homens-corvo espionam Strahd e ajudam em segredo quem prova ser capaz.'},
  {id:'ismark', side:'contra', a:112, rel:'protege Ireena', want:'Quer levar a irmã para um lugar seguro, mas não tem forças para enfrentar o conde sozinho.'}
];
HIST.sides = {serve:'Servem ou apoiam Strahd', contra:'Querem detê-lo', ambiguo:'Agendas ambíguas', alvo:'O alvo'};
HIST.rules = [
  {icon:'mist', t:'As brumas', d:'Baróvia existe num semiplano formado pela consciência de Strahd. Ninguém sai sem a permissão dele; quem tenta se perde na névoa.'},
  {icon:'soul', t:'Os desalmados', d:'Muitos barovianos não têm alma: são criações do domínio, apáticas, que não riem nem choram. Ireena e Ismark têm alma. Strahd só se alimenta de quem tem.'},
  {icon:'cards', t:'Os Vistani', d:'Strahd permite que entrem e saiam livremente: eles o curaram quando era soldado e ele admira sua paixão pela vida. Suas “poções para atravessar as brumas” são falsas.'},
  {icon:'sun', t:'Dois deuses', d:'O Senhor da Alvorada promete o amanhecer, mas quase não responde. Da Mãe Noite, o povo acredita que abandonou o vale e mandou “o diabo Strahd” para puni-lo.'},
  {icon:'eye', t:'Sangue novo', d:'Strahd pressente estrangeiros. Testa-os em busca de um sucessor digno, mas sua arrogância o impede de reconhecer alguém à sua altura.'},
  {icon:'skull', t:'Uma morte que não basta', d:'Os Poderes das Trevas honram o pacto. Se Strahd for destruído, o livro prevê que pode voltar após alguns meses, e as brumas retornam com ele.'}
];
HIST.relics = [
  {icon:'book', t:'Memorial de Strahd', d:'Escrito pelo próprio Strahd, conta como ele chegou à queda. Se o conde souber que o livro está com o grupo, recuperá-lo passa a ser sua prioridade.'},
  {icon:'sun', t:'Símbolo Sagrado do Corvo-Bondoso', d:'Amuleto de platina em forma de sol, anterior a qualquer igreja de Baróvia. Segundo a lenda, foi entregue à paladina Lugdana por um corvo gigante, ou por um anjo em forma de corvo.'},
  {icon:'sunsword', t:'Espada Solar', d:'O punho de platina da espada de Sergei, que escapou da destruição ordenada a Khazan. É senciente e quer se vingar de Strahd pela lâmina de cristal perdida.'}
];

// Etapas e linhas de missão do "Mapa da campanha", extraídas de campanha.js do Atlas.
const CAMP = {};
CAMP.stages = [
  {id:'inicio', label:'Chegada', level:'1–3', chapters:['abertura','casa','vila','terras'],
    text:'As brumas trazem o grupo. A Casa da Morte é uma abertura opcional; na vila de Baróvia, Ismark pede ajuda para proteger Ireena. A estrada leva ao acampamento do Lago Tser, onde Madame Eva lê as cartas e espalha os objetivos pelo vale.'},
  {id:'vallaki', label:'O vale se abre', level:'4', chapters:['vallaki','moedor'],
    text:'Vallaki é o centro da campanha: quase toda linha de missão passa por ela. No caminho, o Velho Moedor de Ossos liga os pastéis de sonho às crianças desaparecidas.'},
  {id:'oeste', label:'Rumo ao oeste', level:'5', chapters:['vinhos','krezk'],
    text:'A vinícola dos Martikov precisa ser retomada e o vinho abre as portas de Krezk, onde o Abade prepara uma noiva para Strahd e o poço sagrado pode decidir o destino de Ireena.'},
  {id:'segredos', label:'Aliados e segredos', level:'6–7', chapters:['torre','yester','argynvostholt','lobos'],
    text:'Van Richten, a Ordem do Dragão de Prata e os lobisomens: aliados em potencial, cada um com uma condição. Na Colina Yester, os druidas preparam um ritual para Strahd.'},
  {id:'confins', label:'Os confins', level:'8', chapters:['tsolenka','berez'],
    text:'A passagem gelada leva ao Templo Âmbar; o pântano de Berez esconde Baba Lysaga e a última gema da vinícola.'},
  {id:'final', label:'O coração das trevas', level:'9', chapters:['templo','ravenloft'],
    text:'O Templo Âmbar guarda a origem do pacto de Strahd. O Castelo Ravenloft pode ser visitado a qualquer momento pelo convite do conde, mas o confronto final acontece onde a tarokka indicou.'}
];
CAMP.threads = [
  {id:'ireena', color:'#e0716a', label:'Ireena, a noiva desejada', text:'Strahd quer Ireena como consorte. Protegê-la leva o grupo pelo vale inteiro.',
    steps:[['vila','Ismark pede ajuda; Ireena só parte depois do enterro de Kolyan.'],['terras','A caminho de Vallaki, o acampamento do Lago Tser e Madame Eva.'],['vallaki','Refúgio possível; Izek Strazni, capitão da guarda, é o irmão que ela não conhece.'],['krezk','No poço abençoado da abadia, Sergei pode aparecer e chamá-la de Tatyana.'],['ravenloft','O conde pretende transformá-la na próxima visita.']]},
  {id:'tarokka', color:'#d3a874', label:'A leitura de Madame Eva', text:'As cartas espalham os três tesouros e o aliado por capítulos diferentes e marcam o local do confronto no castelo.',
    steps:[['terras','Madame Eva lê as cartas no acampamento do Lago Tser.'],['vallaki','Vários tesouros e aliados possíveis estão na cidade.'],['krezk','A abadia e o santuário do Sol Branco guardam tesouros possíveis.'],['ravenloft','O confronto final acontece na sala indicada pela quinta carta.']]},
  {id:'vinho', color:'#9b6bd6', label:'O vinho e as três gemas', text:'Druidas expulsaram os Martikov e as gemas que mantinham o vinhedo sumiram.',
    steps:[['vallaki','Na Estalagem Água Azul, Urwin Martikov está sem vinho.'],['vinhos','Retomar a adega de druidas e infectados.'],['yester','Uma gema está na Colina Yester, no ritual dos druidas.'],['berez','Outra anima a cabana de Baba Lysaga.'],['krezk','Com o vinho, o grupo ganha a entrada em Krezk.']]},
  {id:'noiva', color:'#c98bb0', label:'O Abade e o vestido de noiva', text:'O Abade costurou Vasilka para Strahd e só falta o vestido.',
    steps:[['krezk','O Abade exige um vestido de noiva e oferece ressurreição em troca.'],['vallaki','A baronesa Lydia tem o vestido ideal; Anna Krezkova pode ir buscá-lo.'],['ravenloft','Strahd não quer a noiva de carne: quer Ireena.']]},
  {id:'criancas', color:'#7fae8a', label:'Crianças perdidas', text:'Pastéis de sonho, uma Vistana desaparecida e crianças raptadas pela matilha.',
    steps:[['vila','Morgantha vende pastéis e leva o menino Lucian Jarov; Gertruda fugiu de casa.'],['moedor','As crianças presas no moinho das bruxas.'],['terras','Arabelle está no Lago Zarovich, num saco no barco de Bluto.'],['vallaki','Devolver Arabelle a Luvash muda a relação com os Vistani.'],['lobos','Oito crianças no santuário da Mãe Noite.'],['ravenloft','Gertruda vive enfeitiçada no castelo.']]},
  {id:'ordem', color:'#8fb3d9', label:'A Ordem do Dragão de Prata', text:'Os cavaleiros ressurgidos só descansam se o farol for aceso.',
    steps:[['argynvostholt','Vladimir e Godfrey; o fogo em forma de dragão pede ajuda.'],['ravenloft','O crânio de Argynvost está no castelo.'],['argynvostholt','Acender o farol liberta os espíritos da Ordem.']]},
  {id:'ambar', color:'#e3a64a', label:'Kasimir e o Templo Âmbar', text:'Kasimir quer trazer a irmã Patrina de volta; o templo guarda o segredo do pacto.',
    steps:[['vallaki','Kasimir vive no acampamento Vistani e conhece o templo.'],['tsolenka','A passagem gelada e sua ponte guardada.'],['templo','Dádivas sombrias e o meio de ressuscitar Patrina.'],['ravenloft','A cripta de Patrina está nas catacumbas.']]},
  {id:'lobos', color:'#a3a79f', label:'A matilha de Kiril', text:'Os lobisomens roubam crianças; dentro da matilha há uma disputa de liderança.',
    steps:[['abertura','Gancho “Lobisomens nas Brumas”.'],['vallaki','Os caçadores Szoldar e Yevgeni, na Estalagem Água Azul.'],['torre','O confronto com Kiril pode acontecer na torre.'],['lobos','Zuleika espera por Emil; Kiril lidera a caçada.'],['ravenloft','Emil está preso no castelo e implora por resgate.']]},
  {id:'cacador', color:'#6fb7a8', label:'Van Richten e Ezmerelda', text:'O caçador disfarçado e sua ex-protegida, que o procura.',
    steps:[['vallaki','Rictavio na Estalagem Água Azul; a carroça com o tigre no estaleiro.'],['torre','A torre de van Richten e a carroça de Ezmerelda.'],['krezk','Ezmerelda pode estar na abadia.'],['ravenloft','Strahd quer capturar van Richten e quebrar seu espírito.']]}
];
