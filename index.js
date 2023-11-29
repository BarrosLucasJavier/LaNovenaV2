import { connectToDB } from './utils/mongoose.js';
import app from './app.js'

const port = process.env.PORT || 3000;

async function main(){
    //DB Connection
    await connectToDB();
    app.listen(port, () => { console.log(`Server running in http://localhost:${port}`) })
}
main()