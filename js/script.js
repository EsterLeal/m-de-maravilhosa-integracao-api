const container = document.querySelector(".maravilhosas__box")

fetch('http:localhost:5001/maravilhosas')
.then((response) => {
    return response.json();
})  
.then((info) =>{
    console.log("SUCESSO!!");
    console.log(info);
    
    info.content.forEach(pessoa =>{
        
        let card = document.createElement('div');
        card.setAttribute('class', 'maravilhosas_perfil');
        container.appendChild(card);
        
        let ancora = document.createElement('a')
        ancora.setAttribute('href','#');
        card.appendChild(ancora);
        
        let img = document.createElement('img');
        img.setAttribute('class', 'img-responsive');
        
        if (pessoa.metadata && pessoa.metadata.image){
            img.setAttribute('src', pessoa.metadata.image.url);
        }else{
            img.setAttribute('src', './img/img-mulher.png');
        }
        
        ancora.appendChild(img);
        
        let nome = document.createElement('p');
        nome.innerHTML = pessoa.title;
        card.appendChild(nome);
        
    })
})
.catch(erro =>{
    console.log(erro);
})

const bota1 = document.getElementById("botao");
console.log(bota1);

bota1.addEventListener('click', (evento) =>{
    console.log("EAEEEEEEE");
    evento.preventDefault();

    let nome = document.querySelector("#name");
    let endereco = document.querySelector("#imagem");
        
    fetch('https:localhost:5001/maravilhosas', {
        
        Method:'POST',
        Headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/json",
        },
        
        body: JSON.stringify ({
            "title" : nome ,
            "metadata" : {
                "image" : {
                    "url" : endereco,
                }
            }
  
        })
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("mulheres-maravilhosas-cadastro").textContent("Sucesso!!!")
    })
    .catch((erro) => {
        console.log(erro);
    })
    
})