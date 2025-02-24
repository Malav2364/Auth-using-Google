const Users = [
    {
        email : "admin@gmail.com",
        password : "password"
    },
    {
        email : "malav@gmail.com",
        password : "password"
    },
    {
        email : "ayush@gmail.com",
        password : "password"
    },

]

export const getUserByEmail = email =>{
    const found  = Users.find(Users => Users.email === email);
    return found;
}