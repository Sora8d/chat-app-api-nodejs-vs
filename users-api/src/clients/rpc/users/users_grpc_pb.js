// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var src_clients_rpc_users_users_pb = require('../../../../src/clients/rpc/users/users_pb.js');

function serialize_flydev_chat_app_users_Empty(arg) {
  if (!(arg instanceof src_clients_rpc_users_users_pb.Empty)) {
    throw new Error('Expected argument of type flydev_chat_app_users.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flydev_chat_app_users_Empty(buffer_arg) {
  return src_clients_rpc_users_users_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flydev_chat_app_users_MultipleUuids(arg) {
  if (!(arg instanceof src_clients_rpc_users_users_pb.MultipleUuids)) {
    throw new Error('Expected argument of type flydev_chat_app_users.MultipleUuids');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flydev_chat_app_users_MultipleUuids(buffer_arg) {
  return src_clients_rpc_users_users_pb.MultipleUuids.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flydev_chat_app_users_UserMsgResponse(arg) {
  if (!(arg instanceof src_clients_rpc_users_users_pb.UserMsgResponse)) {
    throw new Error('Expected argument of type flydev_chat_app_users.UserMsgResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flydev_chat_app_users_UserMsgResponse(buffer_arg) {
  return src_clients_rpc_users_users_pb.UserMsgResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flydev_chat_app_users_UserResponse(arg) {
  if (!(arg instanceof src_clients_rpc_users_users_pb.UserResponse)) {
    throw new Error('Expected argument of type flydev_chat_app_users.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flydev_chat_app_users_UserResponse(buffer_arg) {
  return src_clients_rpc_users_users_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersProtoInterfaceService = exports.UsersProtoInterfaceService = {
  getUserByUuid: {
    path: '/flydev_chat_app_users.UsersProtoInterface/GetUserByUuid',
    requestStream: false,
    responseStream: false,
    requestType: src_clients_rpc_users_users_pb.MultipleUuids,
    responseType: src_clients_rpc_users_users_pb.UserMsgResponse,
    requestSerialize: serialize_flydev_chat_app_users_MultipleUuids,
    requestDeserialize: deserialize_flydev_chat_app_users_MultipleUuids,
    responseSerialize: serialize_flydev_chat_app_users_UserMsgResponse,
    responseDeserialize: deserialize_flydev_chat_app_users_UserMsgResponse,
  },
  ping: {
    path: '/flydev_chat_app_users.UsersProtoInterface/Ping',
    requestStream: false,
    responseStream: false,
    requestType: src_clients_rpc_users_users_pb.Empty,
    responseType: src_clients_rpc_users_users_pb.UserResponse,
    requestSerialize: serialize_flydev_chat_app_users_Empty,
    requestDeserialize: deserialize_flydev_chat_app_users_Empty,
    responseSerialize: serialize_flydev_chat_app_users_UserResponse,
    responseDeserialize: deserialize_flydev_chat_app_users_UserResponse,
  },
};

exports.UsersProtoInterfaceClient = grpc.makeGenericClientConstructor(UsersProtoInterfaceService);
