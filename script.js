
const containerProdutos = document.getElementById('containerProdutos');
const categoriaSelect = document.getElementById('categoriaSelect');
// Array de produtos
const produtos = [
    {
        imgSrc: 'img/folha_caderno.png',
        nome: 'Refiel de folhas caderno',
        descricao: 'Verificar tamanho do meu caderno ou me dar um novo',
        linkComprar: 'https://www.amazon.com.br/Folhas-Caderno-Pautado-Compatível-Inteligente/dp/B0C9YP4KMR/ref=asc_df_B0C9YP4KMR/?tag=googleshopp00-20&linkCode=df0&hvadid=647391634209&hvpos=&hvnetw=g&hvrand=9022196904483518692&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9100635&hvtargid=pla-2201871092064&psc=1',
        categoria: 'Papelaria'
    },
    {
        imgSrc: 'img/canetes.png',
        nome: 'Canetas Stabilo',
        descricao: 'Não precisa ser necessariamente Stabilo',
        linkComprar: 'https://www.bing.com/aclick?ld=e8SYWYvkWpJh4-VkUpdir-VzVUCUxUv3ppSXGGVUeF-nry2c-x3ozTBuP-H5VssivVx1H4cu5q4TPqaKgJheUsMiJI_1avrWQUdBYUg1iKrVGgntC-3mOfiOvdu0WNJaPy5a2otEszNZeuVNop6CvQ4luJiRlo_nccymcgRezSdE_yT6sKEJRgJjEwPjdedyp83DgiCw&u=aHR0cHMlM2ElMmYlMmZwcm9kdXRvLm1lcmNhZG9saXZyZS5jb20uYnIlMmZNTEItMjcyNzc3MjIxNy1jYW5ldGEtc3RhYmlsby1oaWRyb2dyYWZpY2EtMy1jb3Jlcy1henVsLXZlcm1lbGhvLXByZXRvLV9KTSUzZm1hdHRfdG9vbCUzZDkyMzA5MzM1JTI2bWF0dF93b3JkJTNkJTI2bWF0dF9zb3VyY2UlM2RiaW5nJTI2bWF0dF9jYW1wYWlnbiUzZE1MQl9NTF9CSU5HX0FPX0hPTUUlMjUyMCUyNTI2JTI1MjBJTkRVU1RSWS1BTEwtQUxMX1hfUExBX0FMTEJfVFhTX0FMTCUyNm1hdHRfY2FtcGFpZ25faWQlM2QzODI4NTgyOTglMjZtYXR0X2FkX2dyb3VwJTNkSE9NRSUyNTIwJTI1MjYlMjUyMElORFVTVFJZJTI2bWF0dF9tYXRjaF90eXBlJTNkZSUyNm1hdHRfbmV0d29yayUzZG8lMjZtYXR0X2RldmljZSUzZGMlMjZtYXR0X2tleXdvcmQlM2RkZWZhdWx0JTI2bXNjbGtpZCUzZGVmZjFiOWM5YzdmZjFmMTM2YTU1ZGNkYzBjZDk2ZTRjJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkTUxCX01MX0JJTkdfQU9fSE9NRSUyNTIwJTI1MjYlMjUyMElORFVTVFJZLUFMTC1BTExfWF9QTEFfQUxMQl9UWFNfQUxMJTI2dXRtX3Rlcm0lM2Q0NTgxMjUyNjU0OTYyODUzJTI2dXRtX2NvbnRlbnQlM2RIT01FJTI1MjAlMjUyNiUyNTIwSU5EVVNUUlk&rlid=eff1b9c9c7ff1f136a55dcdc0cd96e4c&ntb=1&ntb=1',
        categoria: 'Papelaria',
    },
    {
        imgSrc: 'img/nicho.png',
        nome: 'Nichos de quarto',
        descricao: 'Leve em consideração o tamanho do meu quarto',
        linkComprar: 'https://www.bing.com/aclick?ld=e8URU-D1hB7hkeQBhTx_WaNzVUCUxvcMmm9_F7JI1YsB-FqX3p0SCdXq84yAGpuDrkMXsgc2GvBhb02bKm8dznjwjN30WzgS2zu0M9pjsmD6PZeK4bhkJr6W6flfSG2KEd311_ZPU-Ov0pRf2yxFSlajV6QS7QF226VxMMg436peXb6PGbkQKxCLJhxqnRF3RTBCkhvw&u=aHR0cHMlM2ElMmYlMmZwcm9kdXRvLm1lcmNhZG9saXZyZS5jb20uYnIlMmZNTEItMTQ0MDgzNzgzMy1uaWNob3MtZGUtcGFyZWRlLTMwMjUyMC14MTAtbGFyZy1fSk0lM2ZtYXR0X3Rvb2wlM2Q5MjMwOTMzNSUyNm1hdHRfd29yZCUzZCUyNm1hdHRfc291cmNlJTNkYmluZyUyNm1hdHRfY2FtcGFpZ24lM2RNTEJfTUxfQklOR19BT19IT01FJTI1MjAlMjUyNiUyNTIwSU5EVVNUUlktQUxMLUFMTF9YX1BMQV9BTExCX1RYU19BTEwlMjZtYXR0X2NhbXBhaWduX2lkJTNkMzgyODU4Mjk4JTI2bWF0dF9hZF9ncm91cCUzZEhPTUUlMjUyMCUyNTI2JTI1MjBJTkRVU1RSWSUyNm1hdHRfbWF0Y2hfdHlwZSUzZGUlMjZtYXR0X25ldHdvcmslM2RvJTI2bWF0dF9kZXZpY2UlM2RjJTI2bWF0dF9rZXl3b3JkJTNkZGVmYXVsdCUyNm1zY2xraWQlM2RlNzlhZDhhOWRkOWExMjUyNjRjZmJkYmMxNjFjMWZkZiUyNnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX21lZGl1bSUzZGNwYyUyNnV0bV9jYW1wYWlnbiUzZE1MQl9NTF9CSU5HX0FPX0hPTUUlMjUyMCUyNTI2JTI1MjBJTkRVU1RSWS1BTEwtQUxMX1hfUExBX0FMTEJfVFhTX0FMTCUyNnV0bV90ZXJtJTNkNDU4MTI1MjY1NDk2Mjg0NCUyNnV0bV9jb250ZW50JTNkSE9NRSUyNTIwJTI1MjYlMjUyMElORFVTVFJZ&rlid=e79ad8a9dd9a125264cfbdbc161c1fdf&ntb=1&ntb=1',
        categoria: 'Decoração',
    },
    {
        imgSrc: 'img/cabos.png',
        nome: 'Organizador de cabos',
        descricao: 'Não tenho o que falar disso kkkk',
        linkComprar: 'https://www.amazon.com.br/Guia-Cabo-Fechado-Alta-Densidade/dp/B08B79TG3R/ref=sr_1_2?crid=3HVMSJRK76VEG&keywords=canaleta+organizador+de+cabos&qid=1695927343&sprefix=cana%2Caps%2C200&sr=8-2',
        categoria: 'Stuff',
    },
    {
        imgSrc: 'img/Fita.png',
        nome: 'Fita 3m',
        descricao: 'De preferencia a que aguente 5kg',
        linkComprar: 'https://exemplo.com/comprar-produto-1',
        categoria: 'Stuff',
    },
    {
        imgSrc: 'img/suporte.png',
        nome: 'Suporte parede controle',
        descricao: 'Não tenho muito o que falar sobre isso aqui né',
        linkComprar: 'https://shopee.com.br/Suporte-de-Controle-Universal-de-Parede-Acrílico-Autoadesivo-PS5-PS4-PS3-Xbox-Switch-Fone-de-Ouvido-Gamepad-Jogo-i.376326645.22091473937?sp_atk=ef791093-e795-42ec-991b-e145529267f0&xptdk=ef791093-e795-42ec-991b-e145529267f0',
        categoria: 'Stuff',
    },
    {
        imgSrc: 'img/hidratante.png',
        nome: 'Hidratante Facial',
        descricao: 'Não precisa ser o mesmo da foto, Ps: Mas considere que minha pele é oliosa ',
        linkComprar: 'https://www.amazon.com.br/Hidratante-Facial-Neutrogena-Hydro-Boost/dp/B06XQ27YLL/ref=sr_1_1?crid=2MP64RIOVB29O&keywords=hydro+boost+neutrogena&qid=1695940553&sprefix=hydro+boost+%2Caps%2C192&sr=8-1',
        categoria: 'SkinCare',
    },
    {
        imgSrc: 'img/xbox.png',
        nome: 'Assinatura GamePass',
        descricao: 'Sustente meu hobby',
        linkComprar: 'https://exemplo.com/comprar-produto-1',
        categoria: 'Computador',
    },
    {
        imgSrc: 'img/cooler.png',
        nome: 'Watter Cooler',
        descricao: 'Deixar o PC geladinho',
        linkComprar: 'https://www.amazon.com.br/Water-Cooler-Corsair-H55-CW-9060052-WW/dp/B09B1WHHCP/ref=asc_df_B09B1WHHCP/?tag=googleshopp00-20&linkCode=df0&hvadid=647574993564&hvpos=&hvnetw=g&hvrand=3427000654612045710&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9100635&hvtargid=pla-1624281914872&psc=1',
        categoria: 'Computador',
    },
    {
        imgSrc: 'img/Fone.png',
        nome: 'Fone de ouvido',
        descricao: 'Fone muito bom para eu esquecer o mundo externo. Ps: Esse modelo em especial',
        linkComprar: 'https://pt.aliexpress.com/item/1005005189152487.html?spm=a2g0o.productlist.main.9.6f9d6f59w0bBTZ&algo_pvid=61b8d4f7-93be-483d-9455-37392a1413c5&algo_exp_id=61b8d4f7-93be-483d-9455-37392a1413c5-4&pdp_npi=4%40dis%21BRL%21478.53%21296.67%21%21%2190.36%21%21%402103204216959320212564265ec6c5%2112000032467441423%21sea%21BR%212235167962%21&curPageLogUid=EpdXe9CwC7mh',
        categoria: 'Computador',
    },
    {
        imgSrc: 'img/Fita_led.png',
        nome: 'Fita de Led',
        descricao: 'Quarto vai ficar lindo',
        linkComprar: 'https://pt.aliexpress.com/item/1005005418001881.html?spm=a2g0o.productlist.main.3.415f3c22Xeh2VV&algo_pvid=85f83e35-a6bb-41f6-af50-4577ce71dc63&aem_p4p_detail=2023092813193712432139877359000002699665&algo_exp_id=85f83e35-a6bb-41f6-af50-4577ce71dc63-1&pdp_npi=4%40dis%21BRL%21118.14%2138.98%21%21%21163.22%21%21%402103249616959323777285923e9da8%2112000032982849298%21sea%21BR%212235167962%21&curPageLogUid=haFAIYDNrfio&search_p4p_id=2023092813193712432139877359000002699665_2',
        categoria: 'Decoração',
    },
    {
        imgSrc: 'img/Gabinete.png',
        nome: 'Gabinete',
        descricao: 'Ajude meu pc a ficar bonito. PS: Não precisa ser esse mas se possivel branco',
        linkComprar: 'https://www.kabum.com.br/produto/108089/gabinete-gamer-t-dagger-cube-white-mid-tower-lateral-em-vidro-branco-t-tgc305w',
        categoria: 'Computador',
    },
    {
        imgSrc: 'img/acai.png',
        nome: 'Açãi',
        descricao: 'Com leite em pó e nuttela please',
        linkComprar: 'https://www.ifood.com.br/delivery/sao-jose-do-rio-preto-sp/acai-primor-unidade-maceno-jardim-america/d32c3eb6-693b-4dbd-b752-1a9220cf882b?prato=1313025d-59dd-4a85-8d82-c837cc4e8362',
        categoria: 'Comida',
    },
    // Adicione mais produtos conforme necessário
];

function exibirProdutosPorCategoria(categoria) {
    containerProdutos.innerHTML = ''; // Limpa o conteúdo anterior

    produtos.forEach((produto) => {
        if (categoria === 'todos' || produto.categoria === categoria) {
            const divProduto = document.createElement('div');
            divProduto.classList.add('divFixa');

            const img = document.createElement('img');
            img.src = produto.imgSrc;

            const h3 = document.createElement('h3');
            h3.textContent = produto.nome;

            const p = document.createElement('p');
            p.textContent = produto.descricao;

            const linkComprar = document.createElement('a');
            linkComprar.href = produto.linkComprar;
            linkComprar.textContent = 'Comprar';
            linkComprar.target = "_blank";

            divProduto.appendChild(img);
            divProduto.appendChild(h3);
            divProduto.appendChild(p);
            divProduto.appendChild(linkComprar);

            containerProdutos.appendChild(divProduto);
        }
    });
}

// Event listener para o menu de categorias
categoriaSelect.addEventListener('change', () => {
    const categoriaSelecionada = categoriaSelect.value;
    exibirProdutosPorCategoria(categoriaSelecionada);
});

// Inicialmente, exibir todos os produtos
exibirProdutosPorCategoria('todos');