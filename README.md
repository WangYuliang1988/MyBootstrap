Bootstrap 学习工程，参考：https://getbootstrap.com/docs/4.3/examples/

## Bootstrap简介及环境搭建

### Bootstrap简介
Bootstrap是全球最受欢迎的前端组件库，用于开发响应式布局、移动设备优先的 WEB 项目。 

Bootstrap是一套用于HTML、CSS和JS开发的开源工具集。利用其提供的Sass变量和大量mixin、响应式栅格系统、可扩展的预制组件、基于jQuery的强大的插件系统，能够帮助开发者快速开发出原型或者构建整个应用。

### Bootstrap环境搭建
1. 下载Bootstrap编译好的CSS和JS文件：https://github.com/twbs/bootstrap/releases/download/v4.3.1/bootstrap-4.3.1-dist.zip
2. 下载Bootstrap依赖的jQuery和Popper.js，下载地址分别为：https://jquery.com/download/ 和 https://github.com/FezVrasta/popper.js

### 创建并运行工程
1. 打开VS Code，新建目录，命名为：MyBootstrap，在该目录下再新建两个子目录：static和html。
2. 在static目录下再新建两个子目录：css和js，将之前下载的Bootstrap编译好的CSS文件，都拷贝到css目录中，将之前下载的Bootstrap编译好的JS文件、jQuery以及Popper.js，都拷贝到js目录下。
3. 在html目录下新建一个hi.html文件，输入以下内容：
    ```
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="/static/css/bootstrap.min.css">

        <title>Hello, world!</title>
    </head>
    <body>
        <h1>Hello, world!</h1>

        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="/static/js/jquery-3.4.1.min.js"></script>
        <script src="/static/js/popper-1.15.0.min.js"></script>
        <script src="/static/js/bootstrap.min.js"></script>
    </body>
    ```
4. 用浏览器打开hi.html，页面显示正常，控制台无错误输出，完成！