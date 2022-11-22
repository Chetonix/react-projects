import React, { useState } from 'react';

const Tour = ({tours}) => {
  return (
    <article class="single-tour">
      <img src="https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg" alt="Best of Paris in 7 Days Tour">
      <footer>
        <div class="tour-info">
          <h4>Best of Paris in 7 Days Tour</h4>
          <h4 class="tour-price">$1,995</h4>
        </div>
        <p>Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...
        <button>  read more</button></p>
        <button class="delete-btn">not interested</button>
      </footer>
    </article>
  )
};

export default Tour;
