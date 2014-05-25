# perl-dancer-angular-seed

#### A project template to jumpstart a Perl Dancer/Angular application

## What it does

Provides a starting folder to help create a complete web application with 
[Perl Dancer](http://http://www.perldancer.org) and [AngularJS](http://angularjs.org). 

It's designed to be used to create an AngularJS Single Page Application (SPA) using Perl Dancer as a backend.

## What's included

 - AngularJS application template with examples for directives, services, controllers and filters.
 - Perl Dancer (version 1 and 2) application to use as a backend. Also contains templates to configure popular Dancer plugins like: 
   [Dancer::Plugin::Database](https://metacpan.org/pod/Dancer::Plugin::Database),
   [Dancer::Plugin::Auth::Extensible](https://metacpan.org/pod/Dancer::Plugin::Auth::Extensible) and 
   [Dancer::Plugin::DBIC](https://metacpan.org/pod/Dancer::Plugin::DBIC).
 - Preconfigured: 
  - web package manager ([bower](http://bower.io/)) to include popular packages like AngularJS, Bootstrap, 
    jQuery and Font Awesome.
  - task runner ([grunt](http://gruntjs.com/)) to help automate concatenation and minification of 
    web project assets (js/css) for production.
  - node.js package manager (npm) to manage node.js modules.
  - perl and perl module managers ([plenv](https://github.com/tokuhirom/plenv) and [carton](https://metacpan.org/pod/Carton)) 
    to locally install perl and perl modules.

### Dependencies

You need the following softwares installed on your system:

- [Perl Dancer 1 or 2](http://www.perldancer.org/): [Install](http://www.perldancer.org/quickstart)
- Optional:
 - [node.js](http://nodejs.org/) if you want to use pre-configured grunt and bower.
 - perl's [plenv](https://github.com/tokuhirom/plenv) and [carton](https://metacpan.org/pod/Carton) 
   to locally install perl and perl modules.

## Installation

```
$ git clone git://github.com/jacqueslareau/perl-dancer-angular-seed.git MyApp
$ cd MyApp
$ npm install
$ bower install
```

For a Dancer2 project, check the bin/app.pl file.

Start the app in development mode:

```
$ bin/start-dev.pl
```

And then point your brower to:

```
http://localhost:5555
```

Remove origin with this seed:

```
$ git remote rm origin
```

## Production

To deploy for production, create a script that will clone your project in your production folder.
Your script will then have to run the following commands to install needed packages and modules:

```
$ npm install
$ bower install
$ carton install
$ grunt
```

## Documentation

### Configure assets

You can declare your AngularJS source files and css files in dancer's config.yml file. 

```
assets: 
  js: 
    build-folder: "public/app/build"
    build-file: "app.js"
    build-file-min: "app.min.js"
    files: 
      - "public/app/app.js"
      - "public/app/directives/MyDirective.js"
      - "public/app/services/MyService.js"
      - "public/app/filters/MyFilter.js"
      - "public/app/controllers/MyController.js"
  css:
    build-folder: "public/css/build"
    build-file: "styles.css"
    build-file-min: "styles.min.css"
    files: 
      - "public/css/styles.css"
```

This is used by grunt to build the files that will be used in production.

At development stage, use the normal html tags to include javascript and css files.
This allows us to develop our AngularJS apps and not have to grunt after each modifications.
For this to work, we use template toolkit to select between compiled and normals assets.
You can view how it's done in the views/layouts/main.tt file.

## Notes

Be sure to use AngularJS array notation to declare functions. It is required to make sure uglify 
doesn't break your code.
