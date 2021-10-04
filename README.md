**Activate the virtual environment**

```
source blockchain-env/Scripts/activate
```

**Install all packages**
```
pip install -r requirements.txt
```

**Run the test**

Make sure to activate the virtual environment.

```
python -m pytest backend/tests
```

**Run the application and API**

Make sure to activate the virtual environment.

'''
python -m backend.app
'''

**Run a peer instance**
'''
export PEER=True && python -m backend.app
'''

**Run the frontend**
'''
In the frontend directory:
'''
npm run start
'''

**Seed the backend with data**

'''
export SEED_DATA=True && python -m backend.app
