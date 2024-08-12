import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => (
  <div direction="row" justifycontent="center" alignitems="center" width="100%">
    <ClipLoader color="grey" />
  </div>
);

export default Loader;