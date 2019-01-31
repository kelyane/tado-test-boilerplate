/**
 * This is your entry point built by webpack using babel and type checked by typescript compiler
 */
require('./select.scss');
import * as http from 'http';

let countries;

function getOptions() {
  showElements();

  http.get('https://restcountries.eu/rest/v2/region/europe', (response) => {
    let data = '';
    response.on('data', (d) => {
      data += d;
    });
    response.on('end', () => {
      countries = JSON.parse(data);
      fetchDropDownOption(countries);

    });
  }).on('error', (err) => {
    console.log(err);
  });
}

function showElements() {
  document.getElementById('close').style.display = 'block';
  const select = document.getElementById('selectCountry');
  select.style.display = 'block';
  select.size = 10;
}

showOptions();
addText();
close();

function fetchDropDownOption(parsed) {
  let fillHtml = '';

  for (let i = 0; i < parsed.length; i++) {
    fillHtml += `<option value="${i}"> ${parsed[i].name}</option>`;
  }

  document.getElementById('selectCountry').innerHTML = fillHtml;

}

function typing(value) {
  const regex = new RegExp(value, 'i');

  const index = countries.findIndex( (country) => {
    return country.name.match(regex);
  });

  selectOption(index);
}

function selectOption(index){
  if (index > -1) {
    document.getElementById('inputCountry').value = countries[index].name;
    const options = document.getElementsByTagName('option');
    options[index].selected = true;

    const select = document.getElementById('selectCountry');
    select.style.display = 'none';
  }
}

function closeEvent() {
  const closeButton = document.getElementById('close');
  const select = document.getElementById('selectCountry');
  const input = document.getElementById('inputCountry');
  closeButton.style.display = 'none';
  select.style.display = 'none';
  input.value = '';
}

function showOptions() {
  const inputClick = document.getElementById('inputCountry');
  inputClick.addEventListener('click', (e: Event) => getOptions());
}

function addText() {
  const inputClick = document.getElementById('inputCountry');
  inputClick.addEventListener('change', (e: Event) => typing(e.target.value));
}

function close() {
  const closeButton = document.getElementById('close');
  closeButton.addEventListener('click', (e: Event) => closeEvent());
}

