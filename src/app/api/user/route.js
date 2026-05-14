// app/api/posts/route.js
export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const trend = searchParams.get("trend");
    
    const query = trend === "true" ? { trend: true } : {};
    const posts = await Post.find(query).sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: posts });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}