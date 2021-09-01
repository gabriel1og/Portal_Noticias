const API_KEY = '0948fd26ad8d4e17bd92ace784085714';

function exibeNoticias(){
  let divTela = document.getElementById ('tela');
  let texto = '';

  //montar texto HTML das noticias //
  let dados = JSON.parse (this.responseText);
  for (i=0; i< dados.articles.length; i++){
      let noticia = dados.articles[i];
      let data = new Date (noticia.publishedAt);

      texto = texto +`
        <div class="box-noticia">
          <img src="${noticia.urlToImage}" alt="">
          <span class="titulo">${noticia.title}</span></br>
          <span class="creditos">${data.toLocaleDateString()} -
            ${noticia.source.name} -
            ${noticia.author}</span></br>
          <span class="text">
          ${noticia.content} <a href="${noticia.url}">Leia mais...</a></br>
          </span> 
        </div>
      `;
  };
  //preencher a DIV com o texto HTML//
  divTela.innerHTML = texto;

}

function executaPesquisa(){
    let query = document.getElementById ('txtPesquisa').value;
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET',`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send ();
}

function executaTecnologia(){
  let query = document.getElementById ('txtPesquisa').value;
  let xhr = new XMLHttpRequest ();
  xhr.onload = exibeNoticias;
  xhr.open ('GET',`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${API_KEY}`);
  xhr.send ();
}

function executaEsportes(){
  let query = document.getElementById ('txtPesquisa').value;
  let xhr = new XMLHttpRequest ();
  xhr.onload = exibeNoticias;
  xhr.open ('GET',`https://newsapi.org/v2/top-headlines?category=sports&apiKey=${API_KEY}`);
  xhr.send ();
}

function executaSaúde(){
  let query = document.getElementById ('txtPesquisa').value;
  let xhr = new XMLHttpRequest ();
  xhr.onload = exibeNoticias;
  xhr.open ('GET',`https://newsapi.org/v2/top-headlines?category=health&apiKey=${API_KEY}`);
  xhr.send ();
}

function executaBrasil(){
  let query = document.getElementById ('txtPesquisa').value;
  let xhr = new XMLHttpRequest ();
  xhr.onload = exibeNoticias;
  xhr.open ('GET',`https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`);
  xhr.send ();
}

window.onload(executaBrasil());

function executaPortugal(){
  let query = document.getElementById ('txtPesquisa').value;
  let xhr = new XMLHttpRequest ();
  xhr.onload = exibeNoticias;
  xhr.open ('GET',`https://newsapi.org/v2/top-headlines?country=pt&apiKey=${API_KEY}`);
  xhr.send ();
}

function executaFrança(){
  let query = document.getElementById ('txtPesquisa').value;
  let xhr = new XMLHttpRequest ();
  xhr.onload = exibeNoticias;
  xhr.open ('GET',`https://newsapi.org/v2/top-headlines?country=fr&apiKey=${API_KEY}`);
  xhr.send ();
}

function executaEspanha(){
  let query = document.getElementById ('txtPesquisa').value;
  let xhr = new XMLHttpRequest ();
  xhr.onload = exibeNoticias;
  xhr.open ('GET',`https://newsapi.org/v2/top-headlines?country=sa&apiKey=${API_KEY}`);
  xhr.send ();
}

function executaCanadá(){
  let query = document.getElementById ('txtPesquisa').value;
  let xhr = new XMLHttpRequest ();
  xhr.onload = exibeNoticias;
  xhr.open ('GET',`https://newsapi.org/v2/top-headlines?country=ca&apiKey=${API_KEY}`);
  xhr.send ();
}


document.getElementById ('btnPesquisa').addEventListener ('click',executaPesquisa);
document.getElementById ('Tecnologia').addEventListener ('click',executaTecnologia);
document.getElementById ('Esportes').addEventListener ('click',executaEsportes);
document.getElementById ('Saúde').addEventListener ('click',executaSaúde);
document.getElementById ('Brasil').addEventListener ('click',executaBrasil);
document.getElementById ('Portugal').addEventListener ('click',executaPortugal);
document.getElementById ('França').addEventListener ('click',executaFrança);
document.getElementById ('Espanha').addEventListener ('click',executaEspanha);
document.getElementById ('Canadá').addEventListener ('click',executaCanadá);