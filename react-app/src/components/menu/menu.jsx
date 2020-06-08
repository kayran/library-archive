import React from 'react'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className='navbar-brand' href='#/inicio'>
           Biblioteca
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#/inicio">Home</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#/livros">Listar Livros</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#/cadastro">Cadastrar Livro</a>
                </li>

                <li className='nav-item'><a className='nav-link' href='#/sobre'>Sobre</a></li>
            </ul>
        </div>
    </nav>
)