from flask import Flask, render_template, flash, redirect, request, Response
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Length, EqualTo, Email, NumberRange
from werkzeug.utils import secure_filename
import os
from datetime import date
import sqlite3
SECRET_KEY = os.urandom(32)

app = Flask(__name__)
app.config['SECRET_KEY'] = SECRET_KEY

connection = sqlite3.connect("foody.db",check_same_thread=False)

class Registration(FlaskForm):
    first_name = StringField(label="First_Name", validators=[DataRequired(), Length(min=3, max= 20)])
    last_name = StringField(label="First_Name", validators=[DataRequired(), Length(min=3, max= 20)])
    email = StringField(label="Email", validators=[DataRequired(), Email()])
    password = PasswordField(label="Password", validators=[DataRequired(), Length(min= 6, max= 20)])
    confirm_password = PasswordField(label="Confirm_Password", validators=[DataRequired(), EqualTo("password")])
    mobile_number = StringField(label= 'Phone', validators=[DataRequired(), Length(min= 10, max= 13)])
    submit = SubmitField(label="Register")

class LoginForm(FlaskForm):
    email = StringField(label="Email", validators=[DataRequired(), Email()])
    password = PasswordField(label="Password", validators=[DataRequired(), Length(min= 6, max= 20)])
    submit = SubmitField(label="Log In")

class report:
    def logindetails(self):
        cursor = connection.cursor()
        select_logindetails = "select*from logindetails "
        cursor.execute(select_logindetails)
        result = cursor.fetchall()
        connection.commit()
        cursor.close()
        print(result)
        return result
    def orderdetails(self):
        cursor = connection.cursor()
        select_orderdetails = "select*from orderdetails "
        cursor.execute(select_orderdetails)
        result = cursor.fetchall()
        connection.commit()
        cursor.close()
        print(result)
        return result
    def feedbackdetails(self):
        cursor = connection.cursor()
        select_feedback = "select*from feedback"
        cursor.execute(select_feedback)
        result = cursor.fetchall()
        connection.commit()
        cursor.close()
        print(result)
        return result
    def dailyreport(self):
        today = date.today()
        d1 = today.strftime("%Y/%m/%d")
        cursor = connection.cursor()
        cursor.execute("select*from orderdetails where date(date_time)= '"+d1+"' ")
        r = cursor.fetchall()
        cursor.close()
        return r

class image:
    def file_save(self, f):
        filename = secure_filename(f.filename)
        f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return "img upload successfully"

    def upload(self):
        path = '.\static\themes\newupload'
        uploads = sorted(os.listdir(path), key=lambda x: os.path.getctime(path+x))        # Sorting as per image upload date and time
        #uploads = os.listdir('static/uploads')
        uploads = ['themes/newupload/' + file for file in uploads]
        uploads.reverse()
        print(uploads)
        return uploads
    
    def price(self):
        cursor = connection.cursor()
        cursor.execute("select price from foodprice")
        r = cursor.fetchall()
        count= cursor.rowcount
        connection.commit()
        cursor.close()
        print(r)
        return r
    
"""@app.route("/")
def login():
    return render_template("login.html", form = LoginForm())"""

"""@app.route('/register')
def register():
    return render_template('register.html', form = Registration())"""

@app.route("/welcome")
def welcome():
    return render_template("first.html", value = image())

@app.route("/additem")
def additem():
    return render_template("additem.html")

@app.route("/admin")
def admin():
    return render_template("adminview.html", value = report(), error = 0)

@app.route("/order")
def order():
    return render_template("order.html", error= 0)

@app.route("/adminhome")
def adminhome():
    return render_template("adminhome.html", value = image(), error = 0)

