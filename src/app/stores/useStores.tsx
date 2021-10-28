import * as React from 'react';
import { rootStore } from 'app/stores/RootStore';

export const storesContext = React.createContext(rootStore.stores);
export const useStores = () => React.useContext(storesContext);
