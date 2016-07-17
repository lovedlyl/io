# 开机显示`System Problem Detected`的解决方法

找到文件`/etc/default/apport`，将文本中`enabled=1`修改为`enable=0`。
