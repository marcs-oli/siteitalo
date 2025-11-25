function adicionarPost() {
const titulo = document.getElementById("titulo").value;
const conteudo = document.getElementById("conteudo").value;


if (titulo === "" || conteudo === "") {
alert("Preencha todos os campos!");
return;
}


const postDiv = document.createElement("div");
postDiv.className = "post";


postDiv.innerHTML = `
<h3>${titulo}</h3>
<p>${conteudo}</p>
`;


document.getElementById("posts-container").appendChild(postDiv);


document.getElementById("titulo").value = "";
document.getElementById("conteudo").value = "";
}