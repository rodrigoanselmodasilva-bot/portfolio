# Portfólio — Rodrigo Anselmo

Site one-page, mobile-first, com identidade baseada no símbolo do monólito e no
conceito **"Interpretar o invisível"**.

---

## 1. Estrutura dos arquivos

```
index.html   → estrutura do site (não precisa editar no dia a dia)
style.css    → cores, fontes, espaçamentos (não precisa editar no dia a dia)
app.js       → lógica que monta os cards a partir do cases.js (não editar)
cases.js     → ★ AQUI você cadastra os projetos/cases ★
images/
  logo.svg, logo-dark.png, logo-light.png
  cases/
    georgiapro/
      cover.jpg
    (crie uma pasta por case aqui)
```

No dia a dia, o único arquivo que você vai abrir é o **cases.js** — e a pasta
**images/cases/** para colocar as imagens de cada projeto.

---

## 2. Como ver o site no seu computador

Dê duplo clique no arquivo `index.html`. Ele abre no navegador e já funciona
completo (cards, filtros, modal) — não precisa de internet nem de instalar nada.

---

## 3. Como adicionar um novo case

Abra o arquivo **cases.js** em qualquer editor de texto (Bloco de Notas, ou de
preferência o [VS Code](https://code.visualstudio.com/), que é gratuito e
deixa o texto colorido e mais fácil de não errar).

### Passo a passo

1. Localize o bloco do case "georgiapro" — ele começa em `{` e termina em `},`.
2. Selecione o bloco inteiro (do `{` até o `},`) e copie.
3. Cole logo abaixo (ou acima) dele, dentro da lista `"cases": [ ... ]`.
4. Troque os valores do bloco novo pelos dados do seu projeto.
5. Salve o arquivo e recarregue a página no navegador.

O case mais novo que tiver `"destaque": true` aparece primeiro na grade.

### O que cada campo significa

| Campo | O que é | Exemplo |
|---|---|---|
| `id` | um nome curto e único, sem espaço/acento | `"sabesp-licitacoes"` |
| `destaque` | `true` para aparecer no topo, `false` para ficar na ordem normal | `true` |
| `titulo` | título do projeto | `"Redesenhando o portal de licitações"` |
| `cliente` | nome do cliente/produto | `"Sabesp"` |
| `ano` | ano do projeto (sem aspas) | `2023` |
| `papel` | seu papel no projeto | `"UX Research · Growth"` |
| `industria` | setor/segmento | `"Saneamento, Governo"` |
| `tags` | temas, usados nos filtros | `["UX", "Pesquisa"]` |
| `resumo` | 1–2 frases que aparecem no card | `"Como simplificamos..."` |
| `capa` | caminho da imagem de capa | `"images/cases/sabesp/cover.jpg"` |
| `contexto` | texto do desafio/contexto | `"O portal..."` |
| `processo` | lista de etapas, cada uma com `titulo` e `texto` | veja exemplo |
| `resultado` | frase/parágrafo de fechamento | `"O resultado foi..."` |
| `ferramentas` | ferramentas usadas | `["Figma", "Maze"]` |
| `galeria` | imagens extras (opcional) | `["images/cases/sabesp/01.jpg"]` |
| `video` | link de embed do YouTube/Vimeo, ou `null` | `null` |

### Regras importantes para não quebrar o arquivo

- Tudo entre aspas `" "` — nunca apague as aspas.
- Cada item (exceto o último de uma lista) termina com vírgula `,`.
- Listas ficam entre colchetes `[ ]`, blocos entre chaves `{ }`.
- Se algo der errado e o site parar de mostrar os cases, desfaça (Ctrl+Z) a
  última edição — geralmente é uma vírgula ou aspas faltando.

Dica: se tiver dúvida, pode copiar o `cases.js` inteiro e me mandar aqui que
eu confiro/corrijo para você.

---

## 4. Como adicionar as imagens de um case

1. Dentro de `images/cases/`, crie uma pasta com o nome do projeto, ex:
   `images/cases/sabesp/`.
2. Coloque as imagens dentro (pode usar `.jpg`, `.png` ou `.webp`).
3. No `cases.js`, aponte `"capa"` e `"galeria"` para esses arquivos, ex:
   `"images/cases/sabesp/cover.jpg"`.

Recomendações:
- A capa funciona melhor em formato horizontal (16:9 ou 16:10).
- Comprima as imagens antes de subir (ex: [squoosh.app](https://squoosh.app))
  para o site carregar rápido no celular.

---

## 5. Publicando o site (domínio próprio)

Resumo do caminho mais simples e gratuito:

1. **Crie uma conta no [GitHub](https://github.com)** (gratuita).
2. Crie um repositório novo e envie estes arquivos para ele.
3. Em **Settings → Pages**, ative o GitHub Pages na branch principal.
   Em poucos minutos o site fica no ar em `seu-usuario.github.io`.
4. **Compre um domínio** (ex: `rodrigoanselmo.com`) no
   [Registro.br](https://registro.br) (.com.br) ou
   [Namecheap](https://namecheap.com) (.com) — custa em torno de R$40/ano.
5. No painel do domínio, configure o DNS para apontar para o GitHub Pages
   (alguns registros do tipo A/CNAME).
6. Em **Settings → Pages**, adicione esse domínio no campo "Custom domain".

Os passos 2, 3, 5 e 6 eu te ajudo a fazer juntos quando quiser — é rápido,
só precisa ser feito uma vez.

---

## 6. Sobre as cores e fontes

- Navy `#1A2942`, terracota `#A66A3F`, creme `#F3EFE7` — definidos no topo do
  `style.css` em `:root { ... }`. Para mudar um tom, basta editar o valor
  hexadecimal ali, e ele se aplica em todo o site.
- Títulos em **Cinzel**, texto em **Manrope** (Google Fonts).
