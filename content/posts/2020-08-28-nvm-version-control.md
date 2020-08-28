---
template: SinglePost
title: nvm version control
status: Published
date: '2020-08-28'
featuredImage: >-
  https://ucarecdn.com/87d4a0a7-f673-4030-b8b0-20db55fe4ccf/-/crop/272x172/22,0/-/preview/
excerpt: nvm version control
meta:
  description: nvm version control
  title: nvm version control
---
node.jsのバージョン管理(nvm)メモ

###動作環境
* macOS Catalina 10.15.6
* shell zsh

## インストール

```
% command -v nvm
```


インストールされている場合は```nvm```が帰ってくる

```
% command -v nvm
nvm
```


```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | zsh
```
インストール
[GitHub(nvm-sh/nvm)](https://github.com/nvm-sh/nvm)最新バージョンの確認



```~/.zshrc
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

これを```zshrc```追加して```% source ~/.zshrc```

## nvmコマンド




#### *1.現在利用しているバージョンを確認*

```

% nvm current
```

#### *2.利用可能なバージョン一覧を表示*

```
nvm ls-remote
```

#### *3.インストール済のバージョンを確認*

```
% nvm ls
```
#### *4.エイリアスの設定を確認*

```
% nvm alias
```

#### *5.特定バージョンのインストール*

```
% nvm install バージョン
```
#### *6.利用するバージョンを変更*

```
% nvm use バージョン
```
#### *7.デフォルトバージョンを変更*

```
% nvm alias default バージョン
```
#### *8.最新のLTSをインストール*
```
nvm install --lts
nvm use --lts
```

##確認

```nvm
//現在利用のnode.jsバージョン確認//
% nvm current
v12.18.3

//エイリアス確認//
% nvm alias
default -> lts/* (-> v12.18.3)
node -> stable (-> v12.18.3) (default)
stable -> 12.18 (-> v12.18.3) (default)
iojs -> N/A (default)
unstable -> N/A (default)
lts/* -> lts/erbium (-> v12.18.3)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.22.0 (-> N/A)
lts/erbium -> v12.18.3

//v10.22.0をインストール//
% nvm install lts/dubnium
Downloading and installing node v10.22.0...
Downloading https://nodejs.org/dist/v10.22.0/node-v10.22.0-darwin-x64.tar.xz...
############################################################################################# 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v10.22.0 (npm v6.14.6)

//v10.22.0がインストールされているか確認//
% nvm alias
default -> lts/* (-> v12.18.3)
node -> stable (-> v12.18.3) (default)
stable -> 12.18 (-> v12.18.3) (default)
iojs -> N/A (default)
unstable -> N/A (default)
lts/* -> lts/erbium (-> v12.18.3)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.22.0  　　　//←←ここが変更//
lts/erbium -> v12.18.3

//利用するバージョンをv10.22.0に変更//
% nvm use lts/dubnium
Now using node v10.22.0 (npm v6.14.6)

//バージョンが変更されたことを確認//
% nvm current
v10.22.0
```
