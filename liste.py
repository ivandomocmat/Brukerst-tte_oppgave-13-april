from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import sqlite3

app = FastAPI(title="To do list")

todoliste = ["Skolearbeid", "Trene"]

while True:
    print ("\n===TODOLISTE===")
    print ("1. Vis liste")
    print ("2. legg til oppgave")
    print ("3. Fjern oppgave")
    print ("4. Avslutt")

    valg = input("Velg (1-4):")

    if valg == "1":
        print("Din to do liste:")
        for i, oppgave in enumerate(todoliste, 1):
            print(f"{i}. {oppgave}")
    
    elif valg == "2":

        ny_oppgave = input("Hvilken oppgave vil du legge til? ")
        todoliste.append(ny_oppgave)
        print (f"La til{ny_oppgave}")

    
    elif valg == "3":

        ny_oppgave = input("Hvilken oppgave vil du legge til? ")
        todoliste.append(ny_oppgave)
        print (f"La til{ny_oppgave}") 
 



