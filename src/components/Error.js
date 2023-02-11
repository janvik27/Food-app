import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  //   console.log(err);
  const { status, statusText } = err; //destructuring of the err object

  return (
    <div>
      <h1>OOPS!!</h1>
      <h2>Something went wrong!</h2>
      <h2>{status + " : " + statusText}</h2>
    </div>
  );
};

export default Error;
