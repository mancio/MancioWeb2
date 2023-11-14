# Mancioweb2

## The new version of my site

### Deploy on Firebase
* install firebase ``npm install -g firebase-tools``
* log in ``firebase login``
* init the project or select already existing by executing ``firebase init``
* change the folder from ``public`` to ``build`` in firebase configuration
* delete the public folder generated by firebase
* put all the files generated by firebase to the project root directory
* adjust ``Set-Location -Path`` in the ``publish`` script
* execute ``publish`` script