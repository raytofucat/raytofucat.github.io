var dict = {};
var total = {};
var newest_person = '';
var added = false;
var number = 0;
var old_person = '';

const database = {"圣诞彩球 红色 凤梨金桔" : 8.5, "圣诞彩球 绿色 苹果玫瑰" : 8.5, "圣诞彩球 黄色 芒果百香果" : 8.5, "Buche 栗子巧克力 4到6人份" : 35,
"Buche 栗子巧克力 6到8人份" : 50, "北海道双层cheese cake 原味" : 15, "北海道双层cheese cake 抹茶" : 16, "motito轻奶酪蛋糕" : 6.5, 
"白桃茉莉乌龙" : 6.5, "草莓梦龙蛋糕" : 6.5, "冰皮草莓夹心" : 4, "冰皮黑芝麻夹心" : 4, "冰皮芒果夹心" : 4, "冰皮青柠夹心" : 4, "凤梨酥6P" : 12, "凤梨酥8P" : 15,
"凤梨酥12P" : 22, "bio手工核桃酥6P" : 10, "bio手工核桃酥12P" : 18, "菠萝包4P" : 12, "肉松鲜奶包2P" : 7, "肉松小贝一盒4P" : 12, "原味经典杏仁国王饼4人份" : 30,
"原味经典杏仁国王饼6到8人份" : 40, "巧克力栗子国王饼4人份" : 32, "巧克力栗子国王饼6到8人份" : 42, "凤梨金桔国王饼4人份" : 32, "凤梨金桔国王饼6到8人份" : 42,
"抹茶红豆国王饼4人份" : 32, "抹茶红豆国王饼6到8人份" : 42, "苹果杏仁国王饼4人份" : 32, "苹果杏仁国王饼6到8人份" : 42, "抹茶流心月饼" : 4, "奶黄流心月饼" : 4,
"黄油曲奇20P" : 20, "bio豆乳起司2P" : 6.5, "Opera 1P" : 6.5, "拿破仑 1P" : 6.5, "无白糖巧克力Opera 1P" : 6.5, "招牌提拉米苏一盒" : 6.5, "海盐黑芝麻卷3P" : 7.5,
"开心果草莓卷3P" : 7.5, "栗子卷3P" : 7.5, "抹茶红豆卷3P" : 7.5, "核桃雪梨卷3P" : 7.5, "肉松卷3P" : 7.5, "肉松小贝4P" : 12, "南瓜栗子挞" : 5, "千层苹果挞" : 5,
"时令水果挞" : 5, "草莓闪电泡芙" : 5, "巧克力PRALINE泡芙" : 5, "鲜奶泡芙2P" : 5, "日式冰奶酪蛋糕5寸" : 25, "草莓泡芙2P" : 5, "芒果泡芙2P" : 5, "蓝莓泡芙2P" : 5,
"覆盆子泡芙2P" : 5, "黑芝麻泡芙2P" : 5, "草莓雪人红丝绒泡芙2P" : 6, "新品拉丝麻薯 可可6P" : 10, "新品拉丝麻薯 抹茶6P" : 10, "新品拉丝麻薯 原味芝麻6P" : 10, 
"南瓜布丁1P" : 9.5, "无白糖全BIO麦片300克" : 13, "无白糖全BIO麦片1000克" : 39
};

