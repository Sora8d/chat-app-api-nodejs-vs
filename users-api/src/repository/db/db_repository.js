const client = require('../../clients/postgre/postgre')
const { User } = require('../../domain/users/user')

class UserDbRepository{
    constructor(){
        this.client = client
    }
    async GetUserByUuid(strings){
        let objects_lists = [];
        await this.client('user_table').select('id', 'uuid').where((builder) => builder.whereIn("uuid", strings)).then((rows) => {
            rows.forEach((row) => {
            const user = new User({id:row["id"],uuid: row["uuid"]})
            objects_lists.push(user)
        })
    }).catch((err)=> console.log(err));
        return {users: objects_lists, error: null};
    };
    async GetUserByLogin(login_user){
        let user = undefined
        await this.client('user_table').select('id', 'uuid', 'login_user').where({login_user: login_user.loginUser, login_password: login_user.loginPassword}).then((rows) => {rows.forEach((row)=>{
            user = new User({id: row["id"] ,uuid: row["uuid"],loginUser: row["login_user"]})
        })}).catch((err) => console.log(err));
        return user, null
    };
};

function GetUserRepository() {
    return new UserDbRepository();
};

module.exports = GetUserRepository;