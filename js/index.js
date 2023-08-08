
    // Bài 1: tính tiền lương
    document.getElementById('salaryForm').addEventListener('submit', function(event){
        event.preventDefault();
        calculateSalary();
    })
    =function calculateSalary() {
        var payDay = parseInt(document.getElementById('payDay').value);
        var workDay = parseInt(document.getElementById('workDay').value);

        var salary = workDay * payDay * 1;

        document.getElementById('resultMoney').innerHTML =`👉 ${salary}`;
    };

    // Bài 2 tính giá trị trung bình
    document.getElementById('avgForm').addEventListener('submit', function(event){
        event.preventDefault();
        calculateAverage();
    })
    =function calculateAverage() {
        var num1,num2,num3,num4,num5;
        var avg;
        num1=parseInt(document.getElementById('num1').value);
        num2=parseInt(document.getElementById('num2').value);
        num3=parseInt(document.getElementById('num3').value);
        num4=parseInt(document.getElementById('num4').value);
        num5=parseInt(document.getElementById('num5').value);

        avg = (num1+num2+num3+num4+num5) / 5;

        document.getElementById('resultValue').innerHTML=`👉 ${avg}`;
    };

    // Bài 3 Quy đổi tiền
    document.getElementById('exChangeMoney').addEventListener('submit', function(event){
        event.preventDefault();
        exChangeMoney();
    })
    =function exChangeMoney() {
        const VND=23500;
        var USD = parseInt(document.getElementById('USD').value)
        var money;

        money = USD * VND * 1;

        money = new Intl.NumberFormat('vn-VN').format(money);
        document.getElementById('resultExchange').innerHTML=`👉 ${money} VND`;
    }

    // Bài 4 tính diện tích chu vi chữ nhật
    document.getElementById('rectangle').addEventListener('submit', function(event){
        event.preventDefault();
        calculateRectangle();
    })
    =function  calculateRectangle(){
        var width = parseInt(document.getElementById('width').value);
        var length = parseInt(document.getElementById('length').value);
        var perimeter, area;

        perimeter = (width+length)*2;
        area = width * length;


        document.getElementById('resultArea').innerHTML=`👉 chu vi: ${perimeter} ; diện tích: ${area} `;
    }

    // Bài 5 Tính tổng 2 kí số 
    document.getElementById('calculateTotal').addEventListener('submit', function(event){
        event.preventDefault();
        calculateTotal();
    })
    =function calculateTotal() {
        var numb5 = parseInt(document.getElementById('numb5').ATTRIBUTE_NODE.value);
        var ten,unit,total;

        ten = Math.floor(numb5 / 10);
        unit = numb5 % 10;
        total = ten + unit;

        document.getElementById('resultTotal').innerHTML=`👉 ${total} `;
    }