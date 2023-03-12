# static-site-boilerplate-astro

- Web制作のための[Astro](https://astro.build/)ボイラープレートです
- Visual Studio CodeとそのプラグインおよびNode.jsを使用します
- 各種設定は必要に応じて変更してください

## 使い方

1. zip形式で本レポジトリをダウンロードする
2. zipファイルを解凍し、フォルダ名を任意のプロジェクト名に変更する
3. プロジェクトのディレクトリに移動し、`npm i`コマンドを実行してパッケージをインストールする
4. 必要なVisual Studio Codeプラグインをインストール・有効化する
5. 必要に応じて、README.mdや各種設定ファイルを編集する
6. Gitを使用する場合は、`git init`のあとに`npx simple-git-hooks`を実行する
7. コーディングを開始する

## コマンド

- `dev`  
開発用サーバーを立ち上げる。

- `build`  
ビルドする。  
ビルド後のHTMLファイルはPrettierでフォーマットされる。

- `preview`  
ローカルで静的なサーバーを起動し、distのファイルをlocalhostで配信する。プロダクションビルドが問題ないかどうかを自分のローカル環境で確認するために使用する。

- `lint`  
lintする。

- `fix`  
fixする。

## Gitフック

- pre-commit  
コミット前にステージングエリアのファイルをリント・フォーマットする。エラーが発生した場合、コミットを中断する。

## コーディングルール

### コーディング全般

#### Node.js

- Node.jsのバージョン管理には[Volta](https://volta.sh/)を使用する
- 現在は16系を使用している
  - Cloudflare Pagesでは18系を使用できない(2023/03/12現在)

#### 対応ブラウザ

コンパイル時、以下を満たすブラウザを対象とする  

- サポート中かつシェアが0.2%より大きい
- Internet Explorer 11は含まない
- Safari > 11
- iOS > 11

プロジェクトの要件に合わせて変更すること。その場合、必要に応じて`.browserslistrc`も更新すること。

#### Visual Studio Codeプラグイン

以下のプラグインを使用すること。

- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Astro

#### プラグイン

- [@astrojs/image](https://github.com/withastro/astro/tree/main/packages/integrations/image)
- [@astrojs/sitemap](https://github.com/withastro/astro/tree/main/packages/integrations/sitemap)
- [astro-purgecss](https://github.com/codiume/orbit/tree/main/packages/astro-purgecss)
- [astro-compress](https://github.com/astro-community/astro-compress)
- [astro-seo](https://github.com/jonasmerlin/astro-seo)

#### リンター

- [markuplint](https://github.com/markuplint/markuplint)を使用する

#### フォーマッター

- [Prettier](https://prettier.io/)を使用する
- プラグインとして以下を使用する
  - [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)

### CSS

- 原則として、SCSSファイルをコンパイルして生成したCSSファイルを直接編集することは禁止する

#### リセットCSS

- [destyle.css](https://github.com/nicolas-cusan/destyle.css)を使用する

### SCSS

#### コンパイラ

- [Dart Sass](https://github.com/sass/dart-sass)を使用する

#### CSSプロセッサー

- [PostCSS](https://github.com/postcss/postcss)を使用する
- プラグインとして以下を使用する
  - [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env)
  - [autoprefixer](https://github.com/postcss/autoprefixer)
  - [postcss-sort-media-queries](https://github.com/solversgroup/postcss-sort-media-queries)
- プレフィックスの付与は`.browserslistrc`に基づく

#### リンター

- [stylelint](https://stylelint.io/)を使用する
- ベースのルールとして[stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss)を使用する
- プロパティの並び順は[stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order)に準拠する
- プラグインとして以下を使用する
  - [stylelint-config-html](https://github.com/ota-meshi/stylelint-config-html)

#### フォーマッター

- [Prettier](https://prettier.io/)を使用する

### JavaScript

#### リンター

- [ESLint](https://eslint.org/)を使用する
- ベースのルールとして[eslint:recommended](https://eslint.org/docs/rules/)と[@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint)を使用する
- プラグインとして以下を使用する
  - [eslint-plugin-astro](https://github.com/ota-meshi/eslint-plugin-astro)
  - [eslint-plugin-css-import-order](https://www.npmjs.com/package/eslint-plugin-css-import-order)
  - [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
  - [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md)
  - [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports)

#### フォーマッター

- [Prettier](https://prettier.io/)を使用する
