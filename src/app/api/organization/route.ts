import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/auth";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      );
    }

    // Fetch organizations where the user is a member
    const organizations = await prisma.organization.findMany({
      where: {
        users: {
          some: {
            id: userId,
          },
        },
      },
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(
      { success: true, data: organizations },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      );
    }

    const { name, description } = await req.json();
    if (!name) {
      return NextResponse.json(
        { success: false, error: "Missing required field: name" },
        { status: 400 }
      );
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    // Check if organization name is unique
    const existingOrg = await prisma.organization.findUnique({
      where: { name },
    });
    if (existingOrg) {
      return NextResponse.json(
        { success: false, error: "Organization name already exists" },
        { status: 400 }
      );
    }

    // Create organization and connect it to the user
    const organization = await prisma.organization.create({
      data: {
        name,
        description: description || null,
        createdAt: new Date(),
        updatedAt: new Date(),
        users: {
          connect: { id: userId },
        },
      },
    });

    // Update user's organizationId
    await prisma.user.update({
      where: { id: userId },
      data: {
        organizationId: organization.id,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: organization,
        message: "Organization created successfully",
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        details: error.message,
      },
      { status: 500 }
    );
  }
}