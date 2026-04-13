const BASE_URL = "http://127.0.0.1:8000";

// POST note
async function postNote(title, text) {
    const res = await fetch(`${BASE_URL}/notat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, text })
    });

    console.log("Status:", res.status);
}

// GET all notes
async function getNotes() {
    const res = await fetch(`${BASE_URL}/notat`);
    const data = await res.json();
    console.log(data);
}

// GET one note
async function getNote(noteId) {
    const res = await fetch(`${BASE_URL}/notat/${noteId}`);
    const data = await res.json();
    console.log(data);
}

// Menu loop using prompt
async function menu() {
    let inn = "";

    while (inn !== "4") {
        inn = prompt(
            "1. Nytt notat\n2. Se notater\n3. Hent spesifikk notat\n4. Avslutt"
        );

        if (inn === "1") {
            const title = prompt("tittel:");
            const text = prompt("tekst:");
            await postNote(title, text);

        } else if (inn === "2") {
            await getNotes();

        } else if (inn === "3") {
            const id = prompt("skriv inn id:");
            await getNote(id);
        }
    }
}

// Start menu
menu();