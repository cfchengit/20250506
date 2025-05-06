//js 新增一個Vue監看者，vue 2.0

var outer_data = {
    //使用的資料...
    text: "淡江大學",
    text2: "這是第二行文字",
    counter: 0,
    htmlText: "<p><font color=red>內文</font><b>粗體</b></p>",
    link: "https://www.tku.edu.tw" 
  };

var vm = new Vue({
    el: "#app", //綁定的元素，元素的名稱為app
    data: outer_data,
      methods: {
        incrementCounter() {
            this.counter++;
        }
    }
})
