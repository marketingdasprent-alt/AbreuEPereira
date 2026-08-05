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

O site funciona sem logótipo — mostra uma versão tipográfica com o monograma
`AP`. Assim que existirem ficheiros em `images/`, a troca é automática e não
exige alterações no código. Nomes e requisitos em
[`images/LEIA-ME.md`](images/LEIA-ME.md).

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
- **Email:** geral.abreu@sapo.pt
