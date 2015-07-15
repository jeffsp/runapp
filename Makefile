# Run the server
default:
	node server.js

check:
	$(MAKE) -C tests
