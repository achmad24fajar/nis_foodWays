
function Card(props) {

  if(props.template == 'style-1'){

    const {id, name, image} = props.data

    return (
      <div className="popular-restourant-item bg-white rounded p-2 mt-3">
        <img src={image} className="mr-3" />
        <span className="font-weight-bold popular-restourant-title">{name}</span>
      </div>
    );
  }

  if(props.template == 'style-2'){

    const {id, image, name, distance} = props.data

    return (
      <div className="restourant-near-you-item bg-white rounded p-2 mt-3">
        <img src={image} className="mr-3" />
        <h6 className="mt-2 ml-2">{name}</h6>
        <span className="text-muted ml-2">{distance}</span>
      </div>
    );
  }

}

export default Card;
