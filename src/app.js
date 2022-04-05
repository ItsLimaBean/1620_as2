const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

const newNoteButton = document.querySelector(".fa-solid.fa-circle-plus")
const createNoteArea = document.querySelector(".create-note-area")

const newNoteArea = `
<div class="new-note-area">
  <textarea placeholder='Enter note'></textarea>
  <div>
    <button id="save">Save</button>
    <button id="cancel">Cancel</button>
  </div>
</div>
`

function addNewNote(event) {
  if (document.querySelector(".new-note-area")) {
    return
  }
  createNoteArea.insertAdjacentHTML("beforeend", newNoteArea)
}

function saveNote(textinput) {
  const splitText = textinput.split("\n")
  const title = splitText[0]
  const content = splitText.splice(1).join("\n")

  const noteObj = {
    title: title,
    content: content,
    id: notes[notes.length - 1].id + 1
  }
  notes.push(noteObj)
}

function createNoteAreaClick(event) {
  const id = event.target.id
  if (id === "cancel") {
    document.querySelector(".new-note-area").remove()
  } else if (id === "save") {
    saveNote(document.querySelector(".new-note-area > textarea").value)
  }
}

newNoteButton.addEventListener("click", addNewNote)
createNoteArea.addEventListener("click", createNoteAreaClick)