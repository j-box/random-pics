const images = [
  {id: 'bathroom', url: 'https://media.istockphoto.com/id/1221135865/vector/toilet-icon-male-and-female-vector.jpg?s=612x612&w=0&k=20&c=6DataxZOA2nSs-ALdNti6MW8latF7yhvo2p_WNCbWGk='},
  {id: 'crosswalk', url: 'https://m.media-amazon.com/images/I/41RFZDFYPUL.jpg'},
  {id: 'handicap', url: 'https://www.trafficsigns.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/california-handicap-parking-sign.jpg'}
];

// other pics
// {id: 'beware of dog', url: "beware-of-dog.jpg"}

const randomInd = [];
let count = 0;

while(count < images.length){
	const ind = Math.floor(Math.random() * 3)
  if(!randomInd.includes(ind)){
  randomInd.push(ind);
  count++;
  }
}

for(let i = 0; i < randomInd.length; i++){
  const ind = randomInd[i];
  const card = document.createElement('div');
  card.className = 'card';
  const image = document.createElement('img');
  const indicator = document.createElement('h1');
  image.src = images[ind].url;
  indicator.innerText = '' + (i+1);
  card.appendChild(image);
  card.appendChild(indicator);
  document.getElementById('holder').appendChild(card);
}
