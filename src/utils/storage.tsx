import AsyncStorage from "@react-native-community/async-storage";
import { useSyncExternalStore } from "react";
import Storage from "react-native-storage";


class Store {
  public storage;
  constructor() { 
     this.storage = new Storage({
      size: 1000,//最大容量
      storageBackend: AsyncStorage, //指定储存 如果不指定数据只会保存内存,重启后即丢失
      defaultExpires: 1000 * 3600 * 24,//设置过期事件
      enableCache: true,//是否开启缓存
    })
  }
  // 存储数据
  setValue<T>(key: string, data: T) { 
    this.storage.save({
      key: key,
      data: {...data}
    })
  }
  // 获取数据
  getValue(key:string) { 
    return new Promise((resolve, reject) => { 
       try {
         this.storage.load({
           key: key,
           autoSync: true, // 开启异步加载
           syncInBackground: true,
           syncParams: {}
         }).then(data => { 
           if (data) { 
             resolve(data)
           }
         }).catch(err => { 
           reject(err)
         })
       } catch (error) {
          reject('获取不到数据！')
       }
    })
  }
}

export default  new Store()