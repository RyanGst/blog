import React from 'react';
import Code from './Code';
import { MarkdownHooks } from 'react-markdown';

export const Markdown: React.FC<{ source: string }> = (props) => {
  return (
    <div style={{ width: '100%' }} className="devii-markdown">
      <MarkdownHooks
        components={{
          code({ node, ...props }) {
            console.log(props);
            return <Code language={props.className?.split('-')[1]} value={props.children.toString()} />;
          },
        }}
      >
        {props.source}
      </MarkdownHooks>
    </div>
  );
};
