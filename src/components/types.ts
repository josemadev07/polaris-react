import {Context as AppProviderContext} from './AppProvider';
import {ThemeProviderContext} from './ThemeProvider';

export interface PolarisContext extends AppProviderContext {
  theme: ThemeProviderContext;
}

export type TransitionStatus = 'entering' | 'entered' | 'exiting' | 'exited';
