<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Countries and Towns</title>
<link rel="stylesheet" href="styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="countries-and-towns.js"></script>
    </head>
    <body>
    <fieldset>
    <legend>Countries</legend>
    <table id="countries">
    <tr>
    <th>Country</th>
    <th>Actions</th>
    </tr>
    <tr>
    <td><input type="text" id="countryName" placeholder="Enter country name"/></td>
    <td>
    <button id="btnAddCountry">Add Country</button>
</td>
</tr>
</table>
</fieldset>
<fieldset>
<legend>Towns</legend>
<button id="btnLoadCountries">Load Countries</button>
<select id="selectCountry"></select>
    <button id="btnViewTowns">View Towns</button>
<hr>
<table id="towns">
    <tr>
    <th>Town</th>
    <th>Country</th>
    <th>Actions</th>
    </tr>
    <tr>
    <td><input type="text" id="townName" placeholder="Enter town name"/></td>
    <td><input type="text" id="townCountryName" placeholder="Enter country name"/></td>
    <td>
    <button id="btnAddTown">Add Town</button>
</td>
</tr>
</table>
</fieldset>
<script>
$(attachEvents());
</script>
</body>
</html>