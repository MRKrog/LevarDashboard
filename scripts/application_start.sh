#!/bin/bash
# Stop all servers and start the server
forever stopall
forever start /home/ubuntu/levardash/src/index.js