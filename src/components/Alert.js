import React from 'react'

const capitalize = (type) => {
  if (!type) return '';
  const firstChar = type.substring(0, 1).toUpperCase();
  const rest = type.substring(1).toLowerCase();
  return firstChar + rest;
};


function Alert(props) {
  return (
    <div style={{ height: '50px' }}>
      {props.alert && (
        <div>
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{capitalize(props.alert.type)}</strong>:- {props.alert.message}
          </div>
        </div>
      )}
    </div>
  );
}


export default Alert

