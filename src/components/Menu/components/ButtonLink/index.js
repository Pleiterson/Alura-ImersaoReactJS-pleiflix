import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink(props) {
    //props => { className: "o que alguém passar", href="/" }
    console.log(props);
  return (
    <a href={props.href} className={props.className}>
        Novo Vídeo
    </a>
    /*<a className={className} href={href}>
      {children}
    </a>*/
  );
}

ButtonLink.defaultProps = {
  href: '/',
  className: '',
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;