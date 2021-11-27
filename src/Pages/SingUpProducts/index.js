import React, { useState } from "react";
import "./styles.css";
import axios from "axios";


function SignUpProducts() {
    const [name, setName] = useState("");
    const [preco, setPreco] = useState("");
    const [precoDesc, setprecoDesc] = useState("");
    const [estoque, setEstoque] = useState("");
    const [catId, setCatId] = useState("");


    async function sendForm(event) {
        event.preventDefault();
        if (!name) {
            console.log("Name Não inserido");
        } else {
            console.log("Name inserido");
        } if (!preco) {
            console.log("Preço Não inserido");
        } else {
            console.log("Preço inserido");
        } if (!estoque) {
            console.log("Numero de estoque Não inserido");
        } else {
            console.log("Numero de estoque inserido");
        }
        if (!catId) {
            console.log("Id da categoria Não inserido");
        } else {
            console.log("CatID inserido");
        }
        try {

            let response = await axios.post("http://localhost:3333/product", {
                name: name,
                preco: preco,
                preco_desc: precoDesc,
                prod_qt_estoque: estoque,
                cate_id: catId
            })
            console.log(response.data);

        } catch (error) {

            console.log(error);

        }

    }
    function handleName(event) {
        setName(event.target.value);
    }
    function handlePreco(event) {
        setPreco(event.target.value);
    }
    function handlePrecoDesc(event) {
        setprecoDesc(event.target.value);
    }
    function handleEstoque(event) {
        setEstoque(event.target.value);
    }
    function handleCatId(event) {
        setCatId(event.target.value);
    }

    return (
        <div className="container">
            <h1> SignUp Products</h1>
            <form className="form-container" onSubmit={sendForm}>
                <input placeholder="Nome do Produto" onChange={handleName} />
                <input placeholder="Preço do Produto" onChange={handlePreco} />
                <input placeholder="Preço com Desconto" onChange={handlePrecoDesc} />
                <input placeholder="Qnt de Estoque" onChange={handleEstoque} />
                <input placeholder="ID da Categoria" onChange={handleCatId} />
                <button type="submit">Register</button>

            </form>

        </div>
    );
}

export default SignUpProducts;