#this is for userlogin
@app.route("/" , methods = ['POST', 'GET'])
def login():
    try:
        cursor = connection.cursor()
        form = LoginForm()
        print(form.validate_on_submit())
        if len(form.password.errors) > 0:
            for i in form.password.errors:
                return render_template("login.html", error=i, form=LoginForm())
        if len(form.email.errors) > 0:
            for i in form.email.errors:
                return render_template("login.html", error=i, form=LoginForm())
        print(form.email.errors)
        print(form.password.errors)
        if form.validate_on_submit():
            email = form.email.data
            password = form.password.data
            print(email)
            print(password)
            cursor.execute("select*from logindetails where email= '"+email+"' and password= '"+password+"'")
            r = cursor.fetchall()
            print(r)
            count= len(r)
            print(count)
            connection.commit()
            cursor.close()
            if count == 1:
                return render_template('first.html', value = image())
            else:
                Error = "Wrong Id & Password"
                return render_template("login.html", error = Error, form = LoginForm())
        elif not form.validate_on_submit():
            return render_template("login.html", error=0, form = LoginForm())
    except Exception as e:
        print(e)
        Error = "Database is not connected"
        return render_template("login.html", error=Error, form = LoginForm())

@app.route("/adminlogin" , methods = ['POST', 'GET'])
def adminlogin():
    try:
        form = LoginForm()
        if len(form.password.errors) > 0:
            for i in form.password.errors:
                return render_template("login.html", error=i, form=LoginForm())
        if len(form.email.errors) > 0:
            for i in form.email.errors:
                return render_template("login.html", error=i, form=LoginForm())
        print(form.email.errors)
        print(form.password.errors)
        if form.validate_on_submit():
            email = form.email.data
            password = form.password.data
            print(email)
            print(password)
            if email == "admin147@foody.com" and password == "Admin4u$":
                print("Enter")
                value  = report()
                amount = 0
                order = 0
                for i in value.orderdetails():
                    print(i)
                    amount = amount + i[7]
                    order = order + 1
                print(amount, order)
                login = 0
                for i in value.logindetails():
                    login = login + 1
                r = value.dailyreport()
                today_amount = 0
                for i in r:
                    today_amount = today_amount + i[7]
                print(today_amount)
                return render_template('adminview.html', value=report(), error = 0, total_amount = amount, total_order = order, total_login = login, today_amount= today_amount)
            else:
                Error = "Wrong Id & Password"
                return render_template("login.html", error = Error, form = LoginForm())
        elif not form.validate_on_submit():
            return render_template("login.html", error=0, form = LoginForm())
    except Exception as e:
        print(e)
        Error = "Database is not connected"
        return render_template("login.html", error=Error, form = LoginForm())
        
#this is for registration page
@app.route("/register", methods = ["POST", "GET"])
def register():
    try:
        cursor = connection.cursor()
        form = Registration()
        print(form.validate_on_submit())
        if len(form.confirm_password.errors) > 0:
            for i in form.confirm_password.errors:
                print(form.confirm_password.errors)
                Error = "Password & Confirm_Password Must Be Same"
                return render_template("register.html", error=Error, form=Registration())
        if len(form.password.errors) > 0:
            for i in form.password.errors:
                print(form.password.errors)
                return render_template("register.html", error=i, form=Registration())
        if len(form.email.errors) > 0:
            for i in form.email.errors:
                print(form.email.errors, 123)
                return render_template("register.html", error=i, form=Registration())
        if len(form.mobile_number.errors) > 0:
            for i in form.mobile_number.errors:
                print(form.mobile_number.errors)
                return render_template('register.html', form=Registration(), error=i)
        if form.validate_on_submit():
            print(form.email.data)
            firstname = form.first_name.data
            lastname = form.last_name.data
            email = form.email.data
            mobile_number = form.mobile_number.data
            password = form.password.data
            confirmpassword = form.confirm_password.data
            try:
                cursor.execute("select*from logindetails where email= '" + email + "'")
                r = cursor.fetchall()
                count= len(r)
                if count == 1:
                    Error = "Email is already registered"
                    connection.commit()
                    cursor.close()
                    return render_template('register.html', form=Registration(), error=Error)
                else:
                    cursor.execute("select*from logindetails where mobile_number= '" + mobile_number + "'")
                    r = cursor.fetchall()
                    count= len(r)
                    if count == 1:
                        Error = "Mobile Number is already registered"
                        connection.commit()
                        cursor.close()
                        return render_template('register.html', form=Registration(), error=Error)
                cursor.execute('INSERT INTO logindetails values(?,?,?,?,?,?,?)',(0,firstname, lastname , email, mobile_number, password, confirmpassword))
                connection.commit()
                cursor.close()
                return redirect('/')
            except Exception as e:
                print(e)
                Error = "Something Goes Wrong! Try Again "
                return render_template('register.html', form=Registration(), error =Error)
        else:
            return render_template('register.html', form=Registration(), error=0)
    except:
        Error = "DataBase is not connected"
        return render_template('register.html', form=Registration(), error=Error)

