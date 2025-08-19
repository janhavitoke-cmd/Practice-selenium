

 # Inventory dictionary to store products
inventory = {}

def addproduct():
    
    while True:
        
        name = input("Enter product name: ")
        qty = int(input("Enter quantity in numbers: "))
        price = float(input("Enter price of product: "))
        
        inventory[name] = {"quantity": qty, "price": price}
        print(name, "added successfully!")

       
        extra = input("Do you want to add more items? (y/n): ").lower()
        if extra != "y":   
            break

addproduct()

print("\nCurrent Inventory:")
print("Product\t\tQuantity\tPrice")

for product, details in inventory.items():
    print(f"{product}\t\t{details['quantity']}\t\t{details['price']}")

 