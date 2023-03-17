export async function GET(request: Request) {
    console.log("owo request?", request.method)
    return new Response("test")
  }

export async function POST(request: Request) {
    console.log("owo req body?", request.body)
    return new Response(request.body)
}
  