/* ============================================================
   ABREU E PEREIRA, LDA. — comportamento da página
   JavaScript nativo, sem dependências, compatível com a CSP
   do site (sem handlers inline, sem eval).

   Índice
   ------
   01. Logótipo automático
   02. Painéis da entrada (toque e teclado)
   03. Secções que aparecem ao entrar no ecrã
   04. Ano do rodapé
   ============================================================ */
"use strict";

(function () {

  var semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;


  /* ===== 01. LOGÓTIPO AUTOMÁTICO ========================= */
  /*
     Sem logótipo, a página mostra a versão tipográfica: a sigla
     "AP" seguida do nome. Basta pôr os ficheiros em images/ para
     a troca acontecer sozinha, sem tocar em código:

       images/logo.png        → fundos claros
       images/logo-white.png  → fundos escuros (é o caso da barra
                                e do rodapé deste site)
       images/mark.png        → símbolo isolado, para o separador

     Se um ficheiro não existir, fica a versão tipográfica e nada
     é mostrado ao visitante.
  */

  var LOGO_POR_FUNDO = {
    dark:  "images/logo.png",       // logótipo escuro, para fundo claro
    light: "images/logo-white.png"  // logótipo claro, para fundo escuro
  };

  function seExistir(src, aoEncontrar) {
    var teste = new Image();
    teste.onload = function () {
      // Ignora ficheiros vazios ou corrompidos
      if (teste.naturalWidth > 1) aoEncontrar(src);
    };
    teste.onerror = function () { /* não existe — fica o texto */ };
    teste.src = src;
  }

  function aplicarLogotipos() {
    var marcas = document.querySelectorAll("[data-brand]");

    Array.prototype.forEach.call(marcas, function (marca) {
      var fundo = marca.getAttribute("data-brand") || "light";
      var src = LOGO_POR_FUNDO[fundo] || LOGO_POR_FUNDO.light;

      seExistir(src, function (encontrado) {
        var img = marca.querySelector(".marca-img");
        var texto = marca.querySelector(".marca-txt");
        if (!img) return;

        img.src = encontrado;
        img.hidden = false;
        if (texto) texto.hidden = true;
      });
    });

    // Ícone do separador, se houver símbolo em PNG
    seExistir("images/mark.png", function (encontrado) {
      var icone = document.querySelector('link[rel="icon"]');
      if (!icone) return;
      icone.type = "image/png";
      icone.href = encontrado;
    });
  }


  /* ===== 02. PAINÉIS DA ENTRADA ========================== */
  /*
     Em ecrã largo os painéis abrem ao passar o rato (só CSS).
     Em ecrã tátil não há rato: o primeiro toque abre o painel,
     o segundo segue para a secção correspondente.
     Abaixo de 860px os painéis já estão todos abertos, por isso
     não se faz nada.
  */

  function ativarPaineis() {
    var paineis = document.querySelectorAll(".frente");
    if (!paineis.length) return;

    var tatil = window.matchMedia("(hover: none)").matches;
    var empilhado = window.matchMedia("(max-width: 860px)").matches;
    if (!tatil || empilhado) return;

    Array.prototype.forEach.call(paineis, function (painel) {
      painel.addEventListener("click", function (evento) {
        if (painel.classList.contains("aberta")) return; // segue o link

        evento.preventDefault();

        Array.prototype.forEach.call(paineis, function (outro) {
          outro.classList.toggle("aberta", outro === painel);
        });
      });
    });
  }


  /* ===== 03. SECÇÕES QUE APARECEM ======================== */
  /*
     A classe .anim (que esconde) é posta aqui, e não no HTML.
     Assim, sem JavaScript, o conteúdo é servido visível.
  */

  function ativarAparicoes() {
    var alvos = document.querySelectorAll(".casa, .ficha, .contacto-in");
    if (!alvos.length) return;

    if (semMovimento || !("IntersectionObserver" in window)) return;

    Array.prototype.forEach.call(alvos, function (el) {
      el.classList.add("anim");
    });

    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add("vis");
        observador.unobserve(entrada.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });

    Array.prototype.forEach.call(alvos, function (el) {
      observador.observe(el);
    });
  }


  /* ===== 04. ANO DO RODAPÉ =============================== */

  function atualizarAno() {
    var campo = document.getElementById("ano");
    if (campo) campo.textContent = String(new Date().getFullYear());
  }


  /* ===== ARRANQUE ======================================== */

  function iniciar() {
    aplicarLogotipos();
    ativarPaineis();
    ativarAparicoes();
    atualizarAno();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }

})();
