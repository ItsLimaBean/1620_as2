'use strict'
const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

const newNoteButton = document.querySelector(".fa-solid.fa-circle-plus")
const createNoteArea = document.querySelector(".create-note-area")
const notesList = document.querySelector(".notes-list")
const writeNoteArea = document.querySelector(".write-note-area")
const readNoteArea = document.querySelector(".read-note-area")

const newNoteArea = `
<div class="new-note-area">
  <textarea placeholder='Enter note' rows="8" cols="80"></textarea>
  <div>
    <button id="save">Save</button>
    <button id="cancel">Cancel</button>
  </div>
</div>
`

function addNewNote(event) {
  if (!canCreateNotesArea()) {
    return
  }
  writeNoteArea.insertAdjacentHTML("beforeend", newNoteArea)
}

function addNoteToSide(note) {
  notesList.insertAdjacentHTML("beforeend", `<li data-id="${note.id}" class="note-item">${note.title}</li>`)
}

function saveNote(textinput) {
  const splitText = textinput.split("\n")
  const title = splitText[0]
  const content = splitText.splice(1).join("\n")

  const noteObj = {
    title: title,
    noteBody: content,
    id: notes[notes.length -1].id + 1
  }
  notes.push(noteObj)

  addNoteToSide(noteObj)
  clearNotesArea()
}

function clearNotesArea() {
  document.querySelector(".new-note-area")?.remove()
  document.querySelector(".note-view")?.remove()
}

function canCreateNotesArea() {
  return !(document.querySelector(".new-note-area") || document.querySelector(".note-view"))
}

function createNoteAreaClick(event) {
  const id = event.target.id
  if (id === "cancel") {
    clearNotesArea()
  } else if (id === "save") {
    saveNote(document.querySelector(".new-note-area > textarea").value)
  }
}

function clickNotesList(event) {
  if (!canCreateNotesArea()) {
    return
  }

  const id = event.target.dataset.id
  const note = notes[id - 1]
  if (note) {
    const noteDisplay = `
    <div class="note-view">
      <span class="icons"><i class="fa-solid fa-times-circle"></i></span>
      <div>
        <h1>${note.title}</h1>
        <p>${note.noteBody}</p>
      </div>
    </div>
    `

    readNoteArea.insertAdjacentHTML("beforeend", noteDisplay)
    readNoteArea.querySelector(".fa-solid.fa-times-circle").addEventListener("click", clearNotesArea)
  }
}

notesList.addEventListener("click", clickNotesList)
newNoteButton.addEventListener("click", addNewNote)
writeNoteArea.addEventListener("click", createNoteAreaClick)

// This is to insert the example note
addNoteToSide(notes[0])