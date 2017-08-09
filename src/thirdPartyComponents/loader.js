/**
 * 第三方业务组件加载器
 * by KyLeo 2017.08.09
 */
import storage from '../utils/storage';

const headEl = document.getElementsByTagName('head')[0];
const TPC_VERSION_URL = '/webpack2-vue2/src/thirdPartyComponents/version.js';
const TPC_VERSION_KEY = 'tpc_version';
let tpcVersion = storage.local.get(TPC_VERSION_KEY, true);

/**
 * 信息打印类
 * @type {{error: (function(*)), info: (function(*=))}}
 * @private
 */
const _debugger = {
    error(msg) {
        console.error(`[TPC Loader]:${msg}`);
    },
    info(msg) {
        console.log(`%c[TPC Loader]`, 'color:green', msg);
    }
};

/**
 * jsonp加载
 * @param url 资源链接
 * @param enableCache 是否加上时间戳禁用缓存
 */
const loadByJsonp = (url, enableCache = false) => {
    let scriptEl = document.createElement('script');
    scriptEl.type = 'text/javascript';
    scriptEl.charset = 'utf-8';
    scriptEl.async = true;
    scriptEl.src = `${url}${enableCache ? '' : ('?' + new Date().getTime())}`;
    scriptEl.onload = () => {
        headEl.removeChild && headEl.removeChild(scriptEl);
    };
    headEl.appendChild(scriptEl);
};

/**
 * 加载组件
 * @param dependencies 依赖数组
 * @param cb 加载完成时的回调
 */
const loadComponent = (dependencies, cb) => {
    if (dependencies && !dependencies.length) {
        _debugger.error('dependencies参数不能为空.');
        return;
    }

    let count = 0;
    let total = dependencies.length;
    window.fetchVersionCallBack = (data) => {
        if (data) {
            let notExist = [];
            dependencies.forEach((dep) => {
                // 判断需要加载的业务组件在版本列表中是否都存在
                !data[dep] && notExist.push(dep);
            });
            if (!notExist.length) {
                // 需要加载的组件全部存在
                if (tpcVersion) {
                    // 本地存有版本数据的情况下，需要对比版本数据
                    dependencies.forEach((dep) => {
                        let oldDep = tpcVersion[dep];
                        let newDep = data[dep];
                        let needUpdate = oldDep.v !== newDep.v;
                        if (needUpdate) {
                            tpcVersion[dep] = newDep;
                        }
                        loadByJsonp(tpcVersion[dep].url, !needUpdate);
                    });
                } else {
                    // 本地没有版本数据的情况
                    tpcVersion = data;
                    // 开始加载所有需要的第三方业务组件
                    dependencies.forEach((dep) => {
                        loadByJsonp(tpcVersion[dep].url, false);
                    });
                }
                storage.local.set(TPC_VERSION_KEY, tpcVersion, true);
            } else {
                _debugger.error(`[${notExist.join('、')}]组件不存在!`);
            }
        } else {
            _debugger.error('无法加载版本数据.');
        }
    };
    window.fetchComponentCallBack = () => {
        count++;
        count === total && cb && cb(dependencies.map(dep => {
            return window.tpcObj[dep];
        }));
    };

    loadByJsonp(TPC_VERSION_URL, false);
};

export default loadComponent;
