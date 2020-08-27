---
template: SinglePost
linktitle: istats
title: iStatsでCPUの温度を調べる(Mac)
status: Published
date: '2020-08-27'
featuredImage: 'https://live.staticflickr.com/65535/50274662346_ee090cc3c8_w.jpg'
excerpt: 色々調べてみると一般的にCPUの適正温度は40~80℃らしい。WinからMacに乗り換えてやたら熱くなるので 「iStats」を導入しました。
categories:
  - category: Note
aliases:
  - /posts/istats/
meta:
  title: istats
---

> ### MacBook の CPU 温度を調べる

色々調べてみると一般的に CPU の適正温度は 40~80℃ らしい。Win から Mac に乗り換えてやたら熱くなるので 「iStats」を導入しました。

> iStats インストール

`% sudo gem install iStats -n /usr/local/bin`

> 温度の確認

`% istats`

![](https://ucarecdn.com/588c5545-fd9f-41d0-9a05-17b4e0e9a4bf/)

CPU 温度の他にファンスピードやバッテリー温度の確認も出来るよう。。
