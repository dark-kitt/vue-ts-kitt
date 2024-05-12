# Vue 3 / TypeScript 5 library for UI components / modules

Another Vue 3 component / module library that includes TypeScript 5 and is bundled by vite.

# ⚠️ Library is still in progress and not finalised

## Install

```shell
yarn add -D vue-ts-kitt
```
```shell
npm i -D vue-ts-kitt
```

All components / modules are documented via Storybook. After installing the library, just call the following script to open the docs.
```shell
yarn vue-ts-docs
```
```shell
npm run vue-ts-docs
```
Or add it to your scripts section in your `package.json` file.
```json
{
  "scripts": {
    "docs": "vue-ts-docs"
  }
}
```

## Working in the library? Clone the repo [here](https://github.com/dark-kitt/vue-ts-kitt)

This project uses Yarn 4 as package manager. So, **don't** use `npm` to install the modules. \
<sub>(_Troubleshoot: Please take a look on ["**Starting with Yarn**"](https://yarnpkg.com/getting-started)_)</sub>

Start by enabling Corepack, if it isn't already. This will add the yarn binary to your PATH.
```shell
corepack enable
```
Install the defined modules of the package.json file.
```shell
yarn
```
Generate the sdks for VS Code.
```shell
yarn dlx @yarnpkg/sdks vscode
```
Generate the output.
```shell
yarn build
```
If you need an example to create a component, take a look at the button component.

## Git Hooks

It is necessary to set the custom hook directory after each clone. To do so, you need to call the following command.
```shell
git config core.hooksPath .hooks
```
Afterward, the `commit-msg` hook inside the .hooks directory will `lint` your `commit messages`.

## Semantic Release
It is used to automate the package release workflow by your commit messages.
```text
<type>(<scope>): (<symbol>) <short summary>

(<body>)
detailed information about your changes
(</body>)
```
<sub>Note: The usage of `<scope>`, `<symbol>` and `<body>` is optional.</sub>

The format of your commit message must match the following rules to make it interpretable for Semantic Release.
| Commit message `<types>` | Value | Description |
| :--- | - | :--- |
| `minor(components): + button, input and link` | minor | Multiple changes for a minor update |
| `feat(components): + button with icons` | minor | For an edited or new feature |
| `patch(components): ~ label [for] attribute type` | patch | Small changes for a patch update |
| `fix(components): ~ button icon.url property` | patch | Bugfixes / Hotfixes / Coldfixes |
| `style(components): - button bg-color` | patch | For specific styles / CSS changes |
| `test(components): ~ button bg-color` | false | Ignored by semantic release, to create test cases |

<sub>Note: It is not necessary to define a scope. You can write each `commit message type` also without a scope (`fix: ~ button icon property`).</sub>

| Commit message `<scopes>` | Value | Description |
| :--- | - | :--- |
| `fix(no-release): - button bg-color` | false | Ignored by semantic release, to create test cases |
| `feat(breaking): + button icon.image property` | major | Use this scope for a breacking change |

<sub>Note: It is not required to write specific scopes. The values major, minor and patch defines the version as followed: v1.1.1 === v(`major`).(`minor`).(`patch`)</sub>

| `<symbols>` | Description |
| :---: | :--- |
| + | added |
| - | removed |
| ~ | edited |

<sub>Note: It is optional, to use this `helper symbols` to shorten your commit message.</sub>

### Push major releases
It is only possible to push a `major release` with the following options. Use the scope `breaking` and/or describe your breaking change underneath the following subheads `BREAKING CHANGE:` or `BREAKING CHANGES:` in the `<body>` of your commit message. Combine this with each minor or patch update.

<sub>Note: It is recommended to include `[skip ci]` in the commit message if you won't trigger a new release.</sub>

