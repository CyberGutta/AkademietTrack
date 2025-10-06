# 🔒 Privacy Policy

**AkademiTrack - Automated Study Time Registration**

**Version:** 1.0  
**Last Updated:** October 6, 2025  
**Effective Date:** October 6, 2025

---

## Quick Links
- [🇳🇴 Norsk versjon](#norsk-versjon)
- [🇬🇧 English version](#english-version)

---

## Norsk Versjon

### 1. Hvem vi er

AkademiTrack er en applikasjon utviklet av Mathias Hansen og Andreas Nilsen (heretter kalt "vi", "oss" eller "vårt team") for å automatisere registrering av studietid på iSkole.net for elever ved Akademiet.

**Kontaktinformasjon:**
- **E-post:** contact@akademitrack.no
- **GitHub:** [github.com/CyberGutta/AkademiTrack](https://github.com/CyberGutta/AkademiTrack)
- **Utviklere:** CyberNilsen (Andreas) & CyberHansen (Mathias)

---

### 2. Hvilke personopplysninger samler vi inn?

#### 2.1 Informasjon du gir oss direkte:
- **Feide-brukernavn og passord:** Nødvendig for å logge inn på iSkole.net på dine vegne
- **E-postadresse:** Brukes til brukerkonto og eventuell kommunikasjon
- **Profilinformasjon:** Valgfri informasjon du legger til i profilen din

#### 2.2 Informasjon vi samler automatisk:
- **Studietidsregistreringer:** Dato, starttid, sluttid og kursnavn (STU) for hver automatiske registrering
- **Timeplandata:** Din timeplan hentet fra iSkole.net for å identifisere STU-økter
- **Teknisk informasjon:** Cookies fra iSkole.net, autentiseringsparametere, app-versjonsnummer, operativsystem

#### 2.3 Informasjon lagret lokalt på din enhet:
- **Krypterte påloggingsdetaljer:** Ditt Feide-brukernavn og passord lagres kryptert på din egen datamaskin
- **Cookies og tokens:** Sesjonsinformasjon fra iSkole.net lagres lokalt på din enhet

---

### 3. Hvorfor samler vi inn denne informasjonen?

#### 3.1 Primære formål (nødvendig for tjenesten):
- **Automatisk registrering:** Å logge inn på iSkole.net og registrere studietid på dine vegne
- **Konfliktdeteksjon:** Å sjekke timeplanen din for å unngå registrering når du har andre timer
- **Brukerautentisering:** Å identifisere deg og holde deg innlogget i appen
- **Feilsøking:** Å identifisere og løse tekniske problemer

#### 3.2 Sekundære formål (valgfrie funksjoner):
- **Leaderboard/rangering:** Å vise statistikk over studietid mellom elever (kun hvis du samtykker)
- **Varslingssystem:** Å sende deg meldinger om registreringsstatus
- **App-oppdateringer:** Å informere deg om nye versjoner

---

### 4. Rettslig grunnlag for behandling

Vi behandler dine personopplysninger basert på:

- **Samtykke (GDPR Art. 6(1)(a)):** Du har aktivt valgt å bruke AkademiTrack og gitt oss tillatelse
- **Oppfyllelse av avtale (GDPR Art. 6(1)(b)):** Behandling er nødvendig for å levere tjenesten
- **Legitime interesser (GDPR Art. 6(1)(f)):** Forbedring av appen og feilsøking

Du kan når som helst trekke tilbake ditt samtykke ved å slutte å bruke appen og slette dine data.

---

### 5. Hvordan lagrer og beskytter vi dataene dine?

#### 5.1 Lokal lagring (på din datamaskin):
- **Kryptering:** Passord og brukernavn krypteres med hashing før lagring
- **Lokal kontroll:** Sensitive påloggingsdata lagres KUN på din egen enhet
- **Ingen skylagring av passord:** Vi sender eller lagrer ALDRI ditt Feide-passord på eksterne servere

#### 5.2 Skylagring (Supabase):
- **Hva lagres:** Registreringshistorikk, e-postadresse, profildata, leaderboard-statistikk
- **Hvor:** Supabase (PostgreSQL database)
- **Sikkerhet:** HTTPS-kryptering, Row Level Security (RLS) policies, tilgangskontroll

---

### 6. Hvor lenge oppbevarer vi dataene dine?

| Datatype | Oppbevaringstid | Begrunnelse |
|----------|----------------|-------------|
| Registreringshistorikk | Til skoleåret er over, eller til du sletter kontoen | For å vise historikk og statistikk |
| Brukerprofildata | Til du sletter kontoen din | For å identifisere deg i appen |
| E-postadresse | Til du sletter kontoen din | For kommunikasjon og brukerkonto |
| Lokalt lagrede påloggingsdata | Til du avinstallerer appen eller sletter dataene manuelt | For automatisk innlogging |
| Cookies og tokens | 24-48 timer, eller til du logger ut | For å holde deg innlogget |
| Tekniske loggfiler | Maks 90 dager | For feilsøking og sikkerhet |

**Automatisk sletting:** Vi implementerer automatisk sletting av registreringsdata eldre enn 1 år.

---

### 7. Deling av data med tredjeparter

#### 7.1 Supabase (Database- og autentiseringsleverandør)
- **Hva deles:** E-postadresse, bruker-ID, registreringsdata, profildata
- **Hvorfor:** For å lagre data og håndtere brukerautentisering
- **Hvor:** Supabase sine servere i Sverige (EU-region)
- **Personvernavtale:** Supabase er GDPR-kompatibel og fungerer som databehandler

#### 7.2 iSkole.net (Skolesystem)
- **Hva deles:** Dine Feide-påloggingsdetaljer, timeplanforespørsler, registreringsforespørsler
- **Hvorfor:** For å utføre den primære funksjonen (automatisk registrering)
- **Ansvar:** iSkole.net er dataansvarlig for data i deres system

> **⚠️ Vi selger ALDRI dine data**  
> Vi selger ikke, leier ut eller deler dine personopplysninger med tredjeparter for markedsføringsformål.

---

### 8. Dine rettigheter under GDPR

#### 8.1 Rett til innsyn (Art. 15)
Du kan når som helst be om en kopi av alle personopplysninger vi har om deg.

**Hvordan:** Kontakt oss via e-post, så sender vi deg en komplett rapport innen 30 dager.

#### 8.2 Rett til retting (Art. 16)
Du kan endre eller oppdatere din informasjon.

**Hvordan:**
- E-postadresse: Kan endres i app-innstillingene
- Profildata: Kan redigeres i profilen din
- Feil registreringsdata: Kontakt oss for manuell korreksjon

#### 8.3 Rett til sletting - "Retten til å bli glemt" (Art. 17)
Du kan når som helst be om at alle dine data slettes.

**Hvordan:**
- I appen: Gå til Innstillinger → Slett min konto
- Via e-post: Send forespørsel til oss

**Resultat:**
- All data i Supabase slettes permanent innen 7 dager
- Lokale data på din enhet slettes umiddelbart
- Merk: Data i iSkole.net må slettes via deres system

#### 8.4 Rett til dataportabilitet (Art. 20)
Du kan få dine data i et maskinlesbart format (JSON eller CSV).

**Du mottar:** All registreringshistorikk, profildata, leaderboard-statistikk, tidsstempler og metadata.

#### 8.5 Rett til å begrense behandling (Art. 18)
Du kan be om midlertidig stopp av databehandling.

#### 8.6 Rett til å protestere (Art. 21)
Du kan protestere mot behandling av dine data.

#### 8.7 Rett til å klage
Du har rett til å klage til Datatilsynet hvis du mener vi behandler dine data ulovlig.

**Datatilsynet Norge:**
- **Nettside:** [www.datatilsynet.no](https://www.datatilsynet.no)
- **E-post:** postkasse@datatilsynet.no
- **Telefon:** 22 39 69 00

---

### 9. Bruk av informasjonskapsler (cookies)

#### 9.1 Nødvendige cookies:
- iSkole.net sesjonskapsler: Lagret lokalt for å holde deg innlogget
- Autentiseringstokens: For å kommunikere med iSkole.net API

#### 9.2 Funksjonelle cookies:
- App-innstillinger: Dine preferanser og valg i appen

**Vi bruker IKKE:**
- ❌ Sporings-cookies for analyse
- ❌ Tredjeparts reklamecookies
- ❌ Cookies for profilering eller markedsføring

---

### 10. Automatisert beslutningstaking

AkademiTrack tar automatiske beslutninger om:
- Når registrering skal skje: Basert på timeplanen din og konfliktdeteksjon
- Hvilke STU-økter som skal registreres: Basert på tidsoverlapping med andre timer

**Ingen konsekvenser:** Disse beslutningene har ingen juridiske eller betydelige konsekvenser for deg. Du kan alltid overstyre ved å registrere manuelt på iSkole.net.

---

### 11. Barn og mindreårige

AkademiTrack er primært designet for elever ved Akademiet, inkludert mindreårige (under 18 år).

**For brukere under 18 år:**
- Anbefaler at foreldre/foresatte er informert om bruken
- Ingen spesielle kategorier av persondata samles inn
- Samme personvernbeskyttelse gjelder for alle brukere

**Forelders rettigheter:** Foreldre/foresatte kan be om innsyn, retting eller sletting av sitt barns data ved å kontakte oss.

---

### 12. Databrudd og sikkerhet

#### 12.1 Hva gjør vi ved databrudd?
- Vi varsler Datatilsynet innen 72 timer (som GDPR krever)
- Vi varsler deg direkte hvis bruddet har høy risiko for deg
- Vi iverksetter tiltak for å begrense skaden

#### 12.2 Sikkerhetstiltak:
- ✅ Kryptering av sensitive data (hashing av passord)
- ✅ HTTPS for all nettverkskommunikasjon
- ✅ Supabase Row Level Security (RLS)
- ✅ Regelmessige sikkerhetsoppdateringer via Velopack
- ✅ Lokal lagring av påloggingsdata (ikke skybasert)

---

### 13. Endringer i personvernerklæringen

**Ved vesentlige endringer:**
- Vi varsler deg via app-notifikasjon
- Vi sender e-post til registrerte brukere
- Den nye versjonen trer i kraft 30 dager etter varsling

**Ved mindre endringer:**
- Vi oppdaterer "Sist oppdatert" datoen
- Endringer trer i kraft umiddelbart

**Din rett:** Hvis du ikke godtar endringene, kan du slette kontoen din.

---

### 14. Kontakt oss

Hvis du har spørsmål om denne personvernerklæringen eller hvordan vi behandler dine data:

- **E-post:** contact@akademitrack.no
- **GitHub:** [github.com/CyberGutta/AkademiTrack/issues](https://github.com/CyberGutta/AkademiTrack/issues)
- **Responstid:** Vi svarer normalt innen 5 virkedager

---

## English Version

### 1. Who We Are

AkademiTrack is an application developed by Mathias Hansen and Andreas Nilsen (hereinafter referred to as "we", "us" or "our team") to automate study time registration on iSkole.net for students at Akademiet.

**Contact Information:**
- **Email:** contact@akademitrack.no
- **GitHub:** [github.com/CyberGutta/AkademiTrack](https://github.com/CyberGutta/AkademiTrack)
- **Developers:** CyberNilsen (Andreas) & CyberHansen (Mathias)

---

### 2. What Personal Information Do We Collect?

#### 2.1 Information You Provide Directly:
- **Feide username and password:** Required to log into iSkole.net on your behalf
- **Email address:** Used for user account and communication
- **Profile information:** Optional information you add to your profile

#### 2.2 Information We Collect Automatically:
- **Study time registrations:** Date, start time, end time, and course name (STU) for each automatic registration
- **Schedule data:** Your schedule retrieved from iSkole.net to identify STU sessions
- **Technical information:** Cookies from iSkole.net, authentication parameters, app version number, operating system

#### 2.3 Information Stored Locally on Your Device:
- **Encrypted login credentials:** Your Feide username and password are stored encrypted on your own computer
- **Cookies and tokens:** Session information from iSkole.net is stored locally on your device

---

### 3. Why Do We Collect This Information?

#### 3.1 Primary Purposes (necessary for the service):
- **Automatic registration:** To log into iSkole.net and register study time on your behalf
- **Conflict detection:** To check your schedule to avoid registration when you have other classes
- **User authentication:** To identify you and keep you logged into the app
- **Troubleshooting:** To identify and resolve technical issues

#### 3.2 Secondary Purposes (optional features):
- **Leaderboard/ranking:** To show statistics on study time between students (only with your consent)
- **Notification system:** To send you messages about registration status
- **App updates:** To inform you about new versions

---

### 4. Legal Basis for Processing

We process your personal data based on:

- **Consent (GDPR Art. 6(1)(a)):** You have actively chosen to use AkademiTrack and given us permission
- **Performance of contract (GDPR Art. 6(1)(b)):** Processing is necessary to deliver the service
- **Legitimate interests (GDPR Art. 6(1)(f)):** App improvement and troubleshooting

You can withdraw your consent at any time by stopping using the app and deleting your data.

---

### 5. How Do We Store and Protect Your Data?

#### 5.1 Local Storage (on your computer):
- **Encryption:** Passwords and usernames are encrypted with hashing before storage
- **Local control:** Sensitive login data is stored ONLY on your own device
- **No cloud storage of passwords:** We NEVER send or store your Feide password on external servers

#### 5.2 Cloud Storage (Supabase):
- **What is stored:** Registration history, email address, profile data, leaderboard statistics
- **Where:** Supabase (PostgreSQL database)
- **Security:** HTTPS encryption, Row Level Security (RLS) policies, access control

---

### 6. How Long Do We Keep Your Data?

| Data Type | Retention Period | Reason |
|-----------|------------------|--------|
| Registration history | Until the school year ends, or until you delete your account | To display history and statistics |
| User profile data | Until you delete your account | To identify you in the app |
| Email address | Until you delete your account | For communication and user account |
| Locally stored login data | Until you uninstall the app or delete the data manually | For automatic login |
| Cookies and tokens | 24-48 hours, or until you log out | To keep you logged in |
| Technical log files | Maximum 90 days | For troubleshooting and security |

**Automatic deletion:** We implement automatic deletion of registration data older than 1 year.

---

### 7. Sharing Data with Third Parties

#### 7.1 Supabase (Database and Authentication Provider)
- **What is shared:** Email address, user ID, registration data, profile data
- **Why:** To store data and handle user authentication
- **Where:** Supabase servers in Sweden (EU region)
- **Privacy agreement:** Supabase is GDPR compliant and functions as a data processor

#### 7.2 iSkole.net (School System)
- **What is shared:** Your Feide login credentials, schedule requests, registration requests
- **Why:** To perform the primary function (automatic registration)
- **Responsibility:** iSkole.net is the data controller for data in their system

> **⚠️ We NEVER sell your data**  
> We do not sell, rent, or share your personal information with third parties for marketing purposes.

---

### 8. Your Rights Under GDPR

#### 8.1 Right to Access (Art. 15)
You can request a copy of all personal information we have about you at any time.

**How:** Contact us via email, and we will send you a complete report within 30 days.

#### 8.2 Right to Rectification (Art. 16)
You can change or update your information.

**How:**
- Email address: Can be changed in app settings
- Profile data: Can be edited in your profile
- Incorrect registration data: Contact us for manual correction

#### 8.3 Right to Erasure - "Right to be Forgotten" (Art. 17)
You can request that all your data be deleted at any time.

**How:**
- In the app: Go to Settings → Delete my account
- Via email: Send a request to us

**Result:**
- All data in Supabase is permanently deleted within 7 days
- Local data on your device is deleted immediately
- Note: Data in iSkole.net must be deleted through their system

#### 8.4 Right to Data Portability (Art. 20)
You can receive your data in a machine-readable format (JSON or CSV).

**You will receive:** All registration history, profile data, leaderboard statistics, timestamps and metadata.

#### 8.5 Right to Restrict Processing (Art. 18)
You can request a temporary suspension of data processing.

#### 8.6 Right to Object (Art. 21)
You can object to the processing of your data.

#### 8.7 Right to Complain
You have the right to file a complaint with the Norwegian Data Protection Authority if you believe we are processing your data unlawfully.

**Norwegian Data Protection Authority (Datatilsynet):**
- **Website:** [www.datatilsynet.no](https://www.datatilsynet.no)
- **Email:** postkasse@datatilsynet.no
- **Phone:** +47 22 39 69 00

---

### 9. Use of Cookies

#### 9.1 Necessary cookies:
- iSkole.net session cookies: Stored locally to keep you logged in
- Authentication tokens: To communicate with iSkole.net API

#### 9.2 Functional cookies:
- App settings: Your preferences and choices in the app

**We do NOT use:**
- ❌ Tracking cookies for analytics
- ❌ Third-party advertising cookies
- ❌ Cookies for profiling or marketing

---

### 10. Automated Decision-Making

AkademiTrack makes automatic decisions about:
- When registration should occur: Based on your schedule and conflict detection
- Which STU sessions should be registered: Based on time overlap with other classes

**No consequences:** These decisions have no legal or significant consequences for you. You can always override by registering manually on iSkole.net.

---

### 11. Children and Minors

AkademiTrack is primarily designed for students at Akademiet, including minors (under 18 years).

**For users under 18:**
- We recommend that parents/guardians are informed about the use
- No special categories of personal data are collected
- The same privacy protection applies to all users

**Parental rights:** Parents/guardians can request access, correction, or deletion of their child's data by contacting us.

---

### 12. Data Breaches and Security

#### 12.1 What do we do in case of a data breach?
- We notify the Data Protection Authority within 72 hours (as required by GDPR)
- We notify you directly if the breach poses a high risk to you
- We implement measures to limit the damage

#### 12.2 Security measures:
- ✅ Encryption of sensitive data (password hashing)
- ✅ HTTPS for all network communication
- ✅ Supabase Row Level Security (RLS)
- ✅ Regular security updates via Velopack
- ✅ Local storage of login data (not cloud-based)

---

### 13. Changes to the Privacy Policy

**For significant changes:**
- We will notify you via app notification
- We will send an email to registered users
- The new version takes effect 30 days after notification

**For minor changes:**
- We update the "Last updated" date
- Changes take effect immediately

**Your right:** If you do not accept the changes, you can delete your account.

---

### 14. Contact Us

If you have questions about this privacy policy or how we process your data:

- **Email:** contact@akademitrack.no
- **GitHub:** [github.com/CyberGutta/AkademiTrack/issues](https://github.com/CyberGutta/AkademiTrack/issues)
- **Response time:** We typically respond within 5 business days

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | October 6, 2025 | Initial release |

---

**© 2025 AkademiTrack - Developed by Mathias Hansen & Andreas Nilsen**

*This application is not officially affiliated with Akademiet or iSkole.net*
