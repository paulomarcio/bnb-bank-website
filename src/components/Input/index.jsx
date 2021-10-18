import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

function Input({ name, id, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <input
        ref={inputRef}
        className={error ? 'invalid' : ''}
        name={name}
        id={id}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </>
  );
}

export default Input;
