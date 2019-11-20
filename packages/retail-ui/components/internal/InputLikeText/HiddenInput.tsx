import * as React from 'react';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  nodeRef: (ref: HTMLInputElement | null) => void;
}

const cap: React.ReactEventHandler = e => e.stopPropagation();

/**
 * В **IE11** событие `onPaste` вызывается только у редактируемых элементов: `input`, `textarea`, `[contenteditable]`.
 * Для решения этой проблемы, перед "вставкой" фокусируемся на инпуте
 * после этого `onPaste` вызывается у инпута и всплывает.
 */
export default class HiddenInput extends React.Component<Props> {
  public render() {
    const { nodeRef, ...props } = this.props;
    return (
      <input
        {...props}
        ref={nodeRef}
        type="text"
        tabIndex={-1}
        onBlur={cap}
        onFocus={cap}
        onChange={cap}
        style={{
          position: 'absolute',
          width: 1,
          height: 0,
          border: 0,
          outline: 0,
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          opacity: 0,
        }}
      />
    );
  }
}
