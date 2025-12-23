const TodoItem = () => {
  let todoName = "Buy Milk";
  let toDate = "04/10/2024";
  return (
    <div className="">
      <div class="row sh-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{toDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger sh-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
