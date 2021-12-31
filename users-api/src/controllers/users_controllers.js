class UsersController{
    constructor(services){
        this.services = services
    }
    async GetUserByUuid(protoStrings){
        let strings = []
        protoStrings.forEach((uuid) => {strings.push(uuid.getUuid())})
        return await this.services.GetUserByUuid(strings);
    };
    async GetUserByLogin(protoUser){
        let user
        this.services.GetUserByLogin(user);
    }
    async ping(){
        return
    }
}

function GetUsersController(services){
    return new UsersController(services)
}

module.exports = GetUsersController;