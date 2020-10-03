import React from 'react';
import './signatureOfCard.scss';

export default function signatureOfCard(props) {
  return (
    <footer className="footer">
      <p className="footer__signature">{`Чего сидишь? Порадуй котэ, `}
        <button className="footer__buy-button">купи</button>.
          </p>
    </footer>
  )
}
