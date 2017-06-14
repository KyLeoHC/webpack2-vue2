import Event from '@/common/event';

const _debugger = {
    format(msg, data) {
        return `[TPC]/[desc:${data.$desc || 'null'}]:${msg}`;
    },
    error(event, msg) {
        event.exit();
        console.error(this.format(msg));
    },
    info(data, msg) {
        console.info(this.format(msg, data), data);
    }
};

export default () => {
    // 第三方组件通用的一个顶级事件对象
    window.tpcEvent = window.tpcEvent || new Event();
    window.tpcEvent.onBefore('', function (data, event) {
        if (arguments.length !== 2) {
            _debugger.error(event, 'The number of parameters should be two.');
        } else if (Object.prototype.toString.call(data) !== '[object Object]') {
            _debugger.error(event, 'The data should be a object.');
        } else if (!data.$desc) {
            _debugger.error(event, 'The data miss "$desc" value.');
        }
    });
    window.tpcEvent.onAfter('', function (data, event) {
        _debugger.info(data, 'success');
    });
};
