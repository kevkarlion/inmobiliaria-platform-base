import { PropertyTypeModel } from '@/domain/property-type/property-type.schema'
import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const MONGO_URI = process.env.MONGODB_URI!;

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
   

    await PropertyTypeModel.deleteMany({});

    await PropertyTypeModel.insertMany([
      { name: "Departamento", slug: "departamento" },
      { name: "Casa", slug: "casa" },
      { name: "Terreno", slug: "terreno" },
    ]);

    
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

seed();