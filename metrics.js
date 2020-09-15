/**
 * Debug environment flag, if you need to see internal workings.
 */
const DEBUG = process.env.DEBUG;

/** 
 * Time-To-Live, 
 * how long (in ms) it takes for values to be removed from running total.
 * 
 * Default: 1 hour.
 **/
const TTL = 1000 * (process.env.TTL || 60 * 60);

const NAMESPACE = {};

function insertMetric(key, value){
  let sum = NAMESPACE[key];

  /* ensure is an integer. */
  value = Math.floor(value);
  
  NAMESPACE[key] = value + (sum || 0);
  
  if(DEBUG)
    console.log(`${key}: Added ${value}, now ${NAMESPACE[key]}`)

  if(TTL !== 0){
    /**
     * ¯\_(ツ)_/¯
     * 
     * I wouldn't normally do this, but is the
     * best (specifically for in-memory) solution.
     * 
     * Using internal scheduler is more exact, quicker; also
     * probably more memory efficient than a cron+cache.
     * 
     * I'm assuming this could be very-high throughput.
     */
    
    setTimeout(() => {
      const current = NAMESPACE[key] -= value;

      if(DEBUG)
        console.log(`${key}: Entry of ${value} expired, now ${current}`)
    }, TTL);
  }
}

function retrieveMetric(key){
  return NAMESPACE[key];
}
  
exports.insert = insertMetric;
exports.get = retrieveMetric;