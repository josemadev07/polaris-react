import * as React from 'react';
import {Context} from './types';
import createPolarisContext from './utilities/createPolarisContext';

const AppProviderContext = React.createContext<Context>(createPolarisContext());

export default AppProviderContext;
