# the100

This a small CLI tool that will help you join a full group over at the
`the100.io` site. Once it notices that there's room in the given group it will
send out a `growl` message and open the group page.

## Installation

```
npm install -g the100
```

## Usage

The `the100` CLI application accepts 2 flags:

- `--group` The group id that needs to be checked, **required**.
- `--interval` The interval of the checks, defaults to 3000. 

```js
the100 --group 209
```

## License

MIT
