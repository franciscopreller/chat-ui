
export const maxDuration = 30;
 
export async function POST(req: Request) {
  const { messages } = await req.json();
  // const result = streamText({
  //   model: bedrock("anthropic.claude-3-5-sonnet-20240620-v1:0"),
  //   messages,
  // });
  console.log({ req, messages });
  return "Not yet connected to Agent";
}
