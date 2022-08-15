import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
          <div class="row">
            <div class="col-sm-8">
                <h1>Welcome to the levCoins system</h1>
                <p>The best digital bank in the world :)</p>
            </div>
          </div>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
