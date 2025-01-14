import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function createPurchase(purchaseData) {
    try {
        await client.connect();
        console.log('Connected to MongoDB'); // Debugging: Log connection success

        const database = client.db('training');
        const purchases = database.collection('purchases');

        console.log('Inserting Purchase Data:', purchaseData); // Debugging: Log the data being inserted
        const result = await purchases.insertOne(purchaseData);

        return result;
    } catch (error) {
        console.error('Error in createPurchase:', error); // Debugging: Log any errors
        throw error;
    } finally {
        await client.close();
    }
}