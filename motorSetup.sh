#!/bin/sh
cat /dev/null > motorSetting.js
for f in /sys/class/tacho-motor/*;
do
  echo exports.`cat $f/address` = \'$f\'\; >> motorSetting.js;
done
