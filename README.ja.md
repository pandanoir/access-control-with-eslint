# access-control-with-eslint

eslint-plugin-import の no-internal-modules ルールを使うと、ファイルへのアクセス制限ができます。このリポジトリはディレクトリ構成に合わせた `no-internal-modules` を設定します。

- index.ts であれば無条件でアクセス可能
- アクセスしようとしているファイルと同じ階層に index.ts がなければアクセス可能
- アクセスしようとしているファイルと同じ階層に index.ts があったらアクセス不可
- 
