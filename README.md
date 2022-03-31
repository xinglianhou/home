# 前端代码
## 样例
![Image text](https://raw.githubusercontent.com/xinglianhou/home/main/src/page/image/demo.png)

## 1.安装vscode（前端开发工具）
https://www.cnblogs.com/csji/p/13558221.html

## 2.安装最新node 
https://www.runoob.com/nodejs/nodejs-install-setup.html

## 3.将npm切换为cnpm，切换到国内阿里镜像，提示下载插件速度
https://npmmirror.com/

## 4.运行项目，并在根目录下依次执行下面命令
  a. cnpm install (安装插件) <br/>
  b. cnpm start  (启动系统)

## 5.部署系统
a.执行cnpm run build命令打包系统<br/>
b.新建home文件夹，将dist/下面的文件夹全部复制到home文件夹下面<br/>
c.将整个home文件夹，放入tomcat/webapps/目录下，双击tomcat/bin/startup.bat<br/>
d.通过http://localhost:8088/home访问系统

## 6.动态修改配置键
a.修改/static/config.js文件中的hostUrl地址，改为部署好的https://localhost:8088/home（注意加上项目的上下文home）<br/>
b.修改data.json文件夹中的标题名称和模块信息，模块信息可以增加，也可以删除，默认是json格式
