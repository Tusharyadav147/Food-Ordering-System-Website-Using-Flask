import sqlite3
from datetime import date
connection = sqlite3.connect("foody.db")

today = date.today()
print(today)
d1 = str(today.strftime("%Y/%m/%d"))
# d1 = "myschoolio@gmail.com"
cursor = connection.cursor()
# cursor.execute("select*from orderdetails ")
cursor.execute("select*from logindetails")
r = cursor.fetchall()
cursor.close()
for i in r:
    print(i)
    if i == d1:
        print(i)
print(r)