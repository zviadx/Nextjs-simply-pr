
const ActionsPostForm = ({ onSuccess }: { onSuccess: (id?: string) => Promise<void> }) => {
  // return <ClientActionsPostForm createPost={createPost} />;

  const createPost = async (formData: FormData) => {
    "use server";
    const { title, body } = Object.fromEntries(formData)

    // try {
      const result = await fetch("http://localhost:3001/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ title, body, userId: 1 })
        }
      )
      // if (result.ok) {
        const post = await result.json()
        await onSuccess(post.id);
      // } else {
      //   console.error("An unexpected error occurred:", result)
      // }
    // } catch (error) {
    //   console.error("An unexpected error occurred:", error);
    // }
  }

  return (
    <div>
    <form
      className={"flex flex-col items-center justify-center gap-2.5"}
      action={createPost}
    >
      <input
        placeholder={"Enter Title"}
        className={"border-2 border-gray-700 w-1/3"}
        required name={"title"}
      />
      <textarea
        placeholder={"Enter Text"}
        className={"border-2 border-gray-700 w-1/3"}
        required name={"body"}
      />
      <div>
        <input
          className={"border-2 border-sky-500 p-2 rounded-md mb-4"}
          type={"submit"}
          value={"Add Text"}
        />
      </div>
    </form>
    </div>
  );
};

export default ActionsPostForm;