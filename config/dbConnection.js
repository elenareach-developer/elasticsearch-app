const { MongoClient } = require("mongodb");

const connectDBMongo = async () =>
{
    const uri = process.env.MONGO_URI;

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try
    {
        await client.connect();
        console.log("Connected to MongoDB");

        const database = client.db("sample_mflix");
        const movies = database.collection("movies");

        // Query for a movie that has the title 'Back to the Future'
        const query = { title: "Back to the Future" };
        const movie = await movies.findOne(query);

        if (movie)
        {
            console.log("Movie found:");
            console.log(movie);
        } else
        {
            console.log("Movie not found.");
        }
    } catch (error)
    {
        console.error("Error connecting to MongoDB:", error);
    } finally
    {
        // Ensure that the client will close when you finish/error
        await client.close();
    }
};

module.exports = { connectDBMongo };
