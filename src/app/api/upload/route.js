import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { v4 as uuidv4 } from "uuid";

export async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get("file");

        if (!file) {
            return NextResponse.json({ success: false, error: "No file uploaded" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Generate unique filename
        const ext = path.extname(file.name);
        const fileName = `${uuidv4()}${ext}`;
        const filePath = path.join(process.cwd(), "public", "uploads", fileName);

        // Save file to public/uploads
        await writeFile(filePath, buffer);

        return NextResponse.json({
            success: true,
            path: `/uploads/${fileName}`,
        });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
