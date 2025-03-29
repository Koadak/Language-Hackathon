import psycopg2

# connection establishment
conn = psycopg2.connect(
database="languagehelper",
	user='postgres',
	host='localhost',
    password='postgres',
	port= '5432'
)

conn.autocommit = True

# Creating a cursor object
cursor = conn.cursor()

# query to create a database 
sql = '''INSERT INTO userInformation VALUES(
        1, 'test_user', 'test_password'
        )'''

# executing above query
cursor.execute(sql)
print("Database has been created successfully !!")

# Closing the connection
conn.close()
