const UIFooter = () => {
  const currentYear = Object.assign(new Date()).getFullYear();

  return (
    <footer>
      <div>
        {'\u00A9'} Copyright {currentYear}. All rights reserved.
      </div>
    </footer>
  );
};

export default UIFooter;
