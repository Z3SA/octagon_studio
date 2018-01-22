# About Octagon Modmaking Studio

Octagon Modmaking Studio is a program complex designed for simplified creation modifications for game S.T.A.L.K.E.R.: Call of Pripyat and for its modification S.T.A.L.K.E.R.: Call of Chernobyl. The complex is on the development stage now.

The release version can be downloaded at [site ImeSense](http://imesense.ru/octagon/).
Documentation will be placed [here](http://imesense.ru/octagon_docs/).

# Current version

Octagon Modmaking Studio Mk 0 (pre-alpha)

# OMS modules

Besides the main window the program complex will consist of modules and each module will do actions in its own area of functions:

- **Changes Manager**: a module that controls and fixes changes in a modification; an integration with API GitHub is planned.
- **Modification parameters` editing**
- **Project Manager**: on the stage of development each modification will be a project.
- **Platform Manager**: a test platform for launching and testing builds of modification has to be in the project of modification.
- **Component Manager**: some game changes can be added to the modification with using components that are created separately.
- **Notes**: there is an opportunity to keep notes for yourself in the program complex and for other project developers in a project.  
- **Backup Manager**: there is an opportunity to make modification backups and to restore modification to the specific stage with their help.
- **Build Manager**: a module that collects Octagon Modmaking Studio`s files in a working variant of modification and launches modification on a test or release platform version. Also this module has to allow the user running build on a specific or test location that launches in Octagon Modmaking Studio.
- **Equipment Editor**: an editor of all equipment and things used in the game except for suits and weapon.
- **Clothes Editor**: an editor of suits and their upgrade tree.
- **Weapon Editor**: an editor of weapon in the game.
- **Clans Editor**: an editor that allows the user to rule groupings in the game.
- **Artefacts Editor**: an editor that allows to create, to edit and to delete artifacts in the game.
- **Anomalies Editor**: an editor that allows to change configuration and anomalies` spawn.
- **Locations Manager**: an editor that allows to connect and disconnect locations to the game.
- **HUD Editor**: an editor that allows to edit HUD`s position and availability easily.
- **A-Life Editor**: an editor that allows to change configuration of life simulation in game.
- **Quest Editor**: an editor of visual quests.
- **Converter Manager**: a module with graphical editor that allows to convert some files in a formats which are clear for the game. This action works conversely too.
- **Unit Editor**: an editor of NPC and squads.
- **Trade Editor**: an editor of traders and their assortment.
- **Weather Editor**: an editor of configuration and presets of weather.
- **Logs Analyzer**: an analyzer of logs when the game crashes.

# Planning functionality 

All the functions that are planned in the program complex will be described below. Realized functions will be marked with a sign &#10003;. The functions which have to be in the first release version (Mk 1) will be marked with a bold exclamation point **!**.

- The module "Project Manager":
  - project creating **!** &#10003;
  - project saving **!**
  - an opportunity to choose and open ten recent projects or components
  - an automatic loading of the last project
  - saving a project in a new directory **!**
  - an automatic project saving to prevent data loss
  - project opening **!**
  - project closing (with an output to the start screen) **!**
  - comparing one project with another to analyze differences and to combine them after **!**
- The module "Platform Manager":
  - copying game platform when a project is created or when the user chooses project`s folder **!**
  - an oppotunity to connect users` platforms **!**
- Interfase settings:
  - language changing of users` interface **!** &#10003;
  - an opportunity to create and connect new language interfaces **!** &#10003;
  - changing interface color scheme
  - an opportunity to create interface color schemes 
  - saving position and main window sizes to open these parameters when the program will be opened next time **!**
  - sorting program complex modules` buttons at the left side **!**
  - tuning inbuilt windows` display in the workspace of main window **!**
- The module "Component Manager":
  - an assignment of modification`s changes into components
  - components export
  - components import and checking for conflict with current project changes 
  - showing the list of all components in a current project
  - an assignment component`s properties
  - an editing component`s properties
- The module "Changes Manager":
  - tracing changes using API git **!**
  - uploading project at GitHub as a repository **!**
  - an opportunity to view change history **!**
- Text editor availability:
  - editing text files of all formats **!**
  - editing XML, LTX and SCRIPT files with an appropriate illumination of syntax **!**
  - seaching and exchanging text areas **!**
  - an automatic closing tegs in XML **!**
  - an automatic adding the right quotes, simple and square brackets and braces when the left one has been used yet **!** 
  - a replacement tabs on spaces **!**
  - a regulation of spaces quantity in tab 
  - a tips when a text is entered
  - a layout of properties with values in LTX files **!**
- The module "Notes":
  - a creating, an editing and a deleting notes in the program
  - a creating, an editing and a deleting notes in the project
- The module "Backup Manager":
  - backup making
  - a recovering project from the backup
  - an opportunity to view all project backups
- The module "Build Manager":
  - a build assembling for debugging **!**
  - a release build assembling **!**
  - a build launching to debug at one of game levels **!**
  - a build launching to debug at the test level **!**
  - a release build launching at one of game levels **!**
  - a release build launching with a new game 
  - a release build launching from the certain preservation 
  - a patch assembly **!**
  - a patch assembly and an exporting to publish **!**
- The module "Equipment Editor":
  - making equipment elements of meal, meds, quest things, etc.
  - making equipment elements using available element`s configuration
  - editing made equipment elements
  - deleting made equipment elements
  - changing binoculars` parameters
  - chaching bolt`s parameters
- The module "Weapon Editor":
  - creating weapon such as a pistol, a submachine gun, an automatic rifle, a sniper rifle, a grenade launcher, etc.
  - an opportunity to create a new type of weapon
  - editing made weapon elements
  - the removal of weapon
  - a creation, an editing and a deleting weapon upgrade trees
  - a creation, an editing and a deleting weapon additions
  - a creation, an editing and a deleting an ammunition
  - a creation, an editing and a deleting grenades
  - a creation, an editing and a deleting steel arms
- The module "Clans Editor":
  - a creation, an editing and a deleting groups
  - configurating relations between the groups
- The module "Artifacts Editor":
  - a creation, an editing and a deleting artifacts
  - changing likelihood an artifact in anomalies
- The module "Anomalies Editor":
  - a creation, an editing and a deleting anomalies
  - changing anomalies` particles
- The module "Locations Manager":
  - connection and disconnection locations
  - editing location configuration
  - editing the game global map in a visual editor
  - connecting locations between each other
- The module "HUD Edtior":
  - connection and disconnection HUD components
  - an editing HUD components position
  - an editing YUD components parameters
- The module "A-Life Editor":
  - changing AI`s behavior
  - an editing online and offline zones of NPS`s behavior
- The module "Quest Editor":
  - an adding and a deleting quests in a visual editor
  - an editing quests in a visual editor
  - uploading quests examples
- The module "Converter Manager":
  - packing and unpacking game resources
  - game levels decompilation
- The module "Unit Editor":
  - a creation, an editing and a deleting NPC
  - a creation, an editing and a deleting squads 
  - a creation, an editing and a deleting squads behavior
- The module "Trade Editor":
  - a creation, an editing and a deleting traders
  - an editing traders` assortment 
- The module "Weather Editor":
  - an editing weather settings  
  - an editing weather cycles 
- The module "Logs Analyzer":
  - logs interception at once one platform is crashed in the test time
  - an intercepted log analysis to get error cause and to decide it
  - log and made changes uploading to analyze and to discover it in the absence of log`s cause and decision
  - the notification will be sent to system user if his undiscovered log gets a cause and a decision
- Other functions
  - an opportunity to view all the project files in the right part of the main window **!**
  - project directory opening in the Windows Explorer window **!**
  - changing ways to the platforms **!**
  - changing way to X-Ray SDK **!**
  - changing an author and a team-developer in the current program version **!**
  - an opportunity to view a statistic information about the project such as creation date, changes quantity, last changes, etc. 
  - launching X-Ray SDK editors **!**
  - showing the engine source code changelog adding files which were changed
  - changing fsgame.ltx file
  - changing user.ltx file
  - opening dn.imesense.ru site from the program **!**
  - showing the list of available hotkeys **!**
  - opening imesense.ru/octagon_docs site from the program **!**
  - opening z3sa.ru and imesense.ru sites from the program **!**
  - checking program updates availability **!**
  - showing all the information about the current program revision **!**
  - an opportunity to send a message about a bug, a remark or an offer **!**

The program complex configuration is placed in a current user folder/Application Data/Roaming/Octagon Studio/. A configuration and a project developments are placed in the project folder/.octagon/. All the data besides language packs will be saved as XML files. Language packs will have JSON format.

Some functions can be inaccurate, revorked or deleted because of developer`s dive into the modification development. Unfortunally, the developer has a minimal experience in the modification development.