pastries = ["圣诞彩球 红色 凤梨金桔", "圣诞彩球 绿色 苹果玫瑰", "圣诞彩球 黄色 芒果百香果", "Buche 栗子巧克力 4到6人份","Buche 栗子巧克力 6到8人份", 
"北海道双层cheese cake 原味", "北海道双层cheese cake 抹茶", "motito轻奶酪蛋糕", "白桃茉莉乌龙", "草莓梦龙蛋糕", "冰皮草莓夹心", 
"冰皮黑芝麻夹心", "冰皮芒果夹心", "冰皮青柠夹心", "凤梨酥6P", "凤梨酥8P","凤梨酥12P", "bio手工核桃酥6P", "bio手工核桃酥12P", "菠萝包4P", 
"肉松鲜奶包2P", "肉松小贝一盒4P", "原味经典杏仁国王饼4人份","原味经典杏仁国王饼6到8人份", "巧克力栗子国王饼4人份", "巧克力栗子国王饼6到8人份", 
"凤梨金桔国王饼4人份", "凤梨金桔国王饼6到8人份","抹茶红豆国王饼4人份", "抹茶红豆国王饼6到8人份", "苹果杏仁国王饼4人份", "苹果杏仁国王饼6到8人份", 
"抹茶流心月饼", "奶黄流心月饼","黄油曲奇20P", "bio豆乳起司2P", "Opera 1P", "拿破仑 1P", "无白糖巧克力Opera 1P", "招牌提拉米苏一盒", "海盐黑芝麻卷3P",
"开心果草莓卷3P", "栗子卷3P", "抹茶红豆卷3P", "核桃雪梨卷3P", "肉松卷3P", "肉松小贝4P", "南瓜栗子挞", "千层苹果挞","时令水果挞", "草莓闪电泡芙", 
"巧克力PRALINE泡芙", "鲜奶泡芙2P", "日式冰奶酪蛋糕5寸", "草莓泡芙2P", "芒果泡芙2P", "蓝莓泡芙2P","覆盆子泡芙2P", "黑芝麻泡芙2P", "草莓雪人红丝绒泡芙2P", 
"新品拉丝麻薯 可可6P", "新品拉丝麻薯 抹茶6P", "新品拉丝麻薯 原味芝麻6P", "南瓜布丁1P", "无白糖全BIO麦片300克", "无白糖全BIO麦片1000克"
]

function select_person(iden) {
  // get called: user selects person
  // highlights selected person and unhighlights the previous one
    var x = document.getElementById(iden);
    let text = x.innerText;
    x.classList.add("highlight");
    old_person = newest_person;
    newest_person = text;
    if (old_person != newest_person){
      try{
        document.getElementById(old_person).classList.remove("highlight");
      }catch(error){
        
      }
    }
    
    document.getElementById("name_person").innerText = newest_person;
    let p = document.getElementById("order-person");
    p.innerHTML = ""
}

function add_person(iden){
  var x = document.getElementById(iden);
  let text = x.value;
  let button_person = document.createElement('BUTTON');
  let btn_text = document.createTextNode(text);
  let myDiv = document.getElementById("button-field");
  button_person.appendChild(btn_text);
  myDiv.appendChild(button_person);
  button_person.id = text;
  button_person.className = "btn";
  button_person.classList.add("btn_person")
  x.value = '';
  button_person.onclick = function(){select_person(text);};

}


function get_pastry() {
  /**
   * gets called: user clicks on suggested pastry name / press enter
   * selects the pastry name entered by user and allow changes in quantify 
   * -> use add button to call add_pastry which adds to dict
  */
  number = 0;
    var x = document.getElementById("select-pastry");

  if (!added){
    //creating all the necessary buttons if not already done
    added = true;
    let myDiv = document.getElementById("add-right");
      
    //minus quantity button
    let button_minus = document.createElement('BUTTON');
    let btn_text_2 = document.createTextNode("-");
    button_minus.appendChild(btn_text_2);
    myDiv.appendChild(button_minus);
    button_minus.classList.add("btn-num");
    button_minus.addEventListener ("click", function() {
      if (number > 0){
        number --;
        display_num.nodeValue = '  '+ number.toString() + '  ';
      }
    });
      
    //display number
      display_num = document.createTextNode('  '+ number.toString() + '  ');
      myDiv.appendChild(display_num);
    
      // increment quantity button
      let button_add = document.createElement('BUTTON');
      let btn_text = document.createTextNode("+");
      button_add.appendChild(btn_text);
      myDiv.appendChild(button_add);
      button_add.classList.add("btn-num");
      button_add.addEventListener ("click", function() {
        number ++;
        display_num.nodeValue = '  '+ number.toString() + '  ';
      });

      //add pastry button
      let add_pastry_button = document.createElement('BUTTON');
      let btn_text3 = document.createTextNode("Add pastry");
      add_pastry_button.appendChild(btn_text3);
      let btnDiv = document.getElementById("add-pastry-button");
      btnDiv.appendChild(add_pastry_button);
      add_pastry_button.classList.add("btn");
      add_pastry_button.addEventListener ("click", function() {
        display_num.nodeValue = "  0  ";
        add_pastry();
      });

    }else{
      display_num.nodeValue = "  0  ";
    }

  }



