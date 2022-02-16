public class Main{
    public static void main(String[] args){
        //Getting the user 
        User user = new User("Ushindi");
        user.sayHello();

        //Calculating tax.
        TaxCalculator calculator = getCalculator();
        calculator.calculateTax();

        //Bank Account
        var account = new Account();
        account.deposit(10);
        account.withdraw(5);
        System.out.println(account.getBalance());

        

    }
    public static TaxCalculator getCalculator(){
        return new TaxCalculator2022();
    }
}
