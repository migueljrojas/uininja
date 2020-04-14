import Router from 'next/router';

const routingHandler = (href, urlDecorator) => {
  Router.push(href, urlDecorator);
};

export default routingHandler;
