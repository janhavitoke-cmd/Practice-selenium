
# Simple Inventory Management System
"""
# Dictionary to store inventory
inventory = {}

# Add a product
def add_product():
    name = input("Enter product name: ")
    qty = int(input("Enter quantity: "))
    price = float(input("Enter price: "))
    inventory[name] = {"quantity": qty, "price": price}
    print(f"{name} added successfully!")

# Show all products
def show_inventory():
    if not inventory:
        print("Inventory is empty!")
    else:
        print("\n--- Inventory ---")
        for name, details in inventory.items():
            print(f"{name} → Qty: {details['quantity']}, Price: ₹{details['price']}")

# Main program
while True:
    print("\n1. Add Product")
    print("2. Show Inventory")
    print("3. Exit")
    choice = input("Enter choice: ")

    if choice == "1":
        add_product()
    elif choice == "2":
        show_inventory()
    elif choice == "3":
        print("Exiting...")
        break
    else:
        print("Invalid choice! Try again.")

        """



inventory = {}

def addproduct():
 while True:
   name = input("Enter product name:")
   qty = input("Enter quantity in numbers:")
   price = float(input("Eter Price of Product: "))
   inventory[name]={"quantity": "qty", "price": "price"}
   print(name, "added successfully!")

   extra = input("do you want to add more items?(y/n)").lower()
   if extra != "y":
    break
    
addproduct()

print("\n Current Inventory:")
print("Product\tQuantity\tPrice")

for product, details in inventory.items():
 print(f"{product}\t{details['Quantity']}\t{details['Price']}")
 