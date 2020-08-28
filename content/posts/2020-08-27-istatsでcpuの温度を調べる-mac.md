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
  canonicalLink: ''
  description: iStatsコマンドでCPU温度を調べる
  noindex: false
  title: iStatsコマンドでCPU温度を調べる
---
# iStatsでCPUの温度を調べる

> #### MacBook の CPU 温度

色々調べてみると一般的に CPU の適正温度は 40~80℃ らしい。Win から Mac に乗り換えてまず作業中のmacの熱さが気になったのでコマンド一つでCPU温度がわかる「iStats」を導入しました。

> #### iStats インストール

`% sudo gem install iStats -n /usr/local/bin`

> #### 温度の確認

`% istats`

![](https://ucarecdn.com/0aa03f83-b1a2-4653-a453-df4ca03f2f99/)

CPU 温度の他にファンスピードやバッテリー温度の確認も出来るよう。。

> #### 温度対策

![](https://ucarecdn.com/94cfae44-1aca-44e4-a865-1149d495bc21/)

以前はPC用のクーラーを使っていましたが場所もとるのでUSB扇風機で代用してます。体感としてはパフォーマンス変わらずけっこうアリだと思っています。

![](https://ucarecdn.com/c080ac8b-60eb-453c-af72-adae4b36ebe0/)
