import "./index.css"

const Card = (props) => {
  return (
    <div class="adl-card" style={props.style}>
      <div class="adl-card-body" style={props.bodyStyle}>
        {props.cardText}
      </div>
    </div>
  )
}

export default Card
