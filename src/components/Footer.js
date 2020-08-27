import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow me <a href="https://twitter.com/hash2666">@hash2666</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://thriveweb.com.au/">Thrive</a>.
          <a href="https://github.com/haaaru22/yellowcake/blob/master/LICENSE">
            Released under the MIT license.
          </a>
        </span>
      </div>
    </footer>
  </div>
)
