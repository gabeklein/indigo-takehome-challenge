<h1 align="center">Add some numbers challenge</h1>
<h4 align="center">Presented by Indigo</h4>

<br/>

## The problem
> Build a metric logging and reporting service that takes the sum of a metric within the last hour.

<br/>

## Solution

App stores a map of keys, each with a running sum. *Only* because prompt calls for an in-memory solution.

I opted to use `setTimeout` per-value, with a closure to negate an entry after `TTL` has passed. I see that as more performant, in this case, than manually implementing a CRON.

<br/>

## Running the solution

This app is implemented in Node.js, using `express`.

```
npm install
npm run start
```
> App accepts environment variables to customize behavior.

- `PORT` - Default: 3000
- `TTL` - Number of seconds an entry will remain in its running total. Default: 1 hour
- `DEBUG` - If set to true, app will log all actions.

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

## Troubleshooting

Contact me at `gabe@termtm.com` for support in finding the user-error.

<br/>

## License

<img src="https://images-na.ssl-images-amazon.com/images/I/718HQSM42ZL.gif"></img>

