import BlockContent from '@sanity/block-content-to-react';

const RichTextToReact = ({ data }) => {
  return <BlockContent blocks={data} />;
};

export default RichTextToReact;