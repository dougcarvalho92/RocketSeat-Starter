import React, { Component } from 'react';

import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Main extends Component {
    state = {
        products: [],
        productInfo: [],
        page: 1
    }
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => { //SEMPRE QUE FOR UMA FUNÇÃO QUE NÃO SEJA DO REACT USAR ARROW FUNCTION PARA NÃO SOBRESCREVER O THIS.
        const response = await api.get(`/products?page=${page}`);
        const { docs, ...productInfo } = response.data;
        this.setState({ products: docs, productInfo, page });
    }
    prevPage = () => {
        const { page } = this.state;
        if (page === 0) return;

        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }
    nextPage = () => {
        const { page, productInfo } = this.state;
        if (page === productInfo.pages) return;

        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    }

    render() {
        const { products, page , productInfo} = this.state;
        return (
            <div className="product-list">
                {
                    products.map(product => ( // quando coloco parentes no lugar de chaves ele faz o return automaticamente;
                        <article key={product._id}>
                            <strong>{product.title}</strong>
                            <p>{product.description}</p>
                            <Link to={`/products/${product._id}`} >Acessar</Link>
                        </article>

                    ))
                }
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages}  onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }
}