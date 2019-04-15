import PropTypes from 'prop-types';
import Head from 'next/head';

const UIHead = props => {
  const { title = 'UI Ninja - Web Studio & Digital agency' } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
  );
};

UIHead.propTypes = {
  title: PropTypes.string
};

export default UIHead;
