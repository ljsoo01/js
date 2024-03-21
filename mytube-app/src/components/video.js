export default function video({
  id,
  img,
  name,
}) {

  return (
    <>
      <main className="mt-32 px-4 pb-8">
        <ul>
          <li>
            <img src="/balckpink.jpg"></img>
            <h3 className="font-semibold">{name}</h3>
          </li>
        </ul>
      </main>
    </>
  )
}