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
    <button>Save</button>
    <button>Cancel</button>
  </div>
</div>
`

function addNewNote(event) {
  if (document.querySelector(".new-note-area")) {
    return
  }
  createNoteArea.insertAdjacentHTML("beforeend", newNoteArea)
}

newNoteButton.addEventListener("click", addNewNote)