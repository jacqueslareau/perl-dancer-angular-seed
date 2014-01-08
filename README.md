# perl-dancer-angular-seed

#### Seed to jumpstart your Perl Dancer/Angular WebApp 

## What it does

A seed that will help jump start a AngularJS app using Perl Dancer as the back end.
It's designed to be used to create a Single Page Application (SPA).  

## What's included

 - a AngularJS development folder containing a complete working app with examples for directives,
   services, controllers and filters
 - a Bower bower.json file to install AngularJS, Bootstrap, jQuery and Font Awesome
 - a Grunt Gruntfile.js file to compile our AngularJS app for production (concat and uglify)
 - a npm package.json file to configure our asset files
 - Perl Dancer config files with ready to use templates to setup popular plugins like: 
   Database, Auth::Extensible and DBIC

## Documentation

### Configure your assets

You can declare your AngularJS source files and css files in the package.json file. 

```json

...
  "assets": {
    "js": {
      "build-folder": "public/app/build",
      "build-file": "app.js",
      "build-file-min": "app.min.js",
      "files": [
        "public/app/app.js",
        "public/app/directives/MyDirective.js",
        "public/app/services/MyService.js",
        "public/app/filters/MyFilter.js",
        "public/app/controllers/MyController.js"
      ]
    },
    "css": {
      "build-folder": "public/css/build",
      "build-file": "style.css",
      "build-file-min": "style.min.css",
      "files": [
        "public/css/style.css"
      ]
    }
  }
...

```

This is used by grunt to build the files that will be used in production.

At development stage, use the normal html tags to include javascript and css files.
For this to work, we use template toolkit to select between compiled and normals assets.
You can view how it's done in the views/layouts/main.tt file.

This allows us to develop our AngularJS apps and not have to grunt after each modifications. 

## Notes

Be sure to use AngularJS array notation to declare functions. It is required to make sure uglify 
doesn't break your code.

## Dependencies

You need the following softwares installed on your system:

- node (0.10.20+)
- npm (1.3.11+)
- bower (1.2.8+)
- grunt (0.4.2+)
- Perl and Perl Dancer 1

## Install

```
git clone git://github.com/jacqueslareau/perl-dancer-angular-seed.git
git remote rm destination
npm install
bower install
grunt
```

You can run the app in development mode using:

```
bin/start-dev.pl
```

And then point your brower to:

```
http://localhost:5000
```