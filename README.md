# cvf-contest

## このリポジトリについて

https://cvf-contest.net/ でホスティングされているサイトのソースコードです。

依頼を受け制作したもので、公開用のために一部の情報は削除しています。


## Installation

### 1. Install dependencies

```bash
$ git clone git@github.com:nenrinyear/cvf-contest.git
$ cd cvf-contest
$ npm install
```

### 2. Set environment variables

```bash
$ cp .env.template .env
```

`.env` ファイルを編集してください。
(独自APIを使用しているため、第三者の利用はできません…)

### 3. Start development server

```bash
$ npm run dev
```

## License
AGPL-3.0

Copyright (c) 2023 nenrinyear
