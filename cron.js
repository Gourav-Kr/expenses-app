import cron from 'node-cron';
import connectToDatabase from '@/lib/dbConnect';
import { User } from '@/model/user';

// Schedule task to run daily at 12 PM
cron.schedule('0 0 * * *', async () => {
    console.log('Updating user balances...');
    try{
    await connectToDatabase();
    const users = await User.find(); // Fetch all users

    for (const user of users) {
        user.balance += user.increment; // Add increment to balance
        user.lastUpdated = new Date(); // Update last updated time
        await user.save(); // Save updated user
    }

    console.log('User balances updated successfully.');
} catch(e){
    console.error('Error in cron job:', e);
}
});

// Schedule task to run every Saturday at 12 PM
cron.schedule('0 0 * * 6', async () => {
    console.log('Adding Saturday allowance...');
    try{
    await connectToDatabase();
    const users = await User.find(); // Fetch all users

    for (const user of users) {
        user.balance += user.saturdayAllowance; // Add Saturday allowance to balance
        user.lastUpdated = new Date(); // Update last updated time
        await user.save(); // Save updated user
    }

    console.log('Saturday allowance added successfully.');
} catch(e){
    console.error('Error in cron job:', e);
}
});