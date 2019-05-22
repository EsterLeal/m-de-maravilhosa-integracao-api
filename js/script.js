const container = document.getElementById('#mulheres-maravilhosas');

fetch('https://theblackwomanhistory.firebaseio.com/.json')
.then((response) => {
    return response.json();
})
.then((info) =>{
    console.log("SUCESSO!!");
    console.log(info);

    info.content.forEach(imagens =>{
        const img = document.querySelector('img');
        img.setAttribute('src', imagens.image.url);
        container.appendChild(img);
    })
})
    .catch(erro =>{
        console.log(erro);
})

