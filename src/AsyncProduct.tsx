import { asyncComponent } from 'react-async-component';

const AsyncProduct = asyncComponent({
  name: 'AsyncProduct',
  serverMode: 'resolve',
  resolve: async () => {
    var module = await import(/* webpackChunkName: "Product" */ './Product');
    return module.default;
  },
});

export default AsyncProduct;
