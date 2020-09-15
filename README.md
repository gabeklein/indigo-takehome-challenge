<h1 align="center">Add some numbers challenge</h1>
<h3 align="center">Amazing solution presented by 𝔊𝔞𝔟𝔢 𝔎𝔩𝔢𝔦𝔫</h3>

<br/>

## The problem
> Build a metric logging and reporting service that takes the sum of a metric within the last hour. You will build a minimal API web server that implements the two main methods defined below.
>
> Note: Use volatile memory.

<br/>

## Running the solution

This app is implemented in Node.js, using `express`.

```
npm install
npm run start
```
> Default port is 3000.
>
> If you would like to run api on a different port use environment variable `PORT`.

```
PORT=8080 npm run start
```

<br/>

## API

### `GET /metric/{key}`
> Returns running total of values submitted for metric `key`. Limited to past hour's input.


### `POST /metric/{key}`
> Stores a value `number` for given metric `key`.
```
{
  "value": number
}
```

<br/>

## Support

Contact me at `gabe@termtm.com` for support in finding the user-error.

<br/>

## Special thanks

I would like to thank my mom, for the gift of life, and the academy for absolutely nothing.