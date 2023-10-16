import {v4 as uuid} from "uuid" ;
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req:Request , res:Response) {
  try {
  const {name , imageUrl} = await req.json() ; 
  const profile = await currentProfile() ;
  } catch (error) {
    console.log("[SERVERS_POST]",error) ;
    return new NextResponse("Internal Error", {status:500})
  }
}