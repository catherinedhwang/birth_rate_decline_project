#flask 

from flask import Flask, jsonify, render_template

app = Flask(__name__)

# #Create engine and connection
# engine = create_engine('postgresql://postgres:admin@localhost:5432/DBZ')
# conn = engine.connect()
# table = pd.read_sql("SELECT * FROM database", conn)
# data_df = pd.DataFrame(table)


@app.route('/')
def home():
    return render_template('index.html')

# @app.route('/data')
# def data():

# def home():
#     return jsonify(jsondata)

if __name__ =="__main__":
    app.run(debug=True)



