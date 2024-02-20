import { NextResponse } from "next/server";
const { pool } = require("@/utils/db");
const util = require("util");
const databaseQuery = util.promisify(pool.query).bind(pool);

export const POST = async (request) => {
  const { content, title, image, category, description } = await request.json();

  const slug = title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");

  const query = `
    INSERT INTO jamrapp.allblogs (content, title, description, image, category, slug)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const values = [content, title, description, image, category, slug];

  try {
    const result = await databaseQuery(query, values);

    return new NextResponse(JSON.stringify(result), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error executing SQL query:", error.message);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};

export const GET = async () => {
  const query = "SELECT * FROM jamrapp.allblogs";
  const result = await databaseQuery(query);
  return new NextResponse(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const DELETE = async (request) => {
  const { searchParams } = request.nextUrl;
  const params = searchParams.get("title");
  console.log(params);

  const query = `DELETE FROM jamrapp.allblogs WHERE title LIKE '%${params}%'`;
  await databaseQuery(query);

  return new NextResponse(null, {
    status: 204,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
