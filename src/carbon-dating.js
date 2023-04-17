const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

const dateSample = (sampleActivity) => {
  let num = +sampleActivity;
  let rad = Math.ceil(Math.log(MODERN_ACTIVITY / num) * (HALF_LIFE_PERIOD / Math.LN2));
  if (typeof sampleActivity !== 'string'
      || isNaN(num)
      || !(/^[\d.]+$/.test(sampleActivity))
      || num <= 0
      || num >= MODERN_ACTIVITY )
    return false;
  return rad;
}

module.exports = { dateSample };
