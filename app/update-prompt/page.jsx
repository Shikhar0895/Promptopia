"use client";

import { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

const UpdatePrompt = () => {
  const searchParams = useSearchParams();
  console.log("SearchParams:", searchParams);
  const promptID = searchParams.get("id");
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`api/prompt/${promptID}`);
      const data = await response.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptID) getPromptDetails();
  }, [promptID]);

  // this function defines a fetch API to send a POST request to api/prompt/new
  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptID) return alert("Promt not found");

    try {
      const response = await fetch(`api/prompt/${promptID}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });
      console.log("response.body", response.body);

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Update"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;
