function getTeamWithJson() {
    $.getJSON('team.json', function (result) {
        // This is after get data from team.json data is in result

        // Loop through result and display data
        let $team = $('#team');
        result.forEach((member) => {
            $team.append(`<h2>name: ${member.name}</h2>
            <h5>Position: ${member.position}</h5>
            <p>Bio: ${member.bio}</p>`)
        })
    });
}

function getByAjax() {
 function loadData() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "team.json", true);
        xhr.send();
        xhr.onload = function () {
            team.html(this.responseText);
          
        }
 }
}
$(document).ready(function () {
    getTeamWithJson();
    getByAjax();

});