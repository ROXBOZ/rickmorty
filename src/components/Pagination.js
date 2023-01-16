import { Button, ButtonGroup } from "@mui/material";

const Pagination = (props) => {
  console.log("props.page :>> ", props.page);
  const { page } = props;

  return (
    <div className="pagination-banner">
      <ButtonGroup variant="contained" color="secondary">
        <Button disabled={page === 1 ? true : false} onClick={props.prevPage}>
          Prev
        </Button>
        <Button disabled={page === 42 ? true : false} onClick={props.nextPage}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Pagination;
