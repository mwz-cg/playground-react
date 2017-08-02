#!/bin/bash

if npm start -- --env.name=$1 2>/dev/null; then
  echo "🤖 Build success!"
  echo "TECHIO> success"
  echo "TECHIO> open --static-dir /project/target/dist /index.html"
else
  echo "🤖 Something went wrong 😱 please look at the compilation logs"
fi
