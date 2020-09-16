# MyEngSnippets README

### 概要

* VScodeの拡張開発
* スペルの記憶が曖昧な英単語を補完する
* どのファイルを開いていても発動する
* 標準のスニペットと違い、アイコンの変更や説明を表示できる
* この拡張では単語の意味と対義語や類似語を表示する

### 環境
* VScode 1.49.0以上
* Windows10
* Node.js 12.18.3
* YeomanとVScode Extension Generatorは以下でインストール
```cmd
npm install -g yo generator -code
```

### 使用方法
1. このリポジトリをクローンする
2. 依存パッケージ`npm install`でインストールする
3. `mpm run compile`でコンパイル
4. %USERPROFILE%\.vscode\extensionsに配置する(Windows10の場合)

### その他
* 補完の拡張機能に必要な最低限のファイルにしかないので、拡張作成の練習には最適かもしれません。
