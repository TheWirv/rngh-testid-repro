import {SafeAreaProvider} from 'react-native-safe-area-context';
import {render as testingLibRender} from '@testing-library/react-native';
import type {RenderOptions} from '@testing-library/react-native';
import type {ReactElement} from 'react';

const AllTheProviders = ({children}: {children: ReactElement}) => (
  <SafeAreaProvider>{children}</SafeAreaProvider>
);

// re-export everything
export * from '@testing-library/react-native';

// override render method
export function render(ui: ReactElement, options?: RenderOptions) {
  return testingLibRender(ui, {wrapper: AllTheProviders, ...options});
}
