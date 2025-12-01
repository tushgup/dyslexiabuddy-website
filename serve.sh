#!/bin/bash

# Simple script to start/stop the local development server

PORT=${1:-8000}
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

case "$2" in
  stop)
    echo "Stopping server on port $PORT..."
    lsof -ti:$PORT | xargs kill -9 2>/dev/null
    echo "Server stopped."
    ;;
  restart)
    echo "Restarting server on port $PORT..."
    lsof -ti:$PORT | xargs kill -9 2>/dev/null
    sleep 1
    cd "$DIR" && python3 -m http.server $PORT &
    echo "Server started on http://localhost:$PORT"
    ;;
  *)
    # Check if port is in use
    if lsof -ti:$PORT > /dev/null 2>&1; then
      echo "Port $PORT is already in use."
      echo "Use: ./serve.sh $PORT stop   to stop it"
      echo "Or:  ./serve.sh $PORT restart   to restart"
      exit 1
    fi
    
    echo "Starting server on http://localhost:$PORT"
    cd "$DIR" && python3 -m http.server $PORT
    ;;
esac

