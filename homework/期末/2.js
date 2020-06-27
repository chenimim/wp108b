/*參考自老師的程式碼 */
const Pos = {
  order: {
    totalPrice: 0,
    records: [],
    submitted: false
  }
}

const Order = Pos.order

Pos.html = `
<table id="orderTable">
<thead>
  <tr>
    <td>
      <select id="items" onchange="Pos.calcPrice()"></select>
      <select id="addons" onchange="Pos.calcPrice()"></select>
    </td>
    <td><input id="price" type="number" value="0"></td>
    <td><img id="image" src="https://i.postimg.cc/tCwr6063/image.jpg"alt="餐點照片" >
    <td>
      <input id="quantity" type="number" value="1">
      <button onclick="Pos.addItem()">新增</button>
    </td>
  </tr>
  <tr><th>商品</th><th>單價</th><th>數量</th></tr>
</thead>
<tbody id="orderTableBody">
  <tr><td>&nbsp;</td><td></td><td></td></tr>
</tbody>
</table>
<br/>
<div>
  <label>總價:</label>
  <input id="totalPrice" type="number" value="0">
  <button id="submit" onclick="Pos.submit()">送出訂單</button>
  <button id="abort" onclick="Pos.abort()">放棄訂單</button>
  <br/><br/>
  <button id="goShop" onclick="Pos.goShop()">回主選單</button>
  <button id="newOrder" onclick="Pos.start()" disabled="disabled">新增下一筆</button>
  <br/><br/>
</div>
</div>
`

Pos.goShop = function () {
  if (!Order.submitted) {
    if (confirm('您的訂單尚未送出，請問是否要放棄該訂單？')) {
      Shop.start()
      return
    } else {
      return
    }
  }
  Shop.start()
}

Pos.abort = function () {
  if (confirm('確定要放棄本訂單？')) {
    Pos.start()
  }
}

Pos.start = function () {
  Ui.show(Pos.html)
  Ui.id('items').innerHTML = Pos.optionList(Shop.items)
  Ui.id('addons').innerHTML = Pos.optionList(Shop.addons)
  Pos.resetOrder(Order)
  Pos.calcPrice()
}

Pos.resetOrder = function (Order) {
  Order.totalPrice = 0
  Order.records = []
  Order.submitted = false
}

Pos.submit = function () {
  if (Order.records.length === 0) {
    alert('您的訂單是空的，無法送出！')
    return
  }
  Shop.incCount()
  Order.time = Date.now()
  Order.submitted = true
  Shop.saveOrder(Order)
  Ui.id('submit').disabled = 'disabled'
  Ui.id('submit').innerHTML = '已送出'
  Ui.id('abort').disabled = 'disabled'
  Ui.id('newOrder').disabled = ''
}

Pos.optionList = function (list) {
  let r = []
  for (let name in list) {
    let price = list[name]
    r.push('<option value="'+name+':'+price+'">'+name+':'+price+'</option>')
  }
  return r.join('\n')
}

Pos.list = function () {
  let records = Order.records
  let list = []
  for (let i=0; i<records.length; i++) {
    list.push(`<tr><td>${records[i].name}</td><td class="number">${records[i].price}</td><td class="number">${records[i].quantity}</td></tr>`)
  }
  return list.join('\n')
}

Pos.calcPrice = function () {
  var a = document.getElementById("items").value;
  if(a=="川味火鍋:20"){document.getElementById("image").src = "https://i.postimg.cc/tCwr6063/image.jpg";}
  if(a=="水餃:20"){document.getElementById("image").src = "https://i.postimg.cc/Yq5396c8/image.jpg";}
  if(a=="肉粽:40"){document.getElementById("image").src = "https://i.postimg.cc/YqW6Jv4F/image.png";}
  if(a=="北京烤鴨:20"){document.getElementById("image").src = "https://i.postimg.cc/Ghy9xNtP/image.png";}
  if(a=="燒肉飯:20"){document.getElementById("image").src = "https://i.postimg.cc/43JdZx5w/1.jpg";}
  if(a=="春捲:35"){document.getElementById("image").src = "https://i.postimg.cc/L8SfYRDg/3.jpg";}
  if(a=="臘肉飯:40"){document.getElementById("image").src = "https://i.postimg.cc/3NDr948r/2.jpg";}
  if(a=="三鮮脫骨魚:20"){document.getElementById("image").src = "https://i.postimg.cc/FzcdznJx/image.jpg";}
  if(a=="東坡肉:35"){document.getElementById("image").src = "https://i.postimg.cc/JzRD7x7b/image.jpg";}
  if(a=="宮保雞丁:40"){document.getElementById("image").src = "https://i.postimg.cc/sgKBMW1b/image.jpg";}
  if(a=="麻婆豆腐:20"){document.getElementById("image").src = "https://i.postimg.cc/MpZHJGt5/image.jpg";}
  if(a=="龍井蝦仁:20"){document.getElementById("image").src = "https://i.postimg.cc/MTBKmfK6/image.jpg";}
  if(a=="臘味合蒸:35"){document.getElementById("image").src = "https://i.postimg.cc/BnvSwVQw/image.jpg";}
  if(a=="珍珠奶茶:20"){document.getElementById("image").src = "https://i.postimg.cc/q70LTySY/140-jpg-1140x855.jpg";}
  if(a=="龍井茶:35"){document.getElementById("image").src = "https://i.postimg.cc/fLRf3Zwf/167s0007pn50o742n439.jpg";}
  if(a=="蘋果醋:40"){document.getElementById("image").src = "https://i.postimg.cc/kGfQqHrh/image.png";}
  if(a=="芒果飲:35"){document.getElementById("image").src = "https://i.postimg.cc/rFrCRfL3/d4134036.jpg";}
  if(a=="烏龍茶:40"){document.getElementById("image").src = "https://i.postimg.cc/vZw7r5YB/P0065600063379-3-235387.jpg";}
  if(a=="綜合水果汁:20"){document.getElementById("image").src = "https://i.postimg.cc/PJBWFw1S/b718c782-large-ee09a11c6ef6b1ff.jpg";}
  
  let [item, itemPrice] = Ui.id('items').value.split(':')
  let [addon, addonPrice] = Ui.id('addons').value.split(':')
  let price = parseInt(itemPrice) + parseInt(addonPrice)
  Ui.id('price').value = price
  return {item, addon, price}
}

Pos.addItem = function () {
  let {item, addon, price} = Pos.calcPrice()
  let quantity = parseInt(Ui.id('quantity').value)
  let record = {name: item+'('+addon+')', price: price, quantity: quantity}
  Order.records.push(record)
  Ui.id('orderTableBody').innerHTML = Pos.list()
  Order.totalPrice += price * quantity
  Ui.id('totalPrice').value = Order.totalPrice
}