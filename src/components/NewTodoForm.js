function NewTodoForm() {
  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => console.log(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            required
            onChange={(e) => console.log(e.target.value)}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default NewTodoForm;
