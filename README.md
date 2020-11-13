# test-lerna-react

Playin

## Init

1. init independent
2. "npmClient": "yarn",
3. ts / tsconfig
4. lerna create p1
5. lerna run tsc
6. publish:
   - unique package names
   - private: false
   - npm config set access public
   - lerna publish

## Basics

1. l add lodash --scope=osequi-test-lerna-react-p1
2. lerna create p2
   - add package.json/scripts: tsc
   - publish
3. l add osequi-test-lerna-react-p1@1.0.4 --scope=osequi-test-lerna-react-p2
4. import p1 from "osequi-test-lerna-react-p1";
5. p2.name: "Zolika +" + p1.name,
6. add jest
   - yarn ts-jest config:init
   - remove **tests** folders
   - add p2.test.ts inside /src

## Unpublished packages

1. create p3
2. l add osequi-test-lerna-react-p3 --scope=osequi-test-lerna-react-p2
3. ~~importing p3 into p2 will throw an error~~ IT WAS A COPY/PASTE ERROR
4. ~~even after publishing p3 p2 will throw an error: error TS2307: Cannot find module 'osequi-test-lerna-react-p3' or its corresponding type declarations.~~

5. create p4
6. y tsc
7. l add osequi-test-lerna-react-p4 --scope=osequi-test-lerna-react-p2
8. y tsc
9. all works fine!

## Folders

1. theme, hooks, components, apps
2. l bootstrap
3. y tsc
