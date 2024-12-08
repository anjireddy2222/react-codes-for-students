
## Signup API

API URL/Path/Location/End Point: https://api.softwareschool.co/auth/signup

Method: POST

Data Type: JSON/Form Data/File

sample data:
{
    email: '',
    name: '',
    password: '',
    mobile: ''
}


## Login API

API URL: https://api.softwareschool.co/auth/login

method: POST

Data type: JSON

sample data:
{
    email: '',
    password: ''
}

{"result":"FAILED","message":"Invalid login credentials","data":[]}

{
    "result": "SUCCESS",
    "message": "OK",
    "data": {
        "userId": 2,
        "key": "aec43bd4-0c0a-448a-8ec2-0565ade74536",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIkMmEkMTAkY1BRNndUb3hEUWVGc09jYnJLTnRRZTVyVWwxbUpyUzBLaVFnSUV0NmVXOWtUMGg1a2kzUnUiLCJrZXkiOiJhZWM0M2JkNC0wYzBhLTQ0OGEtOGVjMi0wNTY1YWRlNzQ1MzYiLCJlbWFpbCI6ImNvbnRhY3RAc29mdHdhcmVzY2hvb2wuY28iLCJpYXQiOjE2OTk1MTgwOTQsImV4cCI6MTY5OTUxODY5NH0.e4ZHRnJDxtKS7xn9NqAHqGk24WjZknnhcxJV-QVIXhM",
        "name": "Anji Reddy",
        "email": "contact@softwareschool.co"
    }
}


# Get products list

API URL: https://dummyjson.com/products

Method: GET

# get My Courses
URL: https://api.softwareschool.co/courses/getPurchasedCourses
method: POST
data type: json
sample: {
    token: '',
    userId: ''
}




