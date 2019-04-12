import PropTypes from 'prop-types';
import Head from 'next/head';

const UIHead = props => {
  const { title = 'UI Ninja - Web Studio & Digital agency' } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

UIHead.propTypes = {
  title: PropTypes.string
};

export default UIHead;
