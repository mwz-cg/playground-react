#!/bin/bash

if npm run webpack -- --env.name=$1 2>/dev/null; then
  echo "🤖 Build success!"
  echo "TECHIO> success"
else
  echo "🤖 Something went wrong 😱 please look at the compilation logs"
fi

if [ -n "$2" ]; then
  npm start
else
  echo "TECHIO> open --static-dir /project/target/dist /index.html"
fi
