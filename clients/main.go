package main

import (
	"context"
	"fmt"
	"node-js/users/proto_clients"
	"node-js/users/rpc/users"
)

func main() {
	clients := proto_clients.GetUsersClient()
	lolem := users.MultipleUuids{Uuids: []*users.Uuid{{Uuid: "621d1180-bed4-4edd-9b17-8bea4e388230"}, {Uuid: "6d49d38f-1dfc-4f3b-9d5c-4a8d590fa9a2"}, {Uuid: "621d1180-bed4-4edd-9b17-8bea4e388230"}}}

	response, err := clients.Client.GetUserByUuid(context.Background(), &lolem)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(response.Users)
	}
}

/*
response:
[id:67  uuid:{uuid:"621d1180-bed4-4edd-9b17-8bea4e388230"} id:68  uuid:{uuid:"6d49d38f-1dfc-4f3b-9d5c-4a8d590fa9a2"}]
*/
