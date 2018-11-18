from flask import Flask, render_template
import json
import facebook


app = Flask(__name__)

@app.route('/')
def index():
    return_json = json.dumps(facebook.process(facebook.get_posts()))
	file=open("facebook_data.json", "w")
	file.write(return_json)
	file.close()

if __name__ == "__main__":
    app.run(debug = True) #Set debug = False in a production environment