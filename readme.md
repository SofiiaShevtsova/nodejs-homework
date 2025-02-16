<h1>Приватна колекція контактів API</h1>

<h2>Servers: 'https://privatcontacts.onrender.com/api'</h2>
       
<h3>User: /users</h3>

<p>Registration request</p>
POST /register
<br>Content-Type: application/json
<br>RequestBody: {
<br>"name": "Adrian Cross",
<br>"email": "across@mail.com",
<br>"password": "examplepwd12345",
<br>"avatarURL": "//www.gravatar.com/avatar/cf57abc012c1661a001bd2f914c1aa24"}

<br>Registration validation error
<br>Status: 400 Bad Request
<br>Content-Type: application/json
<br>ResponseBody: {"message": `Error`}

<br>Registration conflict error
<br>Status: 409 Conflict
<br>Content-Type: application/json
<br>ResponseBody: {
<br>"message": "Email in use"
}

<br>Server error.
<br>Status: 500
<br>Content-Type: application/json
<br>ResponseBody: {
<br>"message": `Server error`
}

<br>Registration success response
<br>Status: 201 Created
<br>Content-Type: application/json<br>
<br>ResponseBody: {
<br>"name": "Adrian Cross",
<br>"email": "example@example.com",
<br>"subscription": "starter",
<br>"avatarURL": "//www.gravatar.com/avatar/cf57abc012c1661a001bd2f914c1aa24"
}

<p>Login request</p>
GET /login
<br>Content-Type: application/json
<br>RequestBody: {
<br>  "email": "example@example.com",
<br>  "password": "examplepassword"
}

<br>Login validation error
<br>Status: 400 Bad Request
<br>Content-Type: application/json
<br>ResponseBody: {"message": `Error`}

<br>Login auth error
<br>Status: 401 Unauthorized
<br>ResponseBody: {
<br>"message": "Email or password is wrong"}

<br>Login success response
<br>Status: 200 OK
<br>Content-Type: application/json
<br>ResponseBody: {
<br>"accessToken": "f57abc012c1661a001bd2f914c1aa2",
<br>"refreshToken": "f57abc012c1661a001bd2f914c1aa2kjhklhkljhju",
<br>user: {
<br>"name": "Adrian Cross",
<br>"email": "example@example.com",
<br>"subscription": "starter",
<br>"avatarURL": "//www.gravatar.com/avatar/cf57abc012c1661a001bd2f914c1aa24"},
}

<p>Logout request</p>
POST /logout
<br>Authorization: "Bearer {{token}}"

<br>Logout unauthorized error
<br>Status: 401 Unauthorized
<br>Content-Type: application/json
<br>ResponseBody: {
<br>"message": "Not authorized"
}

<br>Logout success response
<br>Status: 204 No Content

<p>Current user request</p>
GET /current
<br><br>Authorization: "Bearer {{token}}"

<br>Current user unauthorized error
<br>Status: 401 Unauthorized
<br>Content-Type: application/json
<br>ResponseBody: {
<br>"message": "Not authorized"
}

<br>Current user success response
<br>Status: 200 OK
<br>Content-Type: application/json
<br>ResponseBody: {
<br>"email": "example@example.com",
<br>"subscription": "starter"}

<p>Update user avatar request</p>
PATCH /avatars
<br>Content-Type: multipart/form-data
<br>Authorization: "Bearer {{token}}"
<br>RequestBody: download file

<br>Success response
<br>Status: 200 OK
<br>Content-Type: application/json
<br>ResponseBody: {
<br>"avatarURL": "link"}

<br>User unauthorized error
<br>Status: 401 Unauthorized
<br>Content-Type: application/json
<br>ResponseBody: {
<br>"message": "Not authorized"}

<p>Verification request</p>
GET /verify/:verificationToken

<br>Verification user Not Found
<br>Status: 404 Not Found
<br>ResponseBody: {
<br>message: 'User not found'}

