const grpcUsers =  require("../clients/rpc/users/users_pb")
const {User} = require("../domain/users/user")

function getAllFuncs(toCheck) {
    const props = [];
    let obj = toCheck;
    do {
        props.push(...Object.getOwnPropertyNames(obj));
    } while (obj = Object.getPrototypeOf(obj));
    
    return props.sort().filter((e, i, arr) => { 
       if (e!=arr[i+1] && typeof toCheck[e] == 'function') return true;
    });
}

class usersServer{
    constructor(controller){
        this.controller = controller
    }
    GetUserByUuid = (call, callback) => {
        let proto_uuids = call.request.getUuidsList()
        this.controller.GetUserByUuid(proto_uuids).then(({users, error}) => {
            let proto_users_array = new grpcUsers.UserMsgResponse();
            users.forEach((user)=>{
                proto_users_array.addUsers(user.GetProto())
            });
            callback(null, proto_users_array)
        }).catch((err) => {console.log(err)})
    };

    Ping(call, callback) {
        console.log("ping")
        let user = new User({id:10, uuid:"ping", loginUser: "ping", loginPassword: "ping"})
        let real_object = new grpcUsers.UserResponse();
        real_object.addUsers(user.GetProto())
        callback(null, real_object)
    }
};

function GetUsersServer(controller){
    return new usersServer(controller)
}

module.exports = GetUsersServer;


