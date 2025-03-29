import psycopg2

# connection establishment
conn = psycopg2.connect(
database="postgres",
	user='postgres',
	host='localhost',
    password='postgres',
	port= '5432'
)

conn.autocommit = True

# Creating a cursor object
cursor = conn.cursor()

# query to create a database 
sql = ''' CREATE TABLE users(
			user_id int,
            user_name varchar(255),
            password varchar(255)
            )'''

# executing above query
cursor.execute(sql)
print("Database has been created successfully !!")

# Closing the connection
conn.close()
