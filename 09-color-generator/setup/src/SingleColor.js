import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = () => {
  return (
    <article className="color false">
        <p className="percent-value">{}</p>
        <p className="color-value">{}</p>
    </article>
  )
}

export default SingleColor
