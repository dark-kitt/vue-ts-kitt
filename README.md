# Vue 3 / TypeScript 5 library for UI components / modules

This project uses Yarn 4 as package manager. So, **don't** use `npm` to install the modules. \
<small>(_Troubleshoot: Please take a look on ["**Starting with Yarn**"](https://yarnpkg.com/getting-started)_)</small>

```shell
corepack enable && yarn
```

## Semantic Release
It is used to automate the package release workflow by your commit messages.
```text
<type>(<scope>): (<symbol>) <short summary>

(<body>)
detailed information about your changes
(</body>)
```
<small>Note: The usage of `<scope>`, `<symbol>` and `<body>` is optional</small>

The format of your commit message must match the following rules below to make it readable for Semantic Release.
| Commit message `<types>` | Value | Description |
| --- | - | --- |
| `feat(components): + button with icons` | minor | Describe your changes for a edited or new feature |
| `fix(components): ~ button icon.url property` | patch | If you create some small changes / hotfixes |
| `style(components): - button bg-color` | patch | To update specific style / CSS changes of anything |
| `test(components): ~ button bg-color` | false | Ignored by semantic release, to create test cases |

<small>Note: It is not necessary to define a scope. You can write each `commit message type` also without a scope (`fix: ~ button icon property`).</small>

| Commit message `<scopes>` | Value | Description |
| --- | - | --- |
| `fix(no-release): - button bg-color` | false | Ignored by semantic release, to create test cases |
| `feat(breaking): + button icon.image property` | major | Use this scope for a breacking change |

<small>Note: The values major, minor and patch defines the version as followed: v1.1.1 === v(`major`).(`minor`).(`patch`)</small>

| `<symbols>` | Description |
| :-----: | :----- |
| + | added |
| - | removed |
| ~ | edited |

<small>Note: It is optional, to use this `helper symbols` to shorten your commit message</small>

### Push major releases
It is only possible to push a `major release` with the following options. Use the scope `breaking` and/or describe your breaking change underneath the following subheads `BREAKING CHANGE:` or `BREAKING CHANGES:` in the body of your commit message. Combine this with each minor or patch update.
