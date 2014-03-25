
ports := $(shell { type port; } 2>/dev/null)
apt := $(shell { type apt-get; } 2>/dev/null)
yum := $(shell { type yum; } 2>/dev/null)

# OSX SUPPORT
ifdef ports
	SHELL := /opt/local/bin/bash # must be installed from macports, or else bash colors won't work
	OSX := true
endif

# DEBIAN/UBUNTU SUPPORT
ifdef apt
	DEB := true
endif

# RHEL SUPPORT
ifdef yum
	RHEL := true
endif

all: install

install:
ifdef OSX
	sudo port -v install nodejs
	sudo port -v install npm
	sudo npm install -g phantomjs
	sudo npm install -g casperjs
endif

ifdef apt
	sudo apt-get install nodejs
	ln -s /usr/bin/nodejs /usr/bin/node
	sudo npm install -g phantomjs
	sudo npm install -g casperjs
endif
