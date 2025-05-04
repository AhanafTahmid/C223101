const fs = require('fs');

class CustomerOrder{
    constructor(orderId, customerName, orderAmount){
        this.orderId = orderId;
        this.customerName = customerName;
        this.orderAmount = orderAmount;
    }

    calc_display(){
        let tot_am = 0, tot = 0;
        let n = this.orderId.length
        for(let i=0;i<n;i++){
            tot+=orderId[i];
            tot_am+=orderAmount[i];
        }
        console.log( ` Total Order = ${tot}`);
        console.log( ` Total Order Amount = ${tot_am}`);
    }

}


const ob1 = new CustomerOrder(1,"Ahanaf", 4)
const ob2 = new CustomerOrder(1,"tt", 4)
const ob3 = new CustomerOrder(1,"ttt", 4)
const ob4 = new CustomerOrder(1,"Ahantttttaf", 4)
const arr = [ob1, ob2, ob3, ob4];
//for(let i  = 0; i< arr.length;i++) console.log(arr[i].customerName);

  fs.writeFile('fileoutput.txt', ' `${arr}` ', 'utf8', (err, arr) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    //console.log(data);
    
   // for(let i=0;i<arr.length;i++){
        //console.log(`${arr[i].orderId} ${arr[i].customerName} ${arr[i].CustomerOrder}`);
    //}
  });

  fs.readFile('fileinput.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log(data);
    
    for(let i=0;i<arr.length;i++){
        console.log(`${arr[i].orderId} ${arr[i].customerName} ${arr[i].CustomerOrder}`);
    }
  });
  