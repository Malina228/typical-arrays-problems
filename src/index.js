
exports.min = function min (array = 0) {
  if ((array.length) > 0)
  {
    let minElement = array[0];
    for (let i = 1; i < (array.length); i++)
    {
      if (array[i] < minElement)
      {
        minElement = array[i];
      }
    }
    return minElement;
  }
  else
  {
    return 0;
  }
}

exports.max = function max (array = 0) {
  if ((array.length) > 0)
  {
    let maxElement = array[0];
    for (let i = 1; i < (array.length); i++)
    {
      if (array[i] > maxElement)
      {
        maxElement = array[i];
      }
    }
    return maxElement;
  }
  else
  {
    return 0;
  }
}

exports.avg = function avg (array = 0) {
  let sum = 0;
  let counter = 0;
  if ((array.length) > 0)
  {
    for (let i = 0; i < (array.length); i++)
    {
      counter += 1;
      sum += array[i];
    }
    return (sum / counter);
  }
  else
  {
    return 0;
  }
}
