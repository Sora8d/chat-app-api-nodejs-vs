const proto_users = require("../../clients/rpc/users/users_pb") 

class User {
    constructor(dict) {
        this.id = dict["id"];
        this.uuid = dict["uuid"];
        this.loginUser = dict["loginUser"];
        this.loginPassword = dict["loginPassword"];
    };

    GetProto(){
        let proto_user = new proto_users.User();
        proto_user.setId(this.id);
        let uuid = new proto_users.Uuid();
        uuid.setUuid(this.uuid) 
        proto_user.setUuid(uuid);
        proto_user.setLoginUser(this.loginUser);
        proto_user.setLoginPassword(this.loginPassword);
        return proto_user
    };
};

class UserProfile{
    constructor(id, uuid, userid, active, phone, firstname, lastname, username, avatarurl, createdat) {
        this.id = id;
        this.uuid = uuid;
        this.userid = userid;
        this.active = active;
        this.phone = phone;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.avatarurl = avatarurl;
        this.createdat = createdat;
    }
}

class UuidandProfile{
    constructor(uuid, userprofile){
        this.uuid = uuid;
        this.profile = userprofile;
    }
}

module.exports = {User, UserProfile, UuidandProfile};