<br>Verification success response
<br>Status: 200 OK
<br>ResponseBody: {
<br>message: 'Verification successful',}

<p>Resending a email request</p>
POST /verify
<br>Content-Type: application/json
<br>RequestBody: {
<br>"email": "example@example.com"}

<br>Resending a email validation error
<br>Status: 400 Bad Request
<br>Content-Type: application/json
<br>ResponseBody: {"message": `Error`}

<br>Resending a email success response
<br>Status: 200 Ok
<br>Content-Type: application/json
<br>ResponseBody: {
<br>"message": "Verification email sent"}

<br>Resend email for verified user
<br>Status: 400 Bad Request
<br>Content-Type: application/json
<br>ResponseBody: {
<br>message: "Verification has already been passed"}

<h3>Contacts: /contacts</h3>

<p>GET "/" - get list of contacts</p>
Authorization - The accessToken issued to the current user.
<br>Parameters: page, limit; defoult(page=1, limit=5)

Responses:

<br>Get list
<br>status: 200
<br>Content-Type: application/json
<br>data: [{
<br>"name": "Adrian Cross",
<br>"email": "across@mail.com",
<br>"phone": "526-569-589",
<br>"_id": "cf57abc012c1661a001bd2f914c1aa24",
<br>"favorite": "false",
<br>owner: {
<br>"name": "Sofia",
<br>"_id": "cf57abc012c1661a001bd2f914c1aa24"
}
}]

User didn't find or autorization.
<br>status: 401
<br>data: {
<br>message: `Error`
}

Server error.
<br>status: 500
<br>data: {
<br>message: `Server error`
}

<p>POST "/" - add contact to user contacts list</p>
Authorization - The accessToken issued to the current user.
<br>Request body - application/json
Schema
<br>{
<br>"name": "Adrian Cross",
<br>"email": "across@mail.com",
<br>"phone": "526-569-589",
}

Responses:
<br>Contact created
<br>status: 201
<br>Content-Type: application/json
<br>data: {
<br>"name": "Adrian Cross",
<br>"email": "across@mail.com",
<br>"phone": "526-569-589",
<br>"\_id": "cf57abc012c1661a001bd2f914c1aa24",
<br>"favorite": "false",
<br>owner: {
<br>"name": "Sofia",
<br>"\_id": "cf57abc012c1661a001bd2f914c1aa24"
}
}

Contact didn't created.
<br>status: 400
<br>data: {
<br>message: `Error`
}

Server error.
<br>status: 500
<br>data: {
<br>message: `Server error`
}

<p>GET "/:id" - get contact by id</p>
Authorization - The accessToken issued to the current user.
<br>Parameters: id;

Responses:
<br>Get contact
<br>status: 200
<br>Content-Type: application/json
<br>data: {
<br>"name": "Adrian Cross",
<br>"email": "across@mail.com",
<br>"phone": "526-569-589",
<br>"\_id": "cf57abc012c1661a001bd2f914c1aa24",
<br>"favorite": "false",
<br>owner: {
<br>"name": "Sofia",
<br>"\_id": "cf57abc012c1661a001bd2f914c1aa24"
}
}

Contact didn't find.
<br>status: 404
<br>data: {
<br>message: `Not found`
}

No autorization.
<br>status: 401
<br>data: {
<br>message: `Error`
}

Server error.
<br>status: 500
<br>data: {
<br>message: `Server error`
}

<p>DELETE "/:id" - delete contact by id</p>
Authorization - The accessToken issued to the current user.
<br>Parameters: id;

Responses:
<br>Delete contact
<br>status: 200
<br>data: {
<br>"message": "Contact deleted"
}

Contact didn't find.
<br>status: 404
<br>data: {
<br>message: `Not found`
}

No autorization.
<br>status: 401
<br>data: {
<br>message: `Error`
}

Server error.
<br>status: 500
<br>data: {
<br>message: `Server error`
}
