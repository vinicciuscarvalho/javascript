/* EVENTOS
Eventos são ações disparadas pela interaçãp dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Exixtem muitos eventos. Veja os mais utilizados:

onclick -> Disparado quando recebe um click.
ondblclick -> Disparado quandpo clique duplo.
onmouseover -> Disparado quando o mouse está sobre.
onmouseout -> Disparado quando o mouse é movido para dora do elemento.
onmousemove -> Disparado quando o mouse é movido do elemento.
onmousedown -> Disparado quando o clique do mouse foi pressionado.
onmouseup -> Disparado quando o clique do botão é liberado.
onfocus -> Disparado quando o elemento recebe o foco. Valido para input,
onchange -> Disparado quando existe uma mudança no conteúdo. "Ao mudar".
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado quando uma tecla é pressionada.
onkeypress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
onload -> Disparado quando a página terminou de ser carregada. Body.
onresize -> Disparado quando há um redimencionamento da janela.

*/

function eventoClique() {
    return document.body.style.backgroundColor="yellow", 
        alert("Acionou um Evento Clique")
};



