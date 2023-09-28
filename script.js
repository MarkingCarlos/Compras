

// Array de produtos
const produtos = [
    {
        imgSrc: 'img/folha_caderno.png',
        nome: 'Refiel de folhas caderno',
        descricao: 'Verificar tamanho do meu caderno ou me dar um novo',
        linkComprar: 'https://exemplo.com/comprar-produto-1',
    },
    {
        imgSrc: 'img/canetes.png',
        nome: 'Canetas Stabilo',
        descricao: 'Não precisa ser necessariamente Stabilo',
        linkComprar: 'https://exemplo.com/comprar-produto-1',
    },
    {
        imgSrc: 'img/nicho.png',
        nome: 'Nichos de quarto',
        descricao: 'Leve em consideração o tamanho do meu quarto',
        linkComprar: 'https://exemplo.com/comprar-produto-1',
    },
    {
        imgSrc: 'img/cabos.png',
        nome: 'Organizador de cabos',
        descricao: 'Não tenho o que falar disso kkkk',
        linkComprar: 'https://exemplo.com/comprar-produto-1',
    },
    {
        imgSrc: 'img/Fita.png',
        nome: 'Fita 3m',
        descricao: 'De preferencia a que aguente 5kg',
        linkComprar: 'https://exemplo.com/comprar-produto-1',
    },
    // Adicione mais produtos conforme necessário
];

// Local onde os produtos serão adicionados
const containerProdutos = document.getElementById('containerProdutos');

// Loop para criar divs de produtos
produtos.forEach((produto) => {
    const divProduto = document.createElement('div');
    divProduto.classList.add('divFixa');

    const img = document.createElement('img');
    img.src = produto.imgSrc;

    const h3 = document.createElement('h3');
    h3.textContent = produto.nome;

    const p = document.createElement('p');
    p.textContent = produto.descricao;

    const linkComprar = document.createElement('a');
    linkComprar.href = produto.linkComprar; // Define o URL do link
    linkComprar.textContent = 'Comprar';

    divProduto.appendChild(img);
    divProduto.appendChild(h3);
    divProduto.appendChild(p);
    divProduto.appendChild(linkComprar);

    containerProdutos.appendChild(divProduto);
});
