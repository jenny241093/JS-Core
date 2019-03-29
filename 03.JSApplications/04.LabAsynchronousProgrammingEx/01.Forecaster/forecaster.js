//  function attachEvents() {

//      let weatherIcons = {
//          'Sunny': '&#x2600;',
//          'Partly sunny': '&#x26C5;',
//          'Overcast': '&#x2601;',
//          'Rain': '&#x2614;',
//          'Degrees': '&#176;'
//      }
//      $('#submit').on('click', function() {
//          let locationsDiv = $(`#forecast`).show();
//          let location = $('#location').val();
//          let getLocationParams = {
//              url: `https://judgetests.firebaseio.com/locations.json`
//          };
//          $.ajax(getLocationParams)
//              .then(getForecasts)
//              .catch(error);

//          function getForecasts(data) {

//              let selectedCity = data.filter((x) => x.name == location);
//              let code = selectedCity[0].code;

//              let currentConditions = { url: `https://judgetests.firebaseio.com/forecast/today/${code}.json` };

//              let treeDaysForecast = { url: `https://judgetests.firebaseio.com/forecast/upcoming/${code}.json` };
//              $.ajax(currentConditions)
//                  .then(getCurrentConditions)
//                  .catch(error);

//              $.ajax(treeDaysForecast)
//                  .then(getTreeDaysForecast)
//                  .catch(error);
//          }

//          function getTreeDaysForecast(data) {
//              console.log(data.forecast);
//              let upcomingDiv = $('#upcoming');

//              for (const currFor of data.forecast) {
//                  let mainSpan = $(`<span class = "upcoming"></span>`);
//                  let spanSymb = $(`<span class = "symbol">${weatherIcons[currFor.condition]}</span>`);
//                  let degrees = $(`<span class = "forecast-data">${currFor.low}${weatherIcons['Degrees']}/${currFor.high}${weatherIcons['Degrees']}</span>`);
//                  let condition = $(`<span class = "forecast-data">${currFor.condition}</span>`);
//                  mainSpan.append(spanSymb);
//                  mainSpan.append(degrees);
//                  mainSpan.append(condition);
//                  upcomingDiv.append(mainSpan);
//              }

//          }

//          function getCurrentConditions(data) {
//              let currentConditionDiv = $('#current');
//              let spanSymbol = $(`<span class = "condition symbol">${weatherIcons[data.forecast.condition]}</span>`);
//              let spanCondition = $(`<span class = "condition"></span>`);
//              let cityName = $(`<span class = "forecast-data">${data.name}</span>`);
//              let degrees = $(`<span class = "forecast-data">${data.forecast.low}${weatherIcons['Degrees']}/${data.forecast.high}${weatherIcons['Degrees']}</span>`);
//              let condition = $(`<span class = "forecast-data">${data.forecast.condition}</span>`);

//              spanCondition.append(cityName);
//              spanCondition.append(degrees);
//              spanCondition.append(condition);
//              currentConditionDiv.append(spanSymbol);
//              currentConditionDiv.append(spanCondition);
//          }

//          function error(mess) {
//              console.log(mess);

//          }
//      });
//  }

function attachEvents() {
    let baseUrl = `https://judgetests.firebaseio.com/`;
    let weatherIcons = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    };
    $('#submit').on('click', getWeather);

    async function getWeather() {
        try {
            let weather = await $.ajax({
                type: "GET",
                url: baseUrl + 'locations.json'
            });
            let location = $('#location').val();
            let selectedCity = weather.filter((x) => x.name == location);
            let code = selectedCity[0].code;
            let locationWeatherToday = await $.ajax({
                type: "GET",
                url: baseUrl + 'forecast/today/' + code + '.json'
            });
            let locationWeatherThreeDays = await $.ajax({
                type: "GET",
                url: baseUrl + 'forecast/upcoming/' + code + '.json'
            });
            console.log(locationWeatherThreeDays);
            let locationsDiv = $(`#forecast`).show();

            let currentConditionDiv = $('#current');
            let spanSymbol = $(`<span class = "condition symbol">${weatherIcons[locationWeatherToday.forecast.condition]}</span>`);
            let spanCondition = $(`<span class = "condition"></span>`);
            let cityName = $(`<span class = "forecast-data">${locationWeatherToday.name}</span>`);
            let degrees = $(`<span class = "forecast-data">${locationWeatherToday.forecast.low}${weatherIcons['Degrees']}/${locationWeatherToday.forecast.high}${weatherIcons['Degrees']}</span>`);
            let condition = $(`<span class = "forecast-data">${locationWeatherToday.forecast.condition}</span>`);
            spanCondition.append(cityName);
            spanCondition.append(degrees);
            spanCondition.append(condition);
            currentConditionDiv.append(spanSymbol);
            currentConditionDiv.append(spanCondition);
            let upcomingDiv = $('#upcoming');

            for (const currFor of locationWeatherThreeDays.forecast) {
                let mainSpan = $(`<span class = "upcoming"></span>`);
                let spanSymb = $(`<span class = "symbol">${weatherIcons[currFor.condition]}</span>`);
                let degrees = $(`<span class = "forecast-data">${currFor.low}${weatherIcons['Degrees']}/${currFor.high}${weatherIcons['Degrees']}</span>`);
                let condition = $(`<span class = "forecast-data">${currFor.condition}</span>`);
                mainSpan.append(spanSymb);
                mainSpan.append(degrees);
                mainSpan.append(condition);
                upcomingDiv.append(mainSpan);
            }

        } catch (error) {
            console.log(error);

        }

    }
}