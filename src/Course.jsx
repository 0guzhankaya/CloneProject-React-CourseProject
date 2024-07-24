function Course({ id, content, title, price, removeOneCourse }) {
  console.log(id);
  console.log(content);
  return (
    <div className="card">
      <div className="card-title-price">
        <h2 className="card-title">{title}</h2>
        <h4 className="card-price">{price}₺</h4>
      </div>
      <p>{content}</p>
      <button className="card-delete-btn" onClick={() => removeOneCourse(id)}>
        Sil
      </button>
    </div>
  );
}

export default Course;
