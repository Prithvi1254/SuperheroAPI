const baseurl = 'https://www.superheroapi.com/api.php/10223569763528853';
const hero = document.getElementById('heroimage')
const superhero = (id) => {
  fetch(`${baseurl}/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      const nameee = `<h2>${json.name}<h2/>`
      const imageUrl = json.image.url;
      const speed = json.powerstats.speed
      const strength = json.powerstats.strength
      const Intelligence = json.powerstats.intelligence
      const combat = json.powerstats.combat

      hero.innerHTML += `<p>${nameee} Speed: ${speed} Intelligence:${Intelligence} strength:${strength}</p> <br><img src="${imageUrl}" height=300 width=300/>`;
    })
    .catch(error => {
      console.error('Error fetching superhero data:', error);
    });
}
const searchhero = (name) => {
  fetch(`${baseurl}/search/${name}`).then(response => response.json()).then(json => {
    const namee = `<h2>${inc.value}<h2/>`
    const imageeUrl = json.results[0];
    const sw = json.results[1];
    // Optional chaining to safely access url property
    hero.innerHTML += `${namee}<img src="${imageeUrl.image.url}" height=300 width=300/>`;
  })
    .catch(error => {
      console.error('Error fetching superhero data:', error);
    })
}

let c = document.getElementById('button')
let inc = document.getElementById('inp')
const search = () => {
  superhero(Number(inc.value))
}


let a = document.getElementById('ss')
a.onclick = () => searchhero(inp.value)
