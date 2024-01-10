//import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from "next/server";
import dotenv from 'dotenv'
dotenv.config()
import { PrismaClient } from '@prisma/client'
import axios from 'axios'
import cheerio from 'cheerio'

const API_PASS = process.env.PASSWORD;
const prisma = new PrismaClient();

export async function POST(request: Request) {
    const body = await request.json()
    const { originalUrl, shortCode, password } = body

    if(password !== API_PASS) {
      return NextResponse.json({ error: 'Incorrect password' })
    }

    if (!originalUrl || !shortCode) {
      return NextResponse.json({ error: 'originalUrl and shortCode are required' })
    }

    try {
      const existingUrl = await prisma.shortenedUrl.findUnique({
        where: {
          shortCode: shortCode,
        },
      })

      if (existingUrl) {
        return NextResponse.json({ error: 'shortCode already exists' })
      }

      const response = await axios.get(originalUrl)
      const $ = cheerio.load(response.data)
      const title = $('head > title').text()

      const newUrl = await prisma.shortenedUrl.create({
        data: {
          originalUrl,
          shortCode,
          title,
        },
      })

      return NextResponse.json(newUrl)
    } catch (error) {
      return NextResponse.json({ error: 'Database error' })
    }
}