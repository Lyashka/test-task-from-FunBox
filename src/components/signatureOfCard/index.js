import React from 'react';
import './signatureOfCard.scss';

function SignatureWithStatus(props) {
  return props.cardStatus === 'default' ? (
    <footer className="footer">
      <p className="footer__signature">{`Чего сидишь? Порадуй котэ, `}
        <button className="footer__buy-button"
          onClick={props.changeCardStatus}>
          купи
        </button>.
      </p>
    </footer>
  ) : (
    <footer className="footer">
      <p className="footer__signature">
        {props.description}
      </p>
    </footer>
  );
}

export default function signatureOfCard(props) {
  return (
    props.isDisable ? (
      <footer className="footer_disabled">
        <p className="footer_disabled__signature">
          Печалька, с {props.stuffing} закончился.
        </p>
    </footer>
    ) :
    <SignatureWithStatus
    description={props.description}
    cardStatus={props.cardStatus}
    changeCardStatus={props.changeCardStatus}/>
  )
}
