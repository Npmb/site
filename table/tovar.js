$(document).ready(function(){
    $.getJSON("https://spreadsheets.google.com/feeds/list/1b6s_2Xg26h5xfPxZPsHgFQt24VqSUl_PEUH7sHsZrys/od6/public/values?alt=json",
    function(data){
        data = data['feed']['entry'];
        console.log(data);
        showGoods(data);
    })
 
    function showGoods(data){
        var out = '';
        var total = 0;
        for(var i=0; i<data.length; i++){
            if (data[i]['gsx$show']['$t'] == 2){
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
            if (data[i]['gsx$show']['$t'] == 2 ){
                total += parseFloat(data[i]['gsx$kg']['$t']) * parseFloat(data[i]['gsx$price']['$t']);
            }
 
        

    }
    $('.show').html(out);
    $('.total').html(total + " Р");

 }
});
