#仿豆瓣网用Vue + vue-cli + vue-router + vuex 制作H5移动版本

#演示地址：https://dbnice.herokuapp.com/

#豆瓣公开接口地址：https://developers.douban.com/wiki/?title=movie_v2

#页面如下：
1、首页
2、正在热映
3、即将上映
4、北美票房榜
5、电影内容页
6、关于我
7、404

#功能模块有：
1、vue-router管理路由
2、父子组件传递参数
3、vuex管理登录状态，通过axios异步请求改变isloading状态
4、axios封装，添加拦截器
5、打包线上文件，前后端分离
6、搭建node服务项目，代理转发，发布heroku服务器
7、星星评分系统，根据星星分数，处理样式class高亮状态
