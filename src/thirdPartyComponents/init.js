import Event from '@/common/event';

const _debugger = {
    error(data, msg) {
        console.error(`[TPC]/[data:${data}]:${msg}`);
    },
    info(data, msg) {
        console.log(`%c[TPC]/[desc:${data.$desc}]:${msg}`, 'color:green', data);
    }
};

export default () => {
    // 第三方组件通用的一个顶级事件对象
    window.tpcEvent = window.tpcEvent || new Event();
    window.tpcEvent.onBefore('', function (data, event) {
        // 事件触发前处理数据规范问题
        if (arguments.length !== 2) {
            _debugger.error(data, 'The number of parameters should be two.');
        } else if (Object.prototype.toString.call(data) !== '[object Object]') {
            _debugger.error(data, 'The data should be a object.');
        } else if (!data.$desc) {
            _debugger.error(data, 'The data miss "$desc" value.');
        } else {
            return;
        }
        event.exit();
    });
    window.tpcEvent.onAfter('', function (data, event) {
        // 事件结束后显示相关的调用信息
        _debugger.info(data, 'success');
    });
};
