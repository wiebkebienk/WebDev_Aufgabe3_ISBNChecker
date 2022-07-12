# WebDev_Aufgabe3_ISBNChecker

Aufgabe 3: ISBN-Checker
In dieser Aufgabe sollen Sie eine kleine HTML-Seite implementieren, die eine ISBN-10-Nummer validiert. Das Ziel ist es ein Eingabefeld und einen check-button darzustellen. Der User gibt in das Eingabefeld die ISBN-Nummer ein und sobald der check-button geklickt wird, erscheint entweder der Text "ISBN ist valide" in grüner schrift oder der Text "ISBN ist invalide" in roter Schrift. 

Beachten Sie hierbei, ob die letzte Stelle der ISBN mit der zu errechnenden Prüfziffer übereinstimmt. Die Prüfziffer errechnet sich aus folgender Regel:

(1. Ziffer * 1 + 2. Ziffer * 2 + 3. Ziffer * 3 + 4. Ziffer mal 4 + 5. Ziffer * 5 + 6. Ziffer * 6 + 7. Ziffer * 7 + 8. Ziffer * 8 + 9. Ziffer * 9) mod 11

Dabei können die Werte 0-10 entstehen. Da die Prüfziffer stets nur mit einem Zeichen dargestellt werden kann, muss also das Eingabe-Feld, für ISBN-Nummern, deren Prüfziffer den Wert 10 darstellt, auch X als Prüfziffer akzeptiere. Befolgen Sie hierbei folgende Zwischenschritte und legen Sie pro Zwischenschritt wie gewohnt einen neuen git-Branch an.



a) basic-setup: Erstellen Sie ein neues node projekt mit einer index.html-Seite und dem gewünschten Design. Ergänzen Sie die npm-packages serve und webpack und sorgen Sie dafür, dass diese als script-einträge über die package.json ausgeführt werden können. Erstellen Sie eine checkISBN-Funktion die vorerst nur alert("checkISBN") aufruft und stellen Sie sicher, dass checkISBN beim click auf check ausgeführt wird. Hinweis: Es wird vermutlich nicht genügen, die Funktion via onClick an den Button zu binden. Verwenden Sie hierfür stattdessen addEventListener. 



b) gui-stuff: Schreiben Sie checkISBN so um, dass die Funktion einen Parameter checkSum entgegen nimmt. Falls diese checkSum der 10. Stelle im Inputfeld entspricht, soll der grüne Text "ISBN is valid" angezeigt werden. Andernfalls soll der rote Text "ISBN is invalid." dargestellt werden.



c) core: Schreiben Sie nun testgetrieben die Funktion calculateISBNChecksum, die einen String als Eingabeparameter erwartet und die Checksum als String zurück gibt. Später wird dass der Inhalt des Eingabefeldes sein. Vergegenwärtigen Sie sich nochmal den Mathematischen Zusammenhang der Berechnungsmethode und Nutzen Sie dieses Wissen für den schrittweisen Aufbau Ihrer Tests. Oder anders ausgedrückt: Halten Sie den Red-Green-Refactor-Cycle ein. Erst einen failing Test schreiben und dann den Code entsprechend ergänzen. Committen Sie nach jedem erfolgreichen Test ihren Arbeitsstatus, so dass sich ihre Vorgehensweise nachvollziehen lässt. calculateISBNChecksum soll im Kern als Schleife realisiert werden.

d) wiring: Stellen Sie sicher, dass calculateISBNChecksum mit dem Inhalt des Eingabefeldes befüllt wird. Der Rückgabewert von calculateISBNChecksum soll checkISBN als Eingabeparameter übergeben werden. Führen Sie einige manuelle Tests mit echten ISBN-Nummern durch und prüfen Sie ob die gewünschte Funktionalität vollends umgesetzt ist.

e) bonus: Der rote oder grüne Text, den Sie zur validierung des Eingabefeldes angezeigt haben, soll verschwinden, so bald der Nutzer den Focus erneut auf das eingabefeld richtet.
