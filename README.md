# hackschool-crossplatform

Die Anwendung für die Cross-Plattform Hackschool besteht aus zwei Teilen. Zum ersten die API, die die eigentliche Anwendung mit Daten versorgt, zum zweiten die Anwendung an sich.

Bei der Demo-Anwendung handelt es sich um einen sehr einfach gehaltenen Pokédex, mit einer Listenübersicht und einer Detailseite.

## API

Die API ist ein Node.js Projekt, das mit Restify realisiert wurde.

Mit `npm i` werden die benötigten Node-Packages installiert, mit `npm start` wird die API gestartet.

Die API hört auf Port 8090 und beantwortet dort Anfragen. Die zwei Funktionen die von der Anwendung genutzt werden sind:

1. GET http://localhost:8090/pokemon  
  um eine Liste der Pokemon abzurufen und
2. GET http://localhost:8090/pokemon/{id}  
  um die Detailinformationen für das Pokémon mit der gegebenen ID abzurufen.

## Anwendung

Die Anwendung ist mit Angular 2.0.0 realisiert. Auch hier müssern erst mit `npm i` die benötigen Tools zum bauen der Anwendung installiert werden. Um die Anwendung lokal im Browser zu testen wird diese mit `npm start` gebaut, und daraufhin ein lokaler Webserver auf Port 8000 gestartet. Mit `http://localhost:8000` kann die Anwendung im Browser aufgerufen werden.

Mit `npm run build-mobile` wird die Anwendung mit Cordova vorbereitet, so dass man sie auf Geräte und Emulatoren verwenden kann.


## Special thanks
Special thanks to http://pokedream.com/ to allow us to use their images!
