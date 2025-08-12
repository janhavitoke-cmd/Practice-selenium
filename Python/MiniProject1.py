""""
exp = {}

while True:
    category = str(input("Enter the Expence type:"))
    amt = float(input("Enter the bill amount:"))

    if category in exp:
        exp[category] += amt
    else:
        exp[category] =amt

    more= input("Do you want to add more expenses?(Y/N): ").lower()
    if more!= "y":
        break

        # Show expense report
print("\n--- Expense Report ---")
total = 0
for cat, amt in exp.items():
    print(f"{cat}: Rs{amt}")
    total += amt

print("Total Expenses: Rs.", total)
"""



expence = {}
while True:
    cat = input("Enter Category:")
    amt = float(input("Enter Amount:"))

    if cat in expence:
        expence[cat]+=amt
    else:
        expence[cat]=amt

    extra = input("do you want to add more items?(y/n)").lower()
    if extra != "y":
        break
print("\n-------total bill--------")
total = 0
for cate, amt in expence.items():
    print(f"{cate}:Rs{amt}")
    total += amt

    print("Total Expenses: Rs.", total)




