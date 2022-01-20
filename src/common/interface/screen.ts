import React from 'react';

interface Screen {
  id: string;
  name: string;
  component: React.ComponentType<any>;
  isTab?: boolean;
}

export default Screen;
