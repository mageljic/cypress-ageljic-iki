**Prije pokretanja projekta potrebno je instalirati:**

Node.js 
Visual Studio Code


**Otvoriti terminal i upisati:**

node -v

i

npm -v

Instalacija je uspješna ukoliko se ispišu verzije.


**Preuzimanje projekta preko GitHuba**

1. Otvoriti GitHub stranicu projekta URL: https://github.com/mageljic/cypress-ageljic-iki.
2. Kliknuti na gumb Code.
3. Odabrati Download ZIP.
4. Raspakirati ZIP datoteku na računalo (npr. u "Dokumenti").
5. Otvoriti raspakirani direktorij u Visual Studio Codeu.


**Instaliranje potrebnih paketa:**

U terminalu, unutar direktorija projekta, pokrenuti:

npm install

Ova naredba instalira sve potrebne pakete iz `package.json`.



**Pokretanje testova:**

U terminal upisati:

npx cypress open

Otvorit će se Cypress aplikacija.

1. Odabrati E2E Testing.
2. Odabrati preglednik.
3. Kliknuti na željeni test.
4. Test će se pokrenuti u pregledniku.

ILI

**Pokretanje svih testova direktno u terminalu:**


npx cypress run

Cypress će automatski pokrenuti sve testove i prikazati rezultate.



Svaki sljedeći put dovoljno je:

1. Otvoriti projekt u Visual Studio Codeu.
2. Otvoriti terminal.
3. Pokrenuti:


npx cypress open


ILI

npx cypress run

