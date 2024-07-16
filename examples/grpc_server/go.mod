module go.k6.io/k6/examples/grpc_server

go 1.19

replace go.k6.io/k6 => ../../

require (
	go.k6.io/k6 v0.0.0-00010101000000-000000000000
<<<<<<< HEAD
	google.golang.org/grpc v1.60.0
)

require (
	github.com/golang/protobuf v1.5.4 // indirect
	golang.org/x/net v0.21.0 // indirect
	golang.org/x/sys v0.18.0 // indirect
	golang.org/x/text v0.14.0 // indirect
	google.golang.org/genproto/googleapis/rpc v0.0.0-20231009173412-8bfb1ae86b6c // indirect
	google.golang.org/protobuf v1.33.0 // indirect
=======
	google.golang.org/grpc v1.64.1
)

require (
	golang.org/x/net v0.26.0 // indirect
	golang.org/x/sys v0.21.0 // indirect
	golang.org/x/text v0.16.0 // indirect
	google.golang.org/genproto/googleapis/rpc v0.0.0-20240515191416-fc5f0ca64291 // indirect
	google.golang.org/protobuf v1.34.2 // indirect
>>>>>>> 21d369e6b6e279caa3eee4293beab943cf6f85a3
)