#this is for order
@app.route("/orderresult", methods = ["POST", "GET"])
def orderresult():
    try:
        cursor = connection.cursor()
        if request.method == "POST":
            value = request.form
            print(value)
            name = value["name"]
            mob_number = value["mob_number"]
            email = value["email"]
            food_type = value["food-type"]
            l = ["food_name1", "food_name2", "food_name3", "food_name4", "food_name5"]
            for i in l:
                if value[i] != "#":
                    food_name = value[i]
                    break
                else:
                    pass
            print("food_name")
            quantity = value['number']
            amount = value["amount"]
            additional_food = value["extra_food"]
            address = value["address"]
            city = value["city"]
            date_time = value["datetime-local"]
            print(date_time)
            cursor.execute('INSERT INTO orderdetails values(?,?,?,?,?,?,?,?,?,?,?,?)',(0,name, mob_number,email, food_type, food_name, quantity, amount, additional_food, address, city, date_time))
            connection.commit()
            cursor.close()
            return render_template("bill.html", value = [[name, email, food_name, int(quantity), int(amount), date_time, 10]])
    except Exception as e:
        print(e)
        Error = "Something goes wrong Try Again"
        return render_template("order.html", error = Error)

@app.route("/additemresult", methods = ["POST", "GET"])
def additemresult():
    if request.method == "POST":
        value = request.form
        print(value)
        photo = value["file"]
        food_name = value["name"]
        price = value["price"]
        add = additem()
        add.insertBLOB(2,photo, food_name,price)
        return redirect("/additem")
    else:
        print("some thing wrong")

@app.route("/feedback", methods = ["POST", "GET"])
def feedback():
    cursor = connection.cursor()
    if request.method == "POST":
        print("hello")
        value = request.form
        print(value)
        name = value["name"]
        email = value["email"]
        subject = value['subject']
        message = value["message"]
        cursor.execute('INSERT INTO feedback values(?,?,?,?,?)',(0,name, email, subject, message))
        connection.commit()
        cursor.close()
        return redirect('/welcome')

@app.route("/table", methods = ["POST", "GET"])
def table():
    try:
        cursor = connection.cursor()
        if request.method == "POST":
            print("hello1")
            value = request.form
            print(value)
            search = value["search"]
            try:
                cursor.execute("select*from orderdetails where date(date_time)= '"+search+"' ")
                print("complete")
                r = cursor.fetchall()
                count= len(r)
                connection.commit()
                print(r)
                total_amount = 0
                for i in r:
                    total_amount = total_amount + i[7]
                print(total_amount)
                cursor.close()
                if count >= 1:
                    return render_template("table.html", value = r, amount = total_amount)
                else:
                    Error = "No Data Of Such Date"
                    return render_template('adminview.html', value=report(), error = Error)
            except:
                Error = "Invalid Date"
                return render_template('adminview.html', value=report(), error = Error)
    except:
        Error = "Something Goes Wrong"
        return render_template('adminview.html', value=report(), error = Error)


app.config['UPLOAD_FOLDER'] = ".\static\themes\newupload"

@app.route("/uploader",methods=['GET','POST'])
def uploader():                                       # This method is used to upload files 
        if request.method == 'POST':
            cursor = connection.cursor()
            f = request.files['file']
            price = request.form["price"]
            name = request.form["name"]
            message = "New Food"
            cursor.execute('INSERT INTO foodprice values(?,?,?,?)',("",name, price, message))
            connection.commit()
            cursor.close()
            print(f.filename)
            #f.save(secure_filename(f.filename))
            save = image()
            save.file_save(f)
            return redirect("/additem")           # Redirect to route '/' for displaying images on fromt end

if __name__ == "__main__":
    app.run(debug = True)