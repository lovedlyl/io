# atom使用日常记录

## 快捷键（ubuntu）

1. 多行编辑：按住ctrl，鼠标点击需要多行编辑的位置（好像没有sublime方便：ctrl+shift+l）。

## 定制代码片段 [原文](http://flight-manual.atom.io/using-atom/sections/snippets/)

以为js文件添加`console.error();`的代码片段为例。

在`~/.atom/snippets.cson`文件中添加如下内容即可：

```
  '.source.js':
   'console.error':
       'prefix': 'error'
       'body': 'console.error(${1:"这里有错误！"});$2'
```

- `.source.js`表示使用该片段的文件类型，其中前面的`.source`为固定写法，后缀`.js`的获取方法为：

  1. 在Settings（设置）里面找到相应的包，比如为使用该片段的文件类型为javascript，则找到包language-javascript，点击进入说明页。
  2. 找到**Scope**描述值，以language-javascript为例就是`source.js`。在前面添加`.`号成CSS类选择器即可。

- `console.error`表示该代码片段的名称，自己设置，简单易读即可。

- `prefix`表示激活代码片段的字符。以上面代码为例，如果在js文件中输入`error`就会有自动补全的提示，按tab键即可补全。

- `body`表示自动补全后生成的内容，如果生成内容很长，使用三个`"`号的形式，比如：

```
  '.source.js':
    'if, else if, else':
      'prefix': 'ieie'
      'body': """
        if (${1:true}) {
          $2
        } else if (${3:false}) {
          $4
        } else {
          $5
        }
      """
```

- `$`符号表示自动补全后鼠标停留的位置，后面紧跟的数字表示按tab键后光标出现的顺序。以上面代码为例，自动补全后由于`$1`在括号内，所以按一下tab键光标就会跳到这里，再按一下就会跳到分号`;`（`$2`）后面。
- 默认值：以上面代码为例，如果需要$1处的默认值为"crash"，使用`${1:"crash"}`即可。

- 在`snippets.cson`文件中编写代码片段时也可使用代码片段： `snip` -> `tab`：

```
'.source.js':
  'Snippet Name':
    'prefix': 'hello'
    'body': 'Hello World!'
```
