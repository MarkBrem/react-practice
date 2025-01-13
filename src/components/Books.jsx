const favouriteBooks = [
    { name: "JS for beginners" },
    { name: "React basics" },
    { name: "React Router overview" },
    { name: "Redux in depth" },
   ];

export const Books = ()=>{
    return <div>
        {favouriteBooks.map((book)=>{
           return <p>{book.name}</p>
        })}
    </div>
}  