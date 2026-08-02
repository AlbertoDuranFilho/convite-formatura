# Convite de Formatura — Dra. Déborah Coutinho

Site de convite digital de formatura (medicina), em formato de site (não imagem/pdf), no estilo dos convites interativos que viraram tendência no TikTok: abre com um envelope animado, tem seções com fotos e frases, e termina num CTA de confirmação de presença.

Este arquivo é o contexto completo do projeto. Coloque-o na raiz do repositório (como `CLAUDE.md`) para que o Claude Code carregue automaticamente.

## Stack

- **Vite + React 19**
- **Tailwind CSS v4** (via `@tailwindcss/vite`, tokens definidos com `@theme` em `src/index.css` — não há `tailwind.config.js`)
- **Framer Motion** para todas as animações
- Sem backend, sem CMS — site estático, pensado para deploy na Vercel

## Estrutura do projeto

```
src/
  index.css                     — tokens de design (@theme), fontes, reduced-motion
  App.jsx                       — monta Envelope + todas as seções em ordem
  main.jsx
  components/
    Envelope.jsx                — tela de abertura (envelope clicável)
    SecaoCapa.jsx                — seção 1
    SecaoSaveTheDate.jsx         — seção 2
    SecaoEngracada.jsx           — seção 3
    SecaoLembrete.jsx            — seção 4
    SecaoTrajetoria.jsx          — seção 5
    SecaoAgradecimento.jsx       — seção 6
  assets/photos/
    img01.jpg … img18.jpg        — fotos numeradas na ordem em que aparecem no site
public/
  favicon.svg
```

## Sistema de design (já definido, não mudar sem pedir)

Paleta bege + verde (tema "formatura de medicina"), definida em `src/index.css`:

- `--color-bege-fundo: #F2E9D8` — fundo principal
- `--color-bege-carta: #FAF5EA` — bege mais claro (texto sobre fundo escuro/verde)
- `--color-bege-profundo: #E3D2AC`
- `--color-verde-escuro: #253B2E` — texto de destaque, títulos
- `--color-verde-medio: #4C6F52` — texto secundário, botões
- `--color-verde-claro: #9FB89C`
- `--color-verde-envelope: #6FA37E` — verde mais claro, só do envelope ("verde de medicina")
- `--color-verde-envelope-escuro: #5A8A68`
- `--color-dourado: #B8923D` — selo de cera do envelope
- `--color-tinta: #2C2820` — texto corrido

Tipografia:
- `--font-display: 'Fraunces', serif` — títulos, tipografia grande (data)
- `--font-script: 'Parisienne', cursive` — nome, frases pessoais/assinatura
- `--font-corpo: 'Jost', sans-serif` — texto corrido

Todas as fontes carregam via Google Fonts (`@import` no topo do `index.css`, antes do `@import "tailwindcss"` — a ordem importa, senão o build quebra).

## Conteúdo e ordem das seções (spec fechada com a cliente)

Baseado num wireframe feito no Excalidraw + no texto do documento original. **Não mudar a ordem ou o texto sem confirmar** — só ajustar estilo/animação livremente.

### 0. Envelope (`Envelope.jsx`)
- Tela cheia ao abrir o site, fundo bege, envelope de tamanho médio (não ocupa a tela toda) centralizado.
- Nome completo **"Dra. Déborah Maria Coutinho Alves"** em `font-script`, posicionado **acima do envelope** (não dentro/embaixo).
- Envelope na cor `--color-verde-envelope` (verde claro de medicina — já ajustado, não é mais o verde escuro da primeira versão).
- Selo de cera dourado no centro com um ícone de caduceu (SVG inline, símbolo de medicina).
- Sem nenhum outro texto (não tem mais "você recebeu um convite" nem "toque para abrir").
- Ao clicar: a aba do envelope abre com rotação 3D, o selo encolhe e some, o envelope inteiro desce e desaparece (fade), revelando o site. O clique também dispara `audio.play()` (ver seção de música abaixo).

### 1. Sessão Capa (`SecaoCapa.jsx`)
Thread vertical com 5 fotos (`img01`–`img05`) alternando esquerda/direita, entrando com fade+slide ao rolar a página (`whileInView`), intercaladas com a frase quebrada em partes:

