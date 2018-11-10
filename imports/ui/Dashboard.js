import React from 'react';

import PrivateHeader from './PrivateHeader';

export default () => {
  return (
  	<div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
	     <p>Dashboard page content</p>
      </div>
    </div>
    );
};
