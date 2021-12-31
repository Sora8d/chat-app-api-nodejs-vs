class UserService{
    constructor(dbrepo){
        this.dbrepo = dbrepo
    };
    async GetUserByUuid(strings) {
        return await this.dbrepo.GetUserByUuid(strings);
        
    };
    async GetUserByLogin(login_user) {
        let user, err = await this.dbrepo.GetUserByLogin(login_user);
        return user, err;
    };
}

function GetUsersService(dbUserRepo) {
    return new UserService(dbUserRepo);
}

module.exports = GetUsersService;