1. Título: "Finalmente esse dia está chegando!"
2. `img01`
3. "Após 6 anos de lutas, noites sem dormir…"
4. `img02`
5. "provas, ansiedade, conquistas…"
6. `img03`
7. "e muita fé em Deus!"
8. `img04` (única foto paisagem dessa seção)
9. `img05`
10. "Este ano me tornarei médica!"

### 2. Sessão Save the Date (`SecaoSaveTheDate.jsx`)
Fundo claro (não escuro — decisão explícita da cliente), tipografia gigante pra dar impacto:
- "Save the date" (eyebrow pequeno)
- Data grande: **15 / 12 / 26**
- `img06`
- "Local: Paços dos Leões" / "Horário: 22:00"
- "e você é meu convidado especial!" (cursiva)
- Botão "Confirmar presença" (link **placeholder**, `href="#"` — ver pendências)

### 3. Sessão Engraçada (`SecaoEngracada.jsx`)
- Texto: "Mas como nem tudo são flores, e esta formanda que vos fala é muito organizada e metódica — como vocês bem conhecem — preciso da confirmação de presença o mais rápido possível!"
- Destaque: "Devido à mudança de local da festa, as vagas são **LIMITADÍSSIMAS!**"
- "Prazo de resposta: 31/08/26"
- Colagem sobreposta (posicionamento absoluto, rotações leves) das fotos `img07`–`img12`

### 4. Sessão Lembrete (`SecaoLembrete.jsx`)
- `img13` (foto engraçada com a tia Caco — **a cliente vai cortar essa foto depois**, por enquanto está inteira)
- "Tô vendo você enrolando pra responder o forms!"
- Botão "Confirmar presença" (mesmo placeholder)
- Nota pequena: lembrete pra informar tamanho do sapato no formulário (pedido das convidadas)

### 5. Sessão Trajetória (`SecaoTrajetoria.jsx`)
- "O que um dia foi um sonho…" → `img14` (foto da matrícula)
- "hoje está se tornando realidade." → `img15`
- `img16`
- "Graças a Deus, à espiritualidade amiga…"

### 6. Sessão Agradecimento final (`SecaoAgradecimento.jsx`)
- "…e aos meus PAItrocinadores!"
- `img18` e `img17` lado a lado (fotos dos pais)
- "Obrigada, Painho e Mainha! Amo vocês." (cursiva)

## Pendências (o que falta pra ficar 100%)

1. **Link do Google Forms de RSVP** — ainda não existe. Os dois botões "Confirmar presença" (`SecaoSaveTheDate.jsx` e `SecaoLembrete.jsx`) estão com `href="#"`. Assim que a cliente mandar o link, trocar nos dois lugares (buscar por `href="#"`).
2. **Música de fundo em loop** — ainda não existe o arquivo. Em `App.jsx` já tem a tag `<audio ref={audioRef} loop src="/audio/trilha.mp3" />` e a chamada `audioRef.current.play()` no clique do envelope (autoplay só libera após gesto do usuário, por isso o play está atrelado ao clique). Falta: colocar o arquivo de música em `public/audio/trilha.mp3` (ou ajustar o `src` pro nome real do arquivo).
3. **Fotos finais** — as 18 fotos em `src/assets/photos/img01.jpg`…`img18.jpg` são as fotos originais do documento, ainda sem edição. Em especial `img13.jpg` precisa ser cortada (remover a tia Caco). Quando a cliente mandar as versões editadas, é só substituir os arquivos mantendo o mesmo nome — não precisa mexer no código.
4. **Deploy** — ainda não foi publicado. A ideia é subir pro GitHub e depois conectar na Vercel (import do repo).
5. Nada foi feito ainda com responsividade em telas muito grandes (desktop) — o layout foi pensado mobile-first, já que o site é pra ser aberto no celular, mas vale um `max-w` mais generoso pra desktop se fizer sentido depois.

## Preferências da cliente pra manter

- Prefere ajustes e builds completos de uma vez, não seção por seção (depois de bater as dúvidas antes).
- Qualquer mudança de paleta, tipografia ou textos deve ser confirmada antes de aplicar — o resto (posicionamento, timing de animação, pequenos ajustes visuais) pode ser feito com liberdade.
