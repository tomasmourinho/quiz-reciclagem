export const AVATARS = ['🐸','🦊','🐼','🦋','🐬','🦁','🐧','🌵'];
export const COLORS  = ['#22C55E','#3B82F6','#F97316','#EF4444','#A855F7','#EC4899','#06B6D4','#EAB308'];

const CUSTOM_KEY = 'quiz_custom_qs';

const BUILTIN = [
  { cat:"Cores dos ecopontos", q:"Onde deves colocar uma garrafa de vidro vazia?", opts:["Contentor azul","Contentor verde","Contentor amarelo","Lixo comum"], a:1, fb:"O contentor VERDE (vidrão) é para vidro: garrafas, frascos e copos. O vidro pode ser reciclado infinitas vezes!" },
  { cat:"Cores dos ecopontos", q:"Qual é a cor do contentor para jornais e caixas de cartão?", opts:["Amarelo","Verde","Azul","Castanho"], a:2, fb:"O contentor AZUL (papelão) serve para papel e cartão: jornais, revistas, caixas e folhas." },
  { cat:"Cores dos ecopontos", q:"Onde vão as embalagens de plástico e latas de metal?", opts:["Verde","Azul","Amarelo","Lixo comum"], a:2, fb:"O contentor AMARELO (embalão) é para plásticos e metais: garrafas, latas, embalagens de iogurte e alumínio." },
  { cat:"Cores dos ecopontos", q:"O contentor castanho serve para quê?", opts:["Plásticos","Resíduos orgânicos","Vidro","Papel e cartão"], a:1, fb:"O contentor CASTANHO é para orgânicos: cascas de fruta, restos de comida, borra de café. Transformam-se em composto!" },
  { cat:"Cores dos ecopontos", q:"Onde devem ir pilhas e baterias usadas?", opts:["Contentor amarelo","Lixo comum","Pilhão","Contentor azul"], a:2, fb:"Pilhas e baterias têm metais tóxicos e devem ir para o PILHÃO — encontras em supermercados e escolas." },
  { cat:"Porquê reciclar?", q:"Qual é a principal razão para reciclar?", opts:["Para ter mais lixo","Poupar recursos naturais e reduzir poluição","Porque é obrigatório","Para encher os ecopontos"], a:1, fb:"Reciclar poupa matérias-primas, reduz energia e diminui a poluição do ar, água e solo." },
  { cat:"Porquê reciclar?", q:"Quantos anos demora um saco de plástico a degradar-se na natureza?", opts:["1 a 2 anos","10 a 20 anos","400 a 1000 anos","30 anos"], a:2, fb:"Um saco de plástico pode demorar 400 a 1000 anos! Por isso usamos sacos reutilizáveis." },
  { cat:"Porquê reciclar?", q:"Reciclar alumínio poupa quanta energia em comparação com fazer novo?", opts:["5%","95%","30%","50%"], a:1, fb:"Reciclar alumínio poupa até 95% da energia necessária para produzir alumínio novo! Incrível, não é?" },
  { cat:"Porquê reciclar?", q:"O que acontece aos resíduos orgânicos quando são reciclados corretamente?", opts:["São queimados","Transformam-se em composto para jardins","Vão para o mar","São enterrados"], a:1, fb:"Os orgânicos transformam-se em composto — um adubo natural excelente para jardins e agricultura!" },
  { cat:"Como reciclar", q:"O que deves fazer antes de colocar uma garrafa de plástico no ecoponto?", opts:["Deixá-la cheia","Esvaziar e amassar para ocupar menos espaço","Cortá-la em pedaços","Nada"], a:1, fb:"Deves esvaziar e amassar as embalagens — assim ocupam menos espaço e o transporte é mais eficiente." },
  { cat:"Como reciclar", q:"O que é o ecocentro?", opts:["Um supermercado especial","Local para resíduos volumosos","Uma escola de reciclagem","Um ecoponto para vidro"], a:1, fb:"O ecocentro recebe resíduos que não cabem nos ecopontos: móveis, eletrodomésticos, tintas e outros." },
  { cat:"Como reciclar", q:"O que significa o símbolo de três setas em triângulo numa embalagem?", opts:["A embalagem é perigosa","O material é reciclável","É para lixo comum","O produto é biodegradável"], a:1, fb:"O símbolo de Möbius (três setas) indica que o material é reciclável ou foi feito com material reciclado." },
  { cat:"Como reciclar", q:"Roupa e sapatos velhos devem ir para onde?", opts:["Contentor amarelo","Lixo comum","Ecocentro ou viatura de recolha de roupa","Contentor azul"], a:2, fb:"Roupa e calçado têm pontos de recolha específicos — nunca devem ir para o lixo comum!" },
  { cat:"Erros comuns", q:"Podes colocar restos de comida no contentor amarelo?", opts:["Sim, qualquer resíduo","Não, contaminam as embalagens","Sim, se estiver fechado","Só frutas e legumes"], a:1, fb:"Os restos de comida contaminam e tornam as embalagens impossíveis de reciclar. Limpa sempre antes!" },
  { cat:"Erros comuns", q:"Uma caixa de pizza muito gordurosa pode ir para o contentor azul?", opts:["Sim, é cartão","Não, a gordura contamina","Sim, se dobrar","Vai para o amarelo"], a:1, fb:"A gordura contamina o papel e impede a reciclagem. Caixas muito sujas vão para o lixo comum." },
  { cat:"Erros comuns", q:"Copos de plástico descartáveis (tipo café) podem ir para o amarelo?", opts:["Sim, são plástico","Não, têm revestimentos internos","Sim, se limpos","Vão para o azul"], a:1, fb:"Os copos de café têm revestimento interno que dificulta a reciclagem. Verifica sempre o símbolo!" },
  { cat:"Erros comuns", q:"O que é um erro comum na reciclagem em Portugal?", opts:["Separar o vidro","Colocar embalagens sujas nos ecopontos","Usar ecocentros","Separar o papel"], a:1, fb:"Colocar embalagens sujas é um erro muito comum! A sujidade contamina outros materiais e impede a reciclagem." },
  { cat:"Erros comuns", q:"Podes colocar um espelho partido no vidrão (contentor verde)?", opts:["Sim, é vidro","Não, têm composição diferente","Sim, se em pedaços pequenos","Vai para o azul"], a:1, fb:"Espelhos, janelas e vidro temperado têm composição diferente e NÃO devem ir para o vidrão. Vai para o ecocentro." },
  { cat:"Porquê reciclar?", q:"Qual destes materiais demora mais tempo a degradar-se na natureza?", opts:["Papel","Casca de fruta","Vidro","Algodão"], a:2, fb:"O vidro pode demorar até 1 MILHÃO de anos a degradar-se. Por isso é tão importante reciclá-lo!" },
  { cat:"Como reciclar", q:"Deves lavar as embalagens antes de colocá-las no ecoponto?", opts:["Não, não é necessário","Sim, devem estar limpas para não contaminar","Só as de vidro","Só as de plástico"], a:1, fb:"Sim! As embalagens devem estar limpas (não precisam de estar esterilizadas, apenas sem restos de comida)." }
];

export function loadAllQuestions() {
  const qs = BUILTIN.map(q => ({...q}));
  try {
    JSON.parse(localStorage.getItem(CUSTOM_KEY) || '[]')
      .forEach(q => qs.push({...q, custom: true}));
  } catch(e) {}
  return qs;
}

export function saveCustomQuestions(allQs) {
  try {
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(allQs.filter(q => q.custom)));
  } catch(e) {}
}
