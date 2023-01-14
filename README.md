## E-Commerce-Back-End

## Title 
Object Oriented Mapping (ORM): E-commerce Back End 


# User Story 
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies. 

# Instillation 

npm install mysql2
npm install sequalize 
npm install dotenv

# Usage

log in to mySQL using commant "mysql -u root -p" 
To seed file: 
- Enter into command line "source db/schema.sql"

To exit mysql enter "quit" into command line. 



# Starting The Application

1. npm run seed (seed your database)

2. npm start 

*open insamnia*

3. run crud operation on the database (get, post, update, delete)
3a. GET: https://localhost:3001/api/catagoties
         https://localhost:3001/api/products 
         https://localhost:3001/api/tags
3b. GET category by id: https://localhost:3001/api/catagoties/5 
                        https://localhost:3001/api/products/5
 *replace 5 with the id of the category you would like to select
3c. POST: https://localhost:3001/api/catagoties
    *Select language of JSON 

    post the following message: 
    {
        "category_name": "Test Category"
    }
    POST: https://localhost:3001/api/products/

    {
        "product_name": "New Product Test", 
        "price": 200.00,
        "stock":3,
        tagIds: [1,2,3,4]
    }
    POST: https://localhost:3001/api/tags/

    {
        "tag_name":"new color"
    }
3d. PUT: https://localhost:3001/api/catagoties/6
        https://localhost:3001/api/products/6
        https://localhost:3001/api/tags/6
    *replace 6 with an id


# Walk-Though-Video

Please see the following link for video walk through: https://drive.google.com/file/d/1nikBCcKHqk1uVgreVCOlkpNWGoXv4NXB/view 

# Testing 

N/A 

# License

N/A 

# For More Information 
Please contact CinYP or email cinthiapruitt@gmail.com

