var daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
};

var monthsMap = {
  "0":"Jan",
  "1":"Feb",
  "2":"Mar",
  "3":"Apr",
  "4":"May",
  "5":"June",
  "6":"July",
  "7":"Aug",
  "8":"Sept",
  "9":"Oct",
  "10":"Nov",
  "11":"Dec"
};

//converts to F
var convertTemp = function(kelvin){
  return Math.round(((kelvin - 273.5) * 9 / 5) + 32)
};

var avgTemp = function(maxTemp, minTemp){
  return Math.round((maxTemp + minTemp)/2)
};

var getDate = function(unixTimeStamp){
  var date = new Date(unixTimeStamp * 1000);
  var day = daysMap[date.getDay()];
  var month = monthsMap[date.getMonth()] + ' ' + date.getDate();
  return day + ', ' + month;
}

module.exports = {
  getDate: getDate,
  convertTemp: convertTemp,
  avgTemp: avgTemp
}
