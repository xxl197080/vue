// axios 的封装

// 1、引入 axios
import axios from 'axios';

// 2、生成一个axios实例    这样我们用http就是封装了的axios，用axios就是没封装的
const http = axios.create();

// 3、设置一下 http 的一些默认选项
// 这个就相当于 insomia 定义一个变量
http.defaults.baseURL = process.env.NPDE_ENV === 'production' ? 'http://localhost:3000/' : 'http://localhost:3000/';
// 这个是超过这个事件请求还没完成，那么就会报错
http.defaults.timeout = 10000;

// 4、可以做一些请求的拦截，比如加上tocken验证

// 5、可以做一些响应拦截
http.interceptors.response.use(response => {
  return response.data; // 直接把请求到的response返回response.data，这样就可以直接使用res了
})

// 6、暴露
export default http;
