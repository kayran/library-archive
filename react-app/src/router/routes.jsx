import React from 'react'
import {HashRouter, Route, Redirect} from 'react-router-dom'

import Book from '../book/book'
import BookRegister from '../book/bookRegister'
import About from '../about/about'
import Home from '../home/home'

export default props => (
    <HashRouter>
        <Route path='/inicio' component={Home}/>
        <Route path='/livros' component={Book}/>
        <Route path='/cadastro' component={BookRegister}/>
        <Route path='/sobre' component={About}/>
        <Redirect from='*' to='/inicio' />

    </HashRouter>
)