import React, { FC, ReactNode } from 'react';

export interface RoutesProps {
  children?: ReactNode;
  hello?: string;
}

const Routes: FC<RoutesProps> = (props: RoutesProps) => {
  return <div>props: {JSON.stringify(props)}</div>;
};

Routes.defaultProps = {};

export default Routes;
