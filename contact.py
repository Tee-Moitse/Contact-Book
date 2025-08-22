
while True: 
    with open('contact.txt', 'a') as f:
        name = input("Name: ")
        phone = input("Phone: ")
        f.writelines((name, " : ", phone, "\n"))
    
    with open('contact.txt', 'r') as f:
        search = input("Search: ")
        for i in  f:
            if search