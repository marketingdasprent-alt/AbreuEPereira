# Logótipo — o que está aqui e como trocar

O site já traz o logótipo desenhado em **SVG**, que fica nítido em qualquer
tamanho e não pesa nada:

| Ficheiro | Onde aparece |
|---|---|
| `logo-white.svg` | Barra de topo e rodapé (fundos escuros) |
| `mark.svg` | Ícone do separador do browser |

## Trocar por um ficheiro próprio

Não é preciso apagar nada nem alterar código. O site procura primeiro o **PNG**
e só usa o SVG se não o encontrar — basta pousar o ficheiro nesta pasta com o
nome exacto:

| Ficheiro | Onde aparece | Como deve ser |
|---|---|---|
| `logo-white.png` | Barra e rodapé (fundo escuro) | Versão clara, fundo transparente |
| `logo.png` | Reservado a fundos claros | Versão escura, fundo transparente |
| `mark.png` | Ícone do separador | Só o símbolo, quadrado 512 × 512 px |

## Requisitos

- **Formato:** PNG com fundo transparente.
- **Altura:** pelo menos 120 px. O site mostra-o a cerca de 40 px, mas o triplo
  garante nitidez em ecrãs Retina.
- **Proporção:** o logótipo é largo (símbolo à esquerda, nome à direita). Se o
  teu for empilhado — símbolo em cima, nome por baixo — o nome fica minúsculo na
  barra. Nesse caso, exporta uma versão horizontal só para a web.

## Verificar

Depois de copiar, abre o site e faz **Ctrl + Shift + R** para forçar o browser a
recarregar. Se não aparecer, confirma que o nome está exactamente como na tabela
(minúsculas incluídas) e que o ficheiro abre noutro programa.
