# kali版本

## 开机登录

登录时的用户名为"root"，密码是装机时设置的密码。（以为和ubuntu一样，用了装机时设置的用户名，不能登录，还以为记错了，结果重装了系统。:-1:）

## 添加快捷键

设置>快捷键>添加。

添加页面有2个选项，“名称”和"命令"。以添加开启命令行的快捷为例，“命令”处填写"gnome-terminal"，“名称”自己取。点击“添加”后才是关键。这是按下自定义的快捷键才设置完成。

## FQ

### 方法一 tor-browser

<http://blog.topspeedsnail.com/archives/4577>

安装tor-browser:

```bash
# 下载
wget https://github.com/TheTorProject/gettorbrowser/releases/download/v6.0.4/tor-browser-linux64-6.0.4_en-US.tar.xz

# 解压
tar -xvf tor-browser-linux64-5.5.5_zh-CN.tar.xz

# 安装
cd tor-browser-.....
./start-tor-browser.desktop
```

tor不允许在超级用户权限下使用，更改Borwser/start-tor-browser文件，将

```shell
if [ "`id -u`" -eq 1 ]; then
	complain "The Tor Browser Bundle should not be run as root.  Exiting."
	exit 1
fi
```

中的`-eq 1`，改为`-eq 0`。

修Browser目录下文件的所有权：

```bash
chown -R root Browser/*
```

再次启动tor-browser:

```bash
./start-tor-browser.desktop
```

### 方法二 lantern

```bash
dpkg -i lantern....deb # 能安装成功，但还是不能翻
```

### 方法三 ss

<http://www.freebuf.com/sectool/95167.html>

弄了半天原来要买VPN，:sob:，暂且把方法搬运到这里。

-   安装shadowsocks

```bash
pip install shadowsocks
```

-   配置本地ss，先创建配置文件：

```bash
touch ss.confg
```

```json
{
"server" : "vpn IP",
"server_port" : "vpn 端口",
"local_port" : 1080,
"password" : "vpn 密码",
"timeout" : 600,
"method" : "aes-256-cfb"
}
```

执行：

```bash
sslocal -c ss.config
```

-   安装privoxy实现socks5转换成http，下载网址,<http://www.privoxy.org/>。

修改/etc/privoxy/config文件，将783和1336行改为下面模样：

```shell
listen-address 127.0.0.1:8118         //找到783行，去掉注释即可
forward-socks5t / 127.0.0.1:1080. //注意最后有点
```

修改/ect/profile，添加下两行：

```shell
export http_proxy=http://127.0.0.1:8118
export ftp_proxy=http://127.0.0.1:8118
```

-   启动服务

```bash
sslocal -c ss.conf
service privoxy start
```

-   测试，保证出现的文本不是报错html。不行重启试试。

```bash
curl www.google.com
```

## 中文输入发

```bash
apt install fcitx fcitx-table-wbpy fcitx-googlepinyin
fcitx -r #重启fcitx
dpkg -i sougou....deb # 可能失败
```

### 操蛋设置里面所有安装的输入法都消失了

解决方法，修改~/.config/fcitx/addon/fcitx-dbus.conf文件：

```shell
Enable=True
```

快捷键设置在“~/.config/fcitx/config”文件中。

<https://plumz.me/archives/37/>

## 触板自然滚动

<https://forums.kali.org/showthread.php?221-Touchpad-Synaptics-Tapping-issue-Solved>没卵用

没明白是按照上面这个网站做实现了触板滚动，还是本身就可以。要两个指头才能滑动。
