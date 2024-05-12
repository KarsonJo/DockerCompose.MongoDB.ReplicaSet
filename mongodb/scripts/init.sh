#!/bin/bash
sleep 0.5
until mongosh --host mongo1:27017 --file "$(dirname "$0")/init.js"
do
  sleep 1
done