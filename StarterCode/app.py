#flask 

from flask import Flask, jsonify, render_template, request
from flask_sqlalchemy import SQLAlchemy
import psycopg2
import sys
import json
from decimal import Decimal
import simplejson



app = Flask(__name__)


app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost/project_2'

db = SQLAlchemy(app)

 
@app.route('/data')

def data():
    # USE YOUR OWN PASSWORD, DBNAME HERE! 
    con = psycopg2.connect("host='localhost' dbname='project2' user='postgres' password='asdf'")  
    cur = con.cursor()
    cur.execute("""select * from database""")
    data = [col for col in cur]
    cur.close()
    return jsonify(data)
    

@app.route('/')
def home():
    return render_template('index.html')

if __name__ =="__main__":
    app.run(debug=True)