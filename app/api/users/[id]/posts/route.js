import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const data = await Prompt.find({ creator: params.id }).populate("creator");
    console.log(data);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Prompt not found", { status: 500 });
  }
};
