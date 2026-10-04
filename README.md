# Atlas de Baróvia · versão para celular

Versão compacta do Atlas de Baróvia, feita para ler no celular na vertical (pensada para o iPhone). É um site estático: não precisa de instalação nem de servidor próprio, só do GitHub Pages.

## As quatro abas

- **Personagens**: os 149 PdMs, com retrato, quem é, história e objetivos, as seções para interpretar, as pessoas ligadas, os capítulos em que aparecem e as partes da Jornada em que entram.
- **Capítulos**: o mapa da campanha (etapas por nível e as nove linhas de missão) e os 15 capítulos mais a Casa da Morte, com história, o que acompanhar, o que os moradores sabem, eventos, locais, Sorte de Ravenloft, índice de áreas e como cada capítulo se liga ao resto.
- **A história**: o passado do vale, antes da aventura: linhagens, linha do tempo, a noite do casamento passo a passo, o ciclo da alma de Tatyana, o tabuleiro de forças e as regras do vale.
- **A jornada**: a campanha inteira contada como uma história, do começo ao fim, por um caminho possível, com a leitura de tarokka escolhida e um quadro “Outros caminhos” em cada parte.

A **setinha na borda esquerda** (ou o botão ☰ no topo) abre a lista da aba atual: personagens com busca e filtros, capítulos com busca de locais e áreas (ex.: “K86”), seções da história ou partes da jornada. Arrastar a lista para a esquerda a fecha. Nomes sublinhados no texto levam à ficha; o botão **Voltar** no topo (ou o gesto de voltar do celular) retorna ao mesmo ponto da leitura.

## Como publicar no GitHub

O GitHub aceita **no máximo 100 arquivos por envio** pelo navegador, e este app tem 182. Por isso os retratos ficam em duas pastas, e o envio é feito em três vezes:

1. Crie um repositório novo no GitHub (por exemplo, `barovia`). Para usar o GitHub Pages de graça, ele precisa ser **público**.
2. No repositório, clique em **Add file → Upload files**.
3. **Envio 1**: abra esta pasta no Windows, selecione tudo **menos** as pastas `retratos-a-k` e `retratos-l-z` e arraste para a página do GitHub (34 arquivos). Clique em **Commit changes**.
4. **Envio 2**: de novo em **Add file → Upload files**, arraste a pasta `retratos-a-k` inteira (73 arquivos). **Commit changes**.
5. **Envio 3**: arraste a pasta `retratos-l-z` inteira (75 arquivos). **Commit changes**.
6. Em **Settings → Pages**, em “Build and deployment”, escolha **Deploy from a branch**, a branch **main** e a pasta **/ (root)**. Salve.
7. Em um ou dois minutos o endereço aparece na mesma página: `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Confira no GitHub se as pastas `css`, `js`, `img`, `retratos-a-k` e `retratos-l-z` ficaram na raiz do repositório, ao lado do `index.html`.

## No iPhone

Abra o endereço no Safari, toque em **Compartilhar → Adicionar à Tela de Início**. O app abre em tela cheia, com ícone próprio, como um aplicativo.

## Estrutura

```
index.html              a página
manifest.webmanifest    nome, cor e ícone para a tela de início
.nojekyll               avisa o GitHub Pages para publicar os arquivos como estão
css/app.css             todo o visual
js/
  data.js               personagens e relações          (cópia do Atlas)
  perfis-data.js        aprofundamento das fichas       (cópia do Atlas)
  vitals.js             status e raça/tipo              (cópia do Atlas)
  story-data.js         capítulos                       (cópia do Atlas)
  area-index.js         índice de áreas numeradas       (cópia do Atlas)
  historia-data.js      dados da aba A história e do mapa da campanha (extraídos do Atlas)
  jornada-data.js       o texto da aba A jornada
  imagens.js            posição de cada miniatura e pasta de cada retrato
  app.js                a lógica das quatro abas
img/
  miniaturas.webp       uma folha com todas as miniaturas (uma imagem só para as listas)
  capitulos/            capas dos capítulos (WebP, 1200 px)
  fundo.webp            fundo do castelo na floresta
  icone-180.png         ícone da tela de início (o iPhone exige PNG)
  icone-512.png         ícone para Android e navegadores
retratos-a-k/           retratos dos personagens de A a K (WebP, 768 px)
retratos-l-z/           retratos dos personagens de L a Z (WebP, 768 px)
```

Todas as imagens do conteúdo estão em WebP; os dois ícones são PNG porque o iPhone não aceita outro formato para o ícone da tela de início. O app inteiro tem cerca de 16 MB. Ele carrega as fontes do Google Fonts; sem internet, usa fontes do sistema.

Os textos de personagens, capítulos e da aba A história vêm do Atlas de Baróvia original. Mudanças feitas lá não aparecem aqui automaticamente: é preciso gerar os arquivos de novo.
