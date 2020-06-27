var dishesArray = [];
var table;
var pricediv;
$(document).ready(function(){
    if(!getDishes()){   //資料載入不成功，就不繼續跑了
        return ;
    }
    initTable();
});
function initTable(){
    table = document.getElementById('menutable');
    pricediv = document.getElementById('price');
    var dishesLen = dishesArray.length;
    for(var i = 0; i < parseInt(dishesLen / 4); i++){
        var tr = document.createElement("tr");
        for(var j = 0; j < 4; j++){
            var data = dishesArray[i*4 + j];
            addtdNode(tr, data);
        }
        table.appendChild(tr);
    }
    if(dishesLen % 4 != 0){
        var tr = document.createElement("tr");
        for(var i = dishesLen - dishesLen % 4; i < dishesLen; i++){
            var data = dishesArray[i];
            addtdNode(tr, data);
            table.appendChild(tr);
        }
    }
    initText();
}
function addtdNode(tr, data){
    var td1 = document.createElement("td");
    var zwmz = document.createTextNode(data['zwmz']);
    var td2 = document.createElement("td");
    var name = data['zwjp'];
    var id = 'text_' + data['zwjp'];
    var txid = id ;
    var innerhtml = '<input name="'+name+ '"' + ' type="text" id="'+ id + '"' + '/>' + 
    '<input type="button" value="+" onclick="add(' + txid + ')"/>' + 
    '<input type="button" value="-" onclick="sub(' + txid + ')"/>';
    td1.appendChild(zwmz);
    td2.innerHTML = innerhtml;
    tr.appendChild(td1);
    tr.appendChild(td2);
    var priceid = 'price_' + data['zwjp'];
    var dj = data['dj'];
    var pricehtml = '<input   type="hidden"   name="' + priceid + '"   id="' + priceid + '"  value="' + dj + '"/>';
    pricediv.innerHTML = pricediv.innerHTML + pricehtml;
}
function getDishes(){
    var dataInit = false;
    $.ajax({
        type: "POST",
        async:false,
        url: contextPath + "/getDishes.do",
        success: function(msg){
            //window.alert(msg);
            if(msg.indexOf('<!DOCTYPE') != -1){
                window.alert('請先登入!!!');
                window.location.href = contextPath + "/login/login.jsp"
//              document.write(msg);
            }else{
                dishesArray = $.parseJSON(msg);
                dataInit = true;
            }

        }
    });
    return dataInit;
}
function initText(){
    $("[id^=text_]").each(function () {
        $(this).val(0);
    });
}
function add(t_id){
    var n = parseInt($(t_id).val()) + 1;
    $(t_id).val(n);
}
function sub(t_id){
    var n = parseInt($(t_id).val()) - 1;
    if(n > 0 ){
        $(t_id).val(n);
    }
    else if(n == 0){
        $(t_id).val(0);
    }
}

function count(){
    var sum = 0;
    $("[id^=text_]").each(function () {
        sum = sum + parseInt($(this).val());
    });
    $("#count").val(sum);
}

function price(){
    var pricesum = 0;
    $("[id^=text_]").each(function () {
        var price_id = '#' + 'price_' + this.id.split('_')[1];
        pricesum = pricesum + parseInt($(this).val()) * parseInt($(price_id).val());
    });
    $("#allprice").val(pricesum);
}