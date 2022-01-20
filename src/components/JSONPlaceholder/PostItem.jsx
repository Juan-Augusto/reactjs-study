export const PostItem = ({ data }) => {
  return (
    <div style={{
        border: "1px solid black",
        borderRadius: "10px",
        marginBottom: "10px",
        padding: "10px",
      }}
    >
      <h4 className="font-bold">{data.title}</h4>
      <small>
        #{data.id} - Usuário: {data.userId}
      </small>
      <p>{data.body}</p>
    </div>
  );
};
