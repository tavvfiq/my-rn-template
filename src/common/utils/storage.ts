import { MMKV } from 'react-native-mmkv';

const _MMKV = new MMKV();

class Storage {
  private provider: MMKV;
  constructor(_provider: MMKV) {
    this.provider = _provider;
  }

  getRaw(key: string) {
    return this.provider.getString(key) || null;
  }

  getItem<T>(key: string): T | null {
    const retrieved = this.provider.getString(key);
    if (retrieved) {
      return JSON.parse(retrieved) as T;
    }
    return null;
  }

  setItem(key: string, data: any) {
    const stringify = JSON.stringify(data);
    this.provider.set(key, stringify);
  }

  delete(key: string) {
    this.provider.delete(key);
  }
}

const StorageSingleton = new Storage(_MMKV);

export default StorageSingleton;
