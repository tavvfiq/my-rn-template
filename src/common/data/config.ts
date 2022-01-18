import { configurePersistable } from 'mobx-persist-store';
import storageSingleton from '../utils/storage';

configurePersistable({
  debugMode: __DEV__,
  storage: {
    setItem: (key, data) => storageSingleton.setItem(key, data),
    getItem: key => storageSingleton.getRaw(key) as string | null,
    removeItem: key => storageSingleton.delete(key),
  },
});
