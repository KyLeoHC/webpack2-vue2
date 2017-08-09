/**
 * 重写chunk文件的id（避免索引冲突）
 * 参考打包出来的webpackJsonp函数，第一个参数的索引会被调整为文件名（取代原来的数值）
 * @constructor
 */
function RenameChunkIds() {
}

RenameChunkIds.prototype.apply = function (compiler) {
    compiler.plugin("compilation", (compilation) => {
        compilation.plugin("optimize-chunk-ids", (chunks) => {
            chunks.forEach((chunk) => {
                // 重写chunk文件的id（避免索引冲突）
                chunk.id = chunk.name;
                chunk.ids = [chunk.id];
            });
        });
    });
};

module.exports = RenameChunkIds;
