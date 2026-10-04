// Situação no início da aventura: "Vivo" significa que a figura ainda pode
// entrar em cena, mesmo quando é um fantasma, vampiro ou outro morto-vivo.
// "Morto" indica alguém que pertence ao passado e não atua como personagem.
// A raça/tipo descreve a natureza da criatura, sem tratar Vistana como raça.
const deadIds = new Set(`
  kolyan tatyana sergei barov ravenovia patrina nikolaiold ilya markovia
  argynvost marina grigor jakarion khazan walter tasha leo andral
  lorde_lee lorde_erik dostron jarnwald dorfniya troisky
  katsky stahbal artimus stefan_gregorovich bascal eisglaze ciril
  gralmore kroval tatsaul dalvan artank ingrid erasmus metus yarak
`.trim().split(/\s+/));

const natureGroups = {
  'Vampiro': 'strahd metus',
  // Erasmus morreu já transformado em cria (van Richten o destruiu a pedido dele).
  'Cria vampírica': 'doru escher ludmilla anastrasya volenta helga sasha erasmus',
  // O apêndice D diz “elfo das sombras”; o capítulo 5 chama o mesmo povo de “elfos do crepúsculo”.
  'Elfo das sombras': 'rahadin kasimir patrina',
  'Bruxa da noite': 'morgantha bella offalia',
  'Homem-corvo': 'urwin danika brom bray davian adrian elvir stefania dag claudiu martin yolanda viggo muriel',
  'Lobisomem': 'kiril emil zuleika bianca skennis kellen wensencia',
  'Pária': 'clovin otto zygfrek cyrus mishka marzena',
  'Ressurgido': 'vladimir godfrey',
  'Fantasma': 'lazlo rose thorn pidlwick_first',
  'Guerreiro fantasma': 'lorde_klutz',
  'Espírito': 'kavan',
  'Lívido (morto-vivo)': 'gustav elisabeth',
  'Dragão de prata': 'argynvost',
  'Deva': 'abbot',
  'Golem de carne': 'vasilka',
  'Lich': 'exethanter',
  'Arcanaloth': 'neferon',
  'Constructo': 'pidlwick',
  'Pesadelo (cavalo infernal)': 'beucephalus',
  'Macaco': 'piccolo',
  'Meio-elfo': 'eravien',
  // O epitáfio ou a menção isolada não identifica a raça destas figuras.
  'Indeterminado': 'khazan andral duquesa lorde_lee lorde_erik dostron jarnwald dorfniya troisky katsky stahbal artimus stefan_gregorovich bascal eisglaze ciril gralmore kroval tatsaul artank yarak jakarion'
};

const natureById = {};
for (const [nature, ids] of Object.entries(natureGroups)) {
  for (const id of ids.split(' ')) {
    if (!peopleById[id] || natureById[id]) throw new Error(`Natureza inválida ou repetida: ${id}`);
    natureById[id] = nature;
  }
}
for (const id of deadIds) if (!peopleById[id]) throw new Error(`Status inválido: ${id}`);
for (const person of people) {
  person.status = deadIds.has(person.id) ? 'Morto' : 'Vivo';
  person.nature = natureById[person.id] || 'Humano';
}
