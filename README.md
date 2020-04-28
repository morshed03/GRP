# GRP
GRP All Module Test Automation
-------------------------------------
install package:	npm init -y
-----------------------------------------------
install cypress:
npm install cypress --save-dev 
-----------------------------------------------------
open:   npx cypress open
----------------------------------------------------
mochawesome report
npm install --save-dev mochawesome
npm install --save-dev mocha
-----------------------------------------------
Run mocha
node_modules\.bin\cypress run --reporter mochawesome
----------------------------------------------------
Run Specific Browser
node_modules\.bin\cypress run --browser chrome --reporter mochawesome --spec cypress\integration\loginGRPdashboard\loginTest.js --headless
----------------------------------------------
Install Xpath
https://github.com/cypress-io/cypress-xpath
------------------------------------------------
File Upload
https://github.com/abramenal/cypress-file-upload
------------------------------------------------
In Window::
Open Windows PowerShell
Run Set-ExecutionPolicy RemoteSigned
Type Yes
----------------------------------------------
