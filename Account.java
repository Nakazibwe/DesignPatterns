public class Account {
    private float balance;
    public void deposit(float amount){
        if(amount > 0){
            balance += amount;
        }
        
    }
    public void withdraw(float amount){
        if(amount > 0){
            balance -= amount;
        }
    }
    
    // //Setter
    // public void setBalance(float balance){
    //     if(balance > 0){
    //         this.balance = balance;
    //     }
       
    // }
    //Getter
    public float getBalance(){
        return balance;
    }
    
}
