import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <> 
        <div class="wave-container wave">
            <p>Designed by<a className='footer_faizan'> Anshum & Aman</a></p>
        </div>
    </>
  )
}

export default Footer