var done = false;

function add_pastry () {
  var x = document.getElementById("select-pastry");
  var text = x.value;
  x.value = "";
    if (text != ""){
        // ask mom if need for try/catch since when we add the same element does she want them to add or replace the old one?
        if (newest_person != ''){
          if (newest_person in dict == false){
            dict[newest_person] = {};
          }
          dict[newest_person][text] = number;
  
        console.log(dict);
        //check if item is new, if yes ask for its price
        if (!(text in database)){
            price = prompt("New item, please input unit price");
            database[text] = parseFloat(price);
            pastries.push(text);
        }
        if (number > 0){
          let p = document.getElementById("order-person");
          let ordertext = document.createTextNode('- ' + text + ' '+ number.toString());
          p.appendChild(ordertext);
          p.appendChild(document.createElement("br"));
          
          if (!done){
            let b = document.getElementById("confirm");
            let confirm_order_btn = document.createElement('BUTTON');
            let btn_text4 = document.createTextNode("Confirm order for this person");
            confirm_order_btn.appendChild(btn_text4);
            b.appendChild(confirm_order_btn);
            confirm_order_btn.classList.add("btn");
            confirm_order_btn.setAttribute("id","confirm_order_btn");
            confirm_order_btn.addEventListener ("click", function() {
              confirm_order();
            });
            done = true;
          }else{
            //button has already been created
            document.getElementById("confirm_order_btn").style.visibility = 'visible';
          }

       }
      } else {
        // if user didn't choose a person yet
        console.log("choose a person first");
        let p = document.getElementById("order-person");
        let ordertext = document.createTextNode("Please choose a person first");
        p.appendChild(ordertext);
      }
    }
  number = 0;
  
}

function delete_order(order, person){
  order_words = order.split(" : ");
  console.log("delete delete ooooo")
  console.log(order_words);
  console.log(dict);
  dict[person][order_words[0]] = 0;
  console.log(dict);
  total = {};
  console.log(dict);
  for (key in dict){
      val_dict = dict[key];
      for (key2 in val_dict){
        if (key2 in total){
          total[key2] += val_dict[key2];
        }else{
          total[key2] = val_dict[key2];
        }
    }
  }
  console.log(total);
  for (let i in total){
    show_total(i);
  }
  
  delete dict[person][order_words[0]];

  for (let j in dict){
    separate_total(j, dict[j]);
  }
  if (Object.keys(dict[person]).length == 0){
    delete dict[person];
    console.log("blah");
    console.log(dict);
  }
}


let inserted = [];
function show_total (key) {
  //shows the total list for the shop
  console.log("hello", key, total[key]);
  if (!(inserted.includes(key)) && total[key] > 0){
    let table = document.getElementById("total-order");
    let row = table.insertRow(-1); 
    row.setAttribute("id","row"+key);
    console.log(row);

    let name = row.insertCell(0);
    name.setAttribute("class", "table-col-large");
    let quantity = row.insertCell(1);
    quantity.setAttribute("class", "table-col");
    let price = row.insertCell(2);
    price.setAttribute("class", "table-col");
    quantity.setAttribute("id", key);

    name.innerText = key
    quantity.innerText = total[key]
    price.innerText = database[key]
    inserted.push(key);
  }else if(total[key] == 0 ){
    let deleted_row = document.getElementById("row"+key);
    console.log("deleted-row", deleted_row);
    document.getElementById("total-order").deleteRow(deleted_row.rowIndex);
    delete inserted[inserted.indexOf(key)];
  }else if (!(total[key] == 0)){
    quantity2 = document.getElementById(key);
    quantity2.innerText = total[key];
  }
  total_amount = document.getElementById("total-amount");
  counter = 0;
  for (let key in total){
    counter += database[key] * total[key];
  }
  total_amount.innerHTML = "Total : " + counter.toString() + " €";
}

