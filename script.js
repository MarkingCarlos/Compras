

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
        linkComprar: 'https://exemplo.com/comprar-produto-1',
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
        linkComprar: 'https://exemplo.com/comprar-produto-1',
        categoria: 'Stuff',
    },
    {
        imgSrc: 'img/hidratante.png',
        nome: 'Hidratante Facial',
        descricao: 'Não precisa ser o mesmo da foto, Ps: Mas considere que minha pele é oliosa ',
        linkComprar: 'https://exemplo.com/comprar-produto-1',
        categoria: 'SkinCare',
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
