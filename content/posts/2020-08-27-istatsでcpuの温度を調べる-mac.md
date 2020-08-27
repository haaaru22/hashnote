---
template: SinglePost
title: iStats for mac
status: Published
date: '2020-08-27'
featuredImage: 'https://live.staticflickr.com/65535/50274662346_ee090cc3c8_w.jpg'
excerpt: WinからMacに乗り換えてやたら熱くなるので 「iStats」を導入しました。
categories:
  - category: Note
meta:
  title: istats
---
# iStatsでCPUの温度を調べる

> #### MacBook の CPU 温度

色々調べてみると一般的に CPU の適正温度は 40~80℃ らしい。Win から Mac に乗り換えてやたら熱くなるので 「iStats」を導入しました。

> #### iStats インストール

`% sudo gem install iStats -n /usr/local/bin`

> #### 温度の確認

`% istats`

![](https://ucarecdn.com/4b89a544-569c-4d38-bdca-e9bb530b7c45/)

``

CPU 温度の他にファンスピードやバッテリー温度の確認も出来るよう。。
