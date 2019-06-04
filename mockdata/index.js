import Mock from 'mockjs';

// let str = Mock.mock({
//   'code|1': [ 0, -1 ],
//   'msg': function () {
//     return this.code === 0 ? 'ok' : '网络异常'
//   }
// })

// console.log(str);

// mock文件不需要暴露出去，只需要引入这个文件,在main.js中引入

Mock.mock(/todos.json/, {
  'code': 0,
  'msg': function () {
    return this.code === 0 ? 'ok' : '网络异常'
  },
  'data|10-20': [
    {
      'name': '@cname',
      'id|+1': 1
    }
  ]
})
