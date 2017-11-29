import { asyncComponent } from 'react-async-component';

const AsyncProduct = asyncComponent({
  name: 'AsyncProduct',
  serverMode: 'resolve',
  resolve: () => {
    return import(/* webpackChunkName: "Product" */ './Product') as Promise<React.SFC<{}>>;
  },
});

export default AsyncProduct;
