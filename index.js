function BMI(weight, height) {
  const heightMeter = height/100;
  return (weight / ((heightMeter * heightMeter))).toFixed(2);
}
