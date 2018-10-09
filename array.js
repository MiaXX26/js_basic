const qdLoves = ['龚小京'];
console.log(qdLoves.length);
qdLoves.push('章泽天');
console.log(qdLoves.length);
console.log(qdLoves.join('-')); // 连接
qdLoves.push('蒋娉婷');
console.log(qdLoves.length);
console.log(qdLoves.join(','));

qdLoves.shift(); // 移除队头
console.log(qdLoves.join(','));
qdLoves.pop(); // 移除队尾
console.log(qdLoves.join(','));
qdLoves.unshift('蒋娉婷'); // 添加队头
console.log(qdLoves.join(','));
qdLoves.shift();

