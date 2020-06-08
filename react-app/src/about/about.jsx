import React from 'react'
import PageHeader from '../components/pageHeader'
export default props => (
    <main className='container'>
        <PageHeader name='Sobre' small='biblioteca'/>
        <section className='body'>
            <p>
                Livros da biblioteca
            </p>
        </section>
    </main>
)