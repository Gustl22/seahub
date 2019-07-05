

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%curr% of %total%": "%curr% van %total%", 
    "(current version)": "(huidige versie)", 
    "1 month ago": "1 maand geleden", 
    "1 week ago": "1 week geleden", 
    "3 days ago": "3 dagen geleden", 
    "<a href=\"%url%\" target=\"_blank\">The image</a> could not be loaded.": "<a href=\"%url%\" target=\"_blank\">De afbeelding</a> kon niet worden geladen.", 
    "A file with the same name already exists in this folder.": "Een bestand met deze naam bestaat reeds in deze map.", 
    "About": "Over", 
    "About Us": "Over ons", 
    "Accepted": "Geaccepteerd", 
    "Access Log": "Toegangslogboek", 
    "Action": "Actie", 
    "Actions": "Acties", 
    "Active": "Actief", 
    "Active Users": "Actieve gebruikers", 
    "Activities": "Activiteiten", 
    "Add Admins": "Admins toevoegen", 
    "Add Library": "Voeg bibliotheek toe", 
    "Add Member": "Lid toevoegen", 
    "Add User": "Gebruiker toevoegen", 
    "Add admin": "Voeg beheerder toe", 
    "Add auto expiration": "Voeg automatische vervaldatum toe", 
    "Add password protection": "Wachtwoord beveiliging toevoegen", 
    "Add user": "Voeg nieuwe gebruiker toe", 
    "Added user {user}": "Gebruiker {user} toegevoegd", 
    "Admin": "Admin", 
    "All": "Alle", 
    "All Groups": "Alle groepen", 
    "All Public Links": "Alle Openbare Linken", 
    "All file types": "All bestandstypen", 
    "Anonymous User": "Anonieme gebruiker", 
    "Are you sure you want to clear trash?": "Weet je zeker dat je de prullenbak wilt legen?", 
    "Are you sure you want to delete %s ?": "Weet je zeker dat je %s wilt verwijderen?", 
    "Are you sure you want to delete %s completely?": "Weet je zeker dat je %s volledig wilt verwijderen?", 
    "Are you sure you want to delete all %s's libraries?": "Weet je zeker dat al %s's bibliotheken wilt verwijderen?", 
    "Are you sure you want to delete these selected items?": "Weet je zeker dat je deze items wilt verwijderen?", 
    "Are you sure you want to quit this group?": "Weet je zeker dat je deze groep wil verlaten?", 
    "Are you sure you want to restore %s?": "Weet je zeker dat je %s wilt herstellen?", 
    "Are you sure you want to restore this library?": "Weet je zeker dat je deze bibliotheek wil terughalen?", 
    "Are you sure you want to unlink this device?": "Weet je zeker dat je dit apparaat wilt ontkoppelen?", 
    "Are you sure you want to unshare %s ?": "Weet u zeker dat u wilt stoppen met het delen van %s ? ", 
    "Audio": "Audio", 
    "Avatar": "Avatar", 
    "Avatar:": "Avatar:", 
    "Back": "Terug", 
    "Broken (please contact your administrator to fix this library)": "Defect (neem contact op met je systeembeheerder om deze bibliotheek te repareren)", 
    "Can not copy directory %(src)s to its subdirectory %(des)s": "Kan map %(src)s niet kopi\u00ebren naar haar onderliggende map %(des)s", 
    "Can not move directory %(src)s to its subdirectory %(des)s": "Kan map %(src)s niet verplaatsen naar haar onderliggende map %(des)s", 
    "Cancel": "Annuleren", 
    "Cancel All": "Alles annuleren", 
    "Canceled.": "Geannuleerd.", 
    "Change Password": "Wijzig het wachtwoord", 
    "Change Password of Library {placeholder}": "Wijzig wachtwoord van bibliotheek {placeholder}", 
    "Clean": "Opschonen", 
    "Clear Trash": "Prullenbak legen", 
    "Clear files in trash and history\uff1a": "Schoon bestanden in prullenbak en geschiedenis:", 
    "Clients": "Clients", 
    "Close": "Sluiten", 
    "Close (Esc)": "Sluiten (Esc)", 
    "Comment": "Opmerking", 
    "Comments": "Opmerkingen", 
    "Confirm Password": "Bevestig Wachtwoord", 
    "Contact Email:": "Contact e-mail:", 
    "Copy": "Kopi\u00ebren ", 
    "Copy selected item(s) to:": "Geselecteerde item(s) kopi\u00ebren naar:", 
    "Copy {placeholder} to:": "Kopieer {placeholder} naar:", 
    "Copying %(name)s": "Kopieren van %(name)s", 
    "Copying file %(index)s of %(total)s": "Kopieren van bestand %(index)s van %(total)s", 
    "Count": "Teller", 
    "Create At / Last Login": "Gemaakt op / Laatste login", 
    "Create Group": "Groep aanmaken", 
    "Create Library": "Bibliotheek aanmaken", 
    "Created At": "Gemaakt om", 
    "Created library": "Bibliotheek aangemaakt", 
    "Creator": "Maker", 
    "Current Library": "Huidige bibliotheek", 
    "Current Path: ": "Huidig pad:", 
    "Current Version": "Huidige versie", 
    "Current path: ": "Huidig pad:", 
    "Custom file types": "Speciale bestandstypes", 
    "Date": "Datum", 
    "Delete": "Verwijderen", 
    "Delete Account": "Account verwijderen", 
    "Delete Group": "Groep verwijderen", 
    "Delete Items": "Items verwijderen", 
    "Delete Library": "Bibliotheek verwijderen", 
    "Delete Library By Owner": "Verwijder Bibliotheek Per Eigenaar", 
    "Delete Member": "Lid verwijderen", 
    "Delete Time": "Tijdstip verwijderen", 
    "Delete User": "Gebruiker verwijderen", 
    "Delete failed": "Verwijderen mislukt", 
    "Delete files from this device the next time it comes online.": "Verwijder bestanden van dit apparaat op het moment dat deze weer online komt.", 
    "Deleted Time": "Tijdstip verwijderd", 
    "Deleted directories": "Verwijderde mappen", 
    "Deleted files": "Verwijderde bestanden", 
    "Deleted group {group_name}": "Groep {group_name} verwijderd", 
    "Deleted library": "Verwijderde bibliotheek", 
    "Deleted library {library_name}": "Bibliotheek {library_name} verwijderd", 
    "Deleted user {user}": "Gebruiker {user} verwijderd", 
    "Departments": "Afdelingen", 
    "Description": "Beschrijving", 
    "Detail": "Detailweergave", 
    "Details": "Details", 
    "Device": "Apparaat", 
    "Device Name": "Apparaatnaam", 
    "Devices": "Apparaten", 
    "Diff": "Verschil", 
    "Directory": "Map", 
    "Disable Two-Factor Authentication": "Tweestapsauthenticatie uitschakelen", 
    "Dismiss Group": "Sluit groep", 
    "Document convertion failed.": "Document conversie mislukt.", 
    "Documents": "Documenten", 
    "Don't keep history": "Bewaar geschiedenis niet", 
    "Don't replace": "Niet vervangen", 
    "Download": "Downloaden", 
    "Edit": "Aanpassen", 
    "Edit failed": "Bewerken mislukt", 
    "Edit failed.": "Wijzigen mislukt", 
    "Email": "E-mail", 
    "Empty file upload result": "Leeg bestand getracht te uploaden", 
    "Enable Two-Factor Authentication": "Tweestapsauthenticatie inschakelen", 
    "Encrypt": "Versleutel", 
    "Encrypted library": "Versleutelde bibliotheek", 
    "Error": "Fout", 
    "Expiration": "Vervaldatum", 
    "Expired": "Verlopen", 
    "Failed to copy %(name)s": "Kon %(name)s niet kopi\u00ebren", 
    "Failed to delete %(name)s and %(amount)s other items.": "Kon %(name)s en %(amount)s andere items niet verwijderen.", 
    "Failed to delete %(name)s and 1 other item.": "Kon %(name)s en 1 ander item niet verwijderen.", 
    "Failed to delete %(name)s.": "Kon %(name)s niet verwijderen.", 
    "Failed to move %(name)s": "Kon %(name)s niet verplaatsen", 
    "Failed to send to {placeholder}": "Kon niet naar {placeholder} versturen", 
    "Failed.": "Mislukt.", 
    "Failed. Please check the network.": "Mislukt. Controleer de netwerkverbinding.", 
    "Favorites": "Favorieten", 
    "File": "Bestand", 
    "File Name": "Bestandsnaam", 
    "File Upload": "Bestandsupload", 
    "File Upload canceled": "Bestandsupload geannuleerd", 
    "File Upload complete": "Bestandsupload voltooid", 
    "File Upload failed": "Bestandsupload mislukt", 
    "File Uploading...": "Bestand uploaden...", 
    "File download is disabled: the share link traffic of owner is used up.": "Download is niet mogelijk: de limiet voor verkeer van bestanden delen is overschreden.", 
    "File is locked": "Bestand is vergrendeld", 
    "File is too big": "Bestand is te groot", 
    "File is too small": "Bestand is te klein", 
    "Files": "Bestanden", 
    "Filetype not allowed": "Bestandstype niet toegestaan", 
    "Folder": "Map", 
    "Folder Permission": "Map toegangsrechten", 
    "Folders": "Mappen", 
    "Generate": "Genereer", 
    "Grid": "Raster", 
    "Group": "Groep", 
    "Group Permission": "Groepsrechten", 
    "Groups": "Groepen", 
    "Help": "Help", 
    "Hide": "Verbergen", 
    "History": "Geschiedenis", 
    "History Setting": "Geschiedenis-instellingen", 
    "IP": "IP", 
    "Image": "Afbeelding", 
    "Images": "Afbeeldingen", 
    "In all libraries": "In alle bibliotheken", 
    "Inactive": "Inactief", 
    "Info": "Informatie", 
    "Input file extensions here, separate with ','": "Vul hier bestands extensies in, gescheiden door ','", 
    "Institutions": "Organisaties", 
    "Internal Server Error": "Interne Server Fout", 
    "Internal error. Failed to copy %(name)s and %(amount)s other item(s).": "Interne fout. Kon %(name)s en %(amount)s andere item(s) niet kopi\u00ebren.", 
    "Internal error. Failed to copy %(name)s.": "Interne fout. Kon %(name)s niet kopi\u00ebren.", 
    "Internal error. Failed to move %(name)s and %(amount)s other item(s).": "Interne fout. Kon %(name)s en %(amount)s andere item(s) niet verplaatsen.", 
    "Internal error. Failed to move %(name)s.": "Interne fout. Kon %(name)s niet verplaatsen.", 
    "Invalid destination path": "Ongeldig bestandspad bestemming", 
    "Invitations": "Uitnodigingen", 
    "Invite People": "Personen uitnodigen", 
    "Invite Time": "Tijdstip uitnodiging", 
    "It is required.": "Het is verplicht.", 
    "Just now": "Zojuist", 
    "Keep full history": "Bewaar volledige geschiedenis", 
    "Language": "Taal", 
    "Language Setting": "Taalinstelling", 
    "Last Access": "Laatst gesynchroniseerd", 
    "Last Update": "Laatste wijziging", 
    "Leave Share": "Gedeelde folder verlaten", 
    "Libraries": "Bibliotheken", 
    "Libraries shared as writable can be downloaded and synced by other group members. Read only libraries can only be downloaded, updates by others will not be uploaded.": "Bibliotheken gedeeld als schrijfbaar kunnen worden gedownload door andere groep leden. Alleen-lezen bibliotheken kunnen alleen worden gedownload, maar wijzigingen door anderen kunnen niet worden geupload.", 
    "Library": "Bibliotheek", 
    "Library Type": "Soort bibliotheek", 
    "Limits": "Limieten", 
    "Link": "Link", 
    "Linked Devices": "Gekoppelde apparaten", 
    "Links": "Links", 
    "List": "Lijst", 
    "Loading failed": "Ophalen mislukt", 
    "Loading...": "Laden...", 
    "Location": "Locatie", 
    "Lock": "Slot", 
    "Log in": "Aanmelden", 
    "Log out": "Uitloggen", 
    "Logs": "Logbestanden", 
    "Manage Members": "Leden beheren", 
    "Member": "Lid", 
    "Members": "Leden", 
    "Message (optional):": "Bericht (optioneel):", 
    "Modification Details": "Wijzigingdetails", 
    "Modified files": "Gewijzigde bestanden", 
    "Modifier": "Wijziger", 
    "More": "Meer", 
    "More Operations": "Meer handelingen", 
    "Move": "Verplaatsen", 
    "Move selected item(s) to:": "Geselecteerde item(s) verplaatsen naar:", 
    "Move {placeholder} to:": "Verplaats {placeholder} naar:", 
    "Moving %(name)s": "Verplaatsen van %(name)s", 
    "Moving file %(index)s of %(total)s": "Verplaatsen van bestand %(index)s van %(total)s", 
    "My Groups": "Mijn groepen", 
    "My Libraries": "Mijn bibliotheken", 
    "Name": "Naam", 
    "Name is required": "Naam is verplicht", 
    "Name is required.": "Naam is vereist.", 
    "Name should not include '/'.": "Naam mag geen '/' bevatten.", 
    "Network error": "Netwerkfout", 
    "New": "Nieuw", 
    "New Excel File": "Nieuw Excelbestand", 
    "New File": "Nieuw bestand", 
    "New Folder": "Nieuwe map", 
    "New Group": "Nieuwe groep", 
    "New Library": "Nieuwe Bibliotheek", 
    "New Password": "Nieuw wachtwoord", 
    "New Password Again": "Nieuwe wachtwoord nogmaals", 
    "New PowerPoint File": "Nieuw PowerPoint-bestand", 
    "New Wiki": "Nieuwe Wiki", 
    "New Word File": "Nieuw Word-bestand", 
    "New directories": "Nieuwe mappen", 
    "New files": "Nieuwe bestanden", 
    "New password is too short": "Nieuwe wachtwoord is te kort", 
    "New passwords don't match": "Nieuwe wachtwoorden komen niet overeen", 
    "Next": "Volgende", 
    "Next (Right arrow key)": "Volgende (rechter pijltjestoets)", 
    "No comment yet.": "Nog geen opmerkingen.", 
    "No departments": "Geen afdelingen", 
    "No libraries": "Geen bibliotheken", 
    "No library is shared to this group": "Er is geen bibliotheek gedeeld naar deze groep", 
    "No matches": "Niet gevonden", 
    "No members": "Geen leden", 
    "No public libraries": "Geen publieke bibliotheken", 
    "No result": "Geen resultaat", 
    "None": "Geen", 
    "Notifications": "Meldingen", 
    "Old Password": "Oude wachtwoord", 
    "Only an extension there, please input a name.": "Alleen een extensie, voer een naam in.", 
    "Only keep a period of history:": "Bewaar alleen geschiedenis over been bepaalde periode:", 
    "Open in New Tab": "Open in nieuw tabblad", 
    "Open via Client": "Openen via programma", 
    "Operations": "Handelingen", 
    "Organization": "Organisatie", 
    "Organization Admin": "Organisatiebeheerder", 
    "Organizations": "Organisaties", 
    "Other Libraries": "Andere bibliotheken", 
    "Owner": "Eigenaar", 
    "Packaging...": "Aan het inpakken...", 
    "Password": "Wachtwoord", 
    "Password again": "Wachtwoord nogmaals", 
    "Password is required.": "Wachtwoord is verplicht.", 
    "Password is too short": "Wachtwoord is te kort", 
    "Password:": "Wachtwoord:", 
    "Passwords don't match": "Wachtwoorden komen niet overeen", 
    "Permission": "Toegangsrechten", 
    "Permission denied": "Permissie geweigerd", 
    "Permission error": "Rechtenprobleem", 
    "Platform": "Platform", 
    "Please check the network.": "Controleer de netwerkverbinding.", 
    "Please choose a CSV file": "Kies aub eerst een CSV bestand", 
    "Please click and choose a directory.": "Klik en selecteer een map.", 
    "Please enter 1 or more character": "Voer 1 of meer tekens in.", 
    "Please enter a new password": "Geef het nieuwe wachtwoord op", 
    "Please enter days.": "Geef dagen op.", 
    "Please enter password": "Voer wachtwoord in", 
    "Please enter the new password again": "Gelieve het wachtwoord opnieuw in te voeren", 
    "Please enter the old password": "Geeft het oude wachtwoord op", 
    "Please enter the password again": "Gelieve het wachtwoord opnieuw in te voeren", 
    "Please enter valid days": "Geef geldige dagen op", 
    "Please input at least an email.": "Voer minimaal een e-mailadres in.", 
    "Previous": "Vorige", 
    "Previous (Left arrow key)": "Vorige (linker pijltjestoets)", 
    "Processing...": "In behandeling...", 
    "Profile": "Profiel", 
    "Profile Setting": "Profielinstelling", 
    "Quit Group": "Verlaat Groep", 
    "Read-Only": "Alleen lezen", 
    "Read-Only library": "Alleen-lezen bibliotheek", 
    "Read-Write": "Lezen/schrijven", 
    "Read-Write library": "Lees-Schrijf bibliotheek", 
    "Really want to delete your account?": "Wil je je account echt verwijderen?", 
    "Really want to dismiss this group?": "Groep echt sluiten?", 
    "Refresh": "Vernieuwen", 
    "Remove": "Verwijderen", 
    "Rename": "Hernoem", 
    "Rename File": "Bestand hernoemen", 
    "Rename Folder": "Map hernoemen", 
    "Renamed or Moved files": "Hernoemde of verplaatste bestanden", 
    "Replace": "Vervangen", 
    "Replace file {filename}?": "Bestand {filename} vervangen?", 
    "Replacing it will overwrite its content.": "Vervanging zal huidige inhoud overschrijven.", 
    "Reset Password": "Wachtwoord reset", 
    "ResetPwd": "ResetPwd", 
    "Restore": "Terughalen", 
    "Restore Library": "Bibliotheek herstellen", 
    "Revoke Admin": "Intrekken Admin", 
    "Role": "Rol", 
    "Saving...": "Opslaan...", 
    "Seafile": "Seafile", 
    "Search Files": "Zoek Bestanden", 
    "Search files in this library": "Zoek bestanden in deze bibliotheek", 
    "Search groups": "Zoek groepen", 
    "Search user or enter email and press Enter": "Zoek gebruiker of voer email in en druk op Enter", 
    "Search users or enter emails and press Enter": "Zoek gebruikers of voer emailadressen in en druk op Enter", 
    "Searching...": "Zoeken...", 
    "See All Notifications": "Bekijk alle meldingen", 
    "Select a group": "Selecteer een groep", 
    "Select groups": "Selecteer groepen", 
    "Select libraries to share": "Selecteer bibliotheken om te delen", 
    "Send": "Verzend", 
    "Send to:": "Verzend naar:", 
    "Sending...": "Verzenden...", 
    "Server Version: ": "Serverversie: ", 
    "Set Quota": "Quota instellen", 
    "Set {placeholder}'s permission": "Stel rechten van {placeholder} in", 
    "Settings": "Instellingen", 
    "Share": "Delen", 
    "Share Admin": "Delen beheer", 
    "Share From": "Delen Van", 
    "Share Links": "Gedeelde links", 
    "Share To": "Delen met", 
    "Share existing libraries": "Deel bestaande bibliotheken", 
    "Share to group": "Delen met een groep", 
    "Share to user": "Delen met gebruiker", 
    "Share {placeholder}": "{placeholder} delen", 
    "Shared by: ": "Gedeeld door:", 
    "Shared with all": "Gedeeld met iedereen", 
    "Shared with groups": "Gedeeld met groepen", 
    "Shared with me": "Gedeeld met mij", 
    "Show": "Toon", 
    "Show Codes": "Codes tonen", 
    "Size": "Grootte", 
    "Sort:": "Sortering:", 
    "Space Used": "Ruimte Gebruikt", 
    "Start": "Start", 
    "Status": "Status", 
    "Submit": "Verzenden", 
    "Success": "Gelukt", 
    "Successfully changed library password.": "Succesvolle wijziging van wachtwoord bibliotheek", 
    "Successfully clean all errors.": "Verwijderen van foutmeldingen gelukt.", 
    "Successfully copied %(name)s": "Succesvolle kopie van %(name)s", 
    "Successfully copied %(name)s and %(amount)s other items.": "Kopi\u00ebren van %(name)s en %(amount)s andere items gelukt.", 
    "Successfully copied %(name)s and 1 other item.": "Kopi\u00ebren van %(name)s en 1 ander item gelukt.", 
    "Successfully copied %(name)s.": "Kopi\u00ebren van %(name)s gelukt.", 
    "Successfully deleted %(name)s": "Verwijderen van %(name)s gelukt", 
    "Successfully deleted %(name)s and %(amount)s other items.": "Verwijderen %(name)s en %(amount)s andere items gelukt", 
    "Successfully deleted %(name)s and 1 other item.": "Verwijderen %(name)s en 1 ander item gelukt.", 
    "Successfully deleted %(name)s.": "Verwijderen %(name)s gelukt.", 
    "Successfully deleted %s": "%s verwijderd.", 
    "Successfully deleted 1 item": "Succesvol 1 item verwijderd.", 
    "Successfully deleted 1 item.": "Succesvol 1 item verwijderd.", 
    "Successfully deleted.": "Succesvol verwijderd.", 
    "Successfully imported.": "Succesvol ge\u00efmporteerd", 
    "Successfully modified permission": "Rechten succesvol gewijzigd", 
    "Successfully moved %(name)s": "Succesvolle verplaatsing van %(name)s.", 
    "Successfully moved %(name)s and %(amount)s other items.": "Verplaatsen van %(name)s en %(amount)s andere items gelukt.", 
    "Successfully moved %(name)s and 1 other item.": "Verplaatsen van %(name)s en 1 ander item gelukt.", 
    "Successfully moved %(name)s.": "Verplaatsen van %(name)s gelukt.", 
    "Successfully reset password to %(passwd)s for user %(user)s.": "Succesvolle reset wachtwoord naar %(passwd)s voor gebruiker %(user)s.", 
    "Successfully revoke the admin permission of %s": "Adminrechten van %s succesvol ingetrokken", 
    "Successfully sent to {placeholder}": "Versturen naar {placeholder} gelukt", 
    "Successfully set %s as admin.": "%s succesvol ingesteld als admin.", 
    "Successfully set library history.": "Bibliotheekgeschiedenis instellen gelukt.", 
    "Successfully transferred the group.": "Groep succesvol overgedragen", 
    "Successfully transferred the group. You are now a normal member of the group.": "Groep succesvol overgedragen. Je bent nu slechts gewoon lid van de groep.", 
    "Successfully transferred the library.": "Verplaatsen van de bibliotheek is gelukt.", 
    "Successfully unlink %(name)s.": "Succesvol ontkoppeld %(name)s.", 
    "Successfully unshared 1 item.": "Delen succesvol ongedaan gemaakt voor 1 item.", 
    "Successfully unstared {placeholder}": "Ster van {placeholder} verwijderd", 
    "System Admin": "Systeembeheerder", 
    "Terms and Conditions": "Voorwaarden", 
    "Text": "Tekst", 
    "Text files": "Tekstbestanden", 
    "The password will be kept in the server for only 1 hour.": "Het wachtwoord wordt maar 1 uur op de server bewaard.", 
    "This library is password protected": "Deze bibliotheek is beveiligd met een wachtwoord", 
    "This operation will not be reverted. Please think twice!": "Deze handeling kan niet ongedaan gemaakt worden", 
    "Time": "Tijd:", 
    "Tip: a snapshot will be generated after modification, which records the library state after the modification.": "Tip: Er wordt na iedere wijziging een momentopname gegenereerd, die de status van de bibliotheek na de wijziging opslaat.", 
    "Tip: libraries deleted 30 days ago will be cleaned automatically.": "Tip: Bibliotheken die 30 dagen geleden zijn verwijderd, worden automatisch opgeruimd.", 
    "Tools": "Hulpmiddelen", 
    "Total Users": "Totaal aantal gebruikers", 
    "Transfer": "Overzetten", 
    "Transfer Group": "Groep overzetten", 
    "Transfer Group {group_name} To": "Draag groep {group_name} over naar", 
    "Transfer Library": "Bibliotheek overzetten", 
    "Transfer Library {library_name} To": "Verplaats bibliotheek {library_name} naar", 
    "Transferred group {group_name} from {user_from} to {user_to}": "Groep {group_name} van {user_from} naar {user_to} overgezet", 
    "Transferred library {library_name} from {user_from} to {user_to}": "Bibliotheek {library_name} van {user_from} naar {user_to} overgezet", 
    "Trash": "Prullenbak", 
    "Two-Factor Authentication": "Tweestapsauthenticatie", 
    "Two-factor authentication is not enabled for your account. Enable two-factor authentication for enhanced account security.": "Tweestapsauthenticatie is niet ingeschakeld voor je account. Schakel tweestapsauthenticatie in voor uitgebreide accountbeveiliging.", 
    "Type": "Type", 
    "Unknown": "Onbekend", 
    "Unlink": "Ontkoppelen", 
    "Unlink device": "Apparaat ontkoppelen", 
    "Unlock": "Deblokkeer", 
    "Unshare": "Delen intrekken", 
    "Unshare Library": "Delen ongedaan maken", 
    "Unstar": "Ongedaan maken van favoriet", 
    "Update": "Bijwerken", 
    "Upload": "Upload", 
    "Upload Files": "Bestanden Uploaden", 
    "Upload Folder": "Map uploaden", 
    "Upload Link": "Upload Link", 
    "Upload Links": "Uploadlinks", 
    "Uploaded bytes exceed file size": "Ge\u00fcploadde bytes overtreft bestandsgrootte", 
    "Used:": "Gebruikt:", 
    "User": "Gebruiker", 
    "User Permission": "Gebruikersrechten", 
    "Username:": "Gebruikersnaam:", 
    "Users": "Gebruikers", 
    "Version": "Versie", 
    "Video": "Video", 
    "View": "Bekijken", 
    "View Snapshot": "Bekijk Snapshot", 
    "Virus Scan": "Virusscan", 
    "Visits": "Bezoeken", 
    "Wrong password": "Verkeerd wachtwoord", 
    "You are not in any groups": "Je bent niet lid van een groep.", 
    "You can create a library to organize your files. For example, you can create one for each of your projects. Each library can be synchronized and shared separately.": "Je kan een bibliotheek maken om je mappen te organiseren. Bijvoorbeeld, je kan er  een voor elk van je projecten maken. Elke bibliotheek kan apart gescynchroniseerd en gedeeld worden.", 
    "You can only select 1 item": "Je kunt maar 1 onderdeel selecteren", 
    "You can share a single folder with a registered user if you don't want to share a whole library.": "Je kan een enkel bestand delen met een geregistreerde gebruiker als niet een hele  bibliotheek wil delen.", 
    "You can share libraries by clicking the \"New Library\" button above or the \"Share\" icon on your libraries list.": "Je kunt bibliotheken delen door te klikken op \"Nieuwe Bibliotheek\" knop of het \"Deel\" icoon in je bibliotheken lijst", 
    "You can use this field at login.": "Je kunt dit veld tijdens het aanmelden gebruiken", 
    "You cannot select any more choices": "Je kunt niet meer opties selecteren", 
    "You do not have connected devices": "U heeft geen clients verbonden", 
    "You have logged out.": "Je bent afgemeld.", 
    "You have not created any libraries": "Je hebt nog geen bibliotheken gemaakt", 
    "You have not invited any people.": "Je hebt niemand uitgenodigd.", 
    "You have not shared any folders": "Je hebt geen mappen gedeeld", 
    "Your clients (Desktop/Android/iOS) will be listed here.": "Al uw client-apparatuur (Desktop/Android/iOS) wordt hier getoond.", 
    "Your notifications will be sent to this email.": "Je meldingen zullen naar dit e-mailadres worden verzonden.", 
    "all": "alle", 
    "all members": "alle leden", 
    "canceled": "geannuleerd", 
    "days": "dagen", 
    "file": "bestand", 
    "icon": "icoon", 
    "last update": "laatste wijziging", 
    "locked": "Geblokkeerd", 
    "locked by {placeholder}": "vergrendeld door {placeholder}", 
    "name": "naam", 
    "starred": "favoriet", 
    "to": "naar", 
    "unstarred": "geen favoriet", 
    "uploaded": "ge\u00fcpload", 
    "you can also press \u2190 ": "je kan ook drukken op...", 
    "{placeholder} Folder Permission": "{placeholder} Map toegangsrechten", 
    "{placeholder} History Setting": "{placeholder} Geschiedenis instellingen", 
    "{placeholder} Members": "{placeholder} leden", 
    "{placeholder} Share Links": "{placeholder} Gedeelde links"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j F Y H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d-%m-%Y %H:%M:%S", 
      "%d-%m-%y %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%y %H:%M:%S", 
      "%Y/%m/%d %H:%M:%S", 
      "%d-%m-%Y %H:%M:%S.%f", 
      "%d-%m-%y %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%y %H:%M:%S.%f", 
      "%Y/%m/%d %H:%M:%S.%f", 
      "%d-%m-%Y %H.%M:%S", 
      "%d-%m-%y %H.%M:%S", 
      "%d/%m/%Y %H.%M:%S", 
      "%d/%m/%y %H.%M:%S", 
      "%d-%m-%Y %H.%M:%S.%f", 
      "%d-%m-%y %H.%M:%S.%f", 
      "%d/%m/%Y %H.%M:%S.%f", 
      "%d/%m/%y %H.%M:%S.%f", 
      "%d-%m-%Y %H:%M", 
      "%d-%m-%y %H:%M", 
      "%Y-%m-%d %H:%M", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%y %H:%M", 
      "%Y/%m/%d %H:%M", 
      "%d-%m-%Y %H.%M", 
      "%d-%m-%y %H.%M", 
      "%d/%m/%Y %H.%M", 
      "%d/%m/%y %H.%M", 
      "%d-%m-%Y", 
      "%d-%m-%y", 
      "%Y-%m-%d", 
      "%d/%m/%Y", 
      "%d/%m/%y", 
      "%Y/%m/%d"
    ], 
    "DATE_FORMAT": "j F Y", 
    "DATE_INPUT_FORMATS": [
      "%d-%m-%Y", 
      "%d-%m-%y", 
      "%d/%m/%Y", 
      "%d/%m/%y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "j-n-Y H:i", 
    "SHORT_DATE_FORMAT": "j-n-Y", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H.%M:%S", 
      "%H.%M:%S.%f", 
      "%H.%M", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

