export default function ShowNotes({ notes , setNotes }) {
	return (
		<div className="max-w-maxWidth container grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3 grid gap-7 mt-12">
			{notes.length > 0
				? notes.map((note) => (
						<button
                        onClick={() => {
                            const newNote = notes.filter((noteInFilter) =>{
                                return noteInFilter.id != note.id 
                            })

                            console.log(newNote);
                            setNotes(newNote);

                        }}
                        className={`${note.color} rounded-md py-2 `} key={note.id}>{note.title}</button>
				))
				: null}
		</div>
	);
}
