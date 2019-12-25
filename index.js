// Write your solution in this file!
// has solution already???

// How to use Object.assign()
// Object.assign(initialObject, additionalObject, additionalObject, ...);
// Object.assign(initialObject, key, value);
// Object.assign() is a good way to NOT destructively Update Object

const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  // const newDriver = {...driver};
  // newDriver.key = value;
  // return newDriver; doesn't return new and original doesn't pass test
  return Object.assign({}, driver, {[key]: value});
}

//function nondestructivelyUpdateObject(obj, key, value) {
//  const newObj = { ...obj };
// 
//  newObj[key] = value;
// 
//  return newObj;
//}

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

