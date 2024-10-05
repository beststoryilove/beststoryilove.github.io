---
layout:     post
title:      "如何通过CloudFlare Works搭建一个节点？"
author:     "爱吃饭的小牛皮PC"
header-img: "img/post-bg-2015.jpg"
catalog: true
tags:
    - 节点搭建
    - CloudFlare
---

> “世界这么大，总得去看看。”


本篇将会介绍如何使用CloudFlare Works来搭建一个属于自己的节点，以及如何使用节点方法，可解锁流媒体，ChatGPT，Github抽风连不上的问题。


<p id = "build"></p>

## 准备部分

首先你需要一个能够正常收发邮件，且非一次性的邮箱（要保证有啥事的时候能够收到通知），[点击直达CloudFlare官网](https://www.cloudflare.com/zh-cn/)，点击右上角的注册，按流程注册完毕后来到主页。

## 开始搭建

在主页点击Workers 和 Pages，选择创建Worker，去一个你想要的名字（确保名字没被占用），然后直接选择右下角部署，部署完成后点击编辑代码，在代码区输入下列代码：[点我获取代码（记得直接Ctrl+A复制](https://raw.githubusercontent.com/zzzhhh1/v2ray-worker/main/worker2.4)
复制粘贴完成之后点击右上角部署，提示成功后点左上角返回。

## 进一步设置

在KV空间里点击“创建命名空间”，名称可随便填写，推荐选择“settings”，然后添加.重新点击Workers 和 Pages，点击刚刚创建的项目，点击“设置”，点击“变量与机密”（是的没错机翻就是这么生草的），选择“绑定--定义 Worker 可用的资源集”，在左侧选择KV命名空间，变量名称输入“settings”，然后KV命名空间选择刚刚添加的，最后选择部署即可。

## 进阶内容

温馨提示：如果你使用的是CloudFlare提供的N级域名，则每次访问后台以及更新代理时需要代理，如果使用的域名是自己的，则不用代理

## 如何绑定域名？

回到刚刚的“设置”，在“域和路由”中点击添加，选择自定义域，填入自己购买好的域名（顶级域名，且在添加前要现在CloudFlare中托管），添加域，按要求添加DNS解析内容，即可完成域名绑定。

## 后台设置

（温馨提示：若进入后看不懂，左上角切换到EN英语模式）
在设置完成之后，访问你的Pages，往下滑，按要求设置自己的密码（避免他人知道域名后可直接访问），设置完成之后，接下来是有关节点的一些设置。
--
后台默认设置的节点数量为200个，如果你觉得太少可在“Max. mumber of configs”处设置，但不要太多，否则电脑配置不好的直接给干无响应了。
然后推荐大家勾选“Clean IP or clean subdomain”，即开启优选IP，可让我们能用的节点更多，关于优选节点，[点我直达优选IP工具包下载链接（国内用户请使用该链接）](https://pan.lanpw.com/b0742hkxe)[或者点我通过Github下载](https://github.com/XIU2/CloudflareSpeedTest/releases)
什么？你不想下载？[点我直达优选IP网站（三网同步监控，不建议，因为人家机房的位置不一定与你一样，实际延迟/丢包率可能有一定的差异）](https://stock.hostmonit.com/CloudFlareYes)
获得优选IP后填入“Clean IP or clean subdomain”，再开启“Enable Fragments”，之后点击下方的“Save”（保存），复制你的订阅链接就可以愉快地科学上网啦！

## 温馨提示

1.在优选IP时，直接双击”CloudFlareST.exe“运行即可；
2.在填写优选IP时，记得一行一个，换行时无需“;”；
3.[点我获取v2rayN（无国内搬运）](https://github.com/2dust/v2rayN/releases)
4.由于Clash的作者被请去喝茶了，故Clash订阅链接无法使用；
5.优选IP时请关闭所有代理，保证测得延迟/丢包率是准确的。
——by [@爱吃饭的小牛皮PC](https://space.bilibili.com/1086388621?spm_id_from=333.1007.0.0)
