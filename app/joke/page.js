export const dynamic = 'force-dynamic'

async function getJokes(params) {
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let jokes = response.json();
    return jokes;
}





async function page() {
    let joke = await getJokes();
  return (
    <div>{joke.value}</div>
  )
}

export default page