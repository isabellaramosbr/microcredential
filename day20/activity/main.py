from flask import flask, render_template, request
from flask_squalachemy import SQLAlchemy


app = flask(__name__)

"""
app.config['SQLALCHEMY_DATABASE_URI']='postgressql://postgress:Camino20@localhost/demoDB'
db = SQLAlchemy(app)
#define db model table in our database
class Data(db.Model):
  __tablename__ = 'customer_email'
  id = db.Column(db.Integer, primary_key = True)
  email = db.Column(db.String(120, unique = True))
  height = db.Column(db.Integer)
  weight =db.Column(db.Integer)

  def __init__(self, email_,height_, weight_):
    self.email = email_
    self.height = height_
    self.weight_

"""
@app.route("/")
def index():
  return render_template ("activity19.html")

@app.route("/", methods=['post'])
def thankyou():
  if request.method=='post':
    email = request.form['email_address']
    height = request.form['height_name']
    weight = request.form['weight_name']
    print(request.form)
  return render_template('thankyou.html')
  data = Data(email_, height_, weight_)
if __name__ =="__main__":
  app.debug = True 
  app.run()


  