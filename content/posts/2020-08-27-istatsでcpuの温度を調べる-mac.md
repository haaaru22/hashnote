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
  canonicalLink: 'https://hashnote.dev/'
  description: iStatsコマンドでCPU温度を調べる
  title: istats
---
# iStatsでCPUの温度を調べる

> #### MacBook の CPU 温度

色々調べてみると一般的に CPU の適正温度は 40~80℃ らしい。Win から Mac に乗り換えてまず作業中のmacの熱さが気になったのでコマンド一つでCPU温度がわかる「iStats」を導入しました。

> #### iStats インストール

`% sudo gem install iStats -n /usr/local/bin`

> #### 温度の確認

`% istats`

![](https://ucarecdn.com/71ee1c7e-0f7d-4f5f-b2ce-67fa17fe1560/)

CPU 温度の他にファンスピードやバッテリー温度の確認も出来るよう。。

> #### 温度対策

![](https://ucarecdn.com/ef23bd54-2b43-45e1-80bb-d0bfb4e5fad8/)

以前はPC用のクーラーを使っていましたが場所もとるのでUSB扇風機で代用してます。体感としてはパフォーマンス変わらずけっこうアリだと思っています。

![](https://ucarecdn.com/9185715b-6845-4774-a2d7-d1488a95b69a/)
