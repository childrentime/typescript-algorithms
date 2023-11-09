function limitLoad(urls: string[], handler: any) {
  // 初始化promises数组
  let promises = urls.map((url, index) => {
    // 发送请求
    return handler(url).then(() => {
      // 返回下标是为了知道数组中是哪一项最先完成
      return index;
    });
  });
  // 注意这里要将整个变量过程返回，这样得到的就是一个Promise，可以在外面链式调用
  return urls
    .reduce((pCollect, url) => {
      return pCollect
        .then(() => {
          return Promise.race(promises); // 返回已经完成的下标
        })
        .then(fastestIndex => {
          console.log(fastestIndex, url);
          // 获取到已经完成的下标
          // 将"容器"内已经完成的那一项替换
          // promises[fastestIndex] = handler(url).then(() => {
          //   return fastestIndex; // 要继续将这个下标返回，以便下一次变量
          // });
        })
        .catch(err => {
          console.error(err);
        });
    }, Promise.resolve()) // 初始化传入
    .then(() => {
      // 最后三个用.all来调用
      return Promise.all(promises);
    });
}

const urls = [
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png'
];

limitLoad(urls, (url: string) => {
  console.log(url);
  return Promise.resolve();
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });
