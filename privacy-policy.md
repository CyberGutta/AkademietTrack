**Version:** 1.1     
**Last Updated:** October 7, 2025      
**Effective Date:** October 7, 2025

---
   
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

## Changelog

### Version 1.1
- Lagt til støtte for automatisk backup av data
- Oppdatert informasjon om tredjepartstjenester
- Forbedret beskrivelse av brukerrettigheter under GDPR
- Lagt til informasjon om datasletting

### Version 1.0
- Initial release

---

### 14. Kontakt oss

Hvis du har spørsmål om denne personvernerklæringen eller hvordan vi behandler dine data:

- **E-post:** contact@akademitrack.no
- **GitHub:** [github.com/CyberGutta/AkademiTrack/issues](https://github.com/CyberGutta/AkademiTrack/issues)
- **Responstid:** Vi svarer normalt innen 5 virkedager
  
---

**© 2025 AkademiTrack - Developed by Mathias Hansen & Andreas Nilsen**

*This application is not officially affiliated with Akademiet or iSkole.net*


