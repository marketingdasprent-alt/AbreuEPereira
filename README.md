# Abreu e Pereira, Lda. — Site institucional

Página institucional ("site em construção") da **Abreu e Pereira, Lda.** —
transporte de mercadorias, recrutamento de pessoas e restauração. Lisboa.

Site estático, sem dependências externas (HTML + CSS + JavaScript nativo).

## Estrutura

| Ficheiro | Função |
|---|---|
| `index.html` | Estrutura da página |
| `styles.css` | Estilos (base clara, serifa, cor por área) |
| `script.js` | Comportamento (logótipo automático, animações, menu) |
| `images/` | Logótipo e símbolo — ver [`images/LEIA-ME.md`](images/LEIA-ME.md) |
| `.htaccess` | Configuração Apache para o alojamento cPanel |
| `vercel.json` | Cabeçalhos de segurança no Vercel (o `.htaccess` não é lido lá) |
| `robots.txt` | Indexação por motores de busca |
| `server.js` | Servidor de desenvolvimento (Node nativo, sem dependências) |
| `package.json` | Scripts npm |

## Ver localmente

Requer [Node.js](https://nodejs.org) 18 ou superior. Na pasta do projeto:

```bash
npm start
```

Depois abrir <http://localhost:8081>.

> A porta é a **8081**, e não a 8080, para poder correr ao mesmo tempo que o
> site da Sentinela100Erro. Para usar outra: `PORT=4000 npm start`.

O servidor envia os mesmos cabeçalhos de segurança da produção (CSP incluída),
por isso o que se vê localmente é o que se vê publicado.

## Logótipo

O logótipo está em SVG (`images/logo-white.svg` e `images/mark.svg`), desenhado
para os fundos escuros do site. Para o trocar por um ficheiro próprio basta
pousar o PNG em `images/` — é procurado antes do SVG, por isso ganha sozinho,
sem apagar nada nem tocar em código. Nomes e requisitos em
[`images/LEIA-ME.md`](images/LEIA-ME.md).

## Publicar (Vercel)

O site é estático e não tem passo de compilação. Ao importar o projeto, deixar o
*framework preset* em **Other** e não preencher nem o *Build Command* nem o
*Output Directory*.

O `.vercelignore` é essencial e não é cosmético. Sem ele o Vercel encontra o
`server.js` mais o script `start` do `package.json`, conclui que isto é uma
aplicação Node e corre o `server.js` como função serverless. O site parece
funcionar — o `index.html` até é servido — mas o `styles.css`, o `script.js` e
as imagens dão **404**, porque não vão no bundle da função. Resultado: página
sem estilos nenhuns. O `server.js` é só para desenvolvimento local.

O `.htaccess` só é lido por Apache — no Vercel não faz nada. Por isso os
cabeçalhos de segurança estão duplicados em `vercel.json`. Não é redundância
inútil: o `frame-ancestors` da CSP em `<meta>` é **ignorado** pelos browsers
(a directiva só funciona como cabeçalho HTTP real), tal como o `X-Frame-Options`.
Se mexeres na CSP do `index.html`, mexe também na do `vercel.json`.

Cada `git push` para `main` dispara um deploy novo.

## Publicar (cPanel · Domínios.pt)

O `abreuepereira.pt` tem conta de alojamento própria, independente da do
sentinela100erro.pt. Não são domínios adicionais um do outro.

**Enviar para `public_html` dessa conta:**

```
public_html/
  .htaccess
  index.html
  styles.css
  script.js
  robots.txt
  images/
  php.ini        ← do alojamento, não apagar
```

O `index.html` tem de ficar **directamente** em `public_html`. Se ficar dentro
de uma subpasta, o Apache devolve **403 Forbidden**.

Não é preciso enviar `server.js`, `package.json`, `README.md` nem os `.md` —
são de desenvolvimento. O `.htaccess` já bloqueia o acesso a esses ficheiros
caso sejam enviados por engano.

### Antes da primeira publicação

- [ ] **Email Routing → Remote Mail Exchanger**, se o email do domínio estiver
      no SAPO. Caso contrário o cPanel fica a reter as mensagens.
- [ ] Confirmar que os registos **MX** apontam para o SAPO.
- [ ] Correr o **AutoSSL** depois de o domínio resolver, para ter HTTPS.

## Por preencher

- **Telefone** — está `000 000 000`, marcado como texto e não como link.
  Em [`index.html`](index.html) há um comentário na secção de contactos com o
  bloco já pronto a substituir. Também aparece no rodapé.
- **Logótipo** — ver acima.

## Contactos

- **Morada:** Travessa do Alcaide, n.º 22-A · 1200-013 Lisboa
- **Email:** geral@abreuepereira.pt
