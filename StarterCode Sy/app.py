#flask 

from flask import Flask, jsonify, render_template, request
from flask_sqlalchemy import SQLAlchemy
import psycopg2
import sys
import json
from decimal import Decimal

#THIS IS IMPORTANT TO CONVERT DECIMALS IN DB TO JSON!! TOOK ME 2 DAYS 
#!!DO THIS pip install simplejson
import simplejson




# # #method used to conn DB
# from sqlalchemy import create_engine

# db_path = "/static/js/convertcsv.json"

# #create engine
# engine = create_engine(f"sqlite:///{database_path}")


app = Flask(__name__)

#create connection to database found on YT
#https://www.youtube.com/watch?v=w25ea_I89iM

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost/project_2'

db = SQLAlchemy(app)

#create view in flask to query database and return result as json
#https://stackoverflow.com/questions/49006388/how-to-fetch-data-from-postgresql-using-d3-js
#had trouble converting decimals to json. 
@app.route('/data')

def data():
    con = psycopg2.connect("host='localhost' dbname='project_2' user='postgres' password='postgres'")  
    cur = con.cursor()
    cur.execute("""select * from database""")
    data = [col for col in cur]
    cur.close()
    return jsonify(data)



@app.route('/')
def home():
    return render_template('index.html')


# @app.route('/data')
# def data():

# def home():
#     return jsonify(jsondata)

if __name__ =="__main__":
    app.run(debug=True)



