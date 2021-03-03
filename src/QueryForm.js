import React from 'react';

const QueryForm = ({ name, handler, label = 'PG Query Plan JSON', placeholder = '', submitName = 'Submit' }) => {
  const textarea = React.createRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    handler(textarea.current.value);
  };

  return (
    <form onSubmit={ handleSubmit } className="queryForm">
      <label htmlFor="json">
        { label }
      </label>
      <textarea id="json" ref={ textarea } placeholder={ placeholder }></textarea>
      <input type="submit" value={ submitName } />
    </form>
  );
};

export default QueryForm;
