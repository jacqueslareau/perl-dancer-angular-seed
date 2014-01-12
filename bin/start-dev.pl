#!/usr/bin/perl -w

# We use this script to start the dev app
# Starts on port 5555

my @cmd = (
  "carton",
  "exec",
	"plackup",
	"-s Starman",
	"-L Shotgun",
	"-p 5555",
	"-E development",
	"-a bin/app.pl"
);

system( join(" ", @cmd) );
