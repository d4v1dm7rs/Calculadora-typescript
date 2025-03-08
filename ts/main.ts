namespace loja{

    const produto = document.getElementById("produto") as HTMLInputElement;
    const preco = document.getElementById("preco") as HTMLInputElement;
    const imposto = document.getElementById("imposto") as HTMLInputElement;
    const calc = document.getElementById("calc") as HTMLButtonElement;

    calc.addEventListener("click", ()=>{
        let p = new Produto();
        p.produto =produto.value;
        p.preco = parseInt(preco.value);

    });
}