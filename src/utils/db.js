// import mongoose from "mongoose";

// const connect = async ()=>{

// try {
//   await mongoose.connect(process.env.MONGO);
// } catch (error) {
//     throw new Error("connection Faild!")
// }
// }
// export default connect;
import mongoose from "mongoose";

const MONGO = process.env.MONGODB_URI;

if (!MONGO) {
  throw new Error("MONGO env is missing");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connect;