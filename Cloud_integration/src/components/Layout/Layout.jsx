import React, {Fragment} from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Routers from '../../routers/Routers'

const Layout = () => {
  return (
<Fragment>
<Header/>
<div>
    <Routers/>
</div>
<Footer/>
</Fragment>
  )
}

export default Layout