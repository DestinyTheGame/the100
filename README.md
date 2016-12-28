```
Please note that this project and the site has now been deprecated. The code is only 
here for historical purposes and might not work on new environments.

Originally this was designed with knowing there was a referral link system in place
that allowed the groups to grow passed 100. Now groups grow up to 200/300 by default
so this utility is no longer needed. 
```

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
