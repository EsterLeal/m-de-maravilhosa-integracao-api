const container = document.querySelector(".maravilhosas__box")

fetch('http://localhost:5001/maravilhosas')
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

        let botao = document.createElement("button");
        botao.innerHTML = "✖";
        // botao.setAttribute("type" , "button");
        botao.setAttribute('data-id', pessoa.id);
        card.appendChild(botao);

        botao.addEventListener('Click' , () => {
            console.log(botao);

            let thisCard = botao.parentElement;
            let cardPai = thisCard.parentElement;

            fetch('http://localhost:5001/maravilhosas' + pessoa.id, {
                method: 'DELETE',
                headers: {
                    "Accept" : "application/json",
                    "Content-type" : "application/json"
                },

                // body: JSON.stringify ({
                //     'id' : botao.getAttribute('data-id')
                // }) 
            })
            .then(() => {
                cardPai.removeChild(thisCard);
            })
            .catch((erro => {
                console.log(erro)
            }))


        })
        
    })
})
.catch(erro =>{
    console.log(erro);
})

const botao = document.getElementById("button");
console.log(botao);

botao.addEventListener('click', (evento) => {
    console.log("EAEEEEEEE");

    let nome = document.querySelector("#titulo");
    let endereco = document.querySelector("#imagem");
        
    fetch('http://localhost:5001/maravilhosas', {
        
        method:'POST',
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/json",
        },
        
        body: JSON.stringify ({
            "title" : nome.value ,
            "metadata" : {
                "image" : {
                    "url" : endereco.value,
                }
            }
  
        })
    })   
})