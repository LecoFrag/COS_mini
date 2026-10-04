// Aprofundamento das fichas de personagem · aparece em "Expandir história e objetivos", abaixo do texto de data.js.
// Tudo vem do livro (caixas "Interpretando…", textos para ler em voz alta, descrições de área e apêndices).
// "aparencia" só existe quando o livro descreve a aparência; nunca foi escrita a partir dos retratos gerados.
// Seções: aparencia · interpretar (personalidade e como interpretar) · sabe (o que sabe e o que conta) · jogo (em jogo) · posses.
const profileDepth = {

  // ————————————————————————————————————————————————— Vila de Baróvia (capítulo 3)
  ireena: {
    aparencia: 'Uma jovem impressionante, de cabelos castanho-avermelhados. É idêntica a Tatyana, porque as duas nasceram com a mesma alma.',
    interpretar: ['Parece tranquila, mas tem uma vontade firme e ajuda o grupo como puder para se salvar. Os moradores têm medo dela e a evitam; o grupo é a melhor esperança que ela tem.',
      'Não se lembra do passado recente: não sabe como chegou a Baróvia nem de onde veio. Os encontros com Strahd são memórias confusas por causa do feitiço do vampiro, mas ela se lembra com clareza da fome brilhando nos olhos dele.'],
    sabe: 'Conta que lobos e outras criaturas terríveis atacaram a casa noite após noite, durante semanas, até o coração do pai não aguentar; ele morreu três dias antes da chegada do grupo. Desde a morte dele, a casa não foi mais atacada. Ninguém na vila teve coragem de ajudar Ismark a levar o corpo ao cemitério.',
    jogo: ['Está trancada na mansão do burgomestre (área E4) e só abre a porta barrada para quem a convencer de que não é servo de Strahd. Recusa-se a ir para Vallaki ou qualquer outro lugar enquanto o pai estiver morto no chão da mansão, e pede ao grupo que ajude Ismark a levar o corpo até o padre Donavich.',
      'Strahd e seus servos jamais a atacam: ele quer transformá-la em sua consorte na próxima visita. Tem alma, como Ismark.',
      'Nas catacumbas do castelo há uma cripta vazia e limpa, com a laje cuidadosamente posta de lado e letras recém-gravadas: “Ireena Kolyana: Esposa”. É ali que Strahd pretende guardá-la depois de transformá-la em cria vampírica.']
  },
  ismark: {
    aparencia: 'Um jovem que bebe vinho sozinho numa mesa de canto da taverna Sangue da Videira.',
    interpretar: ['Não é um baroviano melancólico como os outros: convida o grupo para a mesa, oferece vinho e pede ajuda para proteger a irmã adotiva. Fora isso, é tão lacônico quanto qualquer morador, exceto quando o assunto é Ireena ou Strahd.',
      'Os moradores o chamam de “Ismark, o Menor” porque ele viveu à sombra do pai a maior parte da vida.'],
    sabe: 'Sabe tudo o que os outros aldeões sabem e também que, por algum motivo desconhecido, Strahd deseja Ireena acima de todas as outras. Se o grupo veio pelo gancho “Pedido de Ajuda” e mostrar a carta, ele reconhece que a letra não é do pai.',
    jogo: ['Quer escoltar Ireena até Vallaki, no coração do vale, fora da vista do castelo e, ele espera, do alcance de Strahd. Sabe que é uma aposta, porque ela fica vulnerável fora de casa, mas ouviu dizer que Vallaki é bem defendida.',
      'Passou a vida adulta treinando com armas para um dia matar Strahd. Acompanha o grupo se Ireena for levada antes para um lugar seguro; enquanto viaja com eles, conta como membro do grupo na divisão da experiência (sem ganhar experiência).']
  },
  kolyan: {
    jogo: ['O corpo está na mansão do burgomestre. Se o grupo o levar à igreja, Donavich pede ajuda para enterrá-lo no cemitério ao amanhecer (área E6) e reza ao Senhor da Alvorada pela libertação de Kolyan de Baróvia.',
      'Depois do enterro, Donavich sugere levar Ireena para o mais longe possível do castelo: a Abadia de Santa Markóvia, em Krezk, ou, na falta dela, Vallaki. Ele não sabe que a abadia virou um covil do mal.',
      'A carta verdadeira de Kolyan (versão 2) está na mão de Dalvan Olensky, morto na estrada pelos lobos atrozes; foi escrita uma semana antes e deveria ser deixada nos portões para que visitantes a encontrassem.']
  },
  donavich: {
    aparencia: 'Um sacerdote de vestes sujas, ajoelhado atrás de um altar coberto de marcas de garras, numa capela bagunçada e iluminada por dezenas de velas. A voz está rouca e fraca: ele passou a noite inteira rezando.',
    interpretar: ['Está, na prática, insano. Reza dia e noite esperando que os deuses lhe digam como poupar Doru sem destruí-lo.',
      'Se o grupo parecer decidido a matar Doru, faz o possível para impedir. Se Doru morrer, cai no chão e chora inconsolavelmente, dominado pelo desespero.'],
    sabe: ['Além do que todos os barovianos sabem, conta que Ireena não é filha natural de Kolyan: ele a encontrou menina à margem dos Bosques de Svalich, perto do Pilar de Ravenloft, sem nenhuma lembrança do passado, e passou a amá-la muito. Ela mesma nunca soube disso.',
      'Sabe também que todas as noites, à meia-noite, os espíritos dos aventureiros mortos se erguem do cemitério e marcham em silêncio pela estrada em direção ao castelo (“A Marcha dos Mortos”).'],
    jogo: ['A igreja (área E5) tem portas cobertas de marcas de garras e queimaduras; os moradores a evitam por causa dos gritos que vêm do subsolo. Donavich perdeu a chave do cadeado que prende o alçapão onde Doru está.',
      'Conduz o funeral de Kolyan ao amanhecer e depois recomenda levar Ireena para Krezk ou Vallaki.'],
    posses: 'Símbolos sagrados de madeira em forma de sol; na capela há os livros Hinos ao Amanhecer e A Lâmina da Verdade.'
  },
  doru: {
    aparencia: 'Uma forma magra no canto mais distante da galeria subterrânea da igreja, entrevista pela luz de velas que escorre pelas frestas do assoalho.',
    interpretar: ['Está faminto: não se alimenta desde que foi preso e clama pelo pai o tempo todo. “Eu posso sentir seu sangue!”',
      'É corajoso o bastante para atacar um personagem sozinho; diante de um grupo, tenta evitá-lo. Se impedirem sua fuga, ele se atira ao ataque.'],
    sabe: 'Se for contido e o grupo lhe prometer sangue ou ameaçar destruí-lo (ou se for morto e revivido), narra como caiu: pouco mais de um ano atrás, aos vinte anos, ele e outros moradores invadiram o castelo seguindo um mago de vestes negras vindo de longe, e todos morreram pelas mãos de Strahd.',
    jogo: 'É uma cria vampírica que Strahd devolveu ao pai para atormentá-lo e expulsá-lo da igreja. Se a leitura de tarokka indicar um tesouro na galeria, ele está num baú mofado no canto sudoeste.'
  },
  bildrath: {
    interpretar: ['Serve aos próprios interesses e não oferece abrigo a ninguém. Nunca pechincha: “Se você precisa mesmo, vai pagar por isso.”',
      'Negocia com os Vistani quando eles passam e fica feliz em lucrar com qualquer estranho azarado. Se o grupo o pressionar, chama o sobrinho Parriwimple.'],
    jogo: ['A Bildrath Mercadorias (área E1) é a única loja da vila, sem concorrência: vende itens da tabela de equipamento de aventura que custem menos de 25 po, a dez vezes o preço.',
      'Não deixa Parriwimple ir ao castelo por motivo nenhum, o que é um obstáculo se o sobrinho for o aliado da tarokka.']
  },
  parriwimple: {
    aparencia: 'Os músculos ondulando sob a túnica de couro avisam de sua força enorme.',
    interpretar: 'É simplório e de bom coração, dedicado ao tio. Ninguém na vila usa seu nome verdadeiro, Parpol Cantemir.',
    jogo: 'Não segue o grupo sem o aval de Bildrath. Se for o aliado da tarokka, só vai ao castelo com uma causa justa, e o grupo pode apelar ao seu coração: resgatar barovianos desaparecidos ou salvar Ireena, que ele acha muito bonita.'
  },
  arik: {
    aparencia: 'Um homem pequeno e gorducho atrás do balcão.',
    interpretar: 'Limpa copos sem pensar, um após o outro; quando todos estão limpos, começa de novo. Anota pedidos com voz depressiva e monótona e volta aos copos. Ignora qualquer tentativa de interrogá-lo.',
    jogo: 'Um copo pequeno de vinho custa 1 pc; um jarro, 1 pp.'
  },
  alenka: {
    interpretar: 'É uma das três espiãs Vistani donas da taverna, sentadas à mesa perto da porta. Garantem que todos paguem a conta e, fora isso, mostram pouco interesse no grupo.',
    jogo: 'Se o grupo chegar acompanhado de um Vistana, as três ficam muito mais dispostas a conversar e dar informações. Sugerem que os personagens visitem Madame Eva para ler a sorte.'
  },
  mirabel: {
    interpretar: 'É uma das três espiãs Vistani donas da taverna, sentadas à mesa perto da porta. Garantem que todos paguem a conta e, fora isso, mostram pouco interesse no grupo.',
    jogo: 'Se o grupo chegar acompanhado de um Vistana, as três ficam muito mais dispostas a conversar e dar informações. Sugerem que os personagens visitem Madame Eva para ler a sorte.'
  },
  sorvia: {
    interpretar: 'É uma das três espiãs Vistani donas da taverna, sentadas à mesa perto da porta. Garantem que todos paguem a conta e, fora isso, mostram pouco interesse no grupo.',
    jogo: 'Se o grupo chegar acompanhado de um Vistana, as três ficam muito mais dispostas a conversar e dar informações. Sugerem que os personagens visitem Madame Eva para ler a sorte.'
  },
  mary: {
    aparencia: 'De pé no centro de um quarto do segundo andar, segurando uma boneca deformada de olhar estranhamente malicioso, vestida com pano de saco. Na bainha, uma etiqueta gasta: “Não é Divertido, Não é Blinsky!”.',
    interpretar: 'Está perdida na própria tristeza e mal percebe quem entra. Não diz nada diante de atitudes raivosas, mas fala, hesitante, com quem a trata com gentileza. Seus soluços ecoam pelas ruas da vila.',
    sabe: 'Escondeu a filha amada, Gertruda, dentro de casa a vida inteira. A menina, agora adolescente, saiu há uma semana e não foi mais vista. Mary teme o pior, e com razão.',
    jogo: 'A casa (área E3) está selada e bloqueada por dentro. A boneca foi dela na juventude e depois passou para Gertruda; foi feita por Gadof Blinsky, em Vallaki.'
  },
  gertruda: {
    aparencia: 'Deitada numa grande cama de dossel com um “Z” entalhado na cabeceira, entre lençóis de veludo e cetim, vestindo camisola; um de seus chinelos delicados caiu no chão ao pé da cama.',
    interpretar: ['É inocente e alheia a qualquer perigo, especialmente Strahd, que a enfeitiçou. Os anos de confinamento torceram seu senso de realidade: vê a vida como um conto de fadas e, diante de uma decisão, quase sempre escolhe a opção mais simples.',
      'É ingênua a ponto de ser um perigo para si mesma e para os outros.'],
    jogo: ['Está no quarto K42 do castelo. Fugiu de casa atraída pela majestade de Ravenloft. Strahd ainda não a mordeu, mas pretende, de preferência quando os personagens se sentirem impotentes para impedir.',
      'Há uma porta secreta ao lado da cama, que leva à área K45; Gertruda não sabe que ela existe.']
  },
  lucianjarov: {
    jogo: 'Tem sete anos. Se o grupo observar Morgantha por um tempo, vê os pais dele o entregarem como pagamento pelos pastéis; eles imploram para ela não levar o menino, mas a bruxa o arranca chorando, enfia num saco e amarra na carroça. Se os personagens exigirem, ela o solta a contragosto, sabendo que pode voltar por ele depois.'
  },

  // ————————————————————————————————————————————————— O Velho Moedor de Ossos (capítulo 6)
  morgantha: {
    aparencia: ['Na vila, sob o disfarce de senhora idosa: uma figura encurvada, empacotada em trapos, empurrando pela névoa um carrinho de madeira deteriorada.',
      'No moinho: uma velha corpulenta e abatida, de rosto tão enrugado quanto uma maçã fervida, que varre ossos velhos com uma vassoura. Veste um avental manchado de sangue e sujo de farinha, e um punhal comprido e afiado está espetado no coque de cabelos grisalhos.'],
    interpretar: ['Tem orgulho das suas confecções e jura que usa só os melhores ingredientes. Não se importa com visitantes, desde que venham fazer negócio: tenta vender o último lote de pastéis por 1 po cada. Se o grupo parecer desinteressado, ordena: “Vão embora!”.',
      'Se for atacada ou se recusarem a sair, chama as filhas e se vira para lutar. Na vila, percebe que o grupo é estrangeiro e faz o possível para evitá-lo; luta só em defesa própria.',
      'Tolera as filhas apenas porque elas completam o conventículo. Tem medo de Strahd e respeita o domínio dele.'],
    sabe: 'Em troca da própria vida, revela: Strahd domina a terra e o clima, e entre seus espiões estão os Vistani; há acampamentos Vistani no Lago Tser e nos arredores de Vallaki; Strahd tem inimigos mortos-vivos, os cavaleiros caídos da Ordem do Dragão de Prata, numa mansão em ruínas a oeste de Vallaki; e o segredo mais bem guardado dele é um templo de sabedoria proibida nas montanhas, alcançado pela Passagem Tsolenka.',
    jogo: ['Vai de casa em casa na vila vendendo pastéis de sonhos por 1 po. No moinho, verifica a cada 10 minutos a dúzia de pastéis no forno (área O1), onde há ossos pequenos espalhados pelo chão e um barril de fluido demoníaco preto-esverdeado que ela usa como foco para vidência. Mói os ossos na área O2.',
      'Se uma das filhas morrer, o conventículo se quebra; Morgantha pretende então raptar e devorar uma criança humana para dar à luz uma nova filha. Deu o olho do conventículo a Cyrus Belview para espiar o castelo.',
      'As bruxas profanaram os megalitos das Quatro Cidades, perto do moinho, com um pastel de sonhos e uma pilha de dentes de crianças.']
  },
  bella: {
    aparencia: ['No disfarce que as três usam (a Mudança de Forma de uma “mãe frágil e suas duas filhas caseiras”), Bella e Offalia são duas jovens mulheres feias, de xales de seda e vestidos de carne costurada, com longas agulhas espetadas no emaranhado de cabelos pretos.',
      'O livro não diferencia uma irmã da outra e não descreve a forma verdadeira das bruxas da noite.'],
    interpretar: ['São repugnantes mesmo na forma humana. Tagarelam com alegria; quando não estão cantando, dançando ou contando piadas terríveis, estão espetando com as agulhas as crianças presas para que chorem (o choro mostra que a criança tem alma, a única que interessa às bruxas).',
      'Qualquer tentativa de libertar as crianças desperta a ira delas. Morgantha só as tolera porque completam o conventículo.'],
    jogo: ['Ficam no quarto O3, onde três caixas empilhadas num armário podre guardam as crianças Freek (7 anos) e Myrtle (5 anos), entregues pelos pais em troca de pastéis e engordadas com migalhas. Ao lado, uma pilha de roupas das crianças que as bruxas já devoraram.',
      'Libertadas, as crianças não querem voltar para casa por causa do que os pais fizeram, e pedem para ser levadas a Ismark e Ireena. Separar as bruxas enfraquece o conventículo.'],
    posses: 'As bruxas guardam o tesouro no colchão de palha mofado da cama que não usam: seis joias baratas de 25 po cada.'
  },
  offalia: {
    aparencia: ['No disfarce que as três usam (a Mudança de Forma de uma “mãe frágil e suas duas filhas caseiras”), Offalia e Bella são duas jovens mulheres feias, de xales de seda e vestidos de carne costurada, com longas agulhas espetadas no emaranhado de cabelos pretos.',
      'O livro não diferencia uma irmã da outra e não descreve a forma verdadeira das bruxas da noite.'],
    interpretar: ['São repugnantes mesmo na forma humana. Tagarelam com alegria; quando não estão cantando, dançando ou contando piadas terríveis, estão espetando com as agulhas as crianças presas para que chorem (o choro mostra que a criança tem alma, a única que interessa às bruxas).',
      'Qualquer tentativa de libertar as crianças desperta a ira delas. Morgantha só as tolera porque completam o conventículo.'],
    jogo: ['Ficam no quarto O3, onde três caixas empilhadas num armário podre guardam as crianças Freek (7 anos) e Myrtle (5 anos), entregues pelos pais em troca de pastéis e engordadas com migalhas. Ao lado, uma pilha de roupas das crianças que as bruxas já devoraram.',
      'Libertadas, as crianças não querem voltar para casa por causa do que os pais fizeram, e pedem para ser levadas a Ismark e Ireena. Separar as bruxas enfraquece o conventículo.'],
    posses: 'As bruxas guardam o tesouro no colchão de palha mofado da cama que não usam: seis joias baratas de 25 po cada.'
  },

  // ————————————————————————————————————————————————— As terras de Baróvia (capítulo 2) e ganchos (capítulo 1)
  eva: {
    aparencia: ['Na tenda, sob chamas mágicas que lançam um brilho avermelhado, uma figura encurvada se aproxima de uma mesa baixa coberta de veludo negro e de uma bola de cristal. A voz crepita como ervas daninhas secas, e um riso cacarejado irrompe dos lábios murchos.',
      'Parece ter uns setenta anos, mas é muito mais velha.'],
    interpretar: ['Recebe o grupo com “Até que enfim, vocês chegaram!”, pronuncia o nome de cada um e faz referências a coisas que cada um fez no passado. Depois pergunta se querem que suas sortes sejam lidas.',
      'Pode parecer maluca, mas é astuta e perspicaz. Conheceu muitos aventureiros e sabe que nem sempre são confiáveis. Quer libertar Baróvia da maldição, e seu destino está entrelaçado com o de Strahd. Faz reverência ao vampiro quando convocada, mas nunca faz nada para irritar ou prejudicar os Vistani.',
      'Nunca concede ajuda e nunca pede nenhuma. As pessoas cujos destinos ela prevê não importam para ela: são apenas meios para um fim.'],
    sabe: 'Nenhum Vistana sabe quem ela é de verdade. Entre os Vistani, nenhuma vidente se compara a ela; mas nenhuma vidente Vistana consegue ver o próprio futuro ou o de outro Vistana.',
    jogo: ['Faz a leitura de tarokka no acampamento do Lago Tser (área G). Se a quinta carta for Brumas, pode pedir ao grupo que volte em pelo menos três dias para consultar as cartas de novo, só para descobrir onde está o inimigo.',
      'O acampamento tem doze Vistani bêbados ao redor da fogueira (com desvantagem em ataques e testes) e três capitães sóbrios descansando nos vagões. Um contador de histórias narra a batalha entre o Mago Louco e Strahd; não se lembra do nome do mago, mas sente que era importante, e insiste para que o grupo fale com Madame Eva.',
      'Se a leitura puser um tesouro no acampamento, ele está num dos vagões, e ela permite que o grupo procure se pedir.']
  },
  arrigal: {
    aparencia: ['No gancho “Pedido de Ajuda”, uma forma emoldurada pela luz enevoada da porta entra na taverna: passos pesados, o tilintar de moedas, roupas coloridas cobertas de dobras soltas e um chapéu torto que esconde os olhos nas sombras. Para diante da mesa do grupo numa postura ampla, de braços cruzados, e fala com voz grave.',
      'No acampamento de Vallaki, veste armadura de couro batido e fica à sombra do irmão, mais corpulento.'],
    interpretar: ['Na taverna, deixa cair uma pesada bolsa de ouro no balcão e paga uma rodada para todos. Descreve Baróvia como um vale de grande beleza e seu mestre como um homem notável; se perguntado, diz servir ao burgomestre Kolyan, mas serve a Strahd. Entrega a carta, monta e vai embora, sem esperar ser seguido.',
      'No acampamento é quem acalma o irmão: “Calma, irmão. Eu acho que Alexei aprendeu sua lição.” É muito mais perigoso que Luvash. Se souber que o grupo tem algo útil ou nocivo a Strahd, tenta tirar o objeto deles, persegue-os se preciso e mata um ou mais se achar que pode escapar; então pega um cavalo de montaria e leva o objeto ao castelo.'],
    jogo: ['Divide com Luvash o comando do acampamento Vistani de Vallaki (área N9) desde que os anciãos morreram; os dois são maus e fazem o que Strahd exigir. Cada irmão carrega uma chave de um dos cadeados do vagão do tesouro (área N9i).',
      'No evento “A Caçada de Arrigal”, em Argynvostholt, ele persegue Ezmerelda, que roubou um cavalo do acampamento, montado num cavalo negro e acompanhado de duas guarda-costas Vistani em lobos atrozes. Quer levá-la de volta para ser punida; não enfrenta o grupo e volta ao acampamento se não os convencer a entregá-la.',
      'Se for o aliado da tarokka e ouvir falar da carta, aceita o destino e acompanha o grupo. Se Strahd for derrotado, trai e ataca os personagens, acreditando estar destinado a ser o novo senhor de Baróvia.']
  },
  luvash: {
    aparencia: 'Um homem maior e mais velho que o irmão, de armadura de couro batido, que açoita com um chicote de cavalo um jovem Vistana amarrado no poste central da tenda.',
    interpretar: ['Está tão bêbado que tem desvantagem em ataques e testes. Está infeliz e determinado a achar a filha, custe o que custar; a chegada do grupo o distrai, e ele faz o papel de anfitrião até os personagens ficarem cansativos ou ameaçadores.',
      'Não se mete nos assuntos do grupo sem o consentimento de Strahd e prefere deixar o vampiro lidar com eles.'],
    sabe: 'Arabelle sumiu há pouco mais de um dia; como todos estavam bêbados e Arrigal estava fora, ninguém viu nada. Doze bandidos procuram por ela na mata; a cada hora, 1d4 voltam sem notícias.',
    jogo: ['Está punindo Alexei (Vistana bandido, com 3 pontos de vida restantes) por não ter vigiado a menina. Alexei se culpa e grita para o grupo não interferir: não quer parecer fraco diante dos irmãos. Se um alarme soar, nove bandidos sóbrios chegam à tenda em 2 rodadas.',
      'Por um preço alto, oferece “poções” que permitiriam atravessar a névoa; elas não funcionam. Se o grupo ainda não conquistou sua boa vontade, aceita negociar em troca de uma de duas tarefas: achar a filha ou trazer seis barris de vinho (de Vallaki ou direto da vinícola Mago dos Vinhos).',
      'Se Arabelle voltar sã e salva, fica radiante: não vende mais as poções (“Hum, elas não são tão potentes quanto deveriam ser”) e deixa o grupo escolher um tesouro do vagão Vistani. Depois disso, não deixa a filha partir de novo.'],
    posses: 'O vagão dele (área N9e) tem cortinas de seda dourada e calotas douradas em forma de sol (125 po cada, 500 po no total); por dentro, odres de vinho vazios, roupas sujas e peles sarnentas.'
  },
  arabelle: {
    aparencia: 'Tem pele branco-alabastro e cabelos negro-corvo.',
    interpretar: 'Age mais como uma adulta do que como uma criança e, apesar da desventura, acredita que um grande destino a espera. Não sabe que descende de Madame Eva nem que tem sangue da realeza baroviana.',
    jogo: ['Está amarrada com corda de cânhamo e enfiada num saco de estopa no barco de Bluto, a 120 metros da margem do Lago Zarovich, sem poder ser vista nem ouvida da costa. Tem 2 pontos de vida e nenhum ataque efetivo.',
      'Se o grupo observar Bluto por alguns minutos ou se aproximar para cumprimentá-lo, ele joga o saco na água. Para alcançá-la a tempo: Força (Atletismo) CD 15 a partir da margem, ou CD 10 para quem estiver num barco a remo.',
      'Resgatada, exige ser levada de volta ao acampamento da família, certa de que o pai recompensará o grupo. Se for a aliada da tarokka, junta-se de bom grado, mas, se voltar ao acampamento, Luvash não a deixa partir.'],
    posses: 'Dorme numa pequena rede no vagão do pai. Sua única posse é um boneco de serapilheira com olhos de botão.'
  },
  bluto: {
    interpretar: ['É um bêbado miserável, uma casca oca de homem, mal capaz de entender os próprios atos. Está desarmado e não ajuda nem atrapalha o grupo.',
      'Não pega um peixe há uma semana e está desesperado para trocar peixes por vinho na Estalagem Água Azul. Acredita que Vistani trazem sorte e pretende sacrificar Arabelle ao lago em troca de peixes.'],
    jogo: ['Está em transe no barco e não responde a nada nem a ninguém, a menos que seja atacado. Se o grupo o observar por alguns minutos ou chegar perto, joga o saco com Arabelle na água e espera, de vara na mão, pela recompensa.',
      'Em Vallaki, os moradores comentam que ele sai todas as manhãs para pescar e volta todas as noites sem peixe, apesar dos lobos.']
  },
  dalvan: {
    aparencia: 'Jaz de bruços no mato, a uns quatro metros da estrada: um jovem de aparência plebeia, de roupas enlameadas rasgadas por garras. Corvos já estiveram no corpo, cercado de pegadas de patas; está morto há vários dias e segura um envelope esfarrapado.',
    jogo: ['A carta tem um grande “B” no selo de cera e está datada de uma semana antes (versão 2 da carta de Kolyan, no apêndice F).',
      'Se o grupo ficar no bosque, ouve um lobo uivar; a cada rodada outro se junta, mais perto. Depois de 5 rodadas, cinco lobos atrozes atacam (com vinte lobos, se o grupo estiver tentando sair de Baróvia). Eles param se os personagens voltarem à estrada rumo à vila.']
  },
  stanimir: {
    aparencia: 'Um velho Vistana, líder de um grupo de uma dúzia de homens e mulheres que cantam, dançam e bebem ao redor de uma fogueira, com três carroças e seis cavalos enfeitados com pulseiras, franjas e mantos brilhantes.',
    interpretar: ['Recebe o aviso da duquesa Morwen com uma gargalhada: “Não se preocupem. Nós não temos nenhum desejo de nos tornar inimigos da Senhora Morwen. Eu tenho uma história para contar a vocês. Primeiro vocês a ouvem, então nós vamos.”',
      'Enche a boca de vinho e cospe no fogo, e as chamas ficam verdes. Nelas dançam as imagens da história: um soldado ferido que os Vistani curaram e esconderam, um príncipe que lutou para protegê-los e lhes disse “fiquem o tempo que desejarem, partam quando quiserem”. Então o rosto dele vira uma máscara sombria ao contar que a maldição transformou o príncipe num tirano.'],
    sabe: 'Ele e os seus se recusam a dizer o nome do “senhor temível”. A qualquer pergunta a mais, respondem: “Somente a Madame Eva tem todas as respostas que procuram.”',
    jogo: ['Se o grupo aceitar, os Vistani os levam pela Rota do Comércio; depois de vários dias, as brumas envolvem a caravana e os deixam em Baróvia, onde são guiados até Madame Eva. Se o grupo recusar, ele fica decepcionado, mas parte como prometido.',
      'Viaja com a filha Damia (espiã), o filho Ratka (capitão dos bandidos) e nove bandidos. Os guardas que a duquesa mandou antes voltaram falando bem deles, como se tivessem sido encantados.']
  },
  madmage: {
    aparencia: 'Aparece como um alce num esporão rochoso e, de repente, assume a forma de um homem de túnica preta esfarrapada, com cabelos e barba longos, pretos e riscados de grisalho, e olhos que crepitam com energia mística.',
    interpretar: ['Esqueceu o próprio nome e o mundo de onde veio; não se lembra de nada anterior à loucura. Sofre de paranoia: acredita que inimigos poderosos o caçam e que os agentes deles estão por toda parte, observando-o.',
      'Achando que o grupo veio matá-lo, desencadeia suas magias mais destrutivas, gritando: “Você acha que minha magia ficou fraca? Pense novamente!” Com 50 pontos de vida ou menos, grita “Diga aos seus mestres obscuros que eles podem destruir meu corpo, mas nunca meu espírito!” e tenta fugir.'],
    sabe: 'Curado, lembra-se de que é Mordenkainen, arquimago de Oerth e líder do Círculo dos Oito. Conhece mundos além do seu: se o grupo vier dos Reinos Esquecidos, pergunta por seu velho amigo Elminster de Vale das Sombras.',
    jogo: ['Strahd o derrotou no castelo, levou-o às montanhas e o atirou das Cataratas Tser; ele sobreviveu, mas perdeu o cajado e o livro de magias. Os barovianos se lembram de vê-lo na margem norte do Lago Zarovich, atirando relâmpagos na água para matar peixes.',
      'Restauração maior curaria a loucura, mas ele conjurou limpar a mente em si mesmo, que ainda dura 3d6 horas; até lá, nenhuma magia restaura seu juízo. Com Carisma (Persuasão) CD 15 o grupo o convence a revelar por que a magia falhou; Inteligência (Arcanismo) CD 18 também descobre a causa.',
      'Já gastou espaços de magia em armadura arcana, metamorfose (em si mesmo), mansão magnífica de Mordenkainen e limpar a mente. Curado, leva o grupo a uma porta invisível na montanha, a entrada da mansão extradimensional, onde oferece comida e abrigo longe dos espiões de Strahd.']
  },

  // ————————————————————————————————————————————————— Castelo Ravenloft (capítulo 4) e a família von Zarovich
  strahd: {
    aparencia: ['No dia do pacto, quando os guardas o crivaram de flechas, o céu ficou negro e ele se voltou contra eles com os olhos vermelhos em chamas.',
      'Um retrato no castelo o mostra antes de virar vampiro: um belo homem, bem vestido, de olhar sereno e penetrante. Mesmo em vida ele era pálido, e os olhos do retrato parecem seguir quem passa.'],
    interpretar: ['Acredita que sua alma está perdida para o mal. Não sente piedade nem remorso, nem amor nem ódio; não sofre angústia nem se indigna. Sempre se considerou o mestre do próprio destino. Em vida deixava as emoções dominá-lo de vez em quando; como vampiro, é mais monstro do que homem, quase sem sentimentalismo.',
      'A única coisa que às vezes o persegue é a morte de Tatyana, mas sem romance nem arrependimento: para ele, aquilo não poderia ter sido evitado, e o que está feito não se desfaz. Em vida conquistava reinos; na morte, conquista pessoas, levando boas almas à corrupção e destruindo quem não cede. Quem apelar à humanidade dele vai se decepcionar.',
      'Se perguntado por que caça Ireena, diz que o corpo dela é um receptáculo para a alma de Tatyana, e a alma de Tatyana pertence a ele. Pode ser sedutor e sutil quando quer, sobretudo com pessoas inteligentes ou atraentes: homens e mulheres de beleza e astúcia o divertem por um tempo, como brinquedos para possuir ou descartar.',
      'Testa o grupo para ver o quanto aguenta. Se desmoronarem fácil, perde o interesse; se mostrarem coragem e desafio, o interesse cresce, ainda mais se alguém exibir conhecimento ou beleza incomum. Explora a falta de união do grupo e se interessa especialmente por aventureiros carismáticos e arrogantes como ele.'],
    sabe: 'Acredita que a chave para escapar de Baróvia é encontrar alguém digno de governar em seu lugar, mas sua arrogância é tanta que ninguém nunca é bom o bastante. No fundo acha que só um von Zarovich tão grande quanto ele ou o pai poderia convencer os Poderes das Trevas a libertá-lo.',
    jogo: ['É sempre encontrado no lugar indicado pela quinta carta da tarokka, a menos que tenha sido forçado a voltar ao caixão. Se o encontro for no túmulo de Sergei, está deitado sobre o caixão do irmão, chorando; na tumba dos pais, está num frenesi de ira e aflição.',
      'Ao chegar pelo convite, o grupo é recebido por uma ilusão de Strahd ao órgão, que faz o papel de anfitrião gracioso por até 3 rodadas, fala da família e da história do castelo e desaparece com uma gargalhada; um vento apaga as tochas e portas se fecham ao longe.',
      'Suas visitas pelo vale são testes, não emboscadas. Ele e seus servos jamais atacam Ireena. Tomou várias consortes depois de Tatyana e transformou todas em crias vampíricas.']
  },
  tatyana: {
    aparencia: 'Uma jovem baroviana de linhagem fina e beleza notável, “de beleza requintada e gentil”. Ireena é idêntica a ela: “mesma voz, mesmo rosto, mesmo corpo gracioso”, nas palavras de Strahd.',
    jogo: ['Um retrato dela está pendurado na biblioteca do castelo (área K37) e esconde uma porta secreta para o tesouro. É a “mulher de grande beleza” da carta Tentação.',
      'Strahd a cobriu de presentes e atenção, mas ela se apaixonou pelo irmão mais novo. No dia do casamento, fugiu de Strahd pelos jardins e se atirou de uma varanda do castelo para a morte.']
  },
  sergei: {
    aparencia: 'No túmulo (área K85), a carne foi preservada por magia e, à primeira vista, parece que ele está dormindo no caixão, vestindo uma brilhante armadura de placas +2. Atrás do caixão, três estátuas em alcovas mostram um jovem deslumbrante ladeado por dois anjos, polidas como no primeiro dia.',
    interpretar: 'Era o irmão mais jovem e afetuoso. A mãe o manteve longe dos campos de batalha, e Strahd invejava o amor e a atenção que ela dava a ele.',
    jogo: ['O túmulo é um lugar de sossego, “uma calmaria em meio à tempestade”. Um portão fecha o arco de entrada (Força CD 25 para erguê-lo); o caixão se abre ao toque de uma criatura leal e boa, ou com Força CD 15.',
      'No poço abençoado de Krezk, o espírito dele pode se manifestar e chamar Ireena de Tatyana. Se os dois se reunirem, Ireena sai para sempre do alcance de Strahd, que culpa o grupo e passa a querer destruí-lo.']
  },
  barov: {
    aparencia: 'Uma tapeçaria no castelo o mostra à frente de seus temíveis cavaleiros numa batalha sob um céu sangrento: montado num cavalo negro, com manto negro forrado de peles, armadura cinza-escura e elmo com viseira em forma de cabeça de lobo; a espada brilha com a luz do sol. Na tumba, o caixão norte tem uma efígie de cera dele em tamanho natural.',
    jogo: ['A tumba do rei e da rainha (área K88) repousa em calmo silêncio, sob altos vitrais. Os ossos do rei estão num compartimento sob a efígie.',
      'A tapeçaria pesa 4,5 kg seca e vale 750 po intacta.']
  },
  ravenovia: {
    aparencia: 'Na tumba, o caixão sul guarda apenas o esqueleto dela, coberto por uma mortalha branca esfarrapada: a magia que deveria preservar seus restos falhou há anos.',
    interpretar: 'Lamentou a morte de Barov e passou a temer Strahd, que a guerra tornara frio e arrogante.',
    jogo: 'Morreu na viagem para conhecer o castelo que levava seu nome; decepcionado, Strahd selou o corpo numa cripta sob Ravenloft. Se o confronto final for na tumba dos pais (cartas Fantasma ou Corvo), Strahd está ali num frenesi de ira e aflição.'
  },
  rahadin: {
    interpretar: ['É o mordomo silencioso e misterioso de Strahd. Nos encontros aleatórios, aproxima-se sem ser ouvido e anuncia numa voz sombria: “O mestre deseja vê-los.” Então indica um lugar do castelo ao acaso (capela, salão de audiências, biblioteca, telhado da torre, adega ou câmara de tortura), onde Strahd não está, a menos que a tarokka diga o contrário.',
      'Se pedirem que guie o caminho, recusa; se pedirem direções, diz apenas se precisam subir, descer ou ficar no mesmo andar. Não vai embora antes deles. Se atacado, luta até a morte.'],
    jogo: ['Recebe os convidados no salão de entrada (área K8), conduz o grupo até a sala de jantar, fecha as portas e se retira. Luta apenas se for atacado.',
      'Se não tiver sido derrotado antes, espera o grupo no quarto dos guardas para matá-lo, acompanhado de um demônio das sombras. Se Strahd morrer e Rahadin ainda estiver vivo, aparece logo depois para vingar o mestre.']
  },
  escher: {
    aparencia: 'Um belo jovem descansando num sofá, de roupas elegantes, mas desgastadas e desbotadas. Usa no terceiro dedo da mão esquerda um anel de platina gravado com pequenas rosas e espinhos e, no pescoço, um pingente de ouro e rubi.',
    interpretar: 'Na conversa, mostra inteligência com um toque de melancolia. Por trás do humor malicioso há um pavor de que Strahd esteja entediado dele e o tranque nas catacumbas com os outros consortes rejeitados. Anda se sentindo abandonado e se retirou para este salão até o humor do mestre melhorar.',
    jogo: ['Se for atacado, pula pela janela, cai como um gato no telhado do forte (área K53) e leva os perseguidores direto a Strahd, onde quer que ele esteja, estejam os personagens prontos ou não.',
      'Se Strahd for destruído, Escher deixa Baróvia em busca de novas experiências e de um jeito de se tornar ele mesmo um senhor dos vampiros.'],
    posses: 'Anel de platina (150 po) e pingente de ouro e rubi (750 po).'
  },
  ludmilla: {
    aparencia: 'Veste um vestido de noiva branco e sujo, uma tiara de ouro e dez pulseiras de ouro.',
    jogo: 'É uma das três noivas de Strahd, crias vampíricas deitadas sobre a terra junto à parede leste do túmulo do conde (área K86). As três se levantam para atacar qualquer um que se aproxime do caixão dele. Strahd as encheu de presentes.',
    posses: 'Tiara de ouro (750 po) e dez pulseiras de ouro (100 po cada).'
  },
  anastrasya: {
    aparencia: 'Veste um vestido de casamento vermelho e esfarrapado, um lenço de seda preto e carmesim costurado com joias preciosas e um colar de platina com um pingente de opala negra.',
    jogo: 'É uma das três noivas de Strahd, crias vampíricas deitadas sobre a terra junto à parede leste do túmulo do conde (área K86). As três se levantam para atacar qualquer um que se aproxime do caixão dele. Strahd as encheu de presentes.',
    posses: 'Lenço cravejado de joias (750 po) e colar de platina com opala negra (1.500 po).'
  },
  volenta: {
    aparencia: 'Veste um vestido de casamento dourado e desbotado, uma máscara de platina moldada vagamente como uma caveira e dez anéis de platina com pedras preciosas.',
    jogo: 'É uma das três noivas de Strahd, crias vampíricas deitadas sobre a terra junto à parede leste do túmulo do conde (área K86). As três se levantam para atacar qualquer um que se aproxime do caixão dele. Strahd as encheu de presentes.',
    posses: 'Máscara de platina (750 po) e dez anéis de platina (250 po cada).'
  },
  sasha: {
    aparencia: 'Uma forma feminina bem-feita, deitada numa laje de mármore, coberta por teias tão grossas e pálidas quanto linho.',
    interpretar: 'Da escuridão, uma voz pergunta: “Meu amor, você veio me libertar?” A mulher se levanta com a mortalha de teias grudada ao corpo; quando percebe que os visitantes não são o marido, arranca as teias como um vestido de noiva sem amor e ataca.',
    jogo: 'Está na cripta 20 das catacumbas (área K84). É uma cria vampírica, antiga esposa de Strahd.'
  },
  helga: {
    aparencia: 'Uma figura feminina que se move ligeira pelo quarto, esfregando os móveis e cantarolando serenamente. Em volta do pescoço pálido e delgado, um colar de ouro com pingente de rubi.',
    interpretar: 'Faz o papel da donzela inocente em apuros até o fim, revelando a ferocidade só quando ataca. Diz ser a filha do sapateiro da vila, sequestrada e forçada a servir Strahd, e pede (ou implora) para ser salva daquele lugar horrível. É mesmo filha do sapateiro, mas escolheu uma vida de maldade ao lado de Strahd.',
    jogo: 'Junta-se ao grupo se convidada. Pretende atacar, mas só quando surgir uma chance que não a obrigue a enfrentar o grupo inteiro; ataca também se Strahd mandar.',
    posses: 'O colar tem quase cinco séculos, foi presente de Strahd e vale 750 po.'
  },
  cyrus: {
    aparencia: 'Mede 1,2 m e parece ainda menor pela postura encurvada. O lado esquerdo do rosto é coberto de escamas de lagarto, tem orelhas de pantera, o pé esquerdo parece o de um pato e os braços têm manchas de pelo de cachorro preto. No pescoço, um laço de cordel com uma chave de ferro e um pingente de madeira com um globo ocular humano envernizado. Anda com uma lanterna no chão atrás de si, pelo salão dos serviçais tomado de névoa.',
    interpretar: 'É obviamente louco. Serve ao mestre há incontáveis anos e é dedicado a ele. Não ataca primeiro. Tenta levar o grupo para o “quarto na torre” (área K49) e, se aceitarem, pede que fiquem perto dele e dispara de propósito a armadilha do elevador (área K61), resistindo ao gás do sono com vantagem.',
    jogo: ['Tem os traços Audição e Faro Aguçados. Só ele e Strahd sabem a palavra de comando do portão do pátio central. Montou os esqueletos de guarda presos com arame que enfeitam o castelo.',
      'O pingente é um olho de bruxa que Morgantha lhe deu para espiar Strahd; Cyrus não sabe que é mágico. A chave abre o baú de ferro da área K60, que ele escondeu ali (contém uma coroa de ouro de 2.500 po).']
  },
  lief: {
    aparencia: 'Uma figura acocorada num banquinho alto, diante de uma mesa, rabiscando um pergaminho aparentemente interminável com uma pena de tinta seca. Uma corda pende de um buraco no teto ao lado dele.',
    interpretar: 'Está acorrentado à mesa e não tem interesse no grupo nem em suas preocupações. É mal-humorado porque Strahd não o deixa saber de todos os seus tesouros. Sob nenhuma circunstância sai voluntariamente da sala.',
    sabe: 'Mantém os livros de riquezas e conquistas de Strahd há mais tempo do que consegue lembrar. Descobriu onde está um dos tesouros secretos: se tratado com bondade, revela o esconderijo do Símbolo Sagrado do Corvo-Bondoso indicado pela tarokka e desenha um mapa tosco, geograficamente correto, mas sem os perigos do caminho.',
    jogo: 'Puxa a corda no instante em que se sente ameaçado: um gongo altíssimo soa, e em 1d6 rodadas chegam criaturas (sombras, crias vampíricas, inumanos ou uma aparição com espectros). Sabe que há uma chave para os quatro baús da sala, mas não se lembra de onde a escondeu: está num livro de capa manchada de sangue, com as páginas furadas (Investigação CD 15).',
    posses: 'Os baús guardam 10.000 pc, mais 10.000 pc, 1.000 po e 500 pl, sob as quais há um manual de saúde corporal.'
  },
  pidlwick: {
    aparencia: ['Escondido entre as vigas: um homem pequeno e espigado, não muito maior que uma criança, com o rosto pintado como um coringa sorridente. A tinta escura é fuligem, passada em volta dos olhos e da boca.',
      'À luz clara, fica óbvio que não é um homem: é um boneco de couro tingido costurado sobre uma armação articulada, e ouve-se o clique suave das engrenagens.'],
    interpretar: 'Não fala e não tem rosto expressivo; comunica-se com gestos e diagramas simples. Entende Comum, mas não lê nem escreve. Se o grupo for gentil, acompanha-o e se esforça para ser útil e divertido. Conhece o castelo e pode servir de guia silencioso.',
    jogo: 'Se alguém for mau com ele, o ressentimento cresce em silêncio e, quando o grupo estiver no alto de uma escada, empurra o culpado: Destreza CD 10 ou cai, sofrendo 1d6 de dano de concussão a cada 3 metros. Fica nas vigas da torre (área K59); percebê-lo exige Percepção passiva contra sua Furtividade.'
  },
  pidlwick_first: {
    aparencia: 'O fantasma é um homem pequeno vestido de bobo, com um pequeno sino no topo da touca pontiaguda.',
    interpretar: 'Pergunta “Por que você me convocou para além do meu túmulo?” e, qualquer que seja a resposta, elogia quem tocou. Perguntado quem é: “Pidlwick.” Como morreu, responde com humor: “Eu caí das escadas.” Se Pidlwick II estiver com o grupo, aponta para a réplica: “Ele me empurrou pelas escadas.” Depois desaparece para sempre; se for atacado, revida.',
    jogo: 'Aparece a quem tocar a harpa de vísceras do castelo e passar em Carisma (Atuação) CD 15. Diz: “Na minha cripta abaixo do castelo, você encontrará um tesouro digno de um ser tão talentoso como você!” Na cripta 9 das catacumbas, um pequeno esqueleto com restos de traje de bobo repousa numa laje menor que as outras.',
    posses: 'O tesouro da cripta é o Alaúde de Doss, um instrumento mágico dos bardos.'
  },

  // ————————————————————————————————————————————————— As catacumbas do castelo (área K84)
  patrina: {
    aparencia: 'Da escuridão da cripta surge um rosto horripilante: uma donzela elfa espectral, torcida pelo horror da existência morta-viva. Ela pranteia, e o som extremo rasga as almas.',
    interpretar: ['Em vida, era uma elfa das sombras que aprendera tanto das artes negras que quase se igualava a Strahd. Sentiu um grande vínculo com ele e pediu para solenizá-lo num casamento negro; Strahd, cobiçando seu conhecimento e poder, consentiu, mas o próprio povo dela a apedrejou antes que ele drenasse toda a sua vida.',
      'Fala ao irmão em sonhos, dizendo-se arrependida. É mentira: quer ser trazida de volta para se tornar uma vampira tão poderosa quanto Strahd.'],
    jogo: ['É uma banshee na cripta 21 e ataca assim que a porta se abre, usando o gemido imediatamente. Depois de despertada, pode vagar pelo castelo, mas não se afasta mais de 8 km da cripta. Reduzida a 0 pontos de vida, desincorpora-se e volta à cripta 24 horas depois. Não descansa enquanto não for formalmente casada com Strahd; consagrar na cripta impede a volta dela enquanto a magia durar.',
      'Se Kasimir a ressuscitar, volta como uma arquimaga sem magias preparadas. Se o grupo tiver o livro de magias dela, pede gentilmente de volta “para ajudar a destruir Strahd” (mentira); se atendida, aprende o máximo sobre os personagens antes de seguir seus objetivos, que incluem voltar a Strahd e tornar-se enfim sua noiva. Se Strahd morrer e ela estiver viva, começa a saquear o conhecimento do castelo e do Templo Âmbar para se tornar a nova senhora de Baróvia.'],
    posses: 'A cripta guarda 250 pl, 1.100 po, 2.300 pe, 5.200 pp e 8.000 pc (as de platina e electrum têm o perfil de Strahd) e, enterrado sob as moedas, o livro de magias de Patrina, com capas de madeira entalhadas por ela, contendo todas as magias do arquimago.'
  },
  beucephalus: {
    aparencia: 'Ao abrir a porta da cripta, maior que todas as outras, sai ar seco e quente e fumaça: surge um cavalo negro de crina flamejante e cascos de fogo, soltando ondas de fumaça pelas narinas.',
    interpretar: 'Parte para o ataque assim que é libertado. O epitáfio diz: “Beucephalus, o Garanhão Portento: Que as flores cresçam cada vez mais brilhantes onde ele trota.”',
    jogo: 'É um pesadelo com 104 pontos de vida, o corcel de Strahd, na cripta 39 (a laje exige Força CD 20). Se o grupo o matar, Strahd os caça sem piedade. Quando quer sair do castelo, voa pelo eixo central da torre alta e sai pelo buraco no telhado.'
  },
  lorde_klutz: {
    aparencia: 'Sobre a laje, ossos humanos dentro da concha vazia de uma armadura de placas enferrujada, com uma espada longa atravessada no peitoral. Nem a armadura nem a espada são mágicas ou valiosas.',
    jogo: 'Epitáfio: “Ele caiu em sua própria espada.” Se alguém puxar a espada, ele aparece como guerreiro fantasma, agradece a quem o libertou e luta ao lado dessa pessoa pelos próximos sete dias (até cair a 0 pontos de vida, se for o aliado da tarokka). Morreu anos antes de Strahd virar vampiro, então não sabe nada da queda do conde nem da maldição.'
  },
  dostron: {
    aparencia: 'Um sarcófago dourado de 2,1 m, de chumbo batido envolto em ouro, com a tampa pintada com a imagem de um rei alto usando uma coroa de chifres.',
    interpretar: 'Governou esta terra muito antes de Strahd, dizia descender de um duque dos Nove Infernos e fez jus a essa ascendência com seus atos.',
    jogo: 'Na cripta 34, atrás do sarcófago, um urso-coruja empalhado ruge de garras estendidas (presente dado a Strahd; inofensivo). Um diabrete invisível, preso por contrato aos restos do rei, avisa: “Eu não faria isso se eu fosse você!”; adora mentir e fazer travessuras, dizendo que abrir a tampa libertará um inimigo. Dentro, só poeira.',
    posses: 'O ouro do sarcófago rende 500 po (4,5 kg).'
  },
  gralmore: {
    aparencia: 'O cadáver de um homem de longa barba branca, de pele grudada ao crânio e aos ossos, vestindo vestes vermelhas empoeiradas e abraçado a um cajado de madeira com um botão de latão numa ponta e um de mármore na outra.',
    jogo: 'Epitáfio: “Mago Ordinário” (cripta 37). O cajado é um bordão comum. Encaixar o botão de mármore numa concavidade da laje ergue a laje 1,5 m e revela um compartimento; o botão de latão dá 22 (4d10) de dano elétrico a quem segura o cajado.',
    posses: 'Uma caixa de couro negro com três pergaminhos de magia: cone de frio, bola de fogo e relâmpago.'
  },
  troisky: {
    aparencia: 'Na laje não há ossos, só um elmo de aço com três viseiras em forma de rosto humano, uma triste, uma feliz e uma irada; da entrada só se vê a irada. Ele usava esse elmo em batalha, daí o apelido “Rei de Três Faces”.',
    jogo: 'Cripta 12. O elmo não é mágico e pesa 4,5 kg. A laje é sensível ao peso: tirar o elmo sem pôr 4,5 kg no lugar libera gás venenoso (Constituição CD 14, 22 de dano de veneno, metade em sucesso); Percepção CD 12 revela os furos na base.'
  },
  lorde_erik: {
    aparencia: 'Um “homem dourado” sobre a laje: seu desejo ao morrer era ter o cadáver mergulhado em ouro derretido.',
    jogo: 'Cripta 22. Nobre rico em vida.',
    posses: 'A fina camada de ouro, descascada do cadáver dissecado, vale 500 po.'
  },
  lorde_lee: {
    aparencia: 'Um esqueleto enorme, coberto de joias e trapos, sobre uma laje alongada: Lorde Lee tinha bem mais de 2,10 m. Uma maça manchada de sangue e coberta de teias está encostada na laje.',
    jogo: 'Epitáfio: “Lorde Lee, o Esmagador: Mais que a vida, ele amava suas joias” (cripta 10). A maça é inofensiva e não mágica.',
    posses: 'Três colares de joias sobre o esqueleto, de 750 po cada.'
  },
  katsky: {
    jogo: 'Epitáfio: “Katsky, o Brilhante: Soberano, inventor e autoproclamado viajante do tempo” (cripta 13). Pendurado no teto por arames há um engenho voador de madeira, como asas de dragão retráteis com tiras de couro e fivelas: um planador que qualquer humanoide Pequeno ou Médio pode usar se pesar até 36 kg com o equipamento.',
    posses: 'Entre os ossos: um corno de beber tampado (na verdade um polvorinho com pólvora), uma bolsa gorda com 20 balas de prata e um “cetro” estranho de metal e madeira, que é um mosquete.'
  },
  stahbal: {
    jogo: ['Epitáfio: “Um amigo mais verdadeiro que qualquer governante já teve. Aqui repousa sua família em honra” (cripta 14). A cripta é um poço de 12 m que desce a um sepulcro úmido no fundo do Pilar de Ravenloft, com quinze caixões de pedra; cada um guarda um inumano.',
      'O chão está coberto de ossos e espadas enferrujadas, restos de serviçais que juraram se vingar da família de Stahbal; sempre que um inumano morre ali, os ossos formam 2d6 esqueletos. Há ossos para cem deles. As armadilhas de teletransporte em volta do túmulo de Strahd trocam de lugar com esses inumanos.']
  },
  artimus: {
    jogo: 'O arquiteto genial que construiu Ravenloft sobre as ruínas de uma fortaleza antiga; Strahd o recompensou com a cripta 19. Epitáfio: “Tu descansas em meio ao monumento de sua vida.”'
  },
  bascal: {
    aparencia: 'Um esqueleto coberto por pedaços de peles, segurando um sino sobre o peito cavado, com um alto chapéu de chef no crânio. As paredes são de gesso pintado como uma floresta perene na neve, descascando.',
    jogo: 'Epitáfio: “Chef de Luxo para os parentes do perdedor” (cripta 28). Tocar o sino faz um fogo mágico varrer a cripta: Destreza CD 17, 22 (4d10) de dano de fogo, e quem falhar pega fogo (5 por turno até ser apagado).',
    posses: 'Sob o chapéu, um talher de electrum com cabo cravejado de joias (250 po).'
  },
  eisglaze: {
    jogo: 'Cripta 29. Abrir a porta deixa o ar frio como o pior inverno: tudo está coberto de bolor marrom, que afeta quem estiver a 1,5 m da porta. Morto o bolor, cavando a crosta aparecem os ossos do barão.',
    posses: 'Ao lado dos ossos, uma lâmina da sorte com um desejo restante. Desejar sair de Baróvia falha; desejar a destruição de Strahd só o teleporta para 1,5 m da espada.'
  },
  jarnwald: {
    jogo: 'Epitáfio: “Lorde Jarnwald, o Vigarista: O gracejo estava sobre ele” (cripta 35). O piso é uma ilusão sobre um poço de 6 m de paredes lisas, com seis carniçais famintos e um silêncio mágico permanente (CD 14 para dissipar). Jarnwald foi “enterrado” sendo empurrado ali e devorado.',
    posses: 'No fundo do poço: pedaços de roupa, um punhado de dentes e um anel de sinete com um “J” estilizado (25 po).'
  },
  kroval: {
    interpretar: 'Epitáfio: “General Kroval ‘Cachorro Louco’ Grislek (Mestre da Caça): Um líder de cães e homens” (cripta 38). Ao abrir a porta, três pares de olhos vermelhos brilham no escuro e o cheiro de enxofre e pele queimada se espalha.',
    jogo: 'Três cães infernais atacam e lutam até a morte; na rodada seguinte, o espectro do general sai da cripta dando ordens aos cães em Infernal. Dentro, pedaços de ossos incinerados e murais chamuscados de legiões se chocando.',
    posses: 'Fragmentos de uma lança com ponta prateada, partida em três; consertar a repara como lança de prata não mágica.'
  },
  tatsaul: {
    jogo: 'Epitáfio: “O Último da Linhagem” (cripta 40). Três tochas apagadas nas paredes se acendem quando alguém entra pela primeira vez e queimam até acabar.'
  },
  artank: {
    jogo: 'Epitáfio: “Amigo e membro da Guilda Baroviana dos Destiladores de Vinho” (cripta 5). A cripta cheira suavemente a vinho, e milhares de garrafas vazias cobrem o chão, com rótulos do Mago dos Vinhos: Champanhe de Pisão, Moenda Dragão Vermelho e Uva Púrpura Triturada N.º 3. Se a tarokka puser um tesouro aqui, está sob as garrafas.'
  },
  tasha: {
    aparencia: 'Um esqueleto vestindo vestes esfarrapadas de sacerdotisa, sob um teto abobadado pintado com um magnífico mural de sol.',
    jogo: ['Epitáfio: “Curadora dos Reis, Luz do Ocidente, Serva, Companheira” (cripta 11). Criaturas feridas pela luz do sol, como vampiros, têm desvantagem em testes, ataques e resistências dentro da cripta.',
      'Uma pessoa de tendência boa que tocar o símbolo sagrado ouve uma voz feminina fantasmagórica: “Há um túmulo a oeste, com rosas que nunca murcham, num lugar construído por curandeiros, numa aldeia chamada Krezk. Quando tudo se volta para a escuridão, leve este símbolo sagrado ao túmulo para convocar a luz e encontrar um tesouro há muito perdido.” (A lápide está na Abadia de Santa Markóvia, área S7.)',
      'A baronesa Lydia Petrovna, de Vallaki, descende dela.'],
    posses: 'Um símbolo sagrado em forma de sol (25 po) no pescoço do esqueleto.'
  },
  dorfniya: {
    jogo: 'Cripta 8: um esqueleto coberto de trapos e, na parede, uma colcha bonita e magicamente preservada que retrata um banquete real (sem valor). O bobo dela, Pidlwick, está na cripta ao lado.'
  },
  stefan_gregorovich: {
    jogo: 'Epitáfio: “Primeiro Conselheiro do Rei Barov von Zarovich” (cripta 25). Os ossos estão empoeirados, mas o crânio está bem polido e irradia necromancia: enquanto ficar na cripta, responde até cinco perguntas por dia, como falar com os mortos. Em vida Stefan não era atento nem bem informado: tudo o que diz sobre Strahd ou o castelo é falso.'
  },
  ciril: {
    aparencia: 'Um esqueleto coberto de roupas vermelhas, com um símbolo sagrado de ouro preso numa mão ossuda. O teto é pintado como um dossel de árvores de folhas de outono, e dezenas de corvos de pedra, empoleirados numa borda a 3 m do chão, fitam a laje.',
    jogo: 'Epitáfio: “Amado do Rei Barov e da Rainha Ravenovia: Sumo Sacerdote da Santíssima Ordem” (cripta 30).',
    posses: 'O símbolo sagrado de ouro do Senhor da Alvorada, com pequenas pedras preciosas, vale 750 po; se uma criatura maligna o tocar, ele se consome numa explosão de luz (2d10 de dano radiante a 1,5 m).'
  },
  markovia: {
    jogo: 'A cripta 6 das catacumbas cheira a rosas; os restos se desintegraram, exceto um fêmur. Se o grupo perturbar os restos, uma aparição pálida sussurra: “O vampiro deve ser destruído. Use-me como sua arma.” O fêmur irradia evocação: é o Fêmur de Santa Markóvia (apêndice C). A frente da cripta tem uma placa de pressão que dispara quatro dardos envenenados.'
  },

  // ————————————————————————————————————————————————— Vallaki: a mansão do burgomestre (N3)
  vargas: {
    aparencia: 'De pé atrás de uma cadeira, segurando um livro aberto, encontra-se um homem. Seu peitoral, sua rapieira, sua túnica de seda e sua barba gordurosa brilham à luz da lâmpada. A almofada da cadeira tem bordado um urso rugindo, e um par de mastins negros descansa em pequenos tapetes ao lado dele.',
    interpretar: ['O Barão Vargas Vallakovich acredita que todos estão abaixo dele e trata qualquer questionamento como insolência: humilha quem o contradiz e fala como se Vallaki fosse o último bastião de ordem num mundo em ruínas. Seu lema é “Tudo vai ficar bem!”, e ele organiza festivais semanais obrigatórios convencido de que a felicidade forçada mantém Strahd afastado.',
      'É paranoico ao extremo: usa peitoral e rapieira até dentro da própria biblioteca. Por trás da arrogância há medo — ele teme Dama Wachter e sabe que ela quer seu lugar. Ele prende e põe no tronco qualquer um que ameace o humor da cidade, especialmente na véspera de um festival.',
      'Não é um guerreiro corajoso. Diante de estranhos bem armados, engole o orgulho e espera ter Izek e os guardas por perto antes de endurecer o tom. Interprete-o como um homem pomposo, frágil e perigoso apenas pelo poder que delega.'],
    sabe: ['Dois de seus criados desapareceram — o mordomo e a dama de companhia da baronesa — e ele encarregou Izek de encontrá-los. Suspeita de Dama Wachter, mas não tem provas do culto.',
      'Se o grupo o desafia ou o constrange, acusa os personagens de serem “espiões do diabo Strahd”.'],
    jogo: ['Escalada de conflito: primeiro manda doze guardas prender o grupo; se isso falhar, Izek conduz uma turba de trinta plebeus; por fim, os doze guardas restantes defendem a mansão. Se os personagens tomarem o lado dele, tornam-se convidados especiais do próximo festival.',
      'Seu filho Victor, sua esposa Lydia e o executor Izek vivem com ele na mansão (área N3). Derrubá-lo abre caminho para Dama Wachter — ou para o caos.'],
  },
  lydia: {
    interpretar: ['Baronesa Lydia Petrovna, esposa de Vargas, ri nervosamente por reflexo sempre que alguém fala algo desconfortável — é a forma dela de fingir que tudo vai bem. É gentil, temente a deus e ingênua: oferece chá, sanduíches e bolo aos pobres de Vallaki, a quem chama de “meus amigos mais queridos”.',
      'Supõe que qualquer estranho na mansão seja convidado do marido e trata o grupo com cortesia doméstica. Coloca visitantes para trabalhar: costurar fantasias infantis ou trançar o sol de vime do próximo festival.'],
    sabe: ['É irmã mais nova do Padre Lucian Petrovich e descendente de Tasha Petrovna, fundadora de Vallaki. Guarda seu vestido de noiva (área N3p), que estaria disposta a dar — mas o barão o proíbe.'],
    jogo: 'Quando o grupo chega, está na sala de jantar com oito camponesas em roupas desbotadas; uma nona mulher, bem-vestida e muito satisfeita consigo mesma, fala sem parar das decorações do festival. A baronesa não luta e é mais útil como fonte de simpatia e informação sobre a família.',
  },
  victor: {
    aparencia: 'Um jovem magricela, com uma mecha grisalha prematura no cabelo escuro, empoleirado num banquinho e abraçado a um livro de magias de couro aberto.',
    interpretar: ['Victor Vallakovich evita a atenção sufocante da mãe e a desaprovação do pai trancando-se no sótão da mansão (área N3t), onde se ensinou sozinho a magia. É misterioso, estranho e destituído de empatia; trata as pessoas como obstáculos e só se torna perigoso se for ameaçado.',
      'Sua ambição é escapar dos pais e de Vallaki: está construindo um círculo de teletransporte. Tem marionetes de madeira pintadas como “discípulos”, seis esqueletos de gato (ossos desenterrados atrás da propriedade Wachter) e um manto de mago pela metade.'],
    sabe: 'Humilhou Stella Wachter quando Fiona tentou aproximá-los, e o nome dele faz a moça se encolher. Achou um velho livro de magias na biblioteca da mansão anos atrás e acredita que o círculo o tirará de Baróvia. As marionetes são tratadas como “alunos desobedientes”.',
    jogo: ['Uma luz púrpura brilha no sótão à noite. Se o grupo aciona o glifo na entrada, Victor fica sob invisibilidade maior. Na porta há uma caveira entalhada e a placa “TUDO NÃO ESTÁ NADA BEM!”. O círculo de Victor é falho: quem estiver nele quando for conjurado sofre 3d10 de dano de energia e não vai a lugar nenhum; se chegar a 0 PV, é desintegrado (Arcanismo CD 15 percebe o defeito).',
      'Aparece na leitura do Tarokka como possível localização de tesouro (Cárcere A).'],
  },
  izek: {
    aparencia: 'O braço direito, perdido na infância, foi substituído por um apêndice diabólico: cheio de espinhos, com dedos longos e unhas compridas. Com um estalar desses dedos ele cria fogo.',
    interpretar: ['Izek Strazni é o executor do barão: brutal, temido e sociopata. Ideal: “O medo é uma arma poderosa. Eu uso isso para obter o que eu quero.” Vínculo: “Sou leal ao meu mestre, o barão Vallakovich, porque ele me levou para sua casa. Eu devo a minha vida, mas ele não é família.” Defeito: “Eu faria qualquer coisa, mataria qualquer coisa, para encontrar minha irmã.”',
      'Nasceu sem alma. Quando menino, um lobo atroz arrancou-lhe o braço na volta de uma pescaria no Lago Zarovich; a irmã fugiu para o bosque e nunca mais foi vista, e os pais morreram de desgosto. Órfão, matou as crianças que zombavam dele; o barão, em vez de puni-lo, o perdoou e o levou para casa. Quando não está cumprindo ordens, bebe vinho em quantidade. Um dia acordou de um torpor ébrio com o braço diabólico, e usa as chamas para pôr o medo do diabo em cada vallakiano.',
      'Não é bom investigador — resolve tudo com intimidação e força. Interprete-o com voz baixa, olhar fixo e ameaças curtas.'],
    sabe: ['Sonha há anos com uma bela jovem e forçou o brinquedeiro Gadof Blinsky a criar bonecas à semelhança dela, ameaçando queimar a loja. A mulher é Ireena, embora ele não saiba seu nome — nem que ela é a irmã perdida (encontrada vagando em choque e adotada por Kolyan).',
      'Foi encarregado pelo barão de encontrar os dois criados desaparecidos.'],
    jogo: ['Se vir Ireena, tenta levá-la à força para a mansão e mantê-la cativa no quarto (N3j) — cheio de bonecas empoeiradas de pele branca e cabelo castanho-avermelhado, todas parecidas com ela. Não permite ninguém entre os dois. Dorme ali à noite; só ele tem a chave.',
      'Leva o molho de chaves dos troncos da praça (N8). No quarto há um baú com roupas amassadas e uma espada curta. Em confronto, lidera a turba de trinta plebeus contra o grupo. Neutro e mau, CA 14 (couro batido), 112 PV, Intimidação +8.'],
  },
  // ————————————————————————————————————————————————— Vallaki: o Wachterhaus (N4)
  fiona: {
    interpretar: ['Dama Fiona Wachter resume sua filosofia em uma frase: “Eu prefiro servir ao diabo do que a um louco.” Fria, calculista e paciente, mantém a lealdade da família à linhagem von Zarovich e acredita que Strahd não é um tirano — no pior dos casos, um senhor negligente. Serviria com prazer a Strahd como burgomestre de Vallaki.',
      'Raramente sai de casa. Os cultistas adoradores do diabo da cidade a veem como líder espiritual; ela lê seu manifesto no “clube de livros”. Para recompensar os fiéis, põe seu diabrete invisível num pentagrama e encena um falso ritual em que os “príncipes da escuridão” fazem chover moedas de electro.',
      'Tem um segredo mórbido: dorme com o cadáver do marido, Nikolai, preservado sob repouso tranquilo. Fale com ela como uma aristocrata de modos impecáveis que mede cada visitante como peça de xadrez.'],
    sabe: 'Usou a filha Stella como peão para se aproximar de Victor; quando deu errado, trancou-a. Planeja tomar a cidade à força assim que tiver cultistas suficientes.',
    jogo: ['Sacerdotisa (CA 10, sem armadura). Magias: truques consertar, luz, taumaturgia; 1º comando, purificar alimentos, santuário; 2º augúrio, imobilizar pessoa, repouso tranquilo; 3º animar mortos, criar alimentos.',
      'Busca aliados poderosos para derrubar o barão: se Ernst os recomendar, convida o grupo para um jantar privado no Wachterhaus para avaliar se são capazes de esmagar Vargas.',
      'Na saleta (N4b), o retrato de um nobre sorridente de nariz quebrado e cabelo grisalho emaranhado é Lorde Nikolai. No quarto principal (N4o) há o retrato da família — pais como realeza sem coroa, dois filhos travessos e uma menina no colo do pai — e o cadáver de Nikolai impecavelmente vestido, com moedas de cobre sobre os olhos. Num baú de ferro forrado de chumbo estão os ossos de Leo Dilisnya.'],
  },
  nikolaiold: {
    aparencia: 'No retrato sobre a lareira: um nobre sorridente, de nariz quebrado e cabelo grisalho emaranhado — os filhos são sua imagem cuspida. O cadáver, deitado na cama de Fiona, está impecavelmente vestido, com moedas de cobre sobre os olhos.',
    interpretar: 'Em vida, Lorde Nikolai Wachter apoiou Strahd como toda a família, mas no fim da vida percebeu que Strahd precisava ser destruído para salvar Baróvia. Revivido, é leal neutro, sério e grato — um aliado incondicional, apesar dos protestos da esposa.',
    jogo: 'Carta Cavaleiro (Coringa 2) do Tarokka: “um homem morto de nascimento nobre, guardado por sua viúva”. Reviver os mortos ou ressurreição sobre o corpo preservado o trazem de volta; se o grupo não tiver os meios, Rictavio oferece um pergaminho de reviver os mortos.',
  },
  nikolai: {
    interpretar: 'Nikolai e Karl Wachter, filhos gêmeos de Fiona, são bêbados, impetuosos e encrenqueiros, sem nenhuma ambição. Passam o dia fora e a noite desmaiados. Gastam desenfreadamente o dinheiro da mãe, aproveitando o máximo da situação miserável de estarem presos em Vallaki sob Strahd e seu fantoche.',
    sabe: 'Sabem do culto da mãe, mas não que ela dorme com o cadáver do pai — se descobrissem, provavelmente se voltariam contra ela. Evitam brigar com estranhos bem armados.',
    jogo: 'Podem ser mandados pela mãe para convidar o grupo ao jantar no Wachterhaus. São os responsáveis pelo evento “Tigre, Tigre”: soltam o tigre-dentes-de-sabre de Rictavio no curral de Arasek durante um festival.',
  },
  karl: {
    interpretar: 'Gêmeo de Nikolai e tão inútil quanto ele: bêbado, impetuoso, sem ambição, encrenqueiro que só briga quando tem vantagem. Some de dia e desmaia à noite.',
    sabe: 'Sabe do culto, mas não que a mãe dorme com o cadáver do pai — descobrir isso o voltaria contra ela.',
    jogo: 'Com o irmão, solta o tigre de Rictavio no curral de Arasek (evento “Tigre, Tigre”) e pode levar o convite de Fiona ao grupo.',
  },
  stella: {
    aparencia: 'Uma jovem num vestido de noite sujo, que vem engatinhando, pula na cama de ferro com tiras de couro e mia como um gato.',
    interpretar: ['Enlouquecida, acredita ser um gato: “Pequeno gatinho não conhece vocês! Pequeno gatinho não gosta do cheiro de vocês!” Arranha a porta do quarto trancado (N4n) e pergunta miando se alguém “quer sair para brincar”.',
      'Curada (restauração maior), culpa a mãe por tê-la tratado horrivelmente e usado como peão. Encolhe-se ao ouvir o nome de Victor ou do burgomestre, sente que não tem ninguém em Vallaki e se agarra a qualquer personagem que seja gentil com ela.'],
    sabe: 'Não conhece nenhum segredo da mãe além do desejo de derrubar o burgomestre.',
    jogo: 'Carta Cárcere B do Tarokka (aliada). Só ajuda depois de curada; então se junta ao grupo com prazer e deixa a família para trás. Se levada à igreja de Sto. Andral, o Padre Lucian se oferece para cuidar dela.',
  },
  ernst: {
    interpretar: 'Ernst Larnak é leal só a si mesmo: um espião frio que serve Dama Wachter por dinheiro e chantagearia a patroa “num piscar de olhos” se a relação azedasse. Negue tudo com calma quando confrontado.',
    sabe: 'Conhece todos os segredos de Fiona. Espia do covil (N4k) as conversas dela com visitantes, para aconselhá-la depois. Tem a chave da porta da frente.',
    jogo: ['Começa a seguir o grupo em Vallaki; percebido com Percepção passiva 14+. Se confrontado, diz que vigia todos os estranhos, sem citar o empregador; se ameaçado, recua e reporta a Fiona quando se acha sozinho.',
      'Se recomendar o grupo, Fiona o convida para jantar. Se Arabelle foi resgatada, os Vistani devolvem a Ernst o ouro de Dama Wachter.'],
    posses: 'No covil: cálice de ouro (250 po), do qual bebe vinho; garrafa ornamentada de cristal (250 po); quatro candelabros de electro (25 po cada); urna de bronze pintada com crianças brincando (100 po).',
  },

  // ————————————————————————————————————————————————— PDMs do Apêndice D
  kasimir: {
    aparencia: 'Um elfo do crepúsculo (pele e cabelos escuros), mutilado: as orelhas foram cortadas como castigo, e ele usa um capuz para esconder a mutilação.',
    interpretar: ['Ideal: “Eu falhei com meu povo e com minha irmã, e agora eu devo me redimir ou ser condenado.” Vínculo: “Eu procuro trazer minha irmã Patrina há muito morta de volta à vida, mesmo que isso custe a minha própria.” Defeito: “Eu acredito que minha irmã pode ser redimida.”',
      'Há quatro séculos, convencido de que Patrina seria concubina de Strahd, liderou o apedrejamento dela. Em castigo, Strahd matou todas as mulheres do clã — o povo não pode mais ter filhos — e cortou as orelhas de Kasimir. Adotou o nome do Vistana que o acolheu, Velikov, e acha os Vistani atuais menos nobres que seus antepassados. Sua perda é tingida de ira fervente; fale com melancolia contida e culpa antiga.'],
    sabe: ['Patrina lhe fala em sonhos, dizendo-se arrependida. Ele não está convencido de que ela seja inocente, mas quer salvá-la da condenação. Não sabe que ela o usa para voltar e se tornar uma vampira tão poderosa quanto Strahd.',
      'Diz ao grupo que o segredo para quebrar o pacto de Strahd pode estar no Templo Âmbar — ele não sabe se é verdade; usa a ideia para convencê-los a acompanhá-lo. Seu objetivo real é achar um meio de trazer Patrina de volta.'],
    jogo: ['Vive no casebre N9a do acampamento dos elfos, com estatuetas de deidades élficas e uma tapeçaria de floresta. Arcano neutro, com visão no escuro e Ancestral Feérico. No Templo Âmbar, sabe ao tocar o sarcófago leste que achou a dádiva sombria que procurava (“Presente Obscuro de Kasimir”).',
      'Carta Vidente (Valete de Paus) do Tarokka: só vai a Ravenloft depois que o grupo o levar ao Templo Âmbar. Se a leitura puser um tesouro com ele, entrega-o em troca da promessa de acompanhá-lo.'],
    posses: 'Anel de calor (protege do frio do Templo Âmbar) e livro de magias de couro com suas magias preparadas e mais: compreender idiomas, dificultar detecção, identificação, imobilizar pessoa, localizar objeto, metamorfose, muralha de pedra, proteção contra o bem e mal, raio de gelo, tranca arcana.',
  },
  vanrichten: {
    aparencia: 'Como Rictavio: um bardo meio-elfo que se veste com cores fortes (é o disfarce do chapéu mágico). Na verdade é um humano já velho.',
    interpretar: ['Ideal: “O mal não pode passar em branco.” Vínculo: “Para proteger os que amo, devo mantê-los distantes e escondidos dos meus inimigos.” Defeito: “Eu sou amaldiçoado. Assim, nunca vou ter paz.”',
      'Médico e estudioso de Darkon. Os Vistani roubaram seu filho Erasmus, de 14 anos, e o venderam ao vampiro Barão Metus; quando o encontrou, o garoto era uma cria vampírica, e ele mesmo o destruiu com uma estaca, a pedido do filho. Metus matou sua esposa Ingrid em vingança. Desde então caça monstros e odeia os Vistani.',
      'Como Rictavio, é espalhafatoso: conta histórias ultrajantes que jura verdadeiras, diz ser mestre de cerimônias de um circo em busca de novos atos e admite não ter talento musical. Por trás, é paciente, frio e metódico. Trabalha sozinho — uma maldição Vistana traz desgraça a quem se torna amigo dele — e foge se estiver para ser desmascarado.'],
    sabe: ['Sabe que não vence Strahd num confronto direto e espera o momento certo; suspeita que Strahd hiberna às vezes por anos. Investiga os Guardiões da Pena (homens-corvo), sem expô-los, e quer apanhar os espiões de Strahd, começando pelos Vistani.',
      'Não sabe que Ezmerelda, sua ex-protegida, está em Baróvia; se souber, fará o possível para protegê-la sem arriscar seus planos. Strahd procura por ele e quer trancá-lo nas masmorras para quebrar seu espírito aos poucos.'],
    jogo: ['Hospedado há quase um mês na Estalagem Água Azul (N2), dorme da meia-noite à alvorada. Duas vezes por dia sai com maçãs e um bife de lobo “para o fabricante de brinquedos”: as maçãs são para a égua Drusilla, o bife para o tigre-dentes-de-sabre no vagão “Carnaval das Maravilhas de Rictavio” (N5), com a inscrição “Eu te trago da Sombra para a Luz!”. Planeja soltar o tigre nos Vistani. Deu o macaco Piccolo a Blinsky.',
      'Se o tigre escapa e o barão manda prendê-lo, pede ao grupo que distraia os guardas enquanto junta cavalo, vagão e tigre, e foge para sua torre no Lago Baratok. Se o Padre Lucian morrer, sugere queimar o corpo. Dá um pergaminho de reviver os mortos para Nikolai Wachter se souber da necessidade. Carta Tarokka que o aponta como aliado; normalmente relutante, muda de ideia se ouvir falar da leitura.'],
    posses: 'Espada-bengala (bengala de madeira com lâmina de prata), chapéu de disfarce, anel de proteção mental, pergaminho de reviver os mortos, chave do vagão. Clérigo de 9º nível; causa 3d6 extra contra mortos-vivos.',
  },
  ezmerelda: {
    aparencia: 'Uma Vistana caçadora de monstros com uma prótese de perna e pé de madeira abaixo do joelho direito, que ela se preocupa em esconder.',
    interpretar: ['Ideal: “O mal que alimenta o inocente é o pior dos males e deve ser destruído.” Vínculo: “Meu mentor e professor, Dr. Rudolph van Richten, é como um pai para mim.” Defeito: “Eu vou onde os anjos têm medo de pisar.”',
      'Quando menina, viu a própria família raptar Erasmus e entregá-lo a um vampiro — ainda ouve os apelos dele. Viu van Richten poupar seus pais e ficou tocada pela misericórdia. Aos quinze anos fugiu de casa; dois anos depois o encontrou, e ele pôs uma espada em sua garganta achando que era uma assassina. Caçaram juntos por dois anos, mas ele nunca confiou nela e os dois se separaram.',
      'É ousada, direta e competente, mas ansiosa por ganhar o respeito do mentor. Quando se junta ao grupo, testa-os: “Você já viu um vampiro mudar sua forma?” e “Você sabe como neutralizar a habilidade regenerativa de um vampiro?”.'],
    sabe: 'Estudou a pesquisa de van Richten sobre Strahd e o Castelo Ravenloft e quer eliminar o vampiro. Achou pertences do mentor na torre do Lago Baratok, mas não ele. Teme que Strahd esteja além de sua capacidade. Depois da vitória, não acredita que Strahd esteja realmente morto.',
    jogo: ['Pode aparecer invisível no Castelo Ravenloft (toca o ombro de um personagem e sussurra “Não tenha medo. Estamos do mesmo lado”), chegar a Argynvostholt num cavalo roubado dos Vistani, perseguida por Arrigal (evento “Caçada de Arrigal”), ou em outros pontos. Forjar aliança com ela vale um marco de nível.',
      'Tem um baralho tarokka no vagão (cap. 11, área V1) e pode fazer a leitura das cartas como Madame Eva. CB, CA 17, 82 PV; ataca com rapieira +1 e machadinha +1 ou espada curta prateada; Praga e Olho do Mal Vistani; magias de mago de 7º nível.'],
    posses: 'Couro batido +1, rapieira +1, machadinha +1, espada curta prateada, duas poções de cura maior, seis frascos de água benta, três estacas de madeira, carroça com equipamento de caçar vampiros.',
  },
  vladimir: {
    aparencia: 'Um cadáver de cavaleiro em meia armadura, caído no trono da capela, segurando com firmeza uma espada grande cujo punho imita asas de dragão de prata e cujo pomo é uma cabeça de dragão com uma opala negra entre os dentes.',
    interpretar: ['Ideal: “A vingança é tudo que me resta.” Vínculo: “Eu jurei fidelidade à Ordem do Dragão de Prata. Embora a ordem tenha sido quebrada, minha fidelidade nunca morrerá.” Defeito: “Destruir Strahd acabaria com o tormento do vampiro, e isso é algo que nunca permitirei.”',
      'Foi amigo do dragão Argynvost e comandante de campo da Ordem. Morreu na queda do vale, não antes de ver Strahd matar seu amado, Sir Godfrey. Voltou como ressurgido e seu ódio trouxe outros cavaleiros de volta. Quando marchou contra Ravenloft, Eva lhe disse que Strahd já estava morto e preso num inferno de sua própria criação; desde então mata quem possa aliviar o tormento do vampiro. Até o amor por Godfrey é só uma memória fraca sob o ódio.',
      'Fala pouco e com dureza: “Vão embora.” Se insistirem, diz que pereceu defendendo esta terra há mais de quatro séculos, que odeia Strahd acima de tudo, mas que Strahd deve sofrer eternamente — e que destruirá quem tentar pôr fim a isso.'],
    jogo: ['Está no trono da área Q36 de Argynvostholt; não pode ser surpreendido por quem sobe os escombros. Luta em autodefesa ou se o grupo o pressiona a ajudar a destruir Strahd; ao sofrer dano pela primeira vez, seis guerreiros fantasmas aparecem para defendê-lo. Se Godfrey ajudar o grupo e o enfrentar, o reconhecimento brilha em seus olhos, mas só o farol o liberta.',
      'Levar o crânio de Argynvost ao mausoléu acende o farol: Vladimir lembra do que perdeu e ele e os cavaleiros encontram descanso (o corpo fica sem vida). LM, CA 17, 192 PV; dois ataques de espada grande (+9, 4d6+6), mais 4d6 contra Strahd.'],
    posses: 'Espada grande +2 e um símbolo sagrado do Senhor da Alvorada em platina (250 po) sob a armadura.',
  },
  godfrey: {
    interpretar: 'Paladino da Ordem do Dragão de Prata, morto por Strahd diante de Vladimir, que o amava. Voltou como ressurgido pelo ódio do comandante. Fala com voz áspera, sente que o espírito de Argynvost não descansou e se entristece com o que a ordem se tornou, mas os juramentos a Vladimir o impedem de ajudar de forma significativa.',
    sabe: 'Pode contar toda a história de Argynvost e da ascensão e queda da Ordem do Dragão de Prata. Vladimir não se lembra de que ele era seu amado.',
    jogo: ['Carta Fantasma (Rei de Copas) do Tarokka: relutante, acompanha o grupo se convencido (Persuasão CD 15) de que a honra da Ordem pode ser restaurada. O destino abre sua memória para o amor por Vladimir, e isso o move. Se o farol não estiver aceso, a decisão provoca a ira dos outros ressurgidos e um conflito armado; se estiver aceso, continua ressurgido (agora leal e bom) para cumprir uma última tarefa antes de descansar com Vladimir.',
      'Ressurgido conjurador (ND 6), paladino de 16º nível: auxílio divino, comando, destruição trovejante, detectar magia; ajuda, arma mágica, marca da punição; destruição cegante, dissipar magia, remover maldição; aura de pureza, destruição estonteante. Seu antigo quarto com Vladimir é a área Q39.'],
  },
  abbot: {
    aparencia: 'Um deva que assume a forma de um sacerdote humano impressionante e bonito, na casa dos vinte ou trinta anos, que não envelheceu um dia em mais de um século. Usa um símbolo sagrado do Senhor da Alvorada no pescoço. Se ameaçado, abandona o disfarce e revela a verdadeira forma angelical.',
    interpretar: ['Ideal: “Eu quero livrar Baróvia da sua doença. Ao dar ao diabo o desejo de seu coração, eu levo a salvação a ele e à sua terra.” Vínculo: “Eu amo as criaturas que eu crio, incluindo meus belos golems e híbridos.” Defeito: “Eu não posso ser corrompido. Meu coração é puro, minhas intenções nobres e boas.”',
      'Enviado dos Planos Superiores para honrar o legado de Santa Markóvia, reabriu a abadia para cuidar de doentes. Curou os Belview da lepra, mas, com pena, cedeu ao desejo deles de ter traços bestiais. Vasili von Holtz trouxe-lhe saber proibido do Templo Âmbar e o ajudou a criar os párias — e então revelou ser Strahd. O deva concluiu que Strahd não pode morrer em Baróvia, apiedou-se da “doença” dele e decidiu curá-la reunindo-o com seu amor perdido.',
      'É calmo, agradável e absolutamente convencido da própria pureza. Strahd não quer a noiva golem, mas se diverte corrompendo o anjo e o empurra a novas depravações.'],
    sabe: 'Sabe que Strahd trouxe o grupo a Baróvia por um motivo e não quer frustrar os planos do conde. Em Krezk, muitos acreditam que ele seja Strahd disfarçado; ele visita o Santuário do Sol Branco, fala pouco e exige tributo em vinho.',
    jogo: ['Criou Vasilka, um golem de carne de vestido vermelho esfarrapado, costurado com partes de mulheres mortas, e lhe ensina etiqueta e dança. Quer um vestido de noiva: em troca, conjura ressuscitar mortos até três vezes ou dá a cada personagem o benefício de seu toque de cura. Se recusarem ou forem grosseiros, manda-os sair e ataca se insistirem, protegendo Vasilka.',
      'Eventos de Krezk: “Algo Velho” (se o grupo não reviver Ilya, ele o faz, sem se apresentar) e “Algo Emprestado” (exige do burgomestre um vestido de noiva em um mês, sob pena de morte). Estatísticas de deva, tendência LM.'],
  },
  baba: {
    interpretar: ['Ideal: “Nenhum amor é maior do que o amor de uma mãe por seu filho.” Vínculo: “Eu sou a mãe de Strahd. Qualquer um que contesta esse fato pode apodrecer.” Defeito: “Não vou descansar até o último dos inimigos do meu filho ser destruído.”',
      'Parteira da rainha Ravenovia e devota da Mãe Noite, sentiu em Strahd bebê um potencial de grandeza e escuridão; conjurava proteções sobre ele, cantava rimas mágicas em noites de tempestade e pôs nele a “faísca da magia”. Banida pela rainha por seu apego doentio, fez sacrifícios à Mãe Noite até a rainha adoecer e morrer, e se mudou para o vale.',
      'Ainda vê Strahd como a criança perfeita, apesar de todos os horrores. Nunca o confrontou, porque não suportaria a rejeição: vive em negação, mantendo no meio da cabana a ilusão de um bebê angelical num berço, a quem chama de “Strahd”. Interprete-a como uma velha fanática e maternal de forma monstruosa.'],
    sabe: 'Com a ajuda de uma convenção de bruxas de Ravenloft, descobriu os Guardiões da Pena e declarou guerra a eles; aliou-se aos druidas da Colina Yester, que veneram Strahd como deus, convencendo-os de que o deu à luz. Roubou uma das três gemas do Mago dos Vinhos e a usa como isca para os homens-corvo.',
    jogo: ['Vive nas ruínas de Berez (U3) numa cabana rastejante sobre um toco, animada pela gema verde sob o assoalho; ao lado flutua o crânio de gigante que ela pilota (voo 12 m) e duas gaiolas com enxames de corvos. Sete espantalhos recheados de corvos mortos guardam o charco. Cinquenta crânios no curral de bodes uivam se alguém mexer na cerca, e ela chega em 2 rodadas.',
      'Precisa banhar-se no sangue de bestas nas noites de lua nova (a banheira manchada de sangue na cabana); sem isso, envelhece em segundos até virar pó. Pode ser vista no banho se o grupo chegar sem ser notado. CM, CA 15, 120 PV, maga de 16º nível (dedo da morte, palavra de poder atordoar), vira enxame de moscas e é protegida contra adivinhação.'],
    posses: 'No baú com glifo (Investigação CD 17, 5d8 trovejante; libera quatro garras rastejantes): 1.300 po, cinco gemas de 500 po, óleo de precisão, pergaminhos de curar ferimentos em massa e revivificar, dez projéteis de funda +1, flautas assombradas e uma pedra da boa sorte.',
  },

  // ————————————————————————————————————————————————— Vallaki: a igreja de Sto. Andral (N1)
  lucian: {
    interpretar: ['Padre Lucian Petrovich (LB, sacerdote) cuida da igreja do Senhor da Alvorada, nomeada em honra de Sto. Andral, e faz o seu melhor para elevar os espíritos da cidade. Todas as noites, a igreja se enche de adultos e crianças aterrorizados, e ele lhes oferece orações e a promessa de proteção do santo.',
      'É gentil, cansado e cauteloso. Escondeu o roubo dos ossos por medo da angústia que a notícia causaria e para não estragar o festival do burgomestre. Suspeita corretamente de Milivoj, mas reluta em confrontá-lo porque o rapaz é temperamental. É irmão mais velho da baronesa Lydia.'],
    sabe: 'Era o único em Vallaki que sabia dos ossos sob o altar, mas contou o segredo a Yeska, cerca de um mês atrás, para acalmar o menino medroso. Perguntou a Yeska se ele contou a alguém: o garoto acenou que sim, mas não disse o nome. Se o grupo tiver um clérigo ou paladino de tendência boa, Lucian menciona o roubo esperando ajuda.',
    jogo: ['Devolver os ossos à cripta (sob a capela; Milivoj ergueu e recolocou as tábuas) torna a igreja terra sagrada de novo, como sob consagrar. Se o grupo passar três dias ou mais em Vallaki sem resolver isso, acontece a “Festa de Sto. Andral”: as crias vampíricas da loja de caixões e quatro enxames de morcegos atacam a igreja, e Strahd entra em forma de morcego e mata Lucian, a menos que os personagens intervenham.',
      'Se morrer, é enterrado no cemitério e se levanta na noite seguinte como cria vampírica de Strahd (Rictavio sugere queimar o corpo). O ataque desmoraliza a cidade e, dias depois, o povo culpa o barão, incendeia a mansão e apedreja a família Vallakovich. Pode acolher Stella Wachter curada.'],
  },
  yeska: {
    interpretar: 'Menino órfão e coroinha (LB, não combatente), medroso. Assiste o Padre Lucian na igreja e se assusta com as noites de Baróvia.',
    sabe: 'Lucian lhe contou dos ossos de Sto. Andral para tranquilizá-lo, e ele passou o segredo a Milivoj. Quando o padre perguntou se ele tinha contado a alguém, apenas acenou com a cabeça, sem dizer o nome — tem medo e culpa.',
    jogo: 'É a ponta do fio: pressionado com gentileza, pode levar o grupo a Milivoj, que por sua vez leva a Henrik e à loja de caixões.',
  },
  milivoj: {
    aparencia: 'Um rapaz musculoso, com uma sobrancelha constantemente enrugada, raramente visto sem uma pá, que empunha como clava.',
    interpretar: 'Cuida da propriedade da igreja e cava sepulturas. Rejeita a proclamação do burgomestre de que “Tudo ficará bem!”, está frustrado por não conseguir proteger os irmãos mais novos e quer se livrar da maldição de Baróvia, mas não vê esperança de fuga. É temperamental, desconfiado e se sente acuado.',
    sabe: 'Soube dos ossos por Yeska, passou a informação a Henrik van der Voort e os roubou para ele em troca de dinheiro para alimentar os irmãos. Arrancou o piso da capela com a pá para chegar à cripta e depois recolocou as tábuas.',
    jogo: 'Confessa tudo com um teste de Carisma (Intimidação) CD 10. Plebeu neutro com Força 15, +4 para acertar e 1d4+2 de dano com a pá.',
  },
  henrik: {
    interpretar: ['Henrik van der Voort (LM, plebeu) é um carpinteiro medíocre e um homem perturbado e solitário. Lucra com a morte dos outros, e ninguém quer sua companhia por causa da natureza medonha de seu trabalho.',
      'Vive com medo: meses atrás, Strahd o visitou disfarçado de um nobre imponente e bem-vestido chamado Vasili von Holtz e prometeu “bons negócios” em troca de ajuda. Desde então, sua oficina é o covil de seis crias vampíricas — ex-aventureiros transformados por Strahd.'],
    sabe: 'As crias ordenaram que ele conseguisse os ossos de Sto. Andral; ele pagou Milivoj pelo roubo. Os vampiros planejam atacar a igreja.',
    jogo: ['As janelas são treliças de ferro e as portas ficam trancadas por dentro. Se baterem, grita “Estamos fechados! Vão embora!”; se acusado, “Vá embora! Me deixe em paz!”. Se o grupo invadir, não resiste: indica os ossos (guarda-roupa do quarto, N6e) e o ninho dos vampiros (depósito de madeira, N6f, seis caixas cheias de terra).',
      'Se denunciado ao barão, quatro guardas vêm prendê-lo: de dia, ele se entrega com os ossos alegando que os vampiros o forçaram; à noite, diz onde estão, mas não os busca por medo de morrer.'],
    posses: 'No fundo secreto do guarda-roupa (Percepção CD 15): um saco com os ossos de Sto. Andral e outro com 30 pp e 12 pe, todas as moedas com o perfil de Strahd. Na loja, treze caixões vazios.',
  },
  // ————————————————————————————————————————————————— Vallaki: presos e festivais
  udo: {
    aparencia: 'Um homem abatido, acorrentado à parede do fundo de um roupeiro na mansão do burgomestre, sem nada além de uma tanga; os grilhões de ferro cortaram seus pulsos e o sangue escorre por suas mãos.',
    interpretar: 'Sapateiro vallakiano (LN, plebeu), preso durante o Festival da Cabeça de Lobo por erguer uma placa sugerindo que dessem o barão de comer aos lobos. Assustado e humilhado, só quer voltar para casa.',
    sabe: 'Planeja contar ao Padre Lucian os maus-tratos que sofreu na mansão. Sua mãe, Willemina, reza por ele todas as noites na igreja.',
    jogo: 'Está na área N3m; o barão tem as chaves da porta e das algemas (que se rompem com 10 de dano num só golpe). Se o barão souber da fuga, manda Izek buscá-lo; sob grande coação, Udo entrega nomes ou descrições de quem o libertou, pondo o burgomestre contra o grupo.',
  },
  willemina: {
    interpretar: 'Uma velha triste que passa as noites no rebanho do Padre Lucian, rezando para que seu filho, o sapateiro Udo Lukovich, seja libertado. Fale com ela como alguém esgotada pela espera, que agarra qualquer esperança.',
    jogo: 'É o gancho para que o grupo descubra Udo acorrentado na mansão do barão (N3m). Libertar Udo e devolvê-lo a ela conquista a gratidão da congregação.',
  },
  lars: {
    interpretar: 'Membro da milícia da cidade (LB, guarda). Solta uma risada fora de hora durante um festival do barão — os outros guardas ficam horrorizados.',
    jogo: 'O burgomestre o prende “por despeito” e, a menos que o grupo interfira, Lars é amarrado pelos tornozelos e pulsos e arrastado atrás do cavalo do barão para “divertimento” de todos. Se os personagens desafiarem o barão, ele os bane de Vallaki; se protestarem, os guardas tentam desarmá-los e expulsá-los (os Guardiões da Pena depois roubam as armas de volta para eles).',
  },
  // ————————————————————————————————————————————————— Vallaki: a Estalagem Água Azul (N2)
  szoldar: {
    interpretar: ['Caçador de lobos (N, batedor) que frequenta a Estalagem Água Azul com o parceiro Yevgeni. Mata lobos e vende a carne; o trabalho é perigoso e sangrento. É sombrio, tem olhar assombrado e, nas raras vezes em que tem algo a dizer, fala de forma brusca.',
      'Corajoso, mas raramente perde uma chance de ganhar uma moeda. Tem família, mas passa a maior parte do tempo com Yevgeni, afogando as dores ou caçando.'],
    sabe: 'Conhece bem os bosques e o vale e não teme sair de Vallaki de dia. A cabeça de urso da mansão do barão foi, na verdade, um presente de seu falecido pai, Szoldar Grygorovich (o barão diz que foi o próprio pai quem matou o urso).',
    jogo: 'Guia por 5 po por dia, ou dá direções para marcos importantes em troca de bebida. Acha tolice viajar “neste reino amaldiçoado” à noite e só o faz por pagamento exorbitante (100 po ou mais). Seu arco tem um entalhe para cada lobo que matou; a maioria das cabeças de lobo nas paredes da taverna é obra da dupla.',
  },
  yevgeni: {
    aparencia: 'Um caçador de lobos sombrio, de olhar assombrado, com uma capa de pele de lobo à qual acrescenta um novo pedaço a cada caçada.',
    interpretar: 'Parceiro de Szoldar (N, batedor). Geralmente papagaia o que o amigo diz, com menos palavras. Corajoso e interesseiro na mesma medida; tem família, mas vive entre a taverna e a floresta.',
    jogo: 'Mesmas condições de Szoldar: 5 po por dia como guia, direções por bebida grátis e nada de viajar à noite, a não ser por 100 po ou mais.',
  },
  urwin: {
    interpretar: ['Estalajadeiro da Água Azul (LB), considera a estalagem um santuário contra os males da terra: portas e janelas podem ser barradas. Serve sopa de beterraba quente e pão fresco de graça com a cama (1 pe), e se sente ofendido se alguém reclama dos vinhos, porque sua família os faz.',
      'É um homem-corvo e membro de alto escalão dos Guardiões da Pena, sociedade secreta de homens-corvo que se opõe a Strahd. Discreto, confidencial e prudente: testa estranhos antes de confiar neles.'],
    sabe: ['Há uma desavença com o pai, Davian Martikov, dono do Mago dos Vinhos, a quem ele e Danika chamam de “o velho corvo”. Urwin não menciona o parentesco ao grupo.',
      'Sabe mais do que diz sobre qualquer tesouro da leitura de cartas escondido na estalagem.'],
    jogo: ['Em voz baixa, pede: “Meu suprimento de vinho está quase acabando, e o próximo carregamento está atrasado. Eu lhes darei o que procuram se me trouxerem o meu vinho.” Promete quarto e comida grátis; considera lidar com o pai um teste digno. Manda um homem-corvo em forma de corvo acompanhar o grupo à distância.',
      'Se o grupo ganhar a confiança dos homens-corvo, na próxima vez que estiver em apuros 1d4 homens-corvo aparecem para ajudar. A qualquer momento, 1d4 Guardiões da Pena estão na estalagem, no telhado ou lá dentro. Cuida da cozinha enquanto Danika cuida do bar.'],
  },
  danika: {
    interpretar: 'Danika Dorakova (LB), esposa e sócia de Urwin, também é mulher-corvo e protege a família e os Guardiões da Pena. Normalmente cuida do bar enquanto o marido está na cozinha; firme, atenta aos clientes e aos filhos que correm pela taverna.',
    sabe: 'Chama o sogro Davian de “o velho corvo”. Conhece a rede de homens-corvo da cidade.',
    jogo: 'Tem chaves de todos os quartos, inclusive o de Rictavio. Entre a alvorada e o meio-dia, a família está no andar de cima ou no sótão dos corvos (N2q).',
  },
  brom: {
    interpretar: 'Um dos dois filhos de Urwin e Danika (9 e 11 anos), homem-corvo como os pais. Corre pela taverna com o irmão e dá no pé facilmente; quase não para no quarto.',
    jogo: 'Jovem demais para lutar (poucos pontos de vida). O quarto dos meninos (N2o) tem murais de corvos e uma caixa de brinquedos Blinsky esquecidos, incluindo um teatro de bonecos com um vampiro e um caçador de vampiros.',
  },
  bray: {
    interpretar: 'Irmão de Brom, filho de Urwin e Danika, também homem-corvo. Brincalhão e rápido, some pelos corredores da estalagem.',
    jogo: 'Jovem demais para lutar. Pode ser uma boa fonte de fofoca inocente sobre os hóspedes (como o estranho Rictavio) e sobre os corvos no sótão.',
  },
  // ————————————————————————————————————————————————— Vallaki: comércio
  blinsky: {
    aparencia: 'Um homem corpulento que usa um gorro de bufão roído por traças durante o horário da loja, mais por hábito do que para agradar aos visitantes.',
    interpretar: ['Gadof Blinsky (CB, plebeu) chama a si mesmo de “um feiticeiro de pequenas maravilhas”, mas anda consumido pelo desespero porque ninguém parece gostar dele nem de seus brinquedos macabros; a maioria dos moradores o evita. Acredita que o burgomestre está certo — que a única forma de escapar de Baróvia é deixar todos “felizes” — e quer que toda criança tenha brinquedos divertidos.',
      'Recebe os clientes com uma saudação ensaiada: “Bem-vindos amigos, para a Casa de Blinsky, onde a felicidade e os sorrisos podem ser comprados a preços de barganha. Talvez você conheça uma criança que precisa de alegria? Um brinquedo para uma menina ou menino?”'],
    sabe: ['Izek o obriga a fazer uma boneca nova por mês, ameaçando queimar a loja; cada uma, feita a partir das descrições de Izek, fica mais parecida com Ireena. Blinsky não sabe que modelo é uma pessoa real — mas, se Ireena estiver com o grupo, percebe na hora.',
      'Considera-se aprendiz do grande inventor Fritz von Weerg e ouviu dizer que a maior invenção dele, um homem mecânico, está no Castelo Ravenloft.'],
    jogo: ['Se o grupo for a Ravenloft, pede que tragam a “obra-prima” mecânica; em troca, faz qualquer brinquedo que desejarem ou, talvez, lhes dá o macaco. O barão lhe paga algumas peças de ouro por mês para fazer decorações dos festivais.',
      'À venda (9 pc cada): boneco sem cabeça com saco de cabeças (uma com olhos e boca costurados), forca em miniatura com “enforcado”, bonecas aninhadas cuja menor é um cadáver mumificado, móbile de morcegos, carrossel de lobos perseguindo crianças, boneco de ventríloquo parecido com Strahd. A boneca parecida com Ireena não está à venda. Suas etiquetas dizem “Se não é divertido, não é Blinsky!”.'],
  },
  piccolo: {
    interpretar: 'Um macaco (use o babuíno) que chegou a Vallaki com Rictavio. Não era bem-vindo na estalagem, e Rictavio o deu a Blinsky, percebendo que o brinquedeiro era solitário. Blinsky o veste com um tutu de bailarina e o treina para buscar brinquedos nas prateleiras altas.',
    jogo: 'Se o tigre-dentes-de-sabre de Rictavio for solto, rastreia pelo faro Rictavio ou Piccolo. Blinsky pode oferecer o macaco como recompensa. Um tesouro da leitura de cartas pode estar ligado a ele (Blinsky admite tê-lo recebido de um mestre de cerimônias chamado Rictavio).',
  },
  gunther: {
    interpretar: 'Gunther Arasek (LB, plebeu) e a esposa Yelena, um casal de meia-idade, são donos do Estaleiro Arasek (N5), loja geral e depósito de galpões de aluguel. Comerciantes espertos, cobram cinco vezes o preço normal por equipamento de aventura de até 25 po.',
    sabe: 'Rictavio lhes pagou uma quantia generosa em ouro para vigiar o vagão “Carnaval das Maravilhas de Rictavio” sem fazer perguntas. Ouviram “grunhidos malignos” e arranhões vindos lá de dentro e viram o “dono esquisito” jogar comida por uma escotilha no teto.',
    jogo: 'No evento “Tigre, Tigre”, quando o barão investiga, os Arasek acabam confessando tudo, inclusive o suborno — e o barão manda prender Rictavio.',
  },
  yelena: {
    interpretar: 'Yelena Arasek (LB, plebeia), esposa e sócia de Gunther no Estaleiro Arasek. Prática, cobra caro e prefere não saber o que há no vagão que guardam.',
    sabe: 'Com o marido, recebeu ouro de Rictavio para vigiar o vagão sem perguntas, e sabe que algo grande e feroz vive lá dentro.',
    jogo: 'Pressionada pelo barão após a fuga do tigre, confessa o suborno e as escotilhas de comida, entregando Rictavio.',
  },
  leo: {
    interpretar: 'Leo Dilisnya foi um dos soldados que traíram e mataram Strahd no dia do casamento de Sergei e Tatyana. Escapou do Castelo Ravenloft, mas foi caçado e morto pelo vampiro.',
    jogo: 'Seus ossos estão num baú de ferro forrado de finas folhas de chumbo, numa prateleira alta do armário do quarto principal do Wachterhaus (N4o); a família Wachter o guarda trancado para que ele nunca seja erguido dentre os mortos. A chave fica num pequeno gancho escondido na lareira (Percepção CD 10); sem ela, uma agulha envenenada deixa inconsciente por 1 hora. Pode guardar o tesouro da leitura de cartas.',
  },

  // ————————————————————————————————————————————————— A Casa da Morte (Apêndice B)
  rose: {
    aparencia: 'Uma menina de dez anos no meio de uma rua sem vida, tentando calar o irmão que chora abraçado a uma boneca de pelúcia. No sótão, seu pequeno esqueleto ainda veste as roupas esfarrapadas que os personagens reconhecem.',
    interpretar: ['Rosavalda Durst é a irmã mais velha e protetora: acalma Thorn, fala pelos dois e toma as rédeas. Na rua, diz ao grupo: “Há um monstro em nossa casa!” — e se recusa a voltar até que o monstro se vá, embora aceite esperar no pórtico.',
      'Lá fora, ela e Thorn são ilusões criadas pela casa para atrair visitantes; não sabem disso e desaparecem se atacados ou forçados a entrar. Dentro do sótão, os fantasmas das crianças sabem que estão mortos e temem o abandono.'],
    sabe: ['Acredita que os pais mantêm um monstro preso no porão (eram os gritos das vítimas do culto) e que há um bebê, Walter, no berçário do terceiro andar — falso, mas ela acredita.',
      'Como fantasma, conta que os pais as trancaram no sótão “para protegê-los do monstro” e que morreram de fome. Se perguntada como se chega ao porão, aponta a casa de bonecas: “Há uma porta secreta no sótão.”'],
    jogo: ['Fantasma Pequeno, LB, 35 PV, sem Aspecto Horripilante (ND 3). Só luta em autodefesa, mas se o grupo tentar ir embora tenta possuir alguém: o possuído ganha a fraqueza “Eu gosto de estar no comando e fico com raiva quando outras pessoas me dizem o que fazer” e não sai da casa nem desce à masmorra. Intimidação CD 11 (uma ação) a expulsa.',
      'Só descansa se seus restos forem postos na cripta com seu nome (área 23E); então some para sempre. Pôr as duas crianças para descansar dá inspiração a cada personagem. O testamento dos pais deixa a casa e o moinho de vento a ela e ao irmão.'],
  },
  thorn: {
    aparencia: 'Um menino de sete anos que chora segurando uma boneca de pelúcia. No sótão, seu esqueleto ainda embala a boneca.',
    interpretar: 'Thornboldt Durst é medroso e chorão, grudado na irmã, que fala por ele. Como fantasma, sabe que está morto e teme ser abandonado outra vez. Morreu de fome com Rose, trancado no sótão por pais que se esqueceram deles.',
    sabe: 'Acredita no “monstro do porão” e no bebê Walter no berçário. Era jovem e inocente demais para entender os crimes dos pais.',
    jogo: 'Fantasma Pequeno, LB, 35 PV (ND 3). Luta só em autodefesa; se o grupo tentar sair, pode possuir um personagem, que ganha a fraqueza “Tenho medo de tudo, inclusive minha própria sombra, e choro de desespero quando as coisas não vêm até mim” (Intimidação CD 11 o expulsa). Descansa se seus restos forem postos na cripta 23F.',
  },
  gustav: {
    aparencia: 'No retrato do salão superior, o patriarca aparece com a esposa e os dois filhos sorridentes, segurando nos braços um bebê envolto. Hoje é um lívido de vestes negras esfarrapadas, escondido numa cavidade da parede de terra.',
    interpretar: 'Gustav Durst liderava a rica família que praticava artes sombrias e, por sedução e doutrinação, formou um culto com um círculo de amigos. Tentavam invocar entidades extraplanares, saqueavam visitantes, sacrificavam-nos em rituais e davam banquetes mórbidos. Teve um caso com a babá, de que nasceu Walter, natimorto; o culto matou a babá pouco depois. Esqueceu os próprios filhos trancados no sótão.',
    sabe: 'O culto via Strahd como um messias. Quando capturou e matou aventureiros que Strahd atraíra como brinquedos, o vampiro chegou numa carruagem negra e matou os cultistas por isso.',
    jogo: ['Com Elisabeth, é um dos dois lívidos escondidos atrás das paredes do quarto dos líderes do culto (área 34); explodem das paredes e atacam se alguém tirar algo do baú de lá.',
      'O baú guarda o espólio de aventureiros mortos: manto da proteção, quatro poções de cura, cota de malha e um livro de magias de capa amarela, entre outros. Sua cripta (23C) tem um caixão vazio.'],
  },
  elisabeth: {
    aparencia: 'No retrato da família, olha com um toque de desprezo para o bebê que o marido segura. Hoje é uma lívida de vestes negras esfarrapadas, escondida nas paredes da masmorra.',
    interpretar: 'Matriarca da família e do culto da Casa da Morte. Fria e cruel, desprezava Walter, filho do marido com a babá. Ela e Gustav assinaram um testamento deixando tudo a Rose e Thorn — e depois os deixaram morrer de fome no sótão.',
    jogo: 'Ataca com Gustav quem remexe o baú da área 34. Na cripta dela (23D), perturbar o caixão libera um enxame de centopeias da parede. No quarto do casal (área 12) há uma caixa de joias de prata e ouro (75 po) com três anéis de ouro e um colar de platina com pingente de topázio (750 po).',
  },
  walter: {
    interpretar: 'Filho natimorto de Gustav Durst com a babá da família. O culto matou a babá pouco depois; seu espírito assombra o quarto dela como um espectro — uma jovem aterrorizada e esquelética, que não fala.',
    sabe: 'Rose e Thorn acreditam que o bebê Walter está vivo no berçário do terceiro andar. É mentira que eles mesmos não entendem.',
    jogo: 'No berçário, um berço coberto por uma mortalha negra guarda um embrulho do tamanho de um bebê — vazio. Abrir a porta do berçário faz o espectro da babá aparecer e atacar. Na masmorra, a cripta 23B tem o nome Walter Durst gravado na laje, e também está vazia.',
  },
  // ————————————————————————————————————————————————— Colina Yester (cap. 14)
  kavan: {
    interpretar: 'Chefe impiedoso da tribo Jived nas Montanhas Balinok, séculos antes de Strahd. Vivo, já tinha traços de vampiro: dormia de dia, caçava à noite, bebia o sangue das presas e vivia na escuridão. Seu espírito ainda espera alguém digno de sua lança.',
    sabe: 'Fala como um sussurro de voz profunda trazido pelo vento: “Por muito tempo eu tenho esperado por alguém que seja digno. Minha lança está sedenta por sangue. Recuperem-na, e governarão estas montanhas em meu lugar.”',
    jogo: 'Evento “Lança Sangrenta de Kavan” na Colina Yester: o espírito chama um personagem (de preferência bárbaro, druida ou patrulheiro), que sente a lança num dos montes de pedra (área Y2) a 9 m. Sob as rochas estão os ossos mofados de Kavan e uma lança de sangue; qualquer um pode empunhá-la, mas só o escolhido ganha o +2 em ataque e dano (e 2d6 PV temporários ao derrubar um alvo).',
  },
  // ————————————————————————————————————————————————— O Mago dos Vinhos (cap. 12)
  davian: {
    interpretar: ['Davian Martikov é o patriarca dos Martikov e dono da vinícola Mago dos Vinhos: um homem velho, mal-humorado e desconfiado, homem-corvo como filhos e netos e membro dos Guardiões da Pena. A família fornece vinho de graça às tavernas de Baróvia, sabendo o bem que isso faz ao povo.',
      'Culpa o filho do meio, Urwin, pela perda da primeira gema, dez anos atrás: Urwin estava de vigia e, segundo Davian, foi ver a noiva. Os dois estão brigados desde então; Urwin o chama de “o velho corvo”.'],
    sabe: ['Até confiar no grupo, não fala das gemas: só diz que druidas e infectados atacaram a adega e forçaram a família a se refugiar na floresta.',
      'Se o grupo libertar a adega, conta que as três “sementes” mágicas foram roubadas — gemas do tamanho e forma de pinhas, cada uma com uma luz verde brilhante como uma tocha. A segunda (três semanas atrás) está com Baba Lysaga, em Berez; a terceira (cinco dias atrás) foi levada pelos druidas à Colina Yester. Não sabe o que houve com a primeira.'],
    jogo: ['Recebe o grupo com os homens-corvo encapuzados de couro escuro no bosque ao norte do vinhedo. Pede, “para o bem de Baróvia”, que recuperem as gemas. Grato, põe Adrian e Elvir para entregar vinho à Água Azul, ao acampamento Vistani ou a Krezk e sugere que o grupo escolte a carroça.',
      'Sem as gemas, o vinhedo morre e o vale fica sem vinho. Se o grupo sair e voltar antes de lidar com o Estilhaço de Inverno, a árvore infectada da Colina Yester vem devastar a vinha.'],
  },
  adrian: {
    interpretar: 'Filho mais velho de Davian, homem-corvo e membro dos Guardiões da Pena. Prático e leal ao pai, ajuda a defender e administrar a vinícola.',
    sabe: 'Se o grupo vier atrás de vinho, confirma que restam três barris na doca de carga (W2), mais três barris e várias garrafas na adega (W14), e mais vinho fermentando (W9) — as cubas foram envenenadas pelos druidas.',
    jogo: 'Depois de retomada a adega, carrega os três barris na carroça e faz a entrega com Elvir, sob escolta do grupo. Dorme no quarto oeste (W19) com o pai e o irmão.',
  },
  elvir: {
    interpretar: 'Filho mais novo de Davian, homem-corvo e Guardião da Pena. Trabalha ao lado de Adrian no transporte do vinho.',
    jogo: 'Prepara os cavalos e acompanha Adrian na entrega do vinho depois que a adega é retomada. Dorme no quarto oeste (W19) com o pai e o irmão.',
  },
  stefania: {
    interpretar: 'Filha adulta de Davian, mulher-corvo e membro dos Guardiões da Pena. Casada com Dag Tomescu, mãe de Claudiu, Martin, Viggo e Yolanda. Com a família expulsa da adega, sua prioridade é proteger os filhos pequenos.',
    jogo: 'Ocupa com Dag o quarto de Davian na adega enquanto criam a filha bebê: cama com cabeceira em forma de corvo gigante, berço de balanço esculpido e uma escrivaninha com registros de envio de vinho — “SV” (Sangue da Vinha), “AA” (Água Azul), “K” (Krezk), “Vistanis” e, nos registros antigos, “S” (Strahd). A chave do baú fica escondida num pomo solto da cama.',
  },
  dag: {
    interpretar: 'Dag Tomescu, marido de Stefania, homem-corvo e Guardião da Pena. Defende a família e a vinícola ao lado dos Martikov.',
    jogo: 'Divide com Stefania o quarto de Davian na adega. Faz parte dos nove homens-corvo escondidos no bosque quando o grupo chega.',
  },
  claudiu: {
    interpretar: 'Filho adolescente de Stefania e Dag, homem-corvo. Jovem demais para lutar, mas já conhece a vida dupla da família.',
    jogo: 'Dorme com os dois irmãos no quarto leste (W19), onde há brinquedos espalhados — entre eles um cavalo de balanço negro de olhos selvagens e chamas pintadas, com o nome “Beucephalus” e a etiqueta “Se não é divertido, não é Blinsky!”.',
  },
  martin: {
    interpretar: 'Um dos filhos pequenos de Stefania e Dag. Homem-corvo ainda criança, não combatente.',
    jogo: 'Dorme no quarto leste da adega com Claudiu e Viggo.',
  },
  viggo: {
    interpretar: 'Um dos filhos pequenos de Stefania e Dag. Homem-corvo ainda criança, não combatente.',
    jogo: 'Dorme no quarto leste da adega com Claudiu e Martin.',
  },
  yolanda: {
    interpretar: 'A caçula de Stefania e Dag, ainda bebê. Ainda não consegue assumir outras formas e, na prática, é uma criança humana.',
    jogo: 'O berço de balanço esculpido no quarto de Stefania e Dag é dela.',
  },
  muriel: {
    interpretar: 'Muriel Vinshaw é uma mulher-corvo dos Guardiões da Pena, amiga dos Martikov. Cautelosa, esconde sua licantropia o máximo possível, não identifica de bom grado outros homens-corvo e foge se atacada.',
    sabe: ['Vigia Baba Lysaga: sabe que a bruxa manda espantalhos atacar o Mago dos Vinhos, que é inimiga dos Martikov e que mantém cabras montesas presas num cercado (acha que é para comer).',
      'Cresceu ouvindo histórias dos druidas da Colina Yester, que abandonaram suas crenças para adorar “o diabo Strahd”, e sabe que eles visitam o círculo de pedras de Berez de tempos em tempos.'],
    jogo: 'Em Berez, em forma humana, espreita no círculo de pedras (U6) e sinaliza aos heróis com uma lanterna. Não acompanha o grupo contra Baba Lysaga, mas indica Argynvostholt e a Colina Yester.',
  },

  // ————————————————————————————————————————————————— Krezk (cap. 8)
  dmitri: {
    interpretar: ['Burgomestre Dmitri Krezkov (LB, nobre): seus ancestrais construíram Krezk ao pé da abadia depois que os exércitos de Strahd conquistaram o vale. É um lorde e espera ser tratado como tal. Põe a segurança da aldeia acima do bem-estar de estranhos.',
      'Já viu aventureiros antes e assume que o grupo é aliado ou inimigo de Strahd — em ambos os casos, problema para Krezk. Por trás da formalidade, está de luto: Ilya, o último de seus quatro filhos, morreu de doença há sete dias, aos catorze anos (Intuição CD 12 percebe que ele esconde a perturbação).'],
    sabe: 'O fim da linhagem Krezkov consterna a aldeia inteira. Desconfia do Abade, que muitos em Krezk acham ser Strahd disfarçado. Os párias da abadia roubam à noite os corpos do cemitério da família.',
    jogo: ['Vem ao portão quando os guardas o chamam. A única forma de ganhar seu favor é ajudar Krezk; então seu juramento e sua honra de nobre baroviano o obrigam a oferecer hospitalidade. Pede ao grupo que traga um carregamento de vinho do Mago dos Vinhos — a aldeia está sem vinho há dias. Se o grupo forçar a entrada, manda os guardas se abaixarem para evitar sangue e tenta apressar a partida deles.',
      'Evento “Algo Velho”: se ninguém reviver Ilya, o Abade aparece e o revive, dizendo que os “deuses da luz” querem a linhagem restaurada; Dmitri teme ter julgado mal o Abade. Evento “Algo Emprestado”: o Abade exige dele um vestido de noiva em um mês, como pagamento ou sob pena de morte; Dmitri pede ao grupo que escolte Anna até Vallaki.'],
  },
  anna: {
    interpretar: 'Anna Krezkova (LB, nobre), esposa destemida de Dmitri. Perdeu os quatro filhos para doenças. Devota; na ausência de um padre, é chamada para supervisionar partos e rezar pela mãe e pela criança.',
    sabe: 'Se Ilya for revivido pelo Abade, louva o Abade e Santa Markóvia pelo ato generoso antes de cuidar do filho.',
    jogo: ['Evento “Algo Novo”: supervisiona o parto de Dimira Yolensky, cujo bebê nasce saudável mas não chora; a parteira Kretyana Dolvof diz, perturbada: “Aquela criança não tem alma. Muito triste.”',
      'Evento “Algo Emprestado”: parte para Vallaki com dois guardas, quatro plebeus e uma mula para buscar um vestido de noiva, e o burgomestre pede escolta ao grupo. As costureiras de Vallaki cobram 50 moedas que ela não tem e não terminariam a tempo; elas apontam que a baronesa Lydia guarda seu vestido de noiva.'],
  },
  ilya: {
    interpretar: 'Filho de catorze anos de Dmitri e Anna, último herdeiro dos Krezkov. Morreu de doença há sete dias e foi enterrado há quatro no cemitério atrás da casa do burgomestre; seu túmulo ainda está fresco e intocado.',
    jogo: 'Se o grupo não o reviver, o Abade o faz (evento “Algo Velho”): conjura reviver os mortos sem componentes, e Ilya volta com 1 ponto de vida e uma loucura indefinida aleatória. O Abade usa isso como alavanca para exigir o vestido de noiva do burgomestre.',
  },
  vasilka: {
    aparencia: 'Uma moça de pele de alabastro num vestido vermelho rasgado e sujo, com o cabelo ruivo bem preso para não tocar os ombros macios, parecendo perdida em seus pensamentos. A menos de 1,5 m, veem-se as costuras na pele empoeirada, onde partes de corpos roubados das sepulturas de Krezk foram cuidadosamente unidas.',
    interpretar: 'Golem de carne primorosamente montado pelo Abade para ser a noiva de Strahd. Obedece a todas as ordens dele; está aprendendo etiqueta e, em breve, a dançar. Não fala, mas solta um grito profano se sofrer dano.',
    jogo: ['Se levada à fúria, luta até o Abade retomar o controle ou até ser destruída; tem a força sobrenatural de um golem de carne apesar do tamanho menor. O Abade a defende a todo custo e quer um vestido de noiva para ela.',
      'Carta do Tarokka: “uma mulher que é mais do que a soma de suas partes” (sinos de casamento, ou uma sentença de morte). Strahd não tem interesse nela.'],
  },
  clovin: {
    aparencia: 'Um pária de 1,5 m em forma de barril, com duas cabeças: a direita, totalmente formada, mistura um homem de cabelos irregulares e uma cabra com chifres curtos; a esquerda, com metade do tamanho, tem um rosto macio de querubim parcialmente coberto de couro de crocodilo e língua bifurcada de cobra. Tem uma pinça de caranguejo no lugar da mão esquerda e uma pata de urso no lugar do pé direito. Usa um manto de monge mal ajustado com cinto de corda de cânhamo.',
    interpretar: ['Servo fiel do Abade, por medo e por um senso de lealdade distorcido. Sua loucura: “Estar bêbado me mantém são.” Vive bêbado, mas não a ponto de atrapalhar o combate. Toca violão (com o arco na mão humana e a pinça no braço do instrumento) lindamente quando está bêbado; a música faz a cabeça menor dormir.',
      'A cabeça maior conduz toda a conversa. Os outros párias o desprezam e o acusam de acumular comida e matá-los de fome aos poucos; ele os deixaria morrer, mas o Abade proibiu.'],
    jogo: ['Mora no sótão e campanário (S17), onde o Abade monta seus golens; esconde três garrafas de Uva Púrpura sob as peles da cama. Toca o sino do jantar, e todos os párias gritam “Comida!”. Carrega as chaves dos galinheiros. É o único que Marzena deixa chegar perto.',
      'Carta Fantoche (Valete de Copas) do Tarokka: “um homem da música, um homem com duas cabeças”. Enquanto o Abade viver, recusa-se a acompanhar o grupo por medo da ira do mestre.'],
  },
  otto: {
    aparencia: 'Um pária de 1,4 m que se agacha em vez de ficar de pé, parecido com um anão sem barba, com manchas de pele de burro no rosto e no corpo. Tem uma orelha humana e uma de lobo, focinho e presas de lobo salientes, braços humanos, pernas e pés de leão e cauda de burro. Usa um manto de lã simples.',
    interpretar: 'Porteiro e coveiro do Abade, leal e mau, mas péssimo guarda. Mal fala Comum e ri como um burro zurrando. Sua loucura: “Eu sou a pessoa mais inteligente, mais sábia, mais forte, mais rápida e mais bonita que conheço.”',
    jogo: 'Dorme com Zygfrek sob pilhas bolorentas de peles no portão norte (S6); Furtividade CD 12 passa sem acordá-los. Se o grupo parecer amigável, escoltam-no ao pátio e vão buscar o Abade. À noite, os dois se cobrem com redes de galhos de pinheiro e descem à aldeia para desenterrar túmulos frescos. Tem Salto em Pé.',
  },
  zygfrek: {
    aparencia: 'Uma pária de 1,4 m: o lado esquerdo do rosto e do corpo é coberto de escamas de lagarto, o direito com tufos de pelo de lobo cinza, com pele humana pálida entre eles. Um dos olhos é de felino, e os dedos e mãos parecem patas de gato com polegares opositores. Tem voz rouca e usa um manto cinza com guarnição de pele preta.',
    interpretar: 'Porteira e coveira do Abade ao lado de Otto, leal e má, servil ao mestre mas pouco atenta como guarda.',
    jogo: 'Guarda o portão norte (S6) com Otto e sai à noite com ele para roubar corpos dos cemitérios de Krezk. Tem Visão no Escuro.',
  },
  mishka: {
    aparencia: 'Um pária de 1,5 m, estreito e magro, com três olhos vermelhos de aranha no lado direito do rosto (o esquerdo parece humano), uma pata de rã no lugar da mão esquerda e uma pata de corvo com garras no lugar do pé direito.',
    interpretar: 'Caótico e mau. Em sua loucura, descobriu que gosta de matar pessoas. Irmão mais novo de Marzena.',
    jogo: 'Esconde-se a 6 m de profundidade no poço de 24 m do pátio (S12a), agarrado à parede, e ataca quem acender uma luz sobre ele. Tem Patas de Aranha.',
  },
  marzena: {
    aparencia: 'Uma pária de 1,3 m, de postura encurvada, cujo cabelo preto longo e fibroso esconde grande parte do rosto, mas deixa ver as mandíbulas de aranha no lugar da boca. Tem braços e asas de morcego e um casco fendido no lugar do pé direito.',
    interpretar: 'Caótica e neutra, nervosa e com medo de tudo e de todos, exceto Clovin. Sua loucura: “Estou convencida de que inimigos poderosos estão me perseguindo e seus agentes estão em todos os lugares que vou. Tenho certeza de que estão me observando o tempo todo.”',
    jogo: 'Acorrentada a um poste no pátio (S12d); tenta alçar voo, mas as correntes a detêm. Não deixa ninguém chegar perto o bastante para soltá-la; se as amarras forem abertas magicamente ou quebradas, voa para longe e nunca volta. Tem Voo.',
  },
  andral: {
    interpretar: 'Santo do passado de Baróvia, cujo nome batiza a igreja do Senhor da Alvorada em Vallaki. Seus ossos, selados numa cripta sob o altar, protegiam a igreja das depredações de Strahd.',
    sabe: 'Até recentemente, só o Padre Lucian sabia dos ossos. Yeska contou a Milivoj, que os roubou a mando de Henrik van der Voort — por ordem das crias vampíricas escondidas na loja de caixões.',
    jogo: ['Os ossos estão num saco no fundo secreto do guarda-roupa de Henrik (N6e, Percepção CD 15). Devolvê-los à cripta torna a igreja terra sagrada de novo, como sob consagrar, e impede a “Festa de Sto. Andral”, o ataque de Strahd e das crias à igreja depois de três dias.',
      'Um dos três vitrais da capela de Argynvostholt o retrata, entre o Senhor da Alvorada e Santa Markóvia.'],
  },

  // ————————————————————————————————————————————————— Argynvostholt (cap. 7)
  argynvost: {
    interpretar: ['Dragão de prata que chegou ao vale anos antes de Strahd, disfarçado de um nobre humano, Lorde Argynvost. Não veio pela beleza do lugar: conhecia o Templo Âmbar, repositório de poder maligno, e construiu Argynvostholt por perto para garantir que nada aprisionado lá escapasse. Rico e à vontade entre humanos, atraiu campeões do bem e fundou a Ordem do Dragão de Prata; só os iniciados sabiam de sua verdadeira natureza.',
      'Na guerra, a Ordem expulsou os que procuravam o Templo Âmbar e abrigou os inimigos de Strahd, mas foi esmagada quando chegaram os reforços do conde. Em vez de se esconder no covil, Argynvost saiu e lutou até o amargo fim. Strahd cortou seu cadáver em pedaços, despojou-o até o osso e levou o esqueleto a Ravenloft como troféu.'],
    sabe: 'Seu espírito não descansa. Se o grupo consertar com um truque consertar a pintura cortada na sala de estudos (Q40), o farol da imagem pisca com luz prateada e a forma espectral do dragão enche a sala: “Meu crânio está na fortaleza do meu inimigo, exibido em um lugar de mau presságio. Tragam meu crânio…”',
    jogo: ['O crânio (113 kg) está acima das portas duplas de aço do leste do Salão de Ossos de Ravenloft (K67, o Salão de Ossos que Cyrus Belview construiu com a mesa, as cadeiras e a panela de ossos). Levado ao mausoléu de Argynvostholt, o espírito sobe à torre mais alta e se torna um farol de luz sobre Baróvia: Vladimir e os cavaleiros ressurgidos lembram o que perderam e encontram descanso. Acender o farol vale um marco de nível.',
      'Uma estátua coberta de musgo de um dragão de prata de porte nobre guarda a entrada (Q1), rachada e irradiando evocação.'],
  },
  // ————————————————————————————————————————————————— Berez (cap. 10)
  marina: {
    interpretar: 'Muito antes de Ireena, Marina foi uma plebeia de Berez com uma semelhança avassaladora com Tatyana, na aparência e nos modos. Tornou-se a obsessão de Strahd: ele a seduziu na calada da noite e bebeu seu sangue. Antes que ela virasse cria vampírica, o burgomestre Lazlo Ulrich e o Irmão Grigor a mataram para salvar sua alma.',
    sabe: 'Strahd escreveu: “Eu não tinha nada a mais para dar se não meu próprio sangue vital, mas era a escolha dela tomá-lo. Ela seria enfim minha noiva.”',
    jogo: 'Em vingança, Strahd matou os dois, fez o rio transbordar e afogou Berez, que virou pântano. O monumento a Marina (U5), mandado erguer por Strahd, fica escondido no charco (Percepção CD 15 a cada 10 minutos de busca); o fantasma de Ulrich aponta o local se for posto para descansar. Pode guardar o tesouro da leitura de cartas.',
  },
  lazlo: {
    interpretar: 'Lazlo Ulrich foi o burgomestre de Berez. Com o Irmão Grigor, matou Marina para impedir que ela se tornasse cria de Strahd; o conde o matou e afogou a vila. Strahd se recusa a deixar seu espírito descansar pelo que ele fez com “a pobre Marina”. Como fantasma, é neutro e bom, triste e amargurado.',
    sabe: 'Conta o triste conto de Marina se pedirem. Se a leitura de cartas puser um tesouro em Berez, diz que o resto “é papo-furado” e aponta: “Siga em direção ao oeste. Duzentos passos da mansão há um monumento para minha loucura e o tesouro que vocês procuram.”',
    jogo: 'Assombra a mansão arruinada de Berez (U2) e não sai dela. Ataca se ameaçado ou se o grupo vasculhar a mansão atrás de tesouro; reduzido a 0 PV, volta em 24 horas. Só descansa se o grupo o convencer de que Marina renasceu como Ireena — ele precisa vê-la em carne e osso. XP só por pô-lo para descansar.',
  },
  grigor: {
    interpretar: 'Sacerdote de Berez que ajudou o burgomestre Lazlo Ulrich a matar Marina para salvar sua alma da condenação. Strahd o matou em represália antes de afogar a vila.',
    jogo: 'Os restos da igreja de Berez (U4) — púlpito podre, sino de ferro meio afundado no pântano e um cemitério afundado pela metade — são o que resta de sua paróquia.',
  },
  // ————————————————————————————————————————————————— O covil dos lobisomens (cap. 15)
  kiril: {
    interpretar: ['Líder dos lobisomens de Baróvia, os “Herdeiros da Mãe Noite”. Brutal e dominador: arma crianças sequestradas e as força a lutar até a morte até restar uma, que vira lobisomem — a “força e pureza da matilha”. Acha que um bando maior seria difícil de controlar e alimentar.',
      'Quando Emil contestou sua liderança, Kiril sumiu por dias e voltou com dezenas de lobos atrozes de Strahd, que levaram Emil a Ravenloft. Seu poder agora se apoia no medo de Strahd, e os membros mais velhos da matilha não gostam de seus métodos.'],
    sabe: 'Os lobisomens servem Strahd por medo, acreditando que a Mãe Noite o abençoou. Strahd às vezes os deixa atravessar as brumas para trazer ou atrair gente ao domínio. Não deixa Zuleika caçar.',
    jogo: ['Geralmente está fora caçando quando o grupo chega. Dorme em forma de lobo na caverna Z6, atrás de uma cortina de pele humana costurada. Pode liderar uma caçada com seis lobisomens e nove lobos (90 PV) — por exemplo, ao redor da Torre de Van Richten.',
      'Se o grupo tirar as crianças do covil enquanto ele vive, persegue-os implacavelmente com o bando. Zuleika quer que o grupo o mate quando voltar (evento “Líder do Bando”); Emil, se estiver de volta, também quer matá-lo e tomar seu lugar. Bianca é sua companheira.'],
  },
  emil: {
    aparencia: 'Um homem jovem e forte, agarrado às barras da cela, lutando para não ranger os dentes, com as roupas em farrapos e encharcado da cabeça aos pés.',
    interpretar: 'Lobisomem que desafiou Kiril: defendia manter todas as crianças sequestradas vivas e transformá-las, para a matilha sobreviver. Strahd o prendeu nas masmorras de Ravenloft (K75a) como castigo pela dissidência. Finge ser um morador de Vallaki perseguido por lobos até o castelo e implora por resgate, oferecendo ajuda em troca.',
    sabe: 'Ansioso por provar seu valor a Strahd, recompensa quem o liberta atacando na primeira boa oportunidade — a menos que os personagens digam ser aliados de sua esposa, Zuleika; nesse caso tenta sair do castelo e reencontrá-la.',
    jogo: 'Lobisomem com 72 PV. Se chegar ao covil com o grupo, pode mandar os outros não atacarem. Quando Kiril voltar, quer matá-lo e virar líder: se conseguir, deixa o grupo partir, mas só liberta as crianças se Zuleika o convencer. Se Kiril e Emil morrerem, Zuleika vira líder e corta os laços com Strahd.',
  },
  zuleika: {
    aparencia: 'Uma mulher vestida em farrapos, ajoelhada diante de uma estátua tosca de madeira de uma mulher com cabeça de lobo, coberta de guirlandas de videiras e flores noturnas.',
    interpretar: 'Lobisomem, esposa de Emil. Acredita que Strahd matou seu amado e reza à Mãe Noite por orientação, esperando que a deusa convença Strahd a libertá-lo. Culpa Kiril acima de tudo e sabe que não pode matá-lo sozinha; o resto da matilha teme desafiá-lo. Kiril não a deixa caçar, e ela vive confinada no covil, vigiando as crianças presas.',
    sabe: 'Vê os personagens como a resposta às suas orações e pede que matem Kiril quando ele voltar da caçada.',
    jogo: ['No santuário da Mãe Noite (Z7), com seis gaiolas de madeira (oito crianças de 7 a 12 anos) e o tesouro amaldiçoado aos pés da estátua. Se o grupo trouxer Emil vivo, liberta as crianças com alegria; se confirmarem que ele morreu, ainda as solta se ajudarem contra Kiril.',
      'Carta Sacerdote (Mestre de Glifos) do Tarokka: acompanha o grupo se prometerem vingar Emil matando Kiril. Se Kiril e Emil morrerem, torna-se líder e rompe com Strahd.'],
  },
  bianca: {
    aparencia: 'Uma lobisomem de pelo branco, que dorme em forma de lobo na caverna do sul.',
    interpretar: 'Companheira de Kiril Stoyanovich, leal a ele. Alerta e agressiva.',
    jogo: 'Dorme na caverna Z5a; reage rapidamente a qualquer som de alarme e ataca todo intruso que vê.',
  },
  skennis: {
    interpretar: 'Lobisomem velho demais para caçar, que passa o tempo tocando mal uma flauta de electrum, com nove lobos aconchegados atrás dele que vão aonde ele vai. Apesar de passado do auge, luta até a morte para defender o covil e se ofende com quem mata seus lobos.',
    sabe: 'Com o último suspiro, ameaça: “Quando Kiril voltar, ele vai te esfolar vivo.”',
    jogo: 'Covil dos lobos (Z3), em forma humana, 36 PV; o som dissonante da flauta pode ser seguido desde a entrada. Tesouro: a flauta de electrum (não mágica, 250 po) e uma bolsa com quatro gemas de 50 po.',
  },
  wensencia: {
    interpretar: 'Lobisomem encarregada de treinar Kellen, o novo membro do bando de Kiril. Protetora com a menina, mas leal à matilha.',
    jogo: 'Dorme em forma de lobo na caverna do norte (Z5b) com Kellen. Ao soar o alarme, leva Kellen para as celas (Z9), tranca-a, manda que assuma forma humana e depois se junta à defesa do covil.',
  },
  kellen: {
    interpretar: 'Menina de dez anos sequestrada de sua casa no Domínio de Liam, uma aldeia perto da Floresta das Brumas (Reinos Esquecidos). Foi infectada pela licantropia depois de vencer um dos torneios desprezíveis de Kiril. Assustada e agarrada a um brinquedo.',
    jogo: 'Não combatente (CA 10, 2 PV, imunidades normais de lobisomem). Abraça uma boneca Blinsky de madeira que se parece estranhamente com um dos personagens, pintada e vestida como zumbi. Restauração maior ou remover maldição curam sua licantropia. Pode ser a criança que os ganchos de Vau da Adaga pedem para resgatar.',
  },
  // ————————————————————————————————————————————————— O Templo Âmbar (cap. 13)
  exethanter: {
    aparencia: 'Um esqueleto decrépito em vestes esfarrapadas, com pontos vermelhos de luz queimando nas órbitas, de pé no centro de uma sala de móveis e tapeçarias da realeza cobertos de poeira e teias.',
    interpretar: ['Arquimago maligno que chegou ao templo muito depois de seus magos guardiões terem sido corrompidos. Violou as sentinelas, falou com um vestígio preso em âmbar e aprendeu a se tornar lich; transformou os esqueletos dos antigos defensores em caveiras flamejantes. Passou a zelar pelo templo — não para guardar seus segredos, mas para compartilhá-los.',
      'Hoje está fraco e desleixado: não lembra o próprio nome nem suas magias. Recebe o grupo com um confuso “Eu conheço vocês?”. Supõe que vieram em busca de conhecimento e poder e, se inclinado a ajudar, explica como funcionam os sarcófagos de âmbar.'],
    sabe: 'Pressentiu que Strahd era um homem marcado pelo destino quando ele chegou buscando imortalidade. Lembra que os Poderes das Trevas que criaram o domínio nasceram no templo e alimentam os males de Strahd.',
    jogo: 'Lich com 99 PV, só truques (ND 10). Restauração maior devolve memória e magias: então entrega as senhas de todas as portas trancadas (menos a da área X28, onde está seu filactério — a senha é “Exethanter”), conta a história de Strahd e do templo e as palavras de comando dos livros. Uma segunda restauração maior devolve seus 135 PV, e ele escolta o grupo; as outras criaturas do templo não os atacam enquanto ele estiver junto. Vira pó se reduzido a 0.',
  },
  neferon: {
    interpretar: 'Arcanaloth que guarda o salão principal do Templo Âmbar de dentro da cabeça oca da grande estátua do deus dos segredos sem rosto, envolto em escuridão mágica. Frio, paciente e letal à distância.',
    jogo: 'Ataca à vista com magias de longo alcance; com visão verdadeira, enxerga invisíveis e através da escuridão, e os olhos da estátua lhe dão três quartos de cobertura. Quando começa a conjurar, as três caveiras flamejantes de X17 vão às seteiras e lançam mísseis mágicos e bola de fogo. A escuridão pode ser dissipada (CD 17); há uma porta secreta na base da estátua (Percepção CD 20) com escada até a cabeça.',
  },
  vilnius: {
    aparencia: 'Um homem de robes chamuscados, com o cabelo ralo meio queimado e o rosto e os braços cobertos de bolhas de fogo mágico.',
    interpretar: 'Aprendiz de Jakarion (NM, arcano), com um familiar quasit. Covarde, ganancioso e traiçoeiro. Amaldiçoa o mestre morto por tê-lo trazido a esta terra miserável. Desconfia de qualquer aproximação amigável. Sobrevive comendo vermes.',
    sabe: 'Sabe que o templo é um paraíso de conhecimento proibido, que caveiras flamejantes feitas dos restos dos magos o guardam e que bárbaros das montanhas o usam como abrigo. Não pretende sair enquanto o golem de âmbar patrulhar o corredor. Quer recuperar o cajado e o livro do mestre, mas não explorar mais nada.',
    jogo: 'Escondido no salão superior leste (X8); notado com Percepção passiva 17 ou Percepção CD 12 procurando. Carrega seu livro de magias e, sob os robes, um amuleto em forma de V invertido (1.000 po) que controla o guardião do escudo da área X35 — ele não sabe disso; o amuleto vibra a menos de 3 m do guardião. Se descobrir o que faz, não abre mão dele.',
  },
  jakarion: {
    interpretar: 'Bruxo que veio ao Templo Âmbar em busca de poder, trazendo o aprendiz Vilnius. As caveiras flamejantes o incineraram.',
    jogo: 'Seu cadáver carbonizado está no salão da área X17, guardado por três caveiras flamejantes que não saem de lá. O livro de magias não sobreviveu, mas o cajado sim: um cajado do gelo com um fragmento de sua personalidade. O primeiro a tocá-lo ganha a fraqueza “Eu anseio poder acima de tudo, e farei qualquer coisa para obter mais disso”.',
  },
  // ————————————————————————————————————————————————— A Torre de Van Richten e o passado
  khazan: {
    interpretar: ['Arquimago que ajudou a erguer o Castelo Ravenloft. Terminado o trabalho, construiu uma torre numa ilhota do Lago Baratok, com uma ponte de terra e cascalho. Na velhice, aprendeu no Templo Âmbar o segredo do lich e completou a transformação na torre.',
      'Depois que Strahd virou vampiro, Khazan foi a Ravenloft para desafiá-lo pelo domínio — e, para sua surpresa, Strahd o convenceu a servir como conselheiro de magia. Passou o resto do tempo no Templo Âmbar tentando virar demilich para projetar o espírito além das fronteiras de Baróvia; falhou e se destruiu.'],
    sabe: 'A mando de Strahd, separou o punho e a lâmina da espada de Sergei para destruí-la. Enquanto destruía a lâmina, seu aprendiz roubou o punho e fugiu; Khazan depois achou o cadáver mutilado do aprendiz nos Bosques de Svalich, sem o punho, e para evitar a ira do vampiro disse a Strahd que a arma inteira fora destruída. O punho é a Espada Solar.',
    jogo: ['Seus restos estão na cripta 15 das catacumbas (“Khazan: Sua palavra era poder”): um esqueleto com opalas negras nas órbitas (1.000 po cada) e oito dentes de âmbar (100 po cada). Quem, dentro da cripta, disser em voz alta “Khazan” faz o Pilar de Ravenloft tremer e surgir um cajado de poder; o primeiro a pegá-lo faz teste de Constituição CD 17 ou sofre 8d10 radiante. Se ninguém o pegar em 1 rodada, some para sempre.',
      'Sua torre, hoje base de van Richten e depois de Ezmerelda, só não desabou graças às proteções mágicas antigas.'],
  },
  ingrid: {
    interpretar: 'Amor de infância e esposa de Rudolph van Richten, médico e estudioso de Darkon, e mãe de Erasmus. Depois que van Richten destruiu o filho transformado em cria, o Barão Metus se vingou matando Ingrid.',
    jogo: 'Não aparece em jogo; é a ferida de van Richten e explica seu Vínculo: para proteger quem ama, ele os mantém distantes.',
  },
  erasmus: {
    interpretar: 'Filho de Rudolph e Ingrid van Richten. Aos catorze anos foi roubado por Vistani — a família de Ezmerelda — e vendido ao vampiro Barão Metus como criado. Quando o pai o encontrou, já era cria vampírica; Erasmus implorou por salvação, e van Richten cravou uma estaca em seu peito.',
    jogo: 'Não aparece em jogo. Ezmerelda ainda ouve seus apelos por misericórdia; a tragédia é a origem do ódio de van Richten pelos Vistani e da própria vocação de Ezmerelda.',
  },
  metus: {
    interpretar: 'Vampiro que comprou Erasmus dos Vistani para servi-lo e o transformou em cria. Quando van Richten destruiu o filho, Metus se vingou matando Ingrid. Van Richten o destruiu depois.',
    jogo: 'Não aparece em jogo; é o primeiro vampiro da história de van Richten.',
  },
  // ————————————————————————————————————————————————— Ganchos da aventura (cap. 1)
  duquesa: {
    interpretar: 'Duquesa Morwen, governante de Vau da Adaga, na Costa da Espada. Amiga dos personagens, que já ajudaram a defender a cidade. No jantar, parece mais fora de si que o normal; não quer um conflito armado, mas quer mandar uma mensagem severa.',
    jogo: 'Gancho “Visitantes Misteriosos”: um grupo de viajantes acampado fora dos muros tem molestado moradores, exigindo dinheiro e vinho e ameaçando rogar pragas; os guardas enviados voltaram encantados. Ela pede que o grupo entregue o recado: “Se eles não partirem antes do amanhecer, eu queimarei suas carroças.” Os viajantes são os Vistani de Stanimir.',
  },
  zelraun: {
    interpretar: 'Zelraun Roaringhorn (LN, arcano), Harpista que veio a Vau da Adaga oferecer à Duquesa Morwen o apoio da organização. “Nós nos esforçamos para proteger os mais fracos. Se as crianças sequestradas pelos lobisomens ainda estão vivas, gostaria de vê-las retornar com segurança.”',
    jogo: 'Gancho “Lobisomens nas Brumas”: dá a cada personagem Harpista um pergaminho de remover maldição e combina com um ferreiro de Águas Profundas banhar de prata até seis armas do grupo (vinte munições contam como uma arma).',
  },
  eravien: {
    interpretar: 'Eravien Haund (LN, meio-elfo nobre), agente da Aliança dos Lordes vindo de Águas Profundas. Caçador de glória: acredita que ganhará prestígio se achar e destruir o “portal antigo” pelo qual os lobisomens vão e vêm.',
    sabe: 'Do interrogatório de um lobisomem capturado: a matilha tem quase uma dúzia de membros, o líder se chama Kiril, vêm de uma terra chamada Baróvia, adoram a Mãe Noite e entram e saem por algum tipo de portal (dedução dele). Pede sigilo.',
    jogo: 'Dá a cada membro da Aliança dos Lordes um pergaminho de arma mágica e promete uma carta de recomendação quando o portal for destruído.',
  },
  lanniver: {
    interpretar: 'Lanniver Strayl (LB, cavaleiro), devoto de Tyr recém-chegado a Vau da Adaga, da Ordem da Manopla. Zeloso e direto, como a ordem: o mal deve ser esmagado.',
    jogo: 'Gancho “Lobisomens nas Brumas”: abençoa os membros da Ordem da Manopla e entrega a cada um uma poção de heroísmo antes de partirem em busca do covil na Floresta das Brumas.',
  },
  davra: {
    interpretar: 'Davra Jassur (LM, assassina) diz ser recrutadora da Rede Negra, mas é uma matadora impiedosa que elimina concorrentes em silêncio. Seu marido, Yarak, foi morto por lobisomens, e ela quer a cabeça do líder da matilha.',
    jogo: 'Gancho “Lobisomens nas Brumas”: marca um encontro privado com o personagem Zhentarim. Ocupada demais com “negócios” para vingança pessoal, fica devendo um favor especial a quem trouxer a cabeça de Kiril.',
  },
  yarak: {
    interpretar: 'Membro da Rede Negra (Zhentarim) e marido de Davra Jassur. Foi morto por lobisomens ao escoltar uma caravana de Vau da Adaga à Estalagem do Caminho, cerca de 97 km a sudeste, pelo Caminho do Comércio.',
    jogo: 'Não aparece em jogo; sua morte é o motivo da vingança de Davra e do gancho Zhentarim contra Kiril.',
  }
};
