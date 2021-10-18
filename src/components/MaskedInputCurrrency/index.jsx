import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import CurrencyInput from 'react-currency-input';

function MaskedInputCurrrency({ name, id, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <CurrencyInput
        ref={inputRef}
        className={error ? 'invalid' : ''}
        name={name}
        id={id}
        {...rest}
      />
      <span>USD</span>
      {error && <span className="error">{error}</span>}
    </>
  );
}

export default MaskedInputCurrrency;
