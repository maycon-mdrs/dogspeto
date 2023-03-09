 /* "STORIES" */
 const allStories = [
    /* PROMOÇÃO DA SEMANA */
    {
        thumbUrl: "/cardapio/produtos/dogspeto.jpg",
        title: "PROMOÇÃO DA SEMANA",
        endereco: "#promocao"
    },
    /* COM SALSICHA */
    {
        thumbUrl: "/cardapio/produtos/dogspeto.jpg",
        title: "🌭SALSICHA",
        endereco: "#salsicha"
    },
    /* COM CALABRESA */
    {
        thumbUrl: "/cardapio/produtos/dogspeto.jpg",
        title: "🌭CALABRESA",
        endereco: "#calabresa" 
    },
    /* ESPETOS */
    {
        thumbUrl: "/cardapio/produtos/dogspeto.jpg",
        title: "ESPETOS",
        endereco: "#espetos"
    },
    /* COMBOS */
    {
        thumbUrl: "/cardapio/produtos/dogspeto.jpg",
        title: "COMBOS",
        endereco: "#combos"
    },
    /* BEBIDAS */
    {
        thumbUrl: "/cardapio/produtos/dogspeto.jpg",
        title: "BEBIDAS",
        endereco: "#bebidas"
    },
    /* EXTRAS */
    {
        thumbUrl: "/cardapio/produtos/dogspeto.jpg",
        title: "EXTRAS",
        endereco: "#extras"
    }
];

const storiesContainer = document.querySelector(".stories-container")

allStories.forEach((st) => {
    const content = document.createElement("a");
    content.classList.add("content-stories");
    content.setAttribute("href", st.endereco);

    const img = document.createElement("img");
    img.setAttribute("src", st.thumbUrl);

    const title = document.createElement("span");
    title.innerHTML = st.title;

    storiesContainer.appendChild(content);
    content.appendChild(img);
    content.appendChild(title);
});

/* PROMO */
const promo = [
    /* produto */
     {
         categoria: "PROMOÇÃO DA SEMANA",
         id: "promo",
         imgProduct: "/cardapio/produtos/dogspeto.jpg",
         title: "teste",
         description: "descrição - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus facilisis ex, sit amet ultrices mi commodo et. Nunc vitae tincidunt augue.",
         valor: ""
     },
 ];
 
 /* SALSICHA */
 const salsicha = [
    /* TRADICIONAL */
     {
         categoria: "🌭SALSICHA",
         id: "salsicha",
         imgProduct: "/cardapio/produtos/dogspeto.jpg",
         title: "TRADICIONAL",
         description: "descrição - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus facilisis ex, sit amet ultrices mi commodo et. Nunc vitae tincidunt augue.",
         valor: "R$12,00"
     },
     /* SERTANEJO */
     {
         categoria: "🌭SALSICHA",
         id: "salsicha",
         imgProduct: "/cardapio/produtos/dogspeto.jpg",
         title: "SERTANEJO",
         description: "descrição - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus facilisis ex, sit amet ultrices mi commodo et. Nunc vitae tincidunt augue.",
         valor: "R$13,00"
     },
 ];

 /* CALABRESA */
 const calabresa = [
    /* produto */
     {
         categoria: "🌭CALABRESA",
         id: "calabresa",
         imgProduct: "",
         title: "teste",
         description: "",
         valor: ""
     },
 ];
 
 
 const categoriasProdutos =[promo, salsicha, calabresa];
 
     
 //const categorias = document.querySelector('#categorias');
 const main = document.querySelector(".main-text");
 console.log(categoriasProdutos.length);
 categoriasProdutos.forEach((item, index) => {
     const sectionAccordion = document.createElement("section");
     sectionAccordion.classList.add('accordion');
     //sectionAccordion.id = item[index].id;
     item.forEach(i => {
         sectionAccordion.id = i.id;
     });

     const contentBx = document.createElement("div");
     contentBx.classList.add('contentBx');

     const label = document.createElement("div");
     label.classList.add('label');

     const content = document.createElement("div");
     content.classList.add('content');

     const pLabel = document.createElement("p");
     //pLabel.innerHTML = item[index].categoria;
     item.forEach(i => {
         pLabel.innerHTML = i.categoria;
     });
 
     main.appendChild(sectionAccordion);
         sectionAccordion.append(contentBx);
             contentBx.appendChild(label);
                 label.appendChild(pLabel);
             contentBx.appendChild(content);
             item.forEach(i => { 
                 const product = document.createElement("div");
                 product.classList.add('product');

                 const imgProduto = document.createElement("div");
                 imgProduto.classList.add('img-produto');

                 const pDescricao = document.createElement("p");

                 const h6 = document.createElement("h6");
                 h6.classList.add('h6');

                 const h7 = document.createElement("h7");
                 h7.classList.add('h7');

                 content.appendChild(product);
                     product.appendChild(imgProduto);
                     product.appendChild(h7);
                         h7.innerHTML = i.title;
                     product.appendChild(pDescricao);
                         pDescricao.innerHTML = i.description;
                     product.appendChild(h6);
                         h6.innerHTML = i.valor;
             })
 })