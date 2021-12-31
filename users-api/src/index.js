const grpc= require("@grpc/grpc-js");
const services= require("./clients/rpc/users/users_grpc_pb");
const GetUsersServer = require("./server/users_server");
const GetUsersController = require("./controllers/users_controllers");
const GetUsersService = require("./services/users_service");
const GetUserRepository = require("./repository/db/db_repository");

function main() {
    var grpcServer = new grpc.Server();
    var server = GetUsersServer(GetUsersController(GetUsersService(GetUserRepository())));
    //Login User not implemented yet
    grpcServer.addService(services.UsersProtoInterfaceService, {getUserByUuid: server.GetUserByUuid, ping: server.Ping});
    grpcServer.bindAsync("0.0.0.0:5051", grpc.ServerCredentials.createInsecure(), () => {grpcServer.start()});
}

main()