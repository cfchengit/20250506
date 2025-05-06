var outer_data = {
    // 使用的資料...
    text: "淡江大學",
    text2: "這是第二行文字",
    counter: 0,
    htmlText: "<p><font color=red>內文</font><b>粗體</b></p>",
    link: "https://www.tku.edu.tw",
    fruits: [
        { name: "蘋果", price: 30, num: 10 },
        { name: "香蕉", price: 60, num: 6 },
        { name: "芭樂", price: 120, num: 20 }
    ],
    selectedFruit: null, // 用於存儲選擇的水果
    selectedQuantity: null // 用於存儲購物者選擇的數量
};

const app = Vue.createApp({
    data() {
        return outer_data;
    },
    methods: {
        incrementCounter() {
            this.counter++; // 每次按下按鈕時計數加 1
        },
        updateFruitDetails() {
            // 此方法在選擇水果時觸發，更新選擇的水果資訊
            console.log("選擇的水果：", this.selectedFruit);
            this.selectedQuantity = null; // 重置選擇的數量
        }
    }
});

app.mount("#app");