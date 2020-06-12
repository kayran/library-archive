import React from 'react'
import Header from '../components/header/header'
export default props => (
    <main className='container'>
        <Header name='Sobre' small='biblioteca'/>
        <section className='body'>
            <p>
                Livros da biblioteca
            </p>
        </section>
    </main>
)