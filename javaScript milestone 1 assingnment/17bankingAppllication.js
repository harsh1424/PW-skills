const customerAccount = {
    name: "John Doe",
    balance: 1000,
    
    
    deposit: function(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount} into account. New balance is ${this.balance}.`);
    },
    
    
    withdraw: function(amount)  {
      if (this.balance < amount) {
        console.log(`Insufficient funds. Cannot withdraw ${amount}.`);
      } else {
        this.balance -= amount;
        console.log(`Withdrew ${amount} from account. New balance is ${this.balance}.`);
      }
    }
  };
  
 
  console.log(`Initial balance: ${customerAccount.balance}`);
  
  customerAccount.deposit(500); 
  customerAccount.withdraw(200); 
  customerAccount.withdraw(1500); 
 
  