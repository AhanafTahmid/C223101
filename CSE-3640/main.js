const fs = require('fs');

class CustomerOrder{
    constructor(orderId, customerName, orderAmount){
        this.orderId = orderId;
        this.customerName = customerName;
        this.orderAmount = orderAmount;
        this.items = [this.orderId, this.customerName, this.orderAmount];
    }

    calc_display() {
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Customer Name: ${this.customerName}`);
        console.log(`Order Amount: $${this.orderAmount}`);
    }
}

const ob1 = new CustomerOrder(1,"Ahanaf", 42)
const ob2 = new CustomerOrder(2,"tahmid", 41)
const ob3 = new CustomerOrder(3,"sakib", 14)
const ob4 = new CustomerOrder(4,"khan", 34)
const arr = [ob1, ob2, ob3, ob4];
//for(let i  = 0; i< arr.length;i++) console.log(arr[i].customerName);

//caculate and order all the display files
const calc_display2 = () => {
    let tot_am = 0, tot = 0;
    let n = arr.length
    for(let i=0;i<n;i++){
        tot+=arr[i].orderId;
        tot_am+=arr[i].orderAmount;
    }
    console.log( ` Total Order = ${tot}`);
    console.log( ` Total Order Amount = ${tot_am}`);
}

//writing all orders
const writeInFile = () =>{
    const ordersData = arr.map(x => JSON.stringify({ orderId: x.orderId, customerName: x.customerName, orderAmount: x.orderAmount })).join('\n');
    fs.writeFileSync('fileoutput.txt', ordersData, 'utf8');
}

//READING all orders
const readfromFile = () => {
    fs.readFile('fileinput.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const lines = data.trim().split('\n');
        for (let i = 0; i < lines.length; i++) {
            console.log(lines[i]);
        }
    });
}

writeInFile();
readfromFile();
// calc_display2();
