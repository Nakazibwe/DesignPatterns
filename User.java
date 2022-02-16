public class User {
    //Attributes(Fields)
    public String name;
    
    public User(String name){
    this.name = name;
    }
    //Methods
    public void sayHello(){
        System.out.println("Hello, my name is " + name);
    }

}