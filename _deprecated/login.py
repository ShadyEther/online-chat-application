db= {"user": None,
    "password": None,
    }
def newAccount():
    print('''---You are going to create a new Account here---
------------------------------------------------\n''')
    db["user"]=input("Enter your new Username: ")
    db["password"]=input("Enter your new Password: ")
    cpassword=input("ReEnter your new Password: ")
    while(cpassword!=db["password"]):
        cpassword=input("Please ReEnter your new Password correctly: ")
    homePage()
def Login():
    print('''---You are going to login here---
---------------------------------------------\n''')

    userLog=input("Enter your Username: ")    
    while(userLog!=db["user"]):
        print("No such Username exists!")
        ch=int(input("Enter 1 to ReEnter Username\nEnter 2 Create a new account\nEnter your choice: "))
        if(ch):
            userLog=input("ReEnter your Username as per record: ")
        elif(ch==2):
            newAccount()

    passwordLog=input("Enter your Password: ")
    while(passwordLog!=db["password"]):
        print("Incorrect Password!You should have remembered it! :(")
        passwordLog=input("ReEnter your new Password: ")

    LoggedIn()

def LoggedIn():
    print("You have been Successfully Logged in! yay!")
    ch=ch=int(input("Enter 1 to go to Home Page\nEnter 2 Create a new account\nEnter 3 to login\nEnter your choice: "))
    if(ch==1):
        homePage()
    elif(ch==2):
        newAccount()
    elif(ch==3):
        Login()

def homePage():
    print("----This is your Home Page----")
    ch=int(input("Enter 1 to Exit\nEnter 2 Create a new account\nEnter 3 to login\nEnter your choice: "))
    if(ch==1):
        return 0
    elif(ch==2):
        newAccount()
    elif(ch==3):
        Login()
    
homePage()




        

