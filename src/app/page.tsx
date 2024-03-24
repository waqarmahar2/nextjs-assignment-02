const Page = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
      }}
    >
      {" "}
      <div>
        {" "}
        <h1 style={{ fontSize: "5rem", marginBottom: "2rem", color: "white" }}>
          Hello World!!
        </h1>{" "}
        <p style={{ fontSize: "2rem" }}>
          {" "}
          Second Next.js project deployed by Muhammad waqar{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
};
export default Page;