# Livro de Marca ERTA

Última atualização: 2026-04-23

## Intenção da marca
A ERTA deve transmitir engenharia, desempenho e precisão. A linguagem visual inspira-se no universo Formula Student: geometria afiada, contraste forte, movimento controlado e comunicação técnica clara.

## Princípios visuais

- O azul é a âncora da identidade, em tema claro e escuro.
- As superfícies devem parecer técnicas e em camadas, não planas.
- A geometria deve ser angular, sobretudo em ações principais.
- O movimento deve ser curto e intencional.
- A hierarquia da informação prevalece sobre decoração.

## Sistema de tema

A interface utiliza dois temas completos:

- O tema claro é o padrão quando não existe escolha manual guardada.
- O tema escuro segue a preferência do sistema operativo quando não existe escolha manual.
- A escolha manual do utilizador é persistida em localStorage.
- O estado do tema é aplicado com html[data-theme="light|dark"] e variáveis CSS.

## Tokens de cor (implementados)

Tokens semânticos base:

- --color-primary: #134B8A
- --color-secondary: #A9D8F6
- --color-accent: #10B981
- --color-background: mapeado para o fundo do tema
- --color-surface: mapeado para a superfície do tema
- --color-text: mapeado para o texto do tema
- --color-text-secondary: #4B5563
- --color-error: #EF4444
- --color-success: #22C55E
- --color-warning: #FACC15

Tokens de marca e interface (conjunto ativo principal):

- --site-accent: #2F80ED
- --site-accent-strong: #11C7B9
- --site-text (claro): #0F172A
- --site-muted (claro): #52627A
- --site-text (escuro): #F5F7FB
- --site-muted (escuro): #A6B4CC
- --site-bg (claro): #EEF4FF
- --site-bg (escuro): #070B14

## Tipografia

- Família de display e logótipo: Rajdhani
- Família de corpo de texto: Space Grotesk

Regras:

- Títulos e rótulos técnicos usam maiúsculas e tracking mais aberto.
- A tipografia display é usada em headings principais, CTAs e métricas.
- O texto corrido deve manter legibilidade elevada.

## Linguagem de forma e espaçamento

- Os cantos devem ser contidos e maioritariamente quadrados.
- A geometria em corte diagonal é usada em controlos de alta prioridade com clip-path.
- Painéis e cartões usam bordos finos, brilho subtil e destaque direcional.
- Header e footer usam linhas horizontais de enquadramento.

## Superfícies e profundidade

- As secções principais usam gradientes em camadas e overlays técnicos subtis.
- Em tema claro, cartões e painéis usam superfícies claras com efeito vidro.
- Em tema escuro, aplicam-se equivalentes escuros com contraste adequado.
- Os bordos seguem tonalidade azul com baixa opacidade.

## Sistema de movimento

- Existe uma transição base global aplicada a elementos e pseudo-elementos:
- transition: all 0.2s ease
- As interações principais usam elevação curta e ligeira inclinação no hover.
- O reforço visual privilegia brilho e saturação, evitando escalas agressivas.
- Há suporte de acessibilidade para prefers-reduced-motion.

## Direção dos componentes principais

Header:

- Casca escura em gradiente, navegação compacta e links em maiúsculas.
- Inclui alternador de idioma e alternador de tema.
- O CTA de contacto usa geometria angular e preenchimento de alto contraste.

Hero:

- Composição visual cinematográfica com padrões técnicos de overlay.
- Painéis de hero e loading com linha de acento superior.

Cartões e painéis:

- Elevação discreta no hover.
- Detalhes técnicos de canto e acentos por gradiente.

Página de contactos:

- Blocos de informação estruturados e formulário com foco visível em acento.
- Ações de envio e redes sociais seguem a linguagem angular dos CTAs.

Secções equipa e join:

- Estrutura partilhada com highlights radiais de acento.
- Ações primárias e secundárias seguem o mesmo sistema de botão angular.

## Requisitos de acessibilidade e UX

- Manter foco visível em links e botões.
- Garantir contraste de texto e fundo em ambos os temas.
- Preservar comportamento reduzido de movimento quando solicitado pelo utilizador.
- Não remover labels semânticas de controlos, especialmente tema e idioma.

## Tom e voz editorial

- Tom confiante, técnico e orientado para equipa.
- Mensagens curtas, claras e objetivas.
- Evitar linguagem demasiado promocional ou genérica.

## Fazer

- Manter hierarquia visual baseada em azul.
- Reutilizar tokens de cor e tipografia.
- Preferir padrões de interface angulares e estruturados.
- Validar sempre os dois temas após alterações visuais.

## Não fazer

- Introduzir cores aleatórias fora da família definida.
- Usar raios excessivamente arredondados que contrariem o estilo motorsport.
- Aplicar animações longas ou lúdicas.
- Criar estilos isolados sem alinhamento com tokens.

## Mapa de implementação

- Sistema principal de estilos: src/index.css
- Bootstrap de tema e sincronização com sistema: src/main.tsx
- Controlos de tema e idioma: src/components/Header/Header.tsx
- Este documento é normativo para alterações de UI e deve ser atualizado sempre que mudarem tokens ou padrões de interação.