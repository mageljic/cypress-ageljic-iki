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


**Mogući problemi prilikom prvog pokretanja:**


Ako se prilikom pokretanja projekta pojavi greška:


Error: Cannot find module 'cypress'


to znači da na računalu nisu instalirane Node.js ovisnosti (node_modules).

Potrebno je u korijenskoj mapi projekta pokrenuti naredbu:


npm install


Time će se ponovno preuzeti sve potrebne ovisnosti, uključujući Cypress. Nakon završetka instalacije projekt se može normalno pokrenuti naredbom:


npx cypress open


U slučaju da PowerShell prikaže poruku:


npx.ps1 cannot be loaded because it is not digitally signed


potrebno je koristiti Command Prompt (cmd) ili privremeno omogućiti izvršavanje skripti u PowerShellu.


**Detaljan opis testova nalazi se u datoteci: test_documentation**


