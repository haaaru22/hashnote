---
template: SinglePost
title: iStatsでCPUの温度を調べる(Mac)
status: Published
date: '2020-08-27'
featuredImage: 'https://ucarecdn.com/19658f89-06fc-4202-a11f-abea335297f1/-/preview/'
excerpt: 色々調べてみると一般的にCPUの適正温度は40~80℃らしい。WinからMacに乗り換えてやたら熱くなるので 「iStats」を導入しました。
categories:
  - category: Note
meta:
  title: istats zsh gem
---
> ### MacBookのCPU温度を調べる方法



色々調べてみると一般的にCPUの適正温度は40~80℃らしい。WinからMacに乗り換えてやたら熱くなるので 「iStats」を導入しました。



> iStatsインストール

`% sudo gem install iStats -n /usr/local/bin`

> 温度の確認

`% istats`

![](https://ucarecdn.com/588c5545-fd9f-41d0-9a05-17b4e0e9a4bf/)

CPU温度の他にファンスピードやバッテリー温度の確認も出来るよう。。
