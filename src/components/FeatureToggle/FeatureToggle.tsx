import React from 'react';
import { FeatureToggleContext } from '../../context/FeatureToggleContext';

type Props = {
  children: any;
  disabledFeatures: string[];
};

export const FeatureToggle = ({ children, disabledFeatures }: Props) => (
  <FeatureToggleContext.Provider value={{ disabledFeatures }}>
    {children}
  </FeatureToggleContext.Provider>
);
