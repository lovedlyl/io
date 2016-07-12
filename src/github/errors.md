# 使用时的各种报错解决

## warning: push.default is unset

解决方案 [来源](http://blog.csdn.net/jrainbow/article/details/19338525)：<br>
得知'matching' 参数是 Git 1.x 的默认行为，其意是如果你执行 git push 但没有指定分支，它将 push 所有你本地的分支到远程仓库中对应匹配的分支。而 Git 2.x 默认的是 simple，意味着执行 git push 没有指定分支时，只有当前分支会被 push 到你使用 git pull 获取的代码。

```
git config --global push.default simple
```

[stackoverflow上也有相同的解释](http://stackoverflow.com/questions/13148066/warning-push-default-is-unset-its-implicit-value-is-changing-in-git-2-0) ，`simple`首选。_不过还是没咋理解_
