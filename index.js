// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver};
  newDriver.key = value;
  return newDriver;
  // return Object.assign({}, driver, {[key]: value});
}

//function nondestructivelyUpdateObject(obj, key, value) {
//  const newObj = { ...obj };
// 
//  newObj[key] = value;
// 
//  return newObj;
//}

//Object.assign(initialObject, additionalObject, additionalObject, ...);

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  // driver.key = value;
  driver[key] = value; //this way passes test unlike driver.key = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  // const newDriver = {...driver};
  // above way works, but this one looks better
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}

