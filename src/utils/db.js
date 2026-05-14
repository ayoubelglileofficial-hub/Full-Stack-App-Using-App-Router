import mongoose from "mongoose";

const MONGODB = process.env.MONGODB_URI;
// const MONGODB = process.env.MONGODB_URI_TEST;

if (!MONGODB) {
  throw new Error(
    "Please define the MONGODB environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;

// import mongoose from "mongoose";

// const connect = async ()=>{

// try {
//   await mongoose.connect(process.env.MONGO);
// } catch (error) {
//     throw new Error("connection Faild!")
// }
// }
// export default connect;