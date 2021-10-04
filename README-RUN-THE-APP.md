
***How to run the app***

Two separate consoles (recommend GitBash)
'''

From root: activate the virtual environment
'''

source blockchain-env/Scripts/activate
```

Run the backend from the  with seeded data
'''

export SEED_DATA=True && python -m backend.app
'''

Separate terminal, run the frontend
'''

npm run start
'''