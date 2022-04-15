import { createStorage } from '@budarin/use-react-redux';

const { useStore, getDispatch, StoreProvider } = createStorage();

export const useAppStore = useStore;
export const getAppDispatch = getDispatch;
export const AppStoreProvider = StoreProvider;
