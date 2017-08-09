/**
 * 注册业务组件
 * @param name 组件名字
 * @param component 组件对象
 */
const registerTpc = (name, component) => {
    window.tpcObj = window.tpcObj || {};
    if (window.tpcObj[name]) {
        console.error(`'${name}'组件名字已经被占用!`);
    } else {
        window.tpcObj[name] = component;
    }
};

export default registerTpc;
