$(document).ready(function(){
    $.getJSON("https://spreadsheets.google.com/feeds/list/1fKoNMQvvo63JQlTWbsDND8kP77kb9LPycml9Vb9bWTI/od6/public/values?alt=json",
    function(data){
        data = data['feed']['entry'];
        console.log(data);
        showGoods(data);
    })
 
    function showGoods(data){
        var out = '';
        var total = 0;
        for(var i=0; i<data.length; i++){
            if (data[i]['gsx$show']['$t'] == 1){
                out +=`<tr>`;
                out +=`<th scope="row">${data[i]['gsx$id']['$t']}</th>`;
                out +=`<td>${data[i]['gsx$name']['$t']}</td>`;
                out +=`<td>${data[i]['gsx$kg']['$t']}</td>`;
                out +=`<td>${data[i]['gsx$price']['$t']}</td>`;
                out +=`<td>${data[i]['gsx$com']['$t']}</td>`;
                out +=`</tr>`;
            }

        }
        for(var i=0; i<data.length; i++){
            if (data[i]['gsx$show']['$t'] == 1){
                total += parseFloat(data[i]['gsx$kg']['$t']) * parseFloat(data[i]['gsx$price']['$t']);
            }
 
        

    }
    $('.show').html(out);
    $('.total').html(total + " Р");

 }
});