let calculated = []
let deleted_ppl = []
let written_orders = {}
function separate_total(person, order){
  let price, person_order;
  //shows the separate total for each person
  if (!(calculated.includes(person))){
    let table = document.getElementById("separate-order");
  let row = table.insertRow(-1);
  row.setAttribute("id","row"+person);

  let name = row.insertCell(0);
  name.setAttribute("class", "table-col");
  name.innerText = person;

  person_order = row.insertCell(1);
  person_order.setAttribute("class", "table-col-large");
  console.log(person_order);

  //`<button class="order-button" onClick="delete(\'' + result.name + '\')" >${string}</button>`;
  
  person_order.setAttribute("id", (person + "order"));

  price = row.insertCell(2);
  price.setAttribute("class", "table-col");
  price.setAttribute("id", (person + "price"));
  calculated.push(person);
  written_orders[person] = {}
  }else{
    person_order = document.getElementById(person + "order");
    string = '';
    // for (let prop in order) {
    //   string += prop + ' : ' + order[prop].toString() + '\n';
    //   counter += database[prop] * order[prop];
    // }
    // person_order.innerText = string;
    // price.innerText = counter.toString();
    price = document.getElementById(person+"price");

  }
  counter = 0;
  for (let prop in order) {
    if (!(Object.keys(written_orders[person]).indexOf(prop) > -1)){
      console.log(written_orders);
      string = prop + ' : ' + order[prop].toString() + '\n';
    let bt = document.createElement("BUTTON");
    let btn_text = document.createTextNode(string);
    bt.appendChild(btn_text);
    bt.classList.add("person-order");
    bt.addEventListener("click",function(){
      bt.style.display = 'none';
      delete_order(bt.innerText, person);
      delete deleted_ppl[deleted_ppl.indexOf(person)];
    })
    person_order.appendChild(bt);
    written_orders[person][prop] = true;
    }
    counter += database[prop] * order[prop];
    price.innerText = counter.toString();
  }
  console.log(order);
  if (Object.keys(order).length == 0 && !(deleted_ppl.includes(person))){
    deleted_row = document.getElementById("row"+person);
    document.getElementById("separate-order").deleteRow(deleted_row.rowIndex);
    deleted_ppl.push(person);
    delete calculated[calculated.indexOf(person)];
    delete written_orders[person];
  }
  

}



function confirm_order(){
  //gets called : when confim order button pressed
  //calls show_total and separate_total functions
  total = {};
  console.log(newest_person);
  let person = document.getElementById(newest_person);
  document.getElementById("order-person").innerHTML = "";
  person.classList.remove("highlight");
  console.log(dict);
  for (key in dict){
      val_dict = dict[key];
      for (key2 in val_dict){
        if (key2 in total){
          total[key2] += val_dict[key2];
        }else{
          total[key2] = val_dict[key2];
        }
    }
  }
  console.log(total);
  for (let i in total){
    show_total(i);
  }
  for (let j in dict){
    separate_total(j, dict[j]);
  }
  old_person = newest_person;
  newest_person = '';
  document.getElementById("confirm_order_btn").style.visibility = 'hidden';

}

function autocomplete(input, arr) {
  /*shows a list of autocomplete suggestions*/
  input.addEventListener("input", function() {
    //gets called everytime user puts a letter in input
      var el, d;
      var val = this.value;
      close_lists();
      if (!val) { return false;}
      el = document.createElement("DIV");
      el.setAttribute("id", this.id + "autocomplete-list");
      el.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(el);

      for (let i = 0; i < arr.length; i++) {
        //creates a div for each matching el
        for (let j = 0; j <= arr[i].length - val.length; j++){
          if (arr[i].substr(j, val.length).toUpperCase() == val.toUpperCase()) {
            d = document.createElement("DIV");
            d.innerHTML += arr[i];
            d.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            d.addEventListener("click", function() {
              input.value = this.getElementsByTagName("input")[0].value;
              get_pastry();
              close_lists();
            });
            el.appendChild(d);
          }
        }
      }
  });
  
  function close_lists() {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
        x[i].parentNode.removeChild(x[i]);
  }
}

// document.addEventListener("click", function () {
//     closeAllLists();
// });
}















