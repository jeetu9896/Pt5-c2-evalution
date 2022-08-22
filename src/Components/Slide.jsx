function Slide({title,description}) {
  // console.log(data);
  return <div className="slide-container" data-cy="slide">
<h3 data-cy="title">{title}</h3>
<p data-cy="description">{description}</p>
</div>
  
  
}

export default Slide;