// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.6.1
// source: rpc/users/users.proto

package users

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// UsersProtoInterfaceClient is the client API for UsersProtoInterface service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type UsersProtoInterfaceClient interface {
	GetUserByUuid(ctx context.Context, in *MultipleUuids, opts ...grpc.CallOption) (*UserMsgResponse, error)
	Ping(ctx context.Context, in *Empty, opts ...grpc.CallOption) (*UserResponse, error)
}

type usersProtoInterfaceClient struct {
	cc grpc.ClientConnInterface
}

func NewUsersProtoInterfaceClient(cc grpc.ClientConnInterface) UsersProtoInterfaceClient {
	return &usersProtoInterfaceClient{cc}
}

func (c *usersProtoInterfaceClient) GetUserByUuid(ctx context.Context, in *MultipleUuids, opts ...grpc.CallOption) (*UserMsgResponse, error) {
	out := new(UserMsgResponse)
	err := c.cc.Invoke(ctx, "/flydev_chat_app_users.UsersProtoInterface/GetUserByUuid", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *usersProtoInterfaceClient) Ping(ctx context.Context, in *Empty, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/flydev_chat_app_users.UsersProtoInterface/Ping", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UsersProtoInterfaceServer is the server API for UsersProtoInterface service.
// All implementations must embed UnimplementedUsersProtoInterfaceServer
// for forward compatibility
type UsersProtoInterfaceServer interface {
	GetUserByUuid(context.Context, *MultipleUuids) (*UserMsgResponse, error)
	Ping(context.Context, *Empty) (*UserResponse, error)
	mustEmbedUnimplementedUsersProtoInterfaceServer()
}

// UnimplementedUsersProtoInterfaceServer must be embedded to have forward compatible implementations.
type UnimplementedUsersProtoInterfaceServer struct {
}

func (UnimplementedUsersProtoInterfaceServer) GetUserByUuid(context.Context, *MultipleUuids) (*UserMsgResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUserByUuid not implemented")
}
func (UnimplementedUsersProtoInterfaceServer) Ping(context.Context, *Empty) (*UserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Ping not implemented")
}
func (UnimplementedUsersProtoInterfaceServer) mustEmbedUnimplementedUsersProtoInterfaceServer() {}

// UnsafeUsersProtoInterfaceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to UsersProtoInterfaceServer will
// result in compilation errors.
type UnsafeUsersProtoInterfaceServer interface {
	mustEmbedUnimplementedUsersProtoInterfaceServer()
}

func RegisterUsersProtoInterfaceServer(s grpc.ServiceRegistrar, srv UsersProtoInterfaceServer) {
	s.RegisterService(&UsersProtoInterface_ServiceDesc, srv)
}

func _UsersProtoInterface_GetUserByUuid_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MultipleUuids)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UsersProtoInterfaceServer).GetUserByUuid(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/flydev_chat_app_users.UsersProtoInterface/GetUserByUuid",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UsersProtoInterfaceServer).GetUserByUuid(ctx, req.(*MultipleUuids))
	}
	return interceptor(ctx, in, info, handler)
}

func _UsersProtoInterface_Ping_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UsersProtoInterfaceServer).Ping(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/flydev_chat_app_users.UsersProtoInterface/Ping",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UsersProtoInterfaceServer).Ping(ctx, req.(*Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// UsersProtoInterface_ServiceDesc is the grpc.ServiceDesc for UsersProtoInterface service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var UsersProtoInterface_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "flydev_chat_app_users.UsersProtoInterface",
	HandlerType: (*UsersProtoInterfaceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetUserByUuid",
			Handler:    _UsersProtoInterface_GetUserByUuid_Handler,
		},
		{
			MethodName: "Ping",
			Handler:    _UsersProtoInterface_Ping_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "rpc/users/users.proto",
}
