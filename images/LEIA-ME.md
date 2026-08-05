# Logótipo — como colocar

O site funciona **sem logótipo**. Enquanto não houver ficheiros nesta pasta,
mostra-se uma versão tipográfica: o monograma `AP` ao lado do nome em serifa.

Quando tiveres o logótipo, é só copiar os ficheiros para aqui **com estes nomes
exactos**. O site deteta-os sozinho e faz a troca — não é preciso alterar código.

| Ficheiro | Onde aparece | Como deve ser |
|---|---|---|
| `logo.png` | Cabeçalho (fundo claro) | Logótipo em versão escura, fundo transparente |
| `logo-white.png` | Rodapé (fundo escuro) | Logótipo em versão clara/branca, fundo transparente |
| `mark.png` | Ícone do separador do browser | Só o símbolo, quadrado |

## Requisitos

- **Formato:** PNG com fundo transparente (ou SVG, mudando a extensão no nome).
- **Altura recomendada:** pelo menos 120 px para o `logo.png` e `logo-white.png`.
  O site mostra-o a 40 px de altura, mas o dobro ou triplo garante nitidez em
  ecrãs Retina.
- **`mark.png`:** quadrado, 512 × 512 px.

## Se só tiveres uma versão

Coloca-a como `logo.png`. O rodapé mantém a versão tipográfica em branco, que
funciona bem — não fica partido.

## Verificar

Depois de copiar, abre o site e faz **Ctrl + Shift + R** para forçar o browser a
recarregar. Se o logótipo não aparecer, confirma:

1. O nome do ficheiro está exactamente como na tabela (minúsculas incluídas).
2. O ficheiro abre normalmente noutro programa (não está corrompido).

---

O `mark.svg` que está nesta pasta é o símbolo provisório. Podes apagá-lo assim
que tiveres o `mark.png` real.
