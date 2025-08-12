""""
#basic 
x=1
x="janhavi"
print(x)

#
x=str(3)
y=int(40)
z=float(3.40)
print(x,y,z)

#type
x=20
x= "twenty"
print (type(x))

#case sensitive

x= 3.40
X=6.8
print (X)

#assign multiple values
x,y,z= "apple", "Mango", "Banana"
print(x)
print(y)
print(z)

a=b=c= "happy birth day"
print(b)


z= ["apple", "Mango", "Banana", "cherry"]
fruit1, fruit2, fruit3,fruit4 = z
print(fruit4)


#global variable
x="awesome"   #global

def greet():
    y="amazing" #local
    print("today's weather is", x,y) #calling both
greet();


#basic operations
x=30+10
y=40
z=50
x+=20
print (x)

#operation and expression
x=20
y=30
result = x+y
#+ is an operation.
# a + b is an expression that evaluates to 15.
# result = a + b is a statement that assigns the expression's result.

#input
name = input("Enter your name: ")
print("Hello,", name)



#inputoutput 

# taking three inputs at a time

#x, y, z = input("Enter three values: ").split()
#print("Total number of students: ", x)
#print("Number of boys is : ", y)
#print("Number of girls is : ", z)


#ifelse
age = int(input("Enter your age:"))
if age >= 18:
 print("you're an adult")
else:
 print("you're minor")

#if
data = input("Enter Value:")
if data == "check" :
 print("successfull")


#for loop
for i in range(20):
    print("Number",i)

#while loop
i = 1
while i <= 30:
    i+= 1
    print("count:",i)
